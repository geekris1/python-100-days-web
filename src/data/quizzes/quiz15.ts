import type { QuizData } from '../types'

export const quiz15: QuizData = {
  dayId: 15,
  questions: [
    {
      type: 'choice',
      id: 'q15_1',
      question: '关于递归函数，以下说法正确的是？',
      choices: [
        { id: 'a', text: '递归函数不需要终止条件' },
        { id: 'b', text: '递归函数必须有基准情形（base case）来终止递归' },
        { id: 'c', text: '递归函数比循环效率更高' },
        { id: 'd', text: 'Python 对递归深度没有限制' },
      ],
      correctId: 'b',
      explanation: '递归函数必须有基准情形来终止递归，否则会导致无限递归。Python 默认递归深度限制约为 1000 层，可以通过 sys.setrecursionlimit() 修改。',
    },
    {
      type: 'choice',
      id: 'q15_2',
      question: '以下代码的输出结果是什么？\n\ndef greet(name, greeting="你好"):\n    return f"{greeting}, {name}!"\n\nprint(greet("小明", "早上好"))',
      choices: [
        { id: 'a', text: '你好, 小明!' },
        { id: 'b', text: '早上好, 小明!' },
        { id: 'c', text: '小明, 早上好!' },
        { id: 'd', text: '报错' },
      ],
      correctId: 'b',
      explanation: '传入了 greeting="早上好"，覆盖了默认值"你好"，所以输出 "早上好, 小明!"。f-string 按照定义的格式 "{greeting}, {name}!" 拼接。',
    },
    {
      type: 'trueFalse',
      id: 'q15_3',
      question: 'Python 中可以在函数内部定义另一个函数（嵌套函数）。',
      correct: true,
      explanation: 'Python 支持在函数内部定义函数，这就是嵌套函数（nested function）。内部函数可以访问外部函数的变量，这是闭包的基础。',
    },
    {
      type: 'code',
      id: 'q15_4',
      question: '编写一个递归函数 factorial 来计算阶乘，并输出 5 的阶乘。',
      starterCode: `def factorial(n):
    # 编写递归函数计算 n 的阶乘
    ___

print(factorial(5))`,
      expectedOutput: '120',
      explanation: '阶乘的递归定义：n! = n × (n-1)!，基准情形为 0! = 1 或 1! = 1。所以函数应为：if n <= 1: return 1，else: return n * factorial(n - 1)。5! = 120。',
    },
  ],
}
