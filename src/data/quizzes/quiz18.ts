import type { QuizData } from '../types'

export const quiz18: QuizData = {
  dayId: 18,
  questions: [
    {
      type: 'choice',
      id: 'q18_1',
      question: '在 Python 类中，__init__ 方法的作用是什么？',
      choices: [
        { id: 'a', text: '销毁对象时自动调用' },
        { id: 'b', text: '创建对象时自动调用，用于初始化属性' },
        { id: 'c', text: '定义类的静态方法' },
        { id: 'd', text: '打印对象的字符串表示' },
      ],
      correctId: 'b',
      explanation: '__init__ 是构造方法（初始化方法），在创建对象实例时自动调用，用于初始化对象的属性。__del__ 才是析构方法。',
    },
    {
      type: 'choice',
      id: 'q18_2',
      question: '以下关于 self 参数的说法，正确的是？',
      choices: [
        { id: 'a', text: 'self 是 Python 的关键字，不能用其他名称替代' },
        { id: 'b', text: 'self 指向类本身' },
        { id: 'c', text: 'self 指向调用方法的实例对象' },
        { id: 'd', text: '调用方法时必须手动传入 self' },
      ],
      correctId: 'c',
      explanation: 'self 代表调用该方法的实例对象本身。虽然约定使用 self 这个名称，但它不是关键字，理论上可以用其他名称。调用时 Python 会自动传入实例。',
    },
    {
      type: 'trueFalse',
      id: 'q18_3',
      question: 'Python 中一个类只能有一个 __init__ 方法（不支持构造函数重载）。',
      correct: true,
      explanation: 'Python 不支持方法重载，一个类只能定义一个 __init__ 方法。如果需要多种初始化方式，通常使用默认参数或 @classmethod 来实现。',
    },
    {
      type: 'code',
      id: 'q18_4',
      question: '定义一个 Rectangle 类，包含 width 和 height 属性，以及一个 area() 方法返回面积。创建实例并输出面积。',
      starterCode: `class Rectangle:
    def __init__(self, width, height):
        ___

    def area(self):
        ___

rect = Rectangle(5, 3)
print(rect.area())`,
      expectedOutput: '15',
      explanation: '在 __init__ 中使用 self.width = width 和 self.height = height 保存属性，area() 方法返回 self.width * self.height。5 × 3 = 15。',
    },
  ],
}
