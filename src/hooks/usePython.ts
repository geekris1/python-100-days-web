import { useState, useEffect, useRef, useCallback } from 'react'

interface PyodideInterface {
  runPythonAsync: (code: string) => Promise<any>
  setStdout: (opts: { batched: (msg: string) => void }) => void
  setStderr: (opts: { batched: (msg: string) => void }) => void
}

let pyodidePromise: Promise<PyodideInterface> | null = null
let pyodideInstance: PyodideInterface | null = null

async function initPyodide(): Promise<PyodideInterface> {
  if (pyodideInstance) return pyodideInstance

  if (!pyodidePromise) {
    pyodidePromise = (async () => {
      const { loadPyodide } = await import('pyodide')
      const pyodide = await loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.29.3/full/',
      })
      pyodideInstance = pyodide as unknown as PyodideInterface
      return pyodideInstance
    })()
  }

  return pyodidePromise
}

export function usePython() {
  const [loading, setLoading] = useState(false)
  const [pyodideReady, setPyodideReady] = useState(false)
  const pyodideRef = useRef<PyodideInterface | null>(null)

  useEffect(() => {
    initPyodide().then((py) => {
      pyodideRef.current = py
      setPyodideReady(true)
    })
  }, [])

  const runCode = useCallback(async (code: string): Promise<string> => {
    if (!pyodideRef.current) {
      return '错误：Python 环境尚未加载完成'
    }

    setLoading(true)
    const outputLines: string[] = []

    try {
      const py = pyodideRef.current
      py.setStdout({ batched: (msg: string) => outputLines.push(msg) })
      py.setStderr({ batched: (msg: string) => outputLines.push(`[错误] ${msg}`) })

      const result = await py.runPythonAsync(code)

      if (result !== undefined && result !== null) {
        const resultStr = String(result)
        if (resultStr !== 'undefined' && resultStr !== 'None') {
          outputLines.push(resultStr)
        }
      }

      return outputLines.join('\n') || '(无输出)'
    } catch (err: any) {
      const errMsg = err?.message || String(err)
      const lines = errMsg.split('\n')
      const shortErr = lines.slice(-3).join('\n')
      return `错误：\n${shortErr}`
    } finally {
      setLoading(false)
    }
  }, [])

  return { runCode, loading, pyodideReady }
}
