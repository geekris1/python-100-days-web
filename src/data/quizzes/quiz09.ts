import type { QuizData } from '../types'

export const quiz09: QuizData = {
  dayId: 9,
  questions: [
    {
      type: 'choice',
      id: 'q9-1',
      question: '以下哪个方法可以对列表进行原地排序？',
      choices: [
        { id: 'a', text: 'sorted(list)' },
        { id: 'b', text: 'list.sort()' },
        { id: 'c', text: 'list.order()' },
        { id: 'd', text: 'list.arrange()' },
      ],
      correctId: 'b',
      explanation: 'list.sort() 会对列表进行原地排序（修改原列表）。sorted() 是内置函数，返回一个新的排序列表而不修改原列表。Python 列表没有 order() 和 arrange() 方法。',
    },
    {
      type: 'choice',
      id: 'q9-2',
      question: '列表推导式 [x * 2 for x in range(4)] 的结果是？',
      choices: [
        { id: 'a', text: '[0, 2, 4, 6]' },
        { id: 'b', text: '[2, 4, 6, 8]' },
        { id: 'c', text: '[0, 1, 2, 3]' },
        { id: 'd', text: '[1, 2, 3, 4]' },
      ],
      correctId: 'a',
      explanation: 'range(4) 生成 0, 1, 2, 3，每个值乘以 2 后得到 0, 2, 4, 6。列表推导式是创建列表的简洁方式。',
    },
    {
      type: 'code',
      id: 'q9-3',
      question: '使用列表推导式生成一个包含 1 到 10 中所有偶数平方的列表，并打印结果。',
      starterCode: '# 使用列表推导式生成偶数的平方\n',
      expectedOutput: '[4, 16, 36, 64, 100]',
      explanation: '使用列表推导式 [x ** 2 for x in range(1, 11) if x % 2 == 0] 即可。range(1, 11) 遍历 1-10，if x % 2 == 0 筛选偶数，x ** 2 计算平方。',
    },
  ],
}
