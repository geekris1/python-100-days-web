import type { DayData } from '../types'

export const day03: DayData = {
  id: 3,
  title: '变量和数据类型',
  description: '学习Python中的变量定义规则和常用数据类型，掌握类型检查与类型转换。',
  sections: [
    {
      title: '变量的概念与命名规则',
      content: `变量是程序中用来存储数据的容器。你可以把变量想象成一个贴了标签的盒子，标签就是变量名，盒子里面装的就是数据。

在Python中，创建变量非常简单，不需要声明类型，直接赋值即可。Python会根据赋的值自动推断变量的类型，这叫做"动态类型"。

变量命名规则：
1. 只能包含字母、数字和下划线（_）
2. 不能以数字开头
3. 不能使用Python关键字（如if、for、class等）
4. 区分大小写（name和Name是两个不同的变量）

命名约定（PEP 8规范）：
- 变量名和函数名使用小写字母，单词之间用下划线分隔（snake_case）
- 常量使用全大写字母（如 MAX_SIZE = 100）
- 类名使用大驼峰命名法（如 StudentInfo）
- 避免使用单字符命名（循环变量i、j除外）`,
      code: `# 变量的创建和使用
name = "小明"
age = 18
height = 1.75
is_student = True

print(f"姓名: {name}")
print(f"年龄: {age}")
print(f"身高: {height}m")
print(f"是否学生: {is_student}")

# 变量可以随时重新赋值，甚至可以改变类型
x = 10
print(f"x = {x}, 类型: {type(x)}")

x = "hello"
print(f"x = {x}, 类型: {type(x)}")

# 多变量同时赋值
a, b, c = 1, 2, 3
print(f"a={a}, b={b}, c={c}")

# 多个变量赋相同值
x = y = z = 0
print(f"x={x}, y={y}, z={z}")

# 查看Python关键字列表
import keyword
print(f"\\nPython关键字共{len(keyword.kwlist)}个:")
print(keyword.kwlist)`,
      codeRunnable: true,
    },
    {
      title: '数字类型：int和float',
      content: `Python中有两种主要的数字类型：

1. int（整数）：没有小数部分的数字，如 1、-5、1000。Python的整数没有大小限制，可以表示任意大的数字。

2. float（浮点数）：有小数部分的数字，如 3.14、-0.5、2.0。浮点数在计算机中是近似表示的，可能存在精度问题。

Python支持各种数学运算，还可以使用math模块进行更复杂的数学计算。

需要注意的是，整数和浮点数混合运算时，结果会自动转为浮点数。除法运算(/)的结果始终是浮点数，即使能整除。`,
      code: `# 整数 int
a = 42
b = -10
c = 0

# Python可以处理非常大的整数
big_number = 99999999999999999999999999999
print(f"大整数: {big_number}")
print(f"大整数类型: {type(big_number)}")

# 整数的不同进制表示
binary = 0b1010      # 二进制
octal = 0o17         # 八进制
hexadecimal = 0xFF   # 十六进制
print(f"二进制0b1010 = {binary}")
print(f"八进制0o17 = {octal}")
print(f"十六进制0xFF = {hexadecimal}")

# 浮点数 float
pi = 3.14159
temperature = -15.5
scientific = 2.5e6   # 科学计数法，等于2500000.0
print(f"\\n圆周率: {pi}")
print(f"科学计数法: {scientific}")

# 浮点数精度问题
print(f"\\n0.1 + 0.2 = {0.1 + 0.2}")  # 不是精确的0.3！
print(f"0.1 + 0.2 == 0.3 ? {0.1 + 0.2 == 0.3}")  # False

# 使用round()解决精度问题
print(f"round(0.1 + 0.2, 1) = {round(0.1 + 0.2, 1)}")

# 数字可以用下划线增强可读性
population = 1_400_000_000
print(f"\\n中国人口: {population:,}")`,
      codeRunnable: true,
    },
    {
      title: '字符串类型：str',
      content: `字符串（str）是Python中最常用的数据类型之一，用于表示文本信息。

字符串的创建方式：
- 单引号：'hello'
- 双引号："hello"
- 三引号：用于多行字符串

字符串是不可变的序列，一旦创建就不能修改其中的某个字符，但可以通过切片、拼接等操作创建新的字符串。

Python的字符串支持丰富的内置方法，可以进行大小写转换、查找、替换、分割等操作。字符串也支持索引和切片操作，可以方便地获取子串。`,
      code: `# 字符串的创建
s1 = '单引号字符串'
s2 = "双引号字符串"
s3 = """这是
一个多行
字符串"""
print(s1)
print(s2)
print(s3)

# 转义字符
print("\\n--- 转义字符 ---")
print("换行符:\\n第二行")
print("制表符:\\t缩进")
print("反斜杠: \\\\")
print("引号: \\"你好\\"")

# 原始字符串（忽略转义）
print(r"原始字符串: \\n不会换行")

# 字符串拼接和重复
greeting = "你好" + "，" + "世界"
print(f"\\n拼接: {greeting}")
print(f"重复: {'哈' * 5}")

# 字符串长度
message = "Python is awesome!"
print(f"\\n'{message}' 的长度: {len(message)}")

# 字符串索引和切片
text = "Hello Python"
print(f"\\n字符串: '{text}'")
print(f"第一个字符: {text[0]}")
print(f"最后一个字符: {text[-1]}")
print(f"切片[0:5]: {text[0:5]}")
print(f"切片[6:]: {text[6:]}")
print(f"反转: {text[::-1]}")

# 常用字符串方法
name = "  Hello, Python World!  "
print(f"\\n原始: '{name}'")
print(f"去空格: '{name.strip()}'")
print(f"大写: '{name.strip().upper()}'")
print(f"小写: '{name.strip().lower()}'")
print(f"替换: '{name.strip().replace('Python', 'Java')}'")
print(f"分割: {name.strip().split(', ')}")
print(f"是否以Hello开头: {name.strip().startswith('Hello')}")`,
      codeRunnable: true,
    },
    {
      title: '布尔类型和type()函数',
      content: `布尔类型（bool）只有两个值：True 和 False。布尔值通常用于条件判断和逻辑运算。

在Python中，以下值在布尔上下文中被视为False：
- False
- None
- 数字零：0、0.0、0j
- 空序列：''、()、[]
- 空字典：{}
- 空集合：set()

其他所有值都被视为True。

type()函数用于查看任何对象的数据类型。isinstance()函数用于判断一个对象是否是指定类型的实例，在实际开发中更推荐使用isinstance()来做类型检查。`,
      code: `# 布尔类型
is_valid = True
is_empty = False
print(f"is_valid: {is_valid}, 类型: {type(is_valid)}")

# 比较运算产生布尔值
print(f"\\n10 > 5: {10 > 5}")
print(f"10 == 5: {10 == 5}")
print(f"'abc' == 'abc': {'abc' == 'abc'}")

# 布尔值的真假判断
print("\\n--- 假值（Falsy）---")
print(f"bool(0): {bool(0)}")
print(f"bool(''): {bool('')}")
print(f"bool([]): {bool([])}")
print(f"bool(None): {bool(None)}")

print("\\n--- 真值（Truthy）---")
print(f"bool(1): {bool(1)}")
print(f"bool('hello'): {bool('hello')}")
print(f"bool([1,2]): {bool([1,2])}")

# type()函数 - 查看数据类型
print("\\n--- type()函数 ---")
print(f"type(42): {type(42)}")
print(f"type(3.14): {type(3.14)}")
print(f"type('hello'): {type('hello')}")
print(f"type(True): {type(True)}")
print(f"type(None): {type(None)}")
print(f"type([1,2,3]): {type([1,2,3])}")

# isinstance() - 类型检查（推荐）
x = 42
print(f"\\nisinstance(42, int): {isinstance(x, int)}")
print(f"isinstance(42, str): {isinstance(x, str)}")
print(f"isinstance(42, (int, float)): {isinstance(x, (int, float))}")`,
      codeRunnable: true,
    },
    {
      title: '类型转换',
      content: `Python提供了内置函数来在不同数据类型之间进行转换。

常用的类型转换函数：
- int()：转换为整数。可以将浮点数（截断小数部分）、数字字符串转为整数。
- float()：转换为浮点数。可以将整数、数字字符串转为浮点数。
- str()：转换为字符串。几乎任何类型都可以转换为字符串。
- bool()：转换为布尔值。

类型转换时需要注意：
- 不是所有的转换都是合法的，比如 int("hello") 会报错
- int()转换浮点数时直接截断小数，不会四舍五入
- 字符串转数字时，字符串必须是合法的数字表示`,
      code: `# int() 转换为整数
print("--- int() 转换 ---")
print(f"int(3.14) = {int(3.14)}")       # 截断小数部分
print(f"int(3.99) = {int(3.99)}")       # 注意：不是四舍五入！
print(f"int('100') = {int('100')}")     # 字符串转整数
print(f"int('0xff', 16) = {int('0xff', 16)}")  # 十六进制字符串转整数
print(f"int(True) = {int(True)}")       # True -> 1
print(f"int(False) = {int(False)}")     # False -> 0

# float() 转换为浮点数
print("\\n--- float() 转换 ---")
print(f"float(10) = {float(10)}")
print(f"float('3.14') = {float('3.14')}")
print(f"float('1e5') = {float('1e5')}")

# str() 转换为字符串
print("\\n--- str() 转换 ---")
print(f"str(42) = '{str(42)}'")
print(f"str(3.14) = '{str(3.14)}'")
print(f"str(True) = '{str(True)}'")
print(f"str([1,2,3]) = '{str([1,2,3])}'")

# 实际应用：用户输入处理
# input()返回的总是字符串，需要转换类型
birth_year = "2000"  # 模拟用户输入
current_year = 2026
age = current_year - int(birth_year)
print(f"\\n出生年份: {birth_year}")
print(f"今年{current_year}年，你大约{age}岁")

# 安全的类型转换
def safe_int(value, default=0):
    """安全地将值转换为整数，失败时返回默认值"""
    try:
        return int(value)
    except (ValueError, TypeError):
        return default

print(f"\\nsafe_int('123') = {safe_int('123')}")
print(f"safe_int('abc') = {safe_int('abc')}")
print(f"safe_int(None) = {safe_int(None)}")`,
      codeRunnable: true,
    },
  ],
}
