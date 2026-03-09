import { useState } from 'react'
import PythonEditor from './PythonEditor'
import { usePython } from '../../hooks/usePython'

interface CodeRunnerProps {
  initialCode: string
  title?: string
}

export default function CodeRunner({ initialCode, title }: CodeRunnerProps) {
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState<string>('')
  const { runCode, loading, pyodideReady } = usePython()

  const handleRun = async () => {
    setOutput('')
    const result = await runCode(code)
    setOutput(result)
  }

  const handleReset = () => {
    setCode(initialCode)
    setOutput('')
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border bg-[#0d1117] px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-text-muted">
            {title ?? 'Python 编辑器'}
          </span>
          {!pyodideReady && (
            <span className="rounded bg-warning/20 px-2 py-0.5 text-xs text-warning animate-pulse">
              加载 Python 环境...
            </span>
          )}
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleReset}
            className="rounded-md border border-border px-3 py-1 text-xs font-medium text-text-muted transition-colors hover:bg-bg-hover hover:text-text"
          >
            重置
          </button>
          <button
            onClick={handleRun}
            disabled={loading || !pyodideReady}
            className="rounded-md bg-accent px-3 py-1 text-xs font-semibold text-white transition-colors hover:bg-accent-dark disabled:opacity-50"
          >
            {loading ? '运行中...' : '▶ 运行'}
          </button>
        </div>
      </div>

      {/* Editor */}
      <PythonEditor initialCode={code} onChange={setCode} />

      {/* Output */}
      {output && (
        <div className="border-t border-border bg-[#0d1117]">
          <div className="px-4 py-1.5 text-xs font-medium text-text-muted">输出</div>
          <pre className="max-h-48 overflow-auto px-4 pb-4 font-mono text-sm leading-relaxed text-accent whitespace-pre-wrap">
            {output}
          </pre>
        </div>
      )}
    </div>
  )
}
