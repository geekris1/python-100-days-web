import type { QuizData } from '../types'

export const quiz11: QuizData = {
  dayId: 11,
  questions: [
    {
      type: 'choice',
      id: 'q11_1',
      question: '以下哪个方法可以将字符串 "hello world" 转换为 "Hello World"？',
      choices: [
        { id: 'a', text: 'str.upper()' },
        { id: 'b', text: 'str.title()' },
        { id: 'c', text: 'str.capitalize()' },
        { id: 'd', text: 'str.swapcase()' },
      ],
      correctId: 'b',
      explanation: 'title() 方法会将字符串中每个单词的首字母大写，其余字母小写。capitalize() 只会将整个字符串的第一个字母大写。',
    },
    {
      type: 'choice',
      id: 'q11_2',
      question: '字符串切片 s[1:7:2] 中，三个参数分别表示什么？',
      choices: [
        { id: 'a', text: '起始索引、结束索引、重复次数' },
        { id: 'b', text: '起始索引、步长、结束索引' },
        { id: 'c', text: '起始索引、结束索引、步长' },
        { id: 'd', text: '偏移量、长度、步长' },
      ],
      correctId: 'c',
      explanation: '字符串切片语法为 s[start:stop:step]，其中 start 是起始索引（包含），stop 是结束索引（不包含），step 是步长。',
    },
    {
      type: 'trueFalse',
      id: 'q11_3',
      question: 'Python 中字符串是不可变类型，一旦创建就不能修改其中的字符。',
      correct: true,
      explanation: 'Python 中的字符串是不可变（immutable）类型。对字符串的任何"修改"操作实际上都会创建一个新的字符串对象。',
    },
    {
      type: 'code',
      id: 'q11_4',
      question: '使用字符串的 split() 和 join() 方法，将字符串 "Python-is-awesome" 中的连字符替换为空格，并输出结果。',
      starterCode: `s = "Python-is-awesome"
# 先用 split 按 '-' 分割，再用 join 以空格连接
result = ___
print(result)`,
      expectedOutput: 'Python is awesome',
      explanation: '先使用 split(\'-\') 将字符串按连字符分割成列表 ["Python", "is", "awesome"]，再使用 \' \'.join() 将列表用空格连接成新字符串。',
    },
  ],
}
