import type { QuizData } from '../types'
import { quiz01 } from './quiz01'
import { quiz02 } from './quiz02'
import { quiz03 } from './quiz03'
import { quiz04 } from './quiz04'
import { quiz05 } from './quiz05'
import { quiz06 } from './quiz06'
import { quiz07 } from './quiz07'
import { quiz08 } from './quiz08'
import { quiz09 } from './quiz09'
import { quiz10 } from './quiz10'
import { quiz11 } from './quiz11'
import { quiz12 } from './quiz12'
import { quiz13 } from './quiz13'
import { quiz14 } from './quiz14'
import { quiz15 } from './quiz15'
import { quiz16 } from './quiz16'
import { quiz17 } from './quiz17'
import { quiz18 } from './quiz18'
import { quiz19 } from './quiz19'
import { quiz20 } from './quiz20'

const allQuizzes: QuizData[] = [
  quiz01, quiz02, quiz03, quiz04, quiz05,
  quiz06, quiz07, quiz08, quiz09, quiz10,
  quiz11, quiz12, quiz13, quiz14, quiz15,
  quiz16, quiz17, quiz18, quiz19, quiz20,
]

export function getQuizByDayId(dayId: number): QuizData | undefined {
  return allQuizzes.find((q) => q.dayId === dayId)
}
