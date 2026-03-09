import { useParams, Link, Navigate } from 'react-router-dom'
import { getDayById } from '../data/days'
import { useProgress } from '../hooks/useProgress'
import { getDayStatus, TOTAL_DAYS } from '../data/types'
import { useState } from 'react'
import CodeRunner from '../components/editor/CodeRunner'

export default function DayPage() {
  const { id } = useParams()
  const dayId = Number(id)
  const day = getDayById(dayId)
  const { progress, markLessonComplete } = useProgress()
  const status = getDayStatus(progress, dayId)
  const [activeSection, setActiveSection] = useState(0)

  if (!day) return <Navigate to="/" replace />
  if (status === 'locked') return <Navigate to="/dashboard" replace />

  const dayProgress = progress.days[dayId]
  const lessonDone = dayProgress?.lessonCompleted ?? false

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      {/* Section Nav */}
      <aside className="hidden w-64 shrink-0 overflow-y-auto border-r border-border bg-bg p-4 lg:block">
        <div className="mb-4">
          <Link to="/dashboard" className="text-sm text-text-muted no-underline hover:text-primary">
            ← 返回学习中心
          </Link>
        </div>
        <h3 className="mb-1 text-xs font-semibold uppercase tracking-wider text-text-muted">
          Day {String(dayId).padStart(2, '0')}
        </h3>
        <h2 className="mb-4 text-lg font-bold text-text">{day.title}</h2>
        <nav className="flex flex-col gap-1">
          {day.sections.map((section, i) => (
            <button
              key={i}
              onClick={() => setActiveSection(i)}
              className={`rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                activeSection === i
                  ? 'bg-primary/15 font-medium text-primary'
                  : 'text-text-secondary hover:bg-bg-hover hover:text-text'
              }`}
            >
              {i + 1}. {section.title}
            </button>
          ))}
        </nav>
        <div className="mt-6 border-t border-border pt-4">
          <Link
            to={`/quiz/${dayId}`}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent/10 px-4 py-2.5 text-sm font-medium text-accent no-underline transition-colors hover:bg-accent/20"
          >
            📝 开始测验
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-8">
          {/* Mobile nav */}
          <div className="mb-6 lg:hidden">
            <Link to="/dashboard" className="text-sm text-text-muted no-underline hover:text-primary">
              ← 返回学习中心
            </Link>
          </div>

          {/* Header */}
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Day {String(dayId).padStart(2, '0')}
            </span>
            <h1 className="mt-1 text-3xl font-extrabold">{day.title}</h1>
            <p className="mt-2 text-text-secondary">{day.description}</p>
            {/* Section dots */}
            <div className="mt-4 flex gap-2">
              {day.sections.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSection(i)}
                  className={`h-2 rounded-full transition-all ${
                    activeSection === i ? 'w-8 bg-primary' : 'w-2 bg-border hover:bg-text-muted'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Active Section */}
          <article className="mb-8">
            <h2 className="mb-4 text-xl font-bold">
              {activeSection + 1}. {day.sections[activeSection].title}
            </h2>
            <div className="prose-custom mb-6 whitespace-pre-wrap text-text-secondary leading-relaxed">
              {day.sections[activeSection].content}
            </div>
            {day.sections[activeSection].code && (
              day.sections[activeSection].codeRunnable ? (
                <CodeRunner
                  key={`${dayId}-${activeSection}`}
                  initialCode={day.sections[activeSection].code!}
                  title={day.sections[activeSection].title}
                />
              ) : (
                <div className="overflow-hidden rounded-xl border border-border bg-[#0d1117]">
                  <div className="flex items-center border-b border-border px-4 py-2">
                    <span className="text-xs font-medium text-text-muted">Python</span>
                  </div>
                  <pre className="overflow-x-auto p-4">
                    <code className="text-sm leading-relaxed text-text font-mono">
                      {day.sections[activeSection].code}
                    </code>
                  </pre>
                </div>
              )
            )}
          </article>

          {/* Navigation */}
          <div className="flex items-center justify-between border-t border-border pt-6">
            <button
              onClick={() => setActiveSection((p) => Math.max(0, p - 1))}
              disabled={activeSection === 0}
              className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-bg-hover disabled:opacity-30"
            >
              ← 上一节
            </button>

            {activeSection < day.sections.length - 1 ? (
              <button
                onClick={() => setActiveSection((p) => p + 1)}
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
              >
                下一节 →
              </button>
            ) : (
              <div className="flex gap-3">
                {!lessonDone && (
                  <button
                    onClick={() => markLessonComplete(dayId)}
                    className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
                  >
                    ✓ 标记已学完
                  </button>
                )}
                <Link
                  to={`/quiz/${dayId}`}
                  className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white no-underline transition-colors hover:bg-primary-dark"
                >
                  📝 开始测验
                </Link>
                {dayId < TOTAL_DAYS && getDayStatus(progress, dayId + 1) !== 'locked' && (
                  <Link
                    to={`/day/${dayId + 1}`}
                    className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-text-secondary no-underline transition-colors hover:bg-bg-hover"
                  >
                    Day {dayId + 1} →
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Mobile quiz link */}
          <div className="mt-6 lg:hidden">
            <Link
              to={`/quiz/${dayId}`}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent/10 px-4 py-3 text-sm font-medium text-accent no-underline transition-colors hover:bg-accent/20"
            >
              📝 开始测验
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
