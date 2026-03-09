import type { QuizData } from '../types'

export const quiz17: QuizData = {
  dayId: 17,
  questions: [
    {
      type: 'choice',
      id: 'q17_1',
      question: '关于 Python 装饰器，以下说法正确的是？',
      choices: [
        { id: 'a', text: '装饰器只能装饰类方法，不能装饰普通函数' },
        { id: 'b', text: '装饰器本质上是一个接收函数并返回函数的高阶函数' },
        { id: 'c', text: '被装饰的函数无法再被直接调用' },
        { id: 'd', text: '一个函数只能使用一个装饰器' },
      ],
      correctId: 'b',
      explanation: '装饰器本质上是一个高阶函数，它接收一个函数作为参数，返回一个新的函数。装饰器可以用于普通函数和类方法，也可以叠加使用多个装饰器。',
    },
    {
      type: 'choice',
      id: 'q17_2',
      question: '以下代码中，@timer 等价于哪种写法？\n\n@timer\ndef my_func():\n    pass',
      choices: [
        { id: 'a', text: 'my_func = timer(my_func)' },
        { id: 'b', text: 'timer = my_func(timer)' },
        { id: 'c', text: 'my_func.timer()' },
        { id: 'd', text: 'timer.my_func()' },
      ],
      correctId: 'a',
      explanation: '@timer 语法糖等价于 my_func = timer(my_func)，即将 my_func 传入 timer 函数，并将返回值重新赋给 my_func。',
    },
    {
      type: 'trueFalse',
      id: 'q17_3',
      question: 'Python 中的闭包（closure）指的是内部函数引用了外部函数作用域中的变量。',
      correct: true,
      explanation: '闭包是指内部函数记住并可以访问其外部函数作用域中的变量，即使外部函数已经执行完毕。这是装饰器的核心原理之一。',
    },
    {
      type: 'code',
      id: 'q17_4',
      question: '编写一个简单的装饰器 shout，使被装饰的函数返回值变为大写字符串，并测试输出。',
      starterCode: `def shout(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        # 将结果转为大写并返回
        ___
    return wrapper

@shout
def greet(name):
    return f"hello, {name}"

print(greet("python"))`,
      expectedOutput: 'HELLO, PYTHON',
      explanation: '装饰器 shout 包装了原函数，在 wrapper 中调用原函数获取结果后，使用 result.upper() 将返回值转为大写。',
    },
  ],
}
