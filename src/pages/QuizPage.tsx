import { useParams, Link, Navigate } from 'react-router-dom'
import { useState, useMemo } from 'react'
import { getQuizByDayId } from '../data/quizzes'
import { getDayById } from '../data/days'
import { useProgress } from '../hooks/useProgress'
import { getDayStatus, TOTAL_DAYS } from '../data/types'
import ChoiceQuiz from '../components/quiz/ChoiceQuiz'
import CodeQuiz from '../components/quiz/CodeQuiz'

export default function QuizPage() {
  const { id } = useParams()
  const dayId = Number(id)
  const quiz = getQuizByDayId(dayId)
  const day = getDayById(dayId)
  const { progress, submitQuiz, markLessonComplete } = useProgress()
  const status = getDayStatus(progress, dayId)

  const [answers, setAnswers] = useState<Record<string, string | boolean>>({})
  const [codeResults, setCodeResults] = useState<Record<string, boolean>>({})
  const [submitted, setSubmitted] = useState(false)
  const [currentQ, setCurrentQ] = useState(0)

  if (!quiz || !day) return <Navigate to="/" replace />
  if (status === 'locked') return <Navigate to="/dashboard" replace />

  const questions = quiz.questions
  const totalQ = questions.length
  const answeredCount = Object.keys(answers).length + Object.keys(codeResults).length

  const score = useMemo(() => {
    if (!submitted) return 0
    let correct = 0
    for (const q of questions) {
      if (q.type === 'choice') {
        if (answers[q.id] === q.correctId) correct++
      } else if (q.type === 'trueFalse') {
        if (answers[q.id] === q.correct) correct++
      } else if (q.type === 'code') {
        if (codeResults[q.id]) correct++
      }
    }
    return correct / totalQ
  }, [submitted, questions, answers, codeResults, totalQ])

  const handleSubmit = () => {
    setSubmitted(true)
    const finalScore = (() => {
      let correct = 0
      for (const q of questions) {
        if (q.type === 'choice') {
          if (answers[q.id] === q.correctId) correct++
        } else if (q.type === 'trueFalse') {
          if (answers[q.id] === q.correct) correct++
        } else if (q.type === 'code') {
          if (codeResults[q.id]) correct++
        }
      }
      return correct / totalQ
    })()
    markLessonComplete(dayId)
    submitQuiz(
      dayId,
      finalScore,
      { ...answers, ...Object.fromEntries(Object.entries(codeResults).map(([k, v]) => [k, v])) }
    )
  }

  const handleRetry = () => {
    setAnswers({})
    setCodeResults({})
    setSubmitted(false)
    setCurrentQ(0)
  }

  const currentQuestion = questions[currentQ]

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      {/* Header */}
      <div className="mb-6">
        <Link to={`/day/${dayId}`} className="text-sm text-text-muted no-underline hover:text-primary">
          ← 返回课程
        </Link>
        <h1 className="mt-2 text-2xl font-bold">Day {String(dayId).padStart(2, '0')} · {day.title} 测验</h1>
        <p className="mt-1 text-sm text-text-muted">共 {totalQ} 题 · 已答 {answeredCount} 题</p>
      </div>

      {/* Progress Dots */}
      <div className="mb-6 flex gap-2">
        {questions.map((q, i) => {
          const isAnswered = q.type === 'code' ? q.id in codeResults : q.id in answers
          let dotClass = 'bg-border'
          if (i === currentQ) dotClass = 'bg-primary'
          else if (submitted) {
            let isCorrect = false
            if (q.type === 'choice') isCorrect = answers[q.id] === q.correctId
            else if (q.type === 'trueFalse') isCorrect = answers[q.id] === q.correct
            else if (q.type === 'code') isCorrect = !!codeResults[q.id]
            dotClass = isCorrect ? 'bg-success' : 'bg-danger'
          } else if (isAnswered) dotClass = 'bg-accent'

          return (
            <button
              key={q.id}
              onClick={() => setCurrentQ(i)}
              className={`h-3 w-3 rounded-full transition-all ${dotClass} ${i === currentQ ? 'scale-125' : ''}`}
            />
          )
        })}
      </div>

      {/* Question */}
      <div className="mb-8 rounded-xl border border-border bg-bg-card p-6">
        <div className="mb-4 text-xs font-medium text-text-muted">
          第 {currentQ + 1} / {totalQ} 题
          {currentQuestion.type === 'code' && (
            <span className="ml-2 rounded bg-accent/20 px-2 py-0.5 text-accent">编程题</span>
          )}
          {currentQuestion.type === 'trueFalse' && (
            <span className="ml-2 rounded bg-warning/20 px-2 py-0.5 text-warning">判断题</span>
          )}
        </div>

        {currentQuestion.type === 'code' ? (
          <CodeQuiz
            key={currentQuestion.id}
            question={currentQuestion}
            showResult={submitted}
            onResult={(passed) =>
              setCodeResults((prev) => ({ ...prev, [currentQuestion.id]: passed }))
            }
          />
        ) : (
          <ChoiceQuiz
            question={currentQuestion}
            selected={answers[currentQuestion.id] ?? null}
            onSelect={(val) =>
              setAnswers((prev) => ({ ...prev, [currentQuestion.id]: val }))
            }
            showResult={submitted}
          />
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentQ((p) => Math.max(0, p - 1))}
          disabled={currentQ === 0}
          className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-bg-hover disabled:opacity-30"
        >
          ← 上一题
        </button>

        <div className="flex gap-3">
          {currentQ < totalQ - 1 ? (
            <button
              onClick={() => setCurrentQ((p) => p + 1)}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
            >
              下一题 →
            </button>
          ) : !submitted ? (
            <button
              onClick={handleSubmit}
              disabled={answeredCount < totalQ}
              className="rounded-lg bg-accent px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-dark disabled:opacity-50"
            >
              提交测验
            </button>
          ) : null}
        </div>
      </div>

      {/* Results */}
      {submitted && (
        <div className="mt-8 rounded-xl border border-border bg-bg-card p-6 text-center">
          <div className="mb-2 text-4xl font-extrabold">
            {Math.round(score * 100)}%
          </div>
          <div className={`text-lg font-semibold ${score >= 0.6 ? 'text-success' : 'text-danger'}`}>
            {score >= 0.6 ? '🎉 恭喜通过！' : '😥 未通过，再试一次'}
          </div>
          <p className="mt-2 text-sm text-text-muted">
            正确 {Math.round(score * totalQ)} / {totalQ} 题
            {score >= 0.6 && ' · 已解锁下一天课程'}
          </p>
          <div className="mt-6 flex justify-center gap-4">
            {score < 0.6 && (
              <button
                onClick={handleRetry}
                className="rounded-lg bg-primary px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
              >
                重新测验
              </button>
            )}
            {score >= 0.6 && dayId < TOTAL_DAYS && (
              <Link
                to={`/day/${dayId + 1}`}
                className="rounded-lg bg-primary px-6 py-2 text-sm font-medium text-white no-underline transition-colors hover:bg-primary-dark"
              >
                Day {dayId + 1} →
              </Link>
            )}
            <Link
              to="/dashboard"
              className="rounded-lg border border-border px-6 py-2 text-sm font-medium text-text-secondary no-underline transition-colors hover:bg-bg-hover"
            >
              返回学习中心
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
