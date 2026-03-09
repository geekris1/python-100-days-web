import { useState } from 'react'
import PythonEditor from '../editor/PythonEditor'
import { usePython } from '../../hooks/usePython'
import type { CodeQuestion } from '../../data/types'

interface CodeQuizProps {
  question: CodeQuestion
  showResult: boolean
  onResult: (passed: boolean) => void
}

export default function CodeQuiz({ question, showResult, onResult }: CodeQuizProps) {
  const [code, setCode] = useState(question.starterCode)
  const [output, setOutput] = useState('')
  const [passed, setPassed] = useState<boolean | null>(null)
  const { runCode, loading, pyodideReady } = usePython()

  const handleRun = async () => {
    const result = await runCode(code)
    setOutput(result)
    const trimmedResult = result.trim()
    const trimmedExpected = question.expectedOutput.trim()
    const isPass = trimmedResult === trimmedExpected
    setPassed(isPass)
    onResult(isPass)
  }

  return (
    <div>
      <h3 className="mb-2 text-base font-semibold">{question.question}</h3>
      <p className="mb-4 text-sm text-text-muted">
        预期输出：<code className="rounded bg-bg-hover px-2 py-0.5 font-mono text-accent">{question.expectedOutput}</code>
      </p>

      <div className="overflow-hidden rounded-xl border border-border">
        <div className="flex items-center justify-between border-b border-border bg-[#0d1117] px-4 py-2">
          <span className="text-xs font-medium text-text-muted">代码编辑器</span>
          <button
            onClick={handleRun}
            disabled={loading || !pyodideReady}
            className="rounded-md bg-accent px-3 py-1 text-xs font-semibold text-white transition-colors hover:bg-accent-dark disabled:opacity-50"
          >
            {loading ? '运行中...' : '▶ 运行验证'}
          </button>
        </div>
        <PythonEditor initialCode={code} onChange={setCode} />
      </div>

      {output && (
        <div className={`mt-3 rounded-lg border p-3 text-sm ${
          passed ? 'border-success/30 bg-success/10' : 'border-warning/30 bg-warning/10'
        }`}>
          <div className="mb-1 font-medium">
            {passed ? '✓ 通过！' : '✗ 输出不匹配'}
          </div>
          <pre className="font-mono text-xs text-text-secondary whitespace-pre-wrap">{output}</pre>
        </div>
      )}

      {showResult && (
        <div className="mt-3 rounded-lg bg-bg-card p-3 text-sm text-text-secondary">
          <strong>解析：</strong> {question.explanation}
        </div>
      )}
    </div>
  )
}
