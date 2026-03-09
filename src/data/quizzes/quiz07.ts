import type { QuizData } from '../types'

export const quiz07: QuizData = {
  dayId: 7,
  questions: [
    {
      type: 'choice',
      id: 'q7-1',
      question: '在嵌套循环中，内层循环的 break 语句会？',
      choices: [
        { id: 'a', text: '跳出所有循环' },
        { id: 'b', text: '只跳出内层循环' },
        { id: 'c', text: '跳出外层循环' },
        { id: 'd', text: '终止整个程序' },
      ],
      correctId: 'b',
      explanation: 'break 只能跳出它所在的那一层循环。在嵌套循环中，内层的 break 只会跳出内层循环，外层循环会继续执行。',
    },
    {
      type: 'choice',
      id: 'q7-2',
      question: '以下代码的输出是什么？\n\nfor i in range(3):\n    if i == 1:\n        continue\n    print(i)',
      choices: [
        { id: 'a', text: '0\n1\n2' },
        { id: 'b', text: '0\n2' },
        { id: 'c', text: '1\n2' },
        { id: 'd', text: '0' },
      ],
      correctId: 'b',
      explanation: '当 i == 1 时，continue 跳过本次迭代，不执行 print(i)，所以只打印 0 和 2。',
    },
    {
      type: 'code',
      id: 'q7-3',
      question: '打印斐波那契数列的前 10 个数（用空格分隔，在同一行输出）。斐波那契数列：1, 1, 2, 3, 5, 8, 13, 21, 34, 55',
      starterCode: '# 打印斐波那契数列前 10 个数\na, b = 1, 1\n',
      expectedOutput: '1 1 2 3 5 8 13 21 34 55',
      explanation: '斐波那契数列中每个数是前两个数之和。使用 a, b = b, a + b 来更新值，用 print(a, end=" ") 在同一行输出，或者收集到列表中最后用 " ".join() 输出。',
    },
  ],
}
