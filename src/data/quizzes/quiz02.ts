import type { QuizData } from '../types'

export const quiz02: QuizData = {
  dayId: 2,
  questions: [
    {
      type: 'choice',
      id: 'q2-1',
      question: '在 Python 中，用于输出内容到控制台的函数是？',
      choices: [
        { id: 'a', text: 'echo()' },
        { id: 'b', text: 'console.log()' },
        { id: 'c', text: 'print()' },
        { id: 'd', text: 'printf()' },
      ],
      correctId: 'c',
      explanation: 'Python 使用 print() 函数将内容输出到控制台。echo 是 Shell/PHP 的命令，console.log() 是 JavaScript 的方法，printf() 是 C 语言的函数。',
    },
    {
      type: 'choice',
      id: 'q2-2',
      question: '以下哪个是正确的 Python 注释写法？',
      choices: [
        { id: 'a', text: '// 这是注释' },
        { id: 'b', text: '# 这是注释' },
        { id: 'c', text: '/* 这是注释 */' },
        { id: 'd', text: '<!-- 这是注释 -->' },
      ],
      correctId: 'b',
      explanation: 'Python 使用 # 号来添加单行注释。// 是 C/Java/JS 的注释，/* */ 是 C 风格多行注释，<!-- --> 是 HTML 注释。',
    },
    {
      type: 'code',
      id: 'q2-3',
      question: '编写代码，使用 print() 函数输出 "Hello, World!"（注意标点符号为英文）。',
      starterCode: '# 在下面编写你的代码\n',
      expectedOutput: 'Hello, World!',
      explanation: '使用 print("Hello, World!") 即可输出指定内容。print() 函数会将括号内的字符串打印到控制台。',
    },
  ],
}
