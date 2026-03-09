import type { QuizData } from '../types'

export const quiz01: QuizData = {
  dayId: 1,
  questions: [
    {
      type: 'choice',
      id: 'q1-1',
      question: 'Python 是由谁创建的？',
      choices: [
        { id: 'a', text: 'James Gosling' },
        { id: 'b', text: 'Guido van Rossum' },
        { id: 'c', text: 'Bjarne Stroustrup' },
        { id: 'd', text: 'Dennis Ritchie' },
      ],
      correctId: 'b',
      explanation: 'Python 由荷兰程序员 Guido van Rossum 于 1991 年创建。James Gosling 创建了 Java，Bjarne Stroustrup 创建了 C++，Dennis Ritchie 创建了 C 语言。',
    },
    {
      type: 'choice',
      id: 'q1-2',
      question: '以下哪个不是 Python 的特点？',
      choices: [
        { id: 'a', text: '语法简洁优雅' },
        { id: 'b', text: '需要编译后才能运行' },
        { id: 'c', text: '开源免费' },
        { id: 'd', text: '跨平台' },
      ],
      correctId: 'b',
      explanation: 'Python 是一种解释型语言，不需要像 C/C++ 那样先编译再运行。Python 代码由解释器逐行解释执行。',
    },
    {
      type: 'choice',
      id: 'q1-3',
      question: 'Python 不能用于以下哪个领域？',
      choices: [
        { id: 'a', text: 'Web 开发' },
        { id: 'b', text: '数据分析' },
        { id: 'c', text: '操作系统内核开发' },
        { id: 'd', text: '人工智能' },
      ],
      correctId: 'c',
      explanation: 'Python 作为解释型语言，运行效率不适合开发操作系统内核。操作系统内核通常使用 C 语言开发。Python 广泛用于 Web 开发、数据分析和人工智能等领域。',
    },
    {
      type: 'choice',
      id: 'q1-4',
      question: '目前最广泛使用的 Python 版本系列是？',
      choices: [
        { id: 'a', text: 'Python 1.x' },
        { id: 'b', text: 'Python 2.x' },
        { id: 'c', text: 'Python 3.x' },
        { id: 'd', text: 'Python 4.x' },
      ],
      correctId: 'c',
      explanation: 'Python 3.x 是目前主流版本。Python 2 已于 2020 年 1 月 1 日停止维护，Python 4.x 尚不存在。',
    },
  ],
}
