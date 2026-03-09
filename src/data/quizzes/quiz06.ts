import type { QuizData } from '../types'

export const quiz06: QuizData = {
  dayId: 6,
  questions: [
    {
      type: 'choice',
      id: 'q6-1',
      question: 'range(1, 5) 会生成哪些数字？',
      choices: [
        { id: 'a', text: '1, 2, 3, 4, 5' },
        { id: 'b', text: '1, 2, 3, 4' },
        { id: 'c', text: '0, 1, 2, 3, 4' },
        { id: 'd', text: '0, 1, 2, 3, 4, 5' },
      ],
      correctId: 'b',
      explanation: 'range(1, 5) 生成从 1 开始到 5（不包含 5）的整数序列，即 1, 2, 3, 4。range 函数的特点是"左闭右开"。',
    },
    {
      type: 'choice',
      id: 'q6-2',
      question: '以下哪个关键字用于提前结束整个循环？',
      choices: [
        { id: 'a', text: 'continue' },
        { id: 'b', text: 'break' },
        { id: 'c', text: 'pass' },
        { id: 'd', text: 'return' },
      ],
      correctId: 'b',
      explanation: 'break 用于立即跳出整个循环。continue 是跳过当前迭代进入下一次迭代，pass 是空操作占位符，return 是从函数中返回。',
    },
    {
      type: 'code',
      id: 'q6-3',
      question: '使用 for 循环计算 1 到 100 的累加和，并打印结果。',
      starterCode: '# 计算 1 + 2 + 3 + ... + 100\ntotal = 0\n',
      expectedOutput: '5050',
      explanation: '使用 for i in range(1, 101) 遍历 1 到 100，累加到 total 变量中。最终结果为 5050，这就是著名的高斯求和。',
    },
  ],
}
