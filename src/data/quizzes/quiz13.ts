import type { QuizData } from '../types'

export const quiz13: QuizData = {
  dayId: 13,
  questions: [
    {
      type: 'choice',
      id: 'q13_1',
      question: '访问字典中不存在的键时，以下哪种方式不会引发 KeyError？',
      choices: [
        { id: 'a', text: 'dict[key]' },
        { id: 'b', text: 'dict.get(key)' },
        { id: 'c', text: 'dict.pop(key)' },
        { id: 'd', text: 'del dict[key]' },
      ],
      correctId: 'b',
      explanation: 'get() 方法在键不存在时会返回 None（或指定的默认值），而不会引发 KeyError。其他三种方式都会在键不存在时引发 KeyError。',
    },
    {
      type: 'choice',
      id: 'q13_2',
      question: '以下字典推导式的结果是什么？\n\n{x: x**2 for x in range(4)}',
      choices: [
        { id: 'a', text: '{0: 0, 1: 1, 2: 4, 3: 9}' },
        { id: 'b', text: '{1: 1, 2: 4, 3: 9, 4: 16}' },
        { id: 'c', text: '[0, 1, 4, 9]' },
        { id: 'd', text: '{0, 1, 4, 9}' },
      ],
      correctId: 'a',
      explanation: 'range(4) 生成 0, 1, 2, 3，字典推导式 {x: x**2 for x in range(4)} 以每个值为键、其平方为值，构建字典。',
    },
    {
      type: 'trueFalse',
      id: 'q13_3',
      question: 'Python 3.7+ 中，字典会保持元素的插入顺序。',
      correct: true,
      explanation: '从 Python 3.7 开始，字典的实现保证了键值对按照插入顺序排列。这在 3.6 中是实现细节，3.7 起成为语言规范。',
    },
    {
      type: 'code',
      id: 'q13_4',
      question: '使用字典推导式，将列表中的单词作为键、单词长度作为值，创建一个字典并输出。',
      starterCode: `words = ["hello", "world", "python"]
# 使用字典推导式
word_lengths = ___
print(word_lengths)`,
      expectedOutput: "{'hello': 5, 'world': 5, 'python': 6}",
      explanation: '使用字典推导式 {w: len(w) for w in words}，遍历列表中的每个单词，以单词为键、长度为值构建字典。',
    },
  ],
}
