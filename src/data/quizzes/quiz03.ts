import type { QuizData } from '../types'

export const quiz03: QuizData = {
  dayId: 3,
  questions: [
    {
      type: 'choice',
      id: 'q3-1',
      question: '以下哪个是合法的 Python 变量名？',
      choices: [
        { id: 'a', text: '2name' },
        { id: 'b', text: 'my-name' },
        { id: 'c', text: '_count' },
        { id: 'd', text: 'class' },
      ],
      correctId: 'c',
      explanation: 'Python 变量名可以以字母或下划线开头，不能以数字开头（排除 2name），不能包含连字符（排除 my-name），不能使用关键字（排除 class）。_count 是合法的变量名。',
    },
    {
      type: 'choice',
      id: 'q3-2',
      question: 'type(3.14) 的结果是什么？',
      choices: [
        { id: 'a', text: "<class 'int'>" },
        { id: 'b', text: "<class 'float'>" },
        { id: 'c', text: "<class 'str'>" },
        { id: 'd', text: "<class 'double'>" },
      ],
      correctId: 'b',
      explanation: '3.14 是一个浮点数，在 Python 中浮点数的类型是 float。Python 没有 double 类型，所有浮点数统一使用 float。',
    },
    {
      type: 'trueFalse',
      id: 'q3-3',
      question: '在 Python 中，变量在使用前必须先声明其类型。',
      correct: false,
      explanation: 'Python 是动态类型语言，变量不需要提前声明类型。直接赋值即可创建变量，Python 会自动根据赋的值推断变量类型。例如 x = 10 会自动创建一个 int 类型的变量。',
    },
    {
      type: 'code',
      id: 'q3-4',
      question: '创建一个整数变量 a 值为 10，一个字符串变量 b 值为 "hello"，然后分别打印它们的类型。',
      starterCode: '# 创建变量并打印类型\na = 10\nb = "hello"\n',
      expectedOutput: "<class 'int'>\n<class 'str'>",
      explanation: '使用 type() 函数可以查看变量的类型。print(type(a)) 输出 <class \'int\'>，print(type(b)) 输出 <class \'str\'>。',
    },
  ],
}
