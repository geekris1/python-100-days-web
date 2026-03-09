import type { QuizData } from '../types'

export const quiz16: QuizData = {
  dayId: 16,
  questions: [
    {
      type: 'choice',
      id: 'q16_1',
      question: '以下代码的输出结果是什么？\n\nnums = [1, 2, 3, 4, 5]\nresult = list(filter(lambda x: x % 2 == 0, nums))\nprint(result)',
      choices: [
        { id: 'a', text: '[1, 3, 5]' },
        { id: 'b', text: '[2, 4]' },
        { id: 'c', text: '[1, 4, 9, 16, 25]' },
        { id: 'd', text: '[False, True, False, True, False]' },
      ],
      correctId: 'b',
      explanation: 'filter() 函数根据条件过滤元素。lambda x: x % 2 == 0 筛选出偶数，所以结果是 [2, 4]。',
    },
    {
      type: 'choice',
      id: 'q16_2',
      question: '关于 lambda 表达式，以下说法错误的是？',
      choices: [
        { id: 'a', text: 'lambda 是匿名函数' },
        { id: 'b', text: 'lambda 表达式可以包含多条语句' },
        { id: 'c', text: 'lambda 常与 map、filter 配合使用' },
        { id: 'd', text: 'lambda 表达式可以赋值给变量' },
      ],
      correctId: 'b',
      explanation: 'lambda 表达式只能包含一个表达式，不能包含多条语句或复杂的控制流。它是用于简单操作的匿名函数。',
    },
    {
      type: 'trueFalse',
      id: 'q16_3',
      question: 'map() 函数返回的是一个迭代器，需要用 list() 转换才能得到列表。',
      correct: true,
      explanation: '在 Python 3 中，map() 返回一个惰性迭代器（map object），需要用 list()、tuple() 等函数转换才能得到具体的序列。',
    },
    {
      type: 'code',
      id: 'q16_4',
      question: '使用 map() 和 lambda 将列表中的每个数字平方，然后输出结果列表。',
      starterCode: `nums = [1, 2, 3, 4, 5]
# 使用 map 和 lambda 求平方
squared = ___
print(list(squared))`,
      expectedOutput: '[1, 4, 9, 16, 25]',
      explanation: '使用 map(lambda x: x**2, nums) 对列表中的每个元素应用平方运算。map() 返回迭代器，用 list() 转换为列表。',
    },
  ],
}
