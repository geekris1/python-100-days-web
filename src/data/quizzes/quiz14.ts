import type { QuizData } from '../types'

export const quiz14: QuizData = {
  dayId: 14,
  questions: [
    {
      type: 'choice',
      id: 'q14_1',
      question: '以下关于 Python 函数参数的说法，哪个是正确的？',
      choices: [
        { id: 'a', text: '默认参数必须放在非默认参数之前' },
        { id: 'b', text: '可变参数 *args 接收的是一个列表' },
        { id: 'c', text: '关键字参数 **kwargs 接收的是一个字典' },
        { id: 'd', text: '函数最多只能有一个返回值' },
      ],
      correctId: 'c',
      explanation: '**kwargs 将传入的关键字参数打包成字典。*args 接收的是元组而非列表；默认参数必须放在非默认参数之后；Python 函数可以通过元组返回多个值。',
    },
    {
      type: 'choice',
      id: 'q14_2',
      question: '以下哪个语句可以正确导入 math 模块中的 sqrt 函数？',
      choices: [
        { id: 'a', text: 'import sqrt from math' },
        { id: 'b', text: 'from math import sqrt' },
        { id: 'c', text: 'import math.sqrt' },
        { id: 'd', text: 'using math.sqrt' },
      ],
      correctId: 'b',
      explanation: 'Python 中使用 from module import name 语法从模块中导入特定的函数或变量。也可以用 import math 然后通过 math.sqrt() 调用。',
    },
    {
      type: 'trueFalse',
      id: 'q14_3',
      question: 'Python 函数如果没有 return 语句，默认返回 None。',
      correct: true,
      explanation: '当函数没有显式的 return 语句，或者 return 后面没有跟任何值时，函数会默认返回 None。',
    },
    {
      type: 'code',
      id: 'q14_4',
      question: '定义一个函数 is_palindrome，判断一个字符串是否是回文（正读和反读相同），并测试输出。',
      starterCode: `def is_palindrome(s):
    # 在这里编写代码
    ___

print(is_palindrome("racecar"))
print(is_palindrome("hello"))`,
      expectedOutput: 'True\nFalse',
      explanation: '回文判断的核心是将字符串与其反转进行比较：return s == s[::-1]。s[::-1] 利用切片步长为 -1 来反转字符串。',
    },
  ],
}
