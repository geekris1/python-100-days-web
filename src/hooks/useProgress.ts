import { useState, useCallback, useEffect } from 'react'
import {
  type UserProgress,
  type DayProgress,
  createEmptyProgress,
  createEmptyDayProgress,
  PASS_THRESHOLD,
} from '../data/types'

const STORAGE_KEY = 'python100days_progress'

function loadProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch { /* ignore */ }
  return createEmptyProgress()
}

function saveProgress(progress: UserProgress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
}

function updateStreak(progress: UserProgress): UserProgress {
  const today = new Date().toISOString().slice(0, 10)
  if (progress.lastActiveDate === today) return progress

  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10)
  const streak = progress.lastActiveDate === yesterday ? progress.streak + 1 : 1

  return { ...progress, streak, lastActiveDate: today }
}

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(loadProgress)

  useEffect(() => {
    saveProgress(progress)
  }, [progress])

  const markLessonComplete = useCallback((dayId: number) => {
    setProgress((prev) => {
      const dayProgress = prev.days[dayId] ?? createEmptyDayProgress()
      const updated: UserProgress = {
        ...updateStreak(prev),
        days: {
          ...prev.days,
          [dayId]: { ...dayProgress, lessonCompleted: true },
        },
      }
      return maybeComplete(updated, dayId)
    })
  }, [])

  const submitQuiz = useCallback(
    (dayId: number, score: number, answers: Record<string, string | boolean>) => {
      setProgress((prev) => {
        const dayProgress = prev.days[dayId] ?? createEmptyDayProgress()
        const updated: UserProgress = {
          ...updateStreak(prev),
          days: {
            ...prev.days,
            [dayId]: { ...dayProgress, quizScore: score, quizAnswers: answers },
          },
        }
        return maybeComplete(updated, dayId)
      })
    },
    []
  )

  const resetProgress = useCallback(() => {
    const empty = createEmptyProgress()
    setProgress(empty)
  }, [])

  return { progress, markLessonComplete, submitQuiz, resetProgress }
}

function maybeComplete(progress: UserProgress, dayId: number): UserProgress {
  const day = progress.days[dayId]
  if (!day) return progress
  if (day.lessonCompleted && (day.quizScore ?? 0) >= PASS_THRESHOLD && !day.completedAt) {
    const completedDay: DayProgress = {
      ...day,
      completedAt: new Date().toISOString(),
    }
    const nextDay = Math.max(progress.currentDay, dayId + 1)
    return {
      ...progress,
      currentDay: nextDay,
      days: { ...progress.days, [dayId]: completedDay },
    }
  }
  return progress
}
