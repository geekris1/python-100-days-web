import { Link } from 'react-router-dom'
import { allDays } from '../data/days'
import { useProgress } from '../hooks/useProgress'
import { getDayStatus, TOTAL_DAYS } from '../data/types'
import ProgressRing from '../components/ProgressRing'

export default function DashboardPage() {
  const { progress, resetProgress } = useProgress()

  const completedCount = allDays.filter(
    (d) => getDayStatus(progress, d.id) === 'completed'
  ).length
  const totalQuizScores = allDays.reduce((sum, d) => {
    const s = progress.days[d.id]?.quizScore
    return s != null ? sum + s : sum
  }, 0)
  const quizCount = allDays.filter((d) => progress.days[d.id]?.quizScore != null).length
  const avgScore = quizCount > 0 ? Math.round((totalQuizScores / quizCount) * 100) : 0

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">学习中心</h1>
        <button
          onClick={() => {
            if (confirm('确定要重置所有学习进度吗？此操作不可撤销。')) resetProgress()
          }}
          className="rounded-lg border border-danger/30 bg-danger/10 px-4 py-2 text-sm font-medium text-danger transition-colors hover:bg-danger/20"
        >
          重置进度
        </button>
      </div>

      {/* Stats Cards */}
      <div className="mb-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard icon="🎯" label="学习进度" value={`${completedCount} / ${TOTAL_DAYS}`} />
        <StatCard icon="📝" label="平均测验分" value={`${avgScore}%`} />
        <StatCard icon="🔥" label="连续学习" value={`${progress.streak} 天`} />
        <StatCard
          icon="📖"
          label="当前进度"
          value={`Day ${String(progress.currentDay).padStart(2, '0')}`}
        />
      </div>

      {/* Progress Ring + Bar */}
      <div className="mb-10 flex flex-col items-center gap-6 rounded-xl border border-border bg-bg-card p-6 sm:flex-row sm:gap-10">
        <ProgressRing progress={completedCount / TOTAL_DAYS} label="总体完成" />
        <div className="flex-1 space-y-4">
          <div>
            <div className="mb-2 flex justify-between text-sm">
              <span className="font-medium">课程进度</span>
              <span className="text-text-muted">
                {completedCount} / {TOTAL_DAYS} 天
              </span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-bg-hover">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                style={{ width: `${(completedCount / TOTAL_DAYS) * 100}%` }}
              />
            </div>
          </div>
          <div>
            <div className="mb-2 flex justify-between text-sm">
              <span className="font-medium">平均测验分数</span>
              <span className="text-text-muted">{avgScore}%</span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-bg-hover">
              <div
                className="h-full rounded-full bg-accent transition-all duration-500"
                style={{ width: `${avgScore}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Day List */}
      <div className="space-y-3">
        {allDays.map((day) => {
          const status = getDayStatus(progress, day.id)
          const dayProgress = progress.days[day.id]
          const isLocked = status === 'locked'
          const isCompleted = status === 'completed'

          return (
            <Link
              key={day.id}
              to={isLocked ? '#' : `/day/${day.id}`}
              onClick={(e) => isLocked && e.preventDefault()}
              className={`flex items-center gap-4 rounded-xl border p-4 no-underline transition-all sm:gap-6 ${
                isCompleted
                  ? 'border-success/30 bg-success/5'
                  : isLocked
                    ? 'cursor-not-allowed border-border bg-bg-card/50 opacity-50'
                    : 'border-border bg-bg-card hover:border-primary/40 hover:bg-primary/5'
              }`}
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-bold ${
                  isCompleted
                    ? 'bg-success/20 text-success'
                    : isLocked
                      ? 'bg-bg-hover text-text-muted'
                      : 'bg-primary/20 text-primary'
                }`}
              >
                {isCompleted ? '✓' : String(day.id).padStart(2, '0')}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="truncate text-sm font-semibold text-text">
                    Day {String(day.id).padStart(2, '0')} · {day.title}
                  </h3>
                </div>
                <p className="mt-0.5 truncate text-xs text-text-muted">{day.description}</p>
              </div>
              <div className="hidden shrink-0 text-right sm:block">
                {dayProgress?.quizScore != null && (
                  <span className="text-sm font-medium text-text-secondary">
                    测验 {Math.round(dayProgress.quizScore * 100)}%
                  </span>
                )}
                {isLocked && <span className="text-lg">🔒</span>}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

function StatCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-bg-card p-5">
      <div className="mb-2 text-2xl">{icon}</div>
      <div className="text-xl font-bold">{value}</div>
      <div className="mt-1 text-sm text-text-muted">{label}</div>
    </div>
  )
}
