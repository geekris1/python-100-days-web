import { Link } from 'react-router-dom'
import { allDays } from '../data/days'
import { useProgress } from '../hooks/useProgress'
import { getDayStatus } from '../data/types'

const statusStyle = {
  completed: 'border-success/40 bg-success/5',
  available: 'border-primary/40 bg-primary/5 hover:border-primary hover:bg-primary/10',
  locked: 'border-border bg-bg-card/50 opacity-60 cursor-not-allowed',
}

const statusBadge = {
  completed: { text: '已完成', cls: 'bg-success/20 text-success' },
  available: { text: '可学习', cls: 'bg-primary/20 text-primary' },
  locked: { text: '未解锁', cls: 'bg-bg-hover text-text-muted' },
}

export default function HomePage() {
  const { progress } = useProgress()
  const completedCount = allDays.filter(
    (d) => getDayStatus(progress, d.id) === 'completed'
  ).length
  const pct = Math.round((completedCount / allDays.length) * 100)

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-bg-card to-bg p-8 sm:p-12">
        <div className="relative z-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <span>🐍</span> Python 从入门到精通
          </div>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight sm:text-5xl">
            Python <span className="text-primary">100 Days</span>
            <br />
            <span className="text-text-secondary">从新手到大师</span>
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-text-secondary">
            基于 Python-100-Days 开源教程，涵盖 Python 语言基础、数据结构、函数和面向对象编程。
            每天一个主题，配合在线代码编辑器和互动测验，让学习更高效。
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to={`/day/${progress.currentDay}`}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-primary-dark"
            >
              {completedCount > 0 ? '继续学习' : '开始学习'} →
            </Link>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-bg-card px-6 py-3 text-sm font-semibold text-text no-underline transition-colors hover:bg-bg-hover"
            >
              学习中心
            </Link>
          </div>
        </div>
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-accent/5 blur-3xl" />
      </section>

      {/* Stats */}
      <section className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { label: '总课程', value: `${allDays.length} 天`, icon: '📚' },
          { label: '已完成', value: `${completedCount} 天`, icon: '✅' },
          { label: '完成率', value: `${pct}%`, icon: '📊' },
          { label: '连续学习', value: `${progress.streak} 天`, icon: '🔥' },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-border bg-bg-card p-5 text-center"
          >
            <div className="mb-2 text-2xl">{s.icon}</div>
            <div className="text-2xl font-bold">{s.value}</div>
            <div className="mt-1 text-sm text-text-muted">{s.label}</div>
          </div>
        ))}
      </section>

      {/* Course Grid */}
      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">课程路线图</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {allDays.map((day) => {
            const status = getDayStatus(progress, day.id)
            const badge = statusBadge[status]
            const dayProgress = progress.days[day.id]

            return (
              <Link
                key={day.id}
                to={status === 'locked' ? '#' : `/day/${day.id}`}
                onClick={(e) => status === 'locked' && e.preventDefault()}
                className={`group relative rounded-xl border p-5 no-underline transition-all ${statusStyle[status]}`}
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-text-muted">
                    Day {String(day.id).padStart(2, '0')}
                  </span>
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${badge.cls}`}>
                    {badge.text}
                  </span>
                </div>
                <h3 className="mb-2 text-sm font-semibold text-text">{day.title}</h3>
                <p className="line-clamp-2 text-xs text-text-muted">{day.description}</p>
                {dayProgress?.quizScore != null && (
                  <div className="mt-3">
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-bg-hover">
                      <div
                        className="h-full rounded-full bg-success transition-all"
                        style={{ width: `${Math.round(dayProgress.quizScore * 100)}%` }}
                      />
                    </div>
                    <span className="mt-1 block text-right text-xs text-text-muted">
                      {Math.round(dayProgress.quizScore * 100)}%
                    </span>
                  </div>
                )}
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}
