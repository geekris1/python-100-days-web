import type { QuizData } from '../types'

export const quiz10: QuizData = {
  dayId: 10,
  questions: [
    {
      type: 'choice',
      id: 'q10-1',
      question: '以下哪个说法正确描述了元组和列表的区别？',
      choices: [
        { id: 'a', text: '元组使用方括号 []，列表使用圆括号 ()' },
        { id: 'b', text: '元组创建后不能修改，列表可以修改' },
        { id: 'c', text: '元组只能存储数字，列表可以存储任意类型' },
        { id: 'd', text: '元组不能被遍历，列表可以' },
      ],
      correctId: 'b',
      explanation: '元组（tuple）是不可变序列，创建后不能添加、删除或修改元素。列表（list）是可变序列，可以随意修改。元组使用圆括号 ()，列表使用方括号 []。两者都可以存储任意类型且都可以遍历。',
    },
    {
      type: 'choice',
      id: 'q10-2',
      question: '创建只有一个元素的元组，以下哪种写法是正确的？',
      choices: [
        { id: 'a', text: 't = (1)' },
        { id: 'b', text: 't = (1,)' },
        { id: 'c', text: 't = [1]' },
        { id: 'd', text: 't = tuple[1]' },
      ],
      correctId: 'b',
      explanation: '创建单元素元组必须在元素后加逗号：t = (1,)。如果写 t = (1)，Python 会将其解释为普通的整数 1（括号被视为数学运算的括号）。',
    },
    {
      type: 'trueFalse',
      id: 'q10-3',
      question: '元组可以作为字典的键（key），而列表不可以。',
      correct: true,
      explanation: '字典的键必须是不可变（hashable）类型。元组是不可变的，所以可以作为字典键；列表是可变的，不能作为字典键。这是元组的一个重要应用场景。',
    },
    {
      type: 'code',
      id: 'q10-4',
      question: '使用元组解包，将元组 info = ("张三", 25, "北京") 中的三个值分别赋给变量 name、age、city，然后打印 "姓名: 张三, 年龄: 25, 城市: 北京"。',
      starterCode: 'info = ("张三", 25, "北京")\n# 使用元组解包并打印\n',
      expectedOutput: '姓名: 张三, 年龄: 25, 城市: 北京',
      explanation: '元组解包语法：name, age, city = info，可以将元组中的值按顺序赋给多个变量。然后使用 f-string 或格式化输出：print(f"姓名: {name}, 年龄: {age}, 城市: {city}")。',
    },
  ],
}
