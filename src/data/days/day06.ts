import type { DayData } from '../types'

export const day06: DayData = {
  id: 6,
  title: '循环结构',
  description: '学习Python中的循环结构，包括for-in循环、while循环、break和continue关键字、range()函数以及嵌套循环的使用方法。',
  sections: [
    {
      title: 'for-in循环',
      content: `在Python中，for-in循环用于遍历可迭代对象（如字符串、列表、元组、字典等）中的每一个元素。它的语法非常简洁直观：for 变量 in 可迭代对象，循环体会对每个元素执行一次。

与C/Java等语言的for循环不同，Python的for-in更像是"foreach"——你不需要手动管理索引，直接获取元素本身。这种设计让代码更加清晰易读，减少了因索引越界等问题导致的bug。

for-in循环可以遍历任何可迭代对象，包括字符串（逐字符遍历）、列表（逐元素遍历）、range对象（按数值序列遍历）等。`,
      code: `# 遍历字符串中的每个字符
word = "Python"
for ch in word:
    print(ch)

# 遍历列表中的元素
colors = ["红", "绿", "蓝", "黄"]
for color in colors:
    print(f"我喜欢{color}色")

# 使用for循环计算1到100的累加和
total = 0
for i in range(1, 101):
    total += i
print(f"1到100的和是: {total}")`,
      codeRunnable: true,
    },
    {
      title: 'while循环',
      content: `while循环是另一种重要的循环结构，它在条件为True时反复执行循环体。while循环适合在不确定循环次数、需要根据条件动态判断是否继续的场景中使用。

while循环的基本语法是：while 条件表达式，只要条件为真，循环体就会持续执行。需要注意的是，必须在循环体中改变条件相关的变量，否则会导致无限循环（死循环）。

while循环常用于用户输入验证、游戏主循环、数据处理等场景。当你不知道需要循环多少次，但知道什么时候应该停止时，while循环就是最佳选择。`,
      code: `# 猜数字游戏
import random

answer = random.randint(1, 10)
counter = 0

# 模拟猜数字过程
guesses = [5, 3, 7]  # 预设的猜测值
idx = 0

while idx < len(guesses):
    guess = guesses[idx]
    counter += 1
    if guess < answer:
        print(f"猜{guess}，太小了！")
    elif guess > answer:
        print(f"猜{guess}，太大了！")
    else:
        print(f"猜{guess}，恭喜你猜对了！")
        break
    idx += 1

print(f"答案是{answer}，你一共猜了{counter}次")

# while循环实现倒计时
print("\\n倒计时开始：")
n = 5
while n > 0:
    print(n)
    n -= 1
print("发射！🚀")`,
      codeRunnable: true,
    },
    {
      title: 'range()函数',
      content: `range()函数是Python中与循环配合使用最多的内置函数之一，它可以生成一个整数序列。range()有三种调用方式：

• range(stop)：生成从0到stop-1的整数序列
• range(start, stop)：生成从start到stop-1的整数序列
• range(start, stop, step)：生成从start到stop-1、步长为step的整数序列

range()返回的是一个range对象（惰性序列），它不会一次性把所有数字放进内存，而是按需生成，这使得即使生成很大范围的数字序列也不会占用大量内存。

step参数可以是负数，这时可以生成递减序列，例如range(10, 0, -1)生成10到1的倒序序列。`,
      code: `# range(stop) - 从0开始
print("range(5):", list(range(5)))

# range(start, stop) - 指定起始值
print("range(1, 6):", list(range(1, 6)))

# range(start, stop, step) - 指定步长
print("range(0, 20, 3):", list(range(0, 20, 3)))

# 负数步长 - 生成递减序列
print("range(10, 0, -2):", list(range(10, 0, -2)))

# 用range实现累加
total = 0
for num in range(1, 101):
    total += num
print(f"\\n1+2+3+...+100 = {total}")

# 用range遍历偶数
print("\\n1到20之间的偶数:")
for i in range(2, 21, 2):
    print(i, end=" ")
print()`,
      codeRunnable: true,
    },
    {
      title: 'break和continue',
      content: `break和continue是循环中的两个重要控制语句，它们可以改变循环的正常执行流程：

• break：立即终止当前所在的整个循环，跳出循环体，继续执行循环之后的代码。
• continue：跳过当前这一次迭代中剩余的代码，直接进入下一次循环迭代。

简单来说，break是"我不想再循环了"，而continue是"这一轮我不想执行了，跳到下一轮"。

使用break和continue可以让循环逻辑更加灵活。例如，在搜索过程中找到目标后用break提前退出；在处理数据时遇到不符合条件的元素用continue跳过。

注意：在嵌套循环中，break和continue只影响它们所在的最内层循环。`,
      code: `# break示例：找到第一个能被7整除的数
print("在1到50中找第一个能被7整除的数：")
for i in range(1, 51):
    if i % 7 == 0:
        print(f"找到了: {i}")
        break

# continue示例：打印1到20中的奇数（跳过偶数）
print("\\n1到20中的奇数:")
for i in range(1, 21):
    if i % 2 == 0:
        continue
    print(i, end=" ")
print()

# 综合示例：输出100以内能被3整除但不能被5整除的数
print("\\n100以内能被3整除但不能被5整除的数:")
count = 0
for i in range(1, 101):
    if i % 3 != 0:
        continue
    if i % 5 == 0:
        continue
    print(i, end=" ")
    count += 1
print(f"\\n共有{count}个")`,
      codeRunnable: true,
    },
    {
      title: '嵌套循环',
      content: `嵌套循环就是在一个循环体内部再放置另一个循环。外层循环每执行一次，内层循环就完整执行一遍。嵌套循环的总执行次数等于外层循环次数乘以内层循环次数。

嵌套循环在处理二维数据（如矩阵、表格）、生成图案、排列组合等问题中非常常见。经典的例子包括九九乘法表、打印各种星号图案等。

使用嵌套循环时需要注意：
• 内外层循环变量不要使用相同的名字
• 注意嵌套层数不宜过多（一般不超过3层），否则代码可读性会急剧下降
• break和continue只作用于所在的那一层循环`,
      code: `# 打印直角三角形星号图案
print("直角三角形：")
for i in range(1, 6):
    for j in range(i):
        print("*", end=" ")
    print()

# 打印倒三角形
print("\\n倒三角形：")
for i in range(5, 0, -1):
    for j in range(i):
        print("*", end=" ")
    print()

# 九九乘法表
print("\\n九九乘法表：")
for i in range(1, 10):
    for j in range(1, i + 1):
        print(f"{j}×{i}={i*j:<4}", end="")
    print()

# 嵌套循环找出所有两位数中个位数大于十位数的数
print("\\n两位数中个位>十位的数：")
count = 0
for tens in range(1, 10):
    for units in range(tens + 1, 10):
        num = tens * 10 + units
        print(num, end=" ")
        count += 1
print(f"\\n共{count}个")`,
      codeRunnable: true,
    },
  ],
}
