import type { DayData } from '../types'

export const day10: DayData = {
  id: 10,
  title: '元组',
  description: '学习Python中的元组（tuple）数据类型，包括元组的定义、打包与解包、元组与列表的比较、不可变性以及交换变量值的技巧。',
  sections: [
    {
      title: '元组的定义与创建',
      content: `元组（tuple）是Python中另一种重要的序列类型，它和列表非常相似，也是一个有序的元素集合。元组用圆括号()表示，元素之间用逗号分隔。

创建元组有以下方式：
• 使用圆括号：(1, 2, 3)
• 省略圆括号：1, 2, 3（Python会自动识别为元组）
• 使用tuple()构造函数
• 单元素元组必须加逗号：(1,) 而不是 (1)

注意创建单元素元组时的逗号，这是一个常见的"坑"。(1)只是一个加了括号的整数，而(1,)才是一个包含一个元素的元组。这是因为圆括号在Python中也用于数学运算的分组。

元组支持与列表相同的索引、切片、遍历等读取操作，但不支持修改操作。`,
      code: `# 创建元组的多种方式
t1 = (1, 2, 3, 4, 5)
t2 = ("Python", "Java", "Go")
t3 = tuple([10, 20, 30])  # 从列表转换
t4 = tuple("Hello")       # 从字符串转换
t5 = tuple(range(5))      # 从range转换

print(f"t1 = {t1}")
print(f"t2 = {t2}")
print(f"t3 = {t3}")
print(f"t4 = {t4}")
print(f"t5 = {t5}")

# 单元素元组的正确写法
single = (42,)    # 正确：这是元组
not_tuple = (42)  # 错误：这只是整数42
print(f"\\n(42,) 的类型: {type(single)}")
print(f"(42) 的类型: {type(not_tuple)}")

# 省略括号也可以创建元组
t6 = 1, 2, 3
print(f"\\n1, 2, 3 的类型: {type(t6)}, 值: {t6}")

# 空元组
empty = ()
empty2 = tuple()
print(f"\\n空元组: {empty}, 长度: {len(empty)}")

# 元组也支持索引和切片
langs = ("Python", "Java", "C++", "Go", "Rust")
print(f"\\nlangs[0] = {langs[0]}")
print(f"langs[-1] = {langs[-1]}")
print(f"langs[1:3] = {langs[1:3]}")
print(f"len(langs) = {len(langs)}")`,
      codeRunnable: true,
    },
    {
      title: '元组的打包与解包',
      content: `打包（Packing）和解包（Unpacking）是元组最优雅的特性之一：

打包：将多个值组合成一个元组。当你用逗号分隔多个值时，Python会自动将它们打包成元组。

解包：将元组中的元素分别赋值给多个变量。解包要求左侧变量的数量与元组中元素的数量相同。

Python 3还引入了星号表达式（*）来处理不定数量的解包：在解包时，带星号的变量会接收所有"剩余"的元素，并以列表的形式存储。

解包不仅适用于元组，也适用于列表和其他可迭代对象。这个特性在实际编码中非常实用，可以让赋值操作更加简洁。`,
      code: `# 打包 - 多个值自动组成元组
info = "张三", 25, "北京"
print(f"打包: {info}, 类型: {type(info)}")

# 解包 - 元组元素分配给变量
name, age, city = info
print(f"解包: 姓名={name}, 年龄={age}, 城市={city}")

# 函数返回多个值（本质是返回元组）
def min_max(numbers):
    return min(numbers), max(numbers)

data = [34, 12, 78, 5, 56, 91, 23]
minimum, maximum = min_max(data)
print(f"\\n最小值: {minimum}, 最大值: {maximum}")

# 星号表达式 - 接收剩余元素
first, *middle, last = [1, 2, 3, 4, 5, 6, 7]
print(f"\\nfirst = {first}")
print(f"middle = {middle}")
print(f"last = {last}")

# 星号的不同位置
a, *b = (10, 20, 30, 40)
print(f"\\na={a}, b={b}")

*c, d = (10, 20, 30, 40)
print(f"c={c}, d={d}")

# 用下划线忽略不需要的值
_, score, _ = ("李四", 95, "A")
print(f"\\n只取成绩: {score}")

# 嵌套解包
(x, y), (a, b) = (1, 2), (3, 4)
print(f"嵌套解包: x={x}, y={y}, a={a}, b={b}")`,
      codeRunnable: true,
    },
    {
      title: '元组与列表的比较',
      content: `元组和列表在很多方面相似，但也有关键的区别：

相同点：
• 都是有序序列，支持索引和切片
• 都可以存放任意类型的元素
• 都支持遍历、成员运算（in）、拼接（+）和重复（*）
• 都可以嵌套

不同点：
• 可变性：列表可变（mutable），元组不可变（immutable）
• 语法：列表用[]，元组用()
• 性能：元组创建和访问速度更快，占用内存更少
• 用途：列表适合存放同类元素的可变集合；元组适合存放不同含义的固定数据（如坐标、记录）
• 可哈希性：元组可以作为字典的键和集合的元素，列表不可以

选择元组还是列表的经验法则：如果数据创建后不需要修改，优先用元组；如果需要频繁增删改元素，使用列表。`,
      code: `# 性能比较
import sys

list_data = [1, 2, 3, 4, 5]
tuple_data = (1, 2, 3, 4, 5)

print(f"列表占用内存: {sys.getsizeof(list_data)} 字节")
print(f"元组占用内存: {sys.getsizeof(tuple_data)} 字节")

# 两者支持的相同操作
print(f"\\n--- 共同操作 ---")
print(f"索引: list[0]={list_data[0]}, tuple[0]={tuple_data[0]}")
print(f"切片: list[1:3]={list_data[1:3]}, tuple[1:3]={tuple_data[1:3]}")
print(f"长度: len(list)={len(list_data)}, len(tuple)={len(tuple_data)}")
print(f"成员: 3 in list={3 in list_data}, 3 in tuple={3 in tuple_data}")
print(f"拼接: {list_data + [6]}")
print(f"拼接: {tuple_data + (6,)}")

# 元组可以做字典的键
locations = {
    (39.9, 116.4): "北京",
    (31.2, 121.5): "上海",
    (23.1, 113.3): "广州",
}
print(f"\\n坐标字典: {locations}")
print(f"(39.9, 116.4) 是: {locations[(39.9, 116.4)]}")

# 列表不能做字典的键
# locations_bad = {[39.9, 116.4]: "北京"}  # TypeError!

# 元组作为函数的多返回值
def analyze(numbers):
    return len(numbers), sum(numbers), sum(numbers)/len(numbers)

count, total, avg = analyze([85, 92, 78, 96, 63])
print(f"\\n数量={count}, 总和={total}, 平均={avg:.1f}")

# 相互转换
my_list = [1, 2, 3]
my_tuple = tuple(my_list)
back_to_list = list(my_tuple)
print(f"\\n列表→元组: {my_tuple}")
print(f"元组→列表: {back_to_list}")`,
      codeRunnable: true,
    },
    {
      title: '元组的不可变性',
      content: `元组最核心的特性就是不可变性（immutability）。一旦创建，元组中的元素就不能被修改、添加或删除。

尝试修改元组元素会抛出TypeError异常。这种不可变性带来了几个好处：
• 安全性：确保数据不会被意外修改，特别适合表示常量数据
• 性能：不可变对象可以被Python内部优化，创建和访问更快
• 可哈希：不可变意味着可以计算哈希值，因此元组可以用作字典键和集合元素

但需要注意一个微妙之处：元组的不可变性指的是元组中每个位置"指向谁"不能变，但如果元素本身是可变对象（如列表），那么该元素的内容是可以修改的。这就像"地址不可变，但地址对应的房子里的家具可以换"。`,
      code: `# 元组不可变的验证
t = (1, 2, 3, 4, 5)
print(f"元组: {t}")

# 以下操作都会报错（取消注释可以测试）
# t[0] = 10      # TypeError: 不支持元素赋值
# t.append(6)    # AttributeError: 没有append方法
# del t[0]       # TypeError: 不支持元素删除

# 用try-except捕获修改错误
try:
    t[0] = 100
except TypeError as e:
    print(f"修改元组报错: {e}")

# 微妙之处：元组包含可变对象
mixed = (1, 2, [3, 4, 5])
print(f"\\n包含列表的元组: {mixed}")

mixed[2].append(6)  # 可以修改元组中的列表！
mixed[2][0] = 30
print(f"修改内部列表后: {mixed}")

# 但不能替换整个元素
try:
    mixed[2] = [7, 8, 9]  # 不能把位置2换成另一个列表
except TypeError as e:
    print(f"替换元素报错: {e}")

# 如果需要"修改"元组，创建新元组
original = (1, 2, 3, 4, 5)
modified = original[:2] + (30,) + original[3:]
print(f"\\n原始: {original}")
print(f"新元组: {modified}")

# 元组的拼接和重复也是返回新元组
t1 = (1, 2)
t2 = (3, 4)
t3 = t1 + t2
print(f"\\nt1 + t2 = {t3}")
print(f"t1 * 3 = {t1 * 3}")
print(f"t1仍然是: {t1}")`,
      codeRunnable: true,
    },
    {
      title: '交换变量值与实用技巧',
      content: `利用元组的打包和解包特性，Python可以用一行代码优雅地交换两个变量的值，而不需要像其他语言那样使用临时变量。

a, b = b, a 这行代码的执行过程是：先将右侧的b和a打包成元组(b, a)，然后解包赋值给左侧的a和b。这是Python最具特色的语法糖之一。

除了交换变量，元组在实际开发中还有很多实用场景：
• 函数返回多个值
• 格式化字符串
• 遍历字典时获取键值对
• 作为不可变的"记录"类型存储结构化数据

掌握元组的各种用法，可以让你的Python代码更加简洁优雅。`,
      code: `# 交换变量值 - Python风格
a = 10
b = 20
print(f"交换前: a={a}, b={b}")

a, b = b, a
print(f"交换后: a={a}, b={b}")

# 三个变量也可以循环交换
x, y, z = 1, 2, 3
print(f"\\n交换前: x={x}, y={y}, z={z}")
x, y, z = y, z, x
print(f"交换后: x={x}, y={y}, z={z}")

# 实用技巧1：遍历字典
scores = {"语文": 85, "数学": 92, "英语": 78, "物理": 96}
print("\\n成绩单：")
for subject, score in scores.items():
    print(f"  {subject}: {score}分")

# 实用技巧2：同时遍历多个列表
names = ["张三", "李四", "王五"]
ages = [20, 22, 21]
cities = ["北京", "上海", "广州"]

print("\\n学生信息：")
for name, age, city in zip(names, ages, cities):
    print(f"  {name}, {age}岁, 来自{city}")

# 实用技巧3：enumerate返回元组
fruits = ["苹果", "香蕉", "橘子"]
for item in enumerate(fruits, 1):
    print(f"  {item}")  # 每个item都是元组

# 实用技巧4：用元组存储结构化记录
records = [
    ("张三", "男", 25, "工程师"),
    ("李四", "女", 23, "设计师"),
    ("王五", "男", 28, "产品经理"),
]
print("\\n员工信息：")
for name, gender, age, role in records:
    print(f"  {name}({gender}), {age}岁, 职位: {role}")

# 实用技巧5：用元组做多条件排序
students = [("张三", "A", 85), ("李四", "B", 92), ("王五", "A", 90), ("赵六", "B", 88)]
students.sort(key=lambda s: (s[1], -s[2]))
print("\\n按班级升序、成绩降序排列：")
for name, cls, score in students:
    print(f"  {cls}班 {name}: {score}分")`,
      codeRunnable: true,
    },
  ],
}
