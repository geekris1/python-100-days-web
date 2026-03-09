import type { DayData } from '../types'

export const day16: DayData = {
  id: 16,
  title: '函数使用进阶',
  description: '掌握Python高阶函数map/filter/reduce、Lambda匿名函数、偏函数partial以及sorted的key参数等进阶用法，提升函数式编程能力。',
  sections: [
    {
      title: '高阶函数概述',
      content: `在Python中，函数是一等公民（first-class citizen），这意味着函数可以像普通变量一样被传递、赋值和作为返回值。高阶函数（Higher-order Function）是指满足以下任一条件的函数：

1. 接受一个或多个函数作为参数
2. 返回一个函数作为结果

高阶函数是函数式编程的核心概念，Python内置了多个常用的高阶函数，如 map()、filter()、sorted() 等。理解高阶函数能让你写出更加简洁、优雅的代码。`,
      code: `# 函数可以赋值给变量
def greet(name):
    return f"你好, {name}!"

say_hello = greet
print(say_hello("Python"))  # 你好, Python!

# 函数可以作为参数传递
def apply_func(func, value):
    return func(value)

def double(x):
    return x * 2

def square(x):
    return x ** 2

print(apply_func(double, 5))   # 10
print(apply_func(square, 5))   # 25

# 函数可以作为返回值
def make_multiplier(n):
    def multiplier(x):
        return x * n
    return multiplier

times3 = make_multiplier(3)
times5 = make_multiplier(5)
print(times3(7))   # 21
print(times5(7))   # 35`,
      codeRunnable: true,
    },
    {
      title: 'map() 和 filter() 函数',
      content: `map() 函数将一个函数应用到可迭代对象的每个元素上，返回一个迭代器。其语法为 map(function, iterable, ...)。

filter() 函数用于过滤序列，它接受一个函数和一个可迭代对象，将函数依次作用于每个元素，根据返回值是 True 还是 False 决定保留还是丢弃该元素。

这两个函数都返回迭代器（惰性求值），需要用 list() 等转换为列表查看全部结果。在处理大数据量时，惰性求值的特性可以节省内存。`,
      code: `# map() 基本用法
numbers = [1, 2, 3, 4, 5]

# 对每个元素求平方
squared = list(map(lambda x: x ** 2, numbers))
print(f"平方: {squared}")  # [1, 4, 9, 16, 25]

# 将字符串列表转为整数
str_nums = ['10', '20', '30', '40']
int_nums = list(map(int, str_nums))
print(f"转换后: {int_nums}")  # [10, 20, 30, 40]

# map() 处理多个可迭代对象
a = [1, 2, 3]
b = [10, 20, 30]
sums = list(map(lambda x, y: x + y, a, b))
print(f"对应相加: {sums}")  # [11, 22, 33]

print("---")

# filter() 基本用法
numbers = range(1, 21)

# 过滤出偶数
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(f"偶数: {evens}")  # [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

# 过滤出正数
mixed = [-3, -1, 0, 2, 5, -4, 8]
positives = list(filter(lambda x: x > 0, mixed))
print(f"正数: {positives}")  # [2, 5, 8]

# 去除空字符串
words = ['hello', '', 'world', '', 'python', '']
non_empty = list(filter(None, words))
print(f"非空: {non_empty}")  # ['hello', 'world', 'python']`,
      codeRunnable: true,
    },
    {
      title: 'reduce() 函数与Lambda表达式',
      content: `reduce() 函数对序列中的元素进行累积操作。它将一个二元函数依次作用于序列的元素，将结果与下一个元素继续运算，最终得到一个单一的值。在Python 3中，reduce() 被移到了 functools 模块中。

Lambda表达式（匿名函数）是一种创建小型函数的简洁方式，语法为：lambda 参数: 表达式。Lambda函数只能包含一个表达式，不能包含语句。它特别适合与 map()、filter()、sorted() 等高阶函数配合使用。`,
      code: `from functools import reduce

# reduce() 累加
numbers = [1, 2, 3, 4, 5]
total = reduce(lambda x, y: x + y, numbers)
print(f"累加: {total}")  # 15

# reduce() 求阶乘
factorial = reduce(lambda x, y: x * y, range(1, 6))
print(f"5! = {factorial}")  # 120

# reduce() 找最大值
values = [34, 12, 89, 56, 23, 67]
max_val = reduce(lambda x, y: x if x > y else y, values)
print(f"最大值: {max_val}")  # 89

# reduce() 带初始值
nums = [1, 2, 3, 4]
result = reduce(lambda x, y: x + y, nums, 100)
print(f"带初始值100的累加: {result}")  # 110

print("---")

# Lambda表达式的各种用法
square = lambda x: x ** 2
print(f"平方: {square(8)}")  # 64

add = lambda x, y: x + y
print(f"求和: {add(3, 5)}")  # 8

# Lambda配合条件表达式
classify = lambda x: "正数" if x > 0 else ("零" if x == 0 else "负数")
print(classify(5))    # 正数
print(classify(0))    # 零
print(classify(-3))   # 负数

# 综合运用：用map+reduce计算平方和
nums = [1, 2, 3, 4, 5]
sum_of_squares = reduce(lambda a, b: a + b, map(lambda x: x ** 2, nums))
print(f"平方和: {sum_of_squares}")  # 55`,
      codeRunnable: true,
    },
    {
      title: 'sorted() 的key参数',
      content: `sorted() 是Python的内置排序函数，它返回一个新的已排序列表。sorted() 最强大的特性之一是 key 参数，它接受一个函数，该函数会被应用到每个元素上，排序时以函数的返回值作为排序依据。

key 参数常见的用法包括：按字符串长度排序、按某个属性排序、按字典的某个键排序、忽略大小写排序等。配合 lambda 和 operator 模块中的函数，可以实现各种灵活的排序逻辑。`,
      code: `# 按字符串长度排序
words = ['python', 'is', 'a', 'powerful', 'language']
by_length = sorted(words, key=len)
print(f"按长度: {by_length}")

# 按绝对值排序
numbers = [-5, 3, -1, 4, -2, 8]
by_abs = sorted(numbers, key=abs)
print(f"按绝对值: {by_abs}")

# 忽略大小写排序
names = ['Bob', 'alice', 'Charlie', 'david']
by_lower = sorted(names, key=str.lower)
print(f"忽略大小写: {by_lower}")

# 按字典中某个键排序
students = [
    {'name': '张三', 'score': 88},
    {'name': '李四', 'score': 95},
    {'name': '王五', 'score': 72},
    {'name': '赵六', 'score': 91},
]
by_score = sorted(students, key=lambda s: s['score'], reverse=True)
for s in by_score:
    print(f"  {s['name']}: {s['score']}")

print("---")

# 多条件排序
records = [
    ('张三', 'A', 88),
    ('李四', 'B', 95),
    ('王五', 'A', 92),
    ('赵六', 'B', 88),
]
# 先按班级升序，再按成绩降序
by_multi = sorted(records, key=lambda r: (r[1], -r[2]))
print("多条件排序（班级升序，成绩降序）:")
for r in by_multi:
    print(f"  {r[0]} - 班级{r[1]} - 成绩{r[2]}")`,
      codeRunnable: true,
    },
    {
      title: '偏函数 partial',
      content: `偏函数（Partial Function）是 functools 模块中的一个工具，它可以固定一个函数的某些参数，生成一个新的函数。当你需要频繁调用一个函数且某些参数总是相同的值时，偏函数可以减少重复代码。

functools.partial(func, *args, **kwargs) 会创建一个新的可调用对象，它在调用时会将固定的参数和新传入的参数合并后传给原函数。偏函数在回调函数、事件处理、配置化函数调用等场景中非常有用。`,
      code: `from functools import partial

# 基本用法：固定base参数的int()
int2 = partial(int, base=2)   # 二进制转换
int8 = partial(int, base=8)   # 八进制转换
int16 = partial(int, base=16) # 十六进制转换

print(f"二进制 '1010' = {int2('1010')}")   # 10
print(f"八进制 '17' = {int8('17')}")        # 15
print(f"十六进制 'ff' = {int16('ff')}")     # 255

print("---")

# 偏函数固定print的参数
debug_print = partial(print, "[DEBUG]")
info_print = partial(print, "[INFO]")
error_print = partial(print, "[ERROR]")

debug_print("正在加载数据...")
info_print("数据加载完成")
error_print("连接超时!")

print("---")

# 偏函数在数学计算中的应用
def power(base, exponent):
    return base ** exponent

square = partial(power, exponent=2)
cube = partial(power, exponent=3)

print(f"5的平方: {square(5)}")  # 25
print(f"3的立方: {cube(3)}")    # 27

# 配合map使用偏函数
numbers = [1, 2, 3, 4, 5]
squares = list(map(square, numbers))
cubes = list(map(cube, numbers))
print(f"平方列表: {squares}")  # [1, 4, 9, 16, 25]
print(f"立方列表: {cubes}")    # [1, 8, 27, 64, 125]`,
      codeRunnable: true,
    },
  ],
}
