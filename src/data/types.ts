export interface Section {
  title: string
  content: string
  code?: string
  codeRunnable?: boolean
}

export interface DayData {
  id: number
  title: string
  description: string
  sections: Section[]
}

export interface QuizChoice {
  id: string
  text: string
}

export interface ChoiceQuestion {
  type: 'choice'
  id: string
  question: string
  choices: QuizChoice[]
  correctId: string
  explanation: string
}

export interface TrueFalseQuestion {
  type: 'trueFalse'
  id: string
  question: string
  correct: boolean
  explanation: string
}

export interface CodeQuestion {
  type: 'code'
  id: string
  question: string
  starterCode: string
  expectedOutput: string
  explanation: string
}

export type Question = ChoiceQuestion | TrueFalseQuestion | CodeQuestion

export interface QuizData {
  dayId: number
  questions: Question[]
}

export interface DayProgress {
  lessonCompleted: boolean
  quizScore: number | null
  quizAnswers: Record<string, string | boolean>
  completedAt: string | null
}

export interface UserProgress {
  days: Record<number, DayProgress>
  currentDay: number
  streak: number
  lastActiveDate: string | null
}

export const TOTAL_DAYS = 20
export const PASS_THRESHOLD = 0.6

export function createEmptyProgress(): UserProgress {
  return {
    days: {},
    currentDay: 1,
    streak: 0,
    lastActiveDate: null,
  }
}

export function createEmptyDayProgress(): DayProgress {
  return {
    lessonCompleted: false,
    quizScore: null,
    quizAnswers: {},
    completedAt: null,
  }
}

export function isDayUnlocked(progress: UserProgress, dayId: number): boolean {
  if (dayId === 1) return true
  const prevDay = progress.days[dayId - 1]
  if (!prevDay) return false
  return prevDay.lessonCompleted && (prevDay.quizScore ?? 0) >= PASS_THRESHOLD
}

export function getDayStatus(
  progress: UserProgress,
  dayId: number
): 'locked' | 'available' | 'completed' {
  const dayProgress = progress.days[dayId]
  if (dayProgress?.completedAt) return 'completed'
  if (isDayUnlocked(progress, dayId)) return 'available'
  return 'locked'
}
