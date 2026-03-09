import type { QuizData } from '../types'

export const quiz19: QuizData = {
  dayId: 19,
  questions: [
    {
      type: 'choice',
      id: 'q19_1',
      question: '在 Python 继承中，子类调用父类方法的正确方式是？',
      choices: [
        { id: 'a', text: 'parent.method()' },
        { id: 'b', text: 'super().method()' },
        { id: 'c', text: 'self.parent.method()' },
        { id: 'd', text: 'base.method()' },
      ],
      correctId: 'b',
      explanation: '在 Python 中，使用 super() 函数来调用父类的方法。例如在子类的 __init__ 中，使用 super().__init__() 来调用父类的构造方法。',
    },
    {
      type: 'choice',
      id: 'q19_2',
      question: '以下关于 Python 多态的说法，正确的是？',
      choices: [
        { id: 'a', text: 'Python 不支持多态' },
        { id: 'b', text: 'Python 的多态依赖于鸭子类型（duck typing）' },
        { id: 'c', text: '多态要求所有类必须继承同一个基类' },
        { id: 'd', text: '多态只适用于内置类型' },
      ],
      correctId: 'b',
      explanation: 'Python 采用鸭子类型实现多态："如果它走起来像鸭子、叫起来像鸭子，那它就是鸭子。" 只要对象有所需的方法，就可以使用，不需要强制继承关系。',
    },
    {
      type: 'trueFalse',
      id: 'q19_3',
      question: 'Python 支持多重继承，一个类可以同时继承多个父类。',
      correct: true,
      explanation: 'Python 支持多重继承，语法为 class Child(Parent1, Parent2)。Python 使用 MRO（Method Resolution Order）来确定方法的查找顺序。',
    },
    {
      type: 'code',
      id: 'q19_4',
      question: '定义 Animal 基类和 Dog 子类，Dog 继承 Animal 并重写 speak() 方法。创建实例并输出。',
      starterCode: `class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "..."

class Dog(Animal):
    def speak(self):
        ___

dog = Dog("旺财")
print(f"{dog.name}: {dog.speak()}")`,
      expectedOutput: '旺财: 汪汪汪!',
      explanation: 'Dog 类继承了 Animal 的 __init__ 方法（所以有 name 属性），并重写了 speak() 方法返回 "汪汪汪!"。这就是多态——子类可以有自己的方法实现。',
    },
  ],
}
