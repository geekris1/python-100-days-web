import type { QuizData } from '../types'

export const quiz20: QuizData = {
  dayId: 20,
  questions: [
    {
      type: 'choice',
      id: 'q20_1',
      question: '以下哪个魔术方法用于定义对象的"官方"字符串表示（通常用于调试）？',
      choices: [
        { id: 'a', text: '__str__' },
        { id: 'b', text: '__repr__' },
        { id: 'c', text: '__format__' },
        { id: 'd', text: '__print__' },
      ],
      correctId: 'b',
      explanation: '__repr__ 用于定义对象的"官方"字符串表示，通常用于调试和开发。__str__ 用于定义用户友好的字符串表示。当 __str__ 未定义时，Python 会退而使用 __repr__。',
    },
    {
      type: 'choice',
      id: 'q20_2',
      question: '以下代码的输出结果是什么？\n\nclass Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    def __str__(self):\n        return f"({self.x}, {self.y})"\n\np = Point(3, 4)\nprint(p)',
      choices: [
        { id: 'a', text: '<Point object at 0x...>' },
        { id: 'b', text: 'Point(3, 4)' },
        { id: 'c', text: '(3, 4)' },
        { id: 'd', text: '{"x": 3, "y": 4}' },
      ],
      correctId: 'c',
      explanation: '定义了 __str__ 方法后，print() 函数会调用该方法获取字符串表示。这里返回 f"({self.x}, {self.y})"，即 "(3, 4)"。',
    },
    {
      type: 'trueFalse',
      id: 'q20_3',
      question: '__len__ 魔术方法可以让自定义对象支持 len() 函数调用。',
      correct: true,
      explanation: '通过实现 __len__ 魔术方法，自定义对象就可以使用 len() 函数。类似地，__getitem__ 支持下标访问，__iter__ 支持 for 循环迭代。',
    },
    {
      type: 'code',
      id: 'q20_4',
      question: '为 Student 类实现 __str__ 方法，使 print 输出格式化的学生信息。',
      starterCode: `class Student:
    def __init__(self, name, score):
        self.name = name
        self.score = score

    def __str__(self):
        ___

s = Student("小明", 95)
print(s)`,
      expectedOutput: '学生: 小明, 成绩: 95',
      explanation: '__str__ 方法应返回 f"学生: {self.name}, 成绩: {self.score}"。当使用 print() 打印对象时，Python 会自动调用 __str__ 方法。',
    },
    {
      type: 'code',
      id: 'q20_5',
      question: '为 Counter 类实现 __add__ 方法，使两个 Counter 对象可以用 + 运算符相加。',
      starterCode: `class Counter:
    def __init__(self, count):
        self.count = count

    def __add__(self, other):
        ___

    def __str__(self):
        return f"Counter({self.count})"

c1 = Counter(5)
c2 = Counter(3)
c3 = c1 + c2
print(c3)`,
      expectedOutput: 'Counter(8)',
      explanation: '__add__ 方法实现 + 运算符重载。应返回 Counter(self.count + other.count)，创建一个新的 Counter 对象，其 count 值为两个对象的 count 之和。',
    },
  ],
}
