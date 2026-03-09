import { Link, useParams } from 'react-router-dom'

interface SidebarProps {
  days: { id: number; title: string; status: 'locked' | 'available' | 'completed' }[]
}

const statusIcon = {
  locked: '🔒',
  available: '📖',
  completed: '✅',
}

export default function Sidebar({ days }: SidebarProps) {
  const { id } = useParams()
  const currentDay = Number(id)

  return (
    <aside className="hidden w-72 shrink-0 overflow-y-auto border-r border-border bg-bg p-4 lg:block">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
        课程目录
      </h2>
      <nav className="flex flex-col gap-1">
        {days.map((day) => {
          const isActive = currentDay === day.id
          const isLocked = day.status === 'locked'

          return (
            <Link
              key={day.id}
              to={isLocked ? '#' : `/day/${day.id}`}
              onClick={(e) => isLocked && e.preventDefault()}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm no-underline transition-all ${
                isActive
                  ? 'bg-primary/15 text-primary font-medium'
                  : isLocked
                    ? 'cursor-not-allowed text-text-muted opacity-50'
                    : 'text-text-secondary hover:bg-bg-hover hover:text-text'
              }`}
            >
              <span className="text-base">{statusIcon[day.status]}</span>
              <span className="truncate">
                Day {String(day.id).padStart(2, '0')} · {day.title}
              </span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
