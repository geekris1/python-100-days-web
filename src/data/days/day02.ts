import type { DayData } from '../types'

export const day02: DayData = {
  id: 2,
  title: '第一个Python程序',
  description: '学习选择合适的开发工具，编写并运行第一个Python程序，掌握注释和print函数的用法。',
  sections: [
    {
      title: 'IDE选择与开发环境',
      content: `工欲善其事，必先利其器。选择一个好的IDE（集成开发环境）可以大幅提升编程效率。

常用的Python开发工具：

1. VS Code（推荐）：微软出品的免费编辑器，安装Python扩展后功能强大，轻量且高度可定制。
2. PyCharm：JetBrains出品的专业Python IDE，功能最为完善，社区版免费。适合大型项目开发。
3. Jupyter Notebook：交互式编程环境，特别适合数据分析和学习，可以逐行执行代码并查看结果。
4. IDLE：Python自带的简易IDE，适合简单的代码练习。
5. Sublime Text：轻量级编辑器，启动速度快。

对于初学者，推荐使用VS Code + Python扩展，兼顾了易用性和功能性。

除了IDE，你还可以直接在终端中使用Python交互式环境（REPL）来快速测试代码片段。`,
      code: `# 在Python交互式环境（REPL）中
# 可以直接输入表达式查看结果
2 + 3
# 输出: 5

# 也可以把Python当计算器用
print(100 / 7)    # 除法
print(100 // 7)   # 整数除法
print(100 % 7)    # 取余
print(2 ** 10)    # 幂运算`,
      codeRunnable: true,
    },
    {
      title: 'Hello World —— 你的第一个程序',
      content: `按照编程界的传统，学习任何一门新语言的第一步都是编写一个"Hello World"程序。

在Python中，这再简单不过了 —— 只需要一行代码。

对比其他语言：
- C语言需要 #include、main函数、printf等大量模板代码
- Java需要定义class、public static void main等
- Python只需要一行 print()

这就是Python"简洁"哲学的最好体现。

创建一个文件，命名为 hello.py（Python文件以.py为扩展名），输入下面的代码，然后在终端运行 python hello.py 即可看到结果。`,
      code: `# 这是你的第一个Python程序！
print("Hello, World!")
print("你好，世界！")
print("欢迎来到Python的世界！")

# print可以输出各种内容
print(42)          # 输出数字
print(3.14)        # 输出小数
print(True)        # 输出布尔值

# 使用多个print输出多行
print("=" * 30)
print("  Python学习之旅正式开始  ")
print("=" * 30)`,
      codeRunnable: true,
    },
    {
      title: '注释的使用',
      content: `注释是程序中不会被执行的说明文字，用来解释代码的功能和意图。良好的注释习惯是专业程序员的标志。

Python中有两种注释方式：

1. 单行注释：以 # 号开头，# 后面的内容都是注释
2. 多行注释：使用三个引号（三个单引号或三个双引号）包裹

注释的最佳实践：
- 注释应该解释"为什么"，而不是"做了什么"
- 保持注释与代码同步更新
- 避免显而易见的注释，如 x = 1  # 将1赋值给x
- 复杂的算法和业务逻辑应该添加详细注释`,
      code: `# 这是单行注释
# 可以用来解释下面一行代码的用途

name = "Python"  # 这是行尾注释

# 多行注释方式一：使用三个双引号
"""
这是一段多行注释
可以写很多行
通常用于函数或模块的文档说明
"""

# 多行注释方式二：使用三个单引号
'''
这也是多行注释
效果和双引号完全一样
'''

# 实际开发中的注释示例
# 计算商品折扣价格（满300减50）
price = 350
if price >= 300:
    # 满减优惠只在总价达到门槛时生效
    final_price = price - 50
else:
    final_price = price

print(f"原价: {price}元")
print(f"实付: {final_price}元")`,
      codeRunnable: true,
    },
    {
      title: 'print函数详解',
      content: `print() 是Python中最常用的内置函数之一，用于将内容输出到控制台。

print函数的完整签名：
print(*objects, sep=' ', end='\\n', file=sys.stdout, flush=False)

参数说明：
- objects：要输出的内容，可以传入多个值，用逗号分隔
- sep：多个值之间的分隔符，默认是空格
- end：输出末尾的字符，默认是换行符
- file：输出目标，默认是标准输出（屏幕）
- flush：是否立即刷新输出缓冲区

掌握print的各种用法，对于调试程序和展示结果非常重要。`,
      code: `# print的基本用法
print("Hello")          # 输出字符串
print(100)              # 输出数字
print(1, 2, 3, 4, 5)   # 输出多个值，默认用空格分隔

# 使用sep参数改变分隔符
print(2025, 3, 9, sep="-")       # 输出: 2025-3-9
print("苹果", "香蕉", "橙子", sep=" | ")  # 用 | 分隔

# 使用end参数改变结尾字符
print("加载中", end="")
print(".", end="")
print(".", end="")
print(".", end="")
print(" 完成！")  # 所有内容在同一行

# 格式化输出 - f-string（推荐方式）
name = "小明"
age = 18
score = 95.5
print(f"姓名: {name}, 年龄: {age}, 成绩: {score}")

# f-string中可以包含表达式
radius = 5
print(f"半径为{radius}的圆，面积为{3.14159 * radius ** 2:.2f}")

# 其他格式化方式
print("我叫{}，今年{}岁".format("小红", 20))    # format方法
print("成绩: %.1f分" % 95.678)                   # %格式化（旧式）`,
      codeRunnable: true,
    },
    {
      title: '实战练习：个人名片生成器',
      content: `让我们综合运用今天学到的知识，编写一个实用的小程序 —— 个人名片生成器。

这个程序将使用：
- print函数输出格式化的文本
- 字符串拼接和f-string
- 字符串的乘法运算（重复）
- 注释来解释代码逻辑

试着修改下面代码中的个人信息，生成属于你自己的名片吧！`,
      code: `# 个人名片生成器

name = "张三"
title = "Python开发工程师"
company = "某科技有限公司"
phone = "138-0000-1234"
email = "zhangsan@example.com"
motto = "代码改变世界"

# 生成名片
width = 40
print("┌" + "─" * width + "┐")
print("│" + name.center(width) + "│")
print("│" + title.center(width) + "│")
print("│" + " " * width + "│")
print("│" + f"  公司: {company}".ljust(width) + "│")
print("│" + f"  电话: {phone}".ljust(width) + "│")
print("│" + f"  邮箱: {email}".ljust(width) + "│")
print("│" + " " * width + "│")
print("│" + f"「{motto}」".center(width) + "│")
print("└" + "─" * width + "┘")`,
      codeRunnable: true,
    },
  ],
}
