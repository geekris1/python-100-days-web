import type { QuizData } from '../types'

export const quiz08: QuizData = {
  dayId: 8,
  questions: [
    {
      type: 'choice',
      id: 'q8-1',
      question: '以下哪个方法可以向列表末尾添加元素？',
      choices: [
        { id: 'a', text: 'list.add()' },
        { id: 'b', text: 'list.append()' },
        { id: 'c', text: 'list.insert()' },
        { id: 'd', text: 'list.push()' },
      ],
      correctId: 'b',
      explanation: 'append() 方法用于向列表末尾添加一个元素。insert() 可以在指定位置插入元素但不是末尾添加。Python 列表没有 add() 和 push() 方法。',
    },
    {
      type: 'choice',
      id: 'q8-2',
      question: '列表 nums = [10, 20, 30, 40, 50]，nums[-2] 的值是？',
      choices: [
        { id: 'a', text: '20' },
        { id: 'b', text: '30' },
        { id: 'c', text: '40' },
        { id: 'd', text: '50' },
      ],
      correctId: 'c',
      explanation: '负数索引从列表末尾开始计数。nums[-1] 是 50（最后一个），nums[-2] 是 40（倒数第二个）。',
    },
    {
      type: 'code',
      id: 'q8-3',
      question: '给定列表 fruits = ["苹果", "香蕉", "橙子", "葡萄", "西瓜"]，使用切片获取第 2 到第 4 个元素（索引 1 到 3），并打印结果。',
      starterCode: 'fruits = ["苹果", "香蕉", "橙子", "葡萄", "西瓜"]\n# 使用切片获取第 2 到第 4 个元素\n',
      expectedOutput: "['香蕉', '橙子', '葡萄']",
      explanation: '使用 fruits[1:4] 可以获取索引 1、2、3 对应的元素。切片语法为 list[start:end]，包含 start 不包含 end。',
    },
  ],
}
