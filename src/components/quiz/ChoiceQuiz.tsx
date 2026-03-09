import type { ChoiceQuestion, TrueFalseQuestion } from '../../data/types'

interface ChoiceQuizProps {
  question: ChoiceQuestion | TrueFalseQuestion
  selected: string | boolean | null
  onSelect: (value: string | boolean) => void
  showResult: boolean
}

export default function ChoiceQuiz({ question, selected, onSelect, showResult }: ChoiceQuizProps) {
  if (question.type === 'trueFalse') {
    const options = [
      { id: 'true', text: '正确' },
      { id: 'false', text: '错误' },
    ]
    const isCorrect = selected === question.correct

    return (
      <div>
        <h3 className="mb-4 text-base font-semibold">{question.question}</h3>
        <div className="space-y-2">
          {options.map((opt) => {
            const isSelected = String(selected) === opt.id
            const isCorrectOption = String(question.correct) === opt.id

            let optionClass = 'border-border bg-bg-card hover:border-primary/40'
            if (showResult) {
              if (isCorrectOption) optionClass = 'border-success bg-success/10'
              else if (isSelected && !isCorrect) optionClass = 'border-danger bg-danger/10'
            } else if (isSelected) {
              optionClass = 'border-primary bg-primary/10'
            }

            return (
              <button
                key={opt.id}
                onClick={() => !showResult && onSelect(opt.id === 'true')}
                disabled={showResult}
                className={`flex w-full items-center gap-3 rounded-lg border p-3 text-left text-sm transition-all ${optionClass}`}
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-current text-xs">
                  {opt.id === 'true' ? 'T' : 'F'}
                </span>
                <span>{opt.text}</span>
              </button>
            )
          })}
        </div>
        {showResult && (
          <div className={`mt-3 rounded-lg p-3 text-sm ${isCorrect ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'}`}>
            {isCorrect ? '✓ 回答正确！' : '✗ 回答错误'}
            <p className="mt-1 text-text-secondary">{question.explanation}</p>
          </div>
        )}
      </div>
    )
  }

  const isCorrect = selected === question.correctId

  return (
    <div>
      <h3 className="mb-4 text-base font-semibold">{question.question}</h3>
      <div className="space-y-2">
        {question.choices.map((choice, i) => {
          const isSelected = selected === choice.id
          const isCorrectOption = choice.id === question.correctId
          const letter = String.fromCharCode(65 + i)

          let optionClass = 'border-border bg-bg-card hover:border-primary/40'
          if (showResult) {
            if (isCorrectOption) optionClass = 'border-success bg-success/10'
            else if (isSelected && !isCorrect) optionClass = 'border-danger bg-danger/10'
          } else if (isSelected) {
            optionClass = 'border-primary bg-primary/10'
          }

          return (
            <button
              key={choice.id}
              onClick={() => !showResult && onSelect(choice.id)}
              disabled={showResult}
              className={`flex w-full items-center gap-3 rounded-lg border p-3 text-left text-sm transition-all ${optionClass}`}
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-current text-xs font-medium">
                {letter}
              </span>
              <span>{choice.text}</span>
            </button>
          )
        })}
      </div>
      {showResult && (
        <div className={`mt-3 rounded-lg p-3 text-sm ${isCorrect ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'}`}>
          {isCorrect ? '✓ 回答正确！' : '✗ 回答错误'}
          <p className="mt-1 text-text-secondary">{question.explanation}</p>
        </div>
      )}
    </div>
  )
}
