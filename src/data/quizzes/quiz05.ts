import type { QuizData } from '../types'

export const quiz05: QuizData = {
  dayId: 5,
  questions: [
    {
      type: 'choice',
      id: 'q5-1',
      question: '以下哪个是 Python 中正确的 if 语句写法？',
      choices: [
        { id: 'a', text: 'if (x > 0) { print("正数") }' },
        { id: 'b', text: 'if x > 0: print("正数")' },
        { id: 'c', text: 'if x > 0 then print("正数")' },
        { id: 'd', text: 'if x > 0; print("正数")' },
      ],
      correctId: 'b',
      explanation: 'Python 的 if 语句使用冒号 : 结尾，不需要花括号，也不使用 then 关键字。条件后跟冒号，语句体通过缩进表示。',
    },
    {
      type: 'choice',
      id: 'q5-2',
      question: '在 Python 的 if-elif-else 结构中，以下说法正确的是？',
      choices: [
        { id: 'a', text: 'elif 和 else 都是必须的' },
        { id: 'b', text: '可以有多个 elif，但 else 最多只能有一个' },
        { id: 'c', text: '一个 if 语句中只能有一个 elif' },
        { id: 'd', text: 'else 必须紧跟在 if 后面' },
      ],
      correctId: 'b',
      explanation: '在 if-elif-else 结构中，if 是必须的，elif 可以有零个或多个，else 最多只能有一个且必须在最后。',
    },
    {
      type: 'code',
      id: 'q5-3',
      question: '编写代码判断变量 n 是奇数还是偶数。如果 n 是偶数，打印 "偶数"，否则打印 "奇数"。',
      starterCode: 'n = 7\n# 判断奇偶并打印结果\n',
      expectedOutput: '奇数',
      explanation: '使用取余运算符 % 判断奇偶：如果 n % 2 == 0 则是偶数，否则是奇数。7 % 2 == 1，所以 7 是奇数。',
    },
  ],
}
