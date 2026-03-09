import type { QuizData } from '../types'

export const quiz04: QuizData = {
  dayId: 4,
  questions: [
    {
      type: 'choice',
      id: 'q4-1',
      question: '在 Python 中，// 运算符的作用是？',
      choices: [
        { id: 'a', text: '普通除法' },
        { id: 'b', text: '整除（地板除）' },
        { id: 'c', text: '取余' },
        { id: 'd', text: '注释' },
      ],
      correctId: 'b',
      explanation: '// 是 Python 的整除运算符（地板除），它会将除法结果向下取整。例如 7 // 2 的结果是 3，而不是 3.5。普通除法使用 /，取余使用 %。',
    },
    {
      type: 'choice',
      id: 'q4-2',
      question: '表达式 2 ** 3 的结果是？',
      choices: [
        { id: 'a', text: '6' },
        { id: 'b', text: '8' },
        { id: 'c', text: '5' },
        { id: 'd', text: '9' },
      ],
      correctId: 'b',
      explanation: '** 是 Python 的幂运算符，2 ** 3 表示 2 的 3 次方，即 2 × 2 × 2 = 8。',
    },
    {
      type: 'code',
      id: 'q4-3',
      question: '已知半径 r = 5，请计算并打印圆的面积（使用 3.14159 作为 π 的值，结果保留两位小数）。',
      starterCode: 'r = 5\npi = 3.14159\n# 计算面积并打印结果\n',
      expectedOutput: '78.54',
      explanation: '圆的面积公式为 π × r²。使用 round() 函数或格式化字符串保留两位小数：area = pi * r ** 2，然后 print(round(area, 2)) 输出 78.54。',
    },
  ],
}
