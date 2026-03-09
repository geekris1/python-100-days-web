import type { QuizData } from '../types'

export const quiz12: QuizData = {
  dayId: 12,
  questions: [
    {
      type: 'choice',
      id: 'q12_1',
      question: '以下哪个操作可以求两个集合 A 和 B 的交集？',
      choices: [
        { id: 'a', text: 'A | B' },
        { id: 'b', text: 'A & B' },
        { id: 'c', text: 'A - B' },
        { id: 'd', text: 'A ^ B' },
      ],
      correctId: 'b',
      explanation: '& 运算符（或 intersection() 方法）用于求两个集合的交集。| 是并集，- 是差集，^ 是对称差集。',
    },
    {
      type: 'choice',
      id: 'q12_2',
      question: '以下代码的输出结果是什么？\n\ns = {1, 2, 3, 2, 1}\nprint(len(s))',
      choices: [
        { id: 'a', text: '5' },
        { id: 'b', text: '3' },
        { id: 'c', text: '2' },
        { id: 'd', text: '报错' },
      ],
      correctId: 'b',
      explanation: '集合会自动去除重复元素。{1, 2, 3, 2, 1} 去重后只剩 {1, 2, 3}，长度为 3。',
    },
    {
      type: 'trueFalse',
      id: 'q12_3',
      question: 'frozenset 是不可变集合，可以作为字典的键使用。',
      correct: true,
      explanation: 'frozenset 是不可变的集合类型，因为它是可哈希的（hashable），所以可以作为字典的键或放入另一个集合中。',
    },
    {
      type: 'code',
      id: 'q12_4',
      question: '使用集合操作，找出同时选修了数学和英语的学生（即交集），并按字母顺序排序后输出。',
      starterCode: `math_students = {"Alice", "Bob", "Charlie", "David"}
english_students = {"Bob", "David", "Eve", "Frank"}
# 求交集并排序输出
both = ___
print(sorted(both))`,
      expectedOutput: "['Bob', 'David']",
      explanation: '使用 & 运算符或 intersection() 方法可以求两个集合的交集。math_students & english_students 得到 {"Bob", "David"}，再用 sorted() 排序。',
    },
  ],
}
