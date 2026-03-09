import type { DayData } from '../types'

export const day08: DayData = {
  id: 8,
  title: '列表基础',
  description: '学习Python中最常用的数据结构——列表（list），掌握列表的创建、基本运算、元素遍历、索引和切片操作。',
  sections: [
    {
      title: '创建列表',
      content: `列表（list）是Python中最基础也是最常用的数据结构，它是一个有序的元素集合，可以存放任意类型的数据。列表用方括号[]表示，元素之间用逗号分隔。

创建列表有多种方式：
• 字面量语法：直接用方括号括起元素，如 [1, 2, 3]
• list()构造函数：将其他可迭代对象转换为列表
• 列表生成式：一种简洁的创建列表的方式（后面会详细讲）

列表的一个重要特性是它可以存放不同类型的元素（虽然实际开发中通常存放同类型数据）。列表也可以嵌套，即列表中包含另一个列表。

列表是可变的（mutable），这意味着创建后可以修改其中的元素——这是列表与元组的核心区别。`,
      code: `# 创建空列表
empty1 = []
empty2 = list()
print(f"空列表: {empty1}, {empty2}")

# 直接创建包含元素的列表
numbers = [1, 2, 3, 4, 5]
fruits = ["苹果", "香蕉", "橘子", "葡萄"]
mixed = [1, "hello", 3.14, True, None]

print(f"数字列表: {numbers}")
print(f"水果列表: {fruits}")
print(f"混合列表: {mixed}")

# 用list()函数从其他类型创建列表
from_string = list("Python")
from_range = list(range(1, 11))
print(f"\\n从字符串创建: {from_string}")
print(f"从range创建: {from_range}")

# 用重复运算符创建列表
zeros = [0] * 5
pattern = [1, 2] * 4
print(f"\\n重复创建: {zeros}")
print(f"模式重复: {pattern}")

# 检查列表类型和长度
print(f"\\ntype(numbers) = {type(numbers)}")
print(f"len(fruits) = {len(fruits)}")`,
      codeRunnable: true,
    },
    {
      title: '列表运算',
      content: `Python中的列表支持多种运算操作，使得列表的操作非常灵活便捷：

• 拼接运算（+）：将两个列表合并成一个新列表
• 重复运算（*）：将列表中的元素重复指定次数
• 成员运算（in / not in）：检查某个元素是否在列表中
• 比较运算（==, !=, <, >）：逐元素比较两个列表

拼接运算会创建一个新列表，原来的两个列表不会被修改。重复运算同样返回新列表。

成员运算符 in 非常实用，它可以快速判断一个值是否存在于列表中，返回True或False。这比手动循环查找方便得多。`,
      code: `# 列表拼接
list1 = [1, 2, 3]
list2 = [4, 5, 6]
combined = list1 + list2
print(f"{list1} + {list2} = {combined}")

# 列表重复
repeated = [0, 1] * 3
print(f"[0, 1] * 3 = {repeated}")

# 成员运算
fruits = ["苹果", "香蕉", "橘子", "葡萄", "西瓜"]
print(f"\\n水果列表: {fruits}")
print(f"'苹果' in fruits: {'苹果' in fruits}")
print(f"'芒果' in fruits: {'芒果' in fruits}")
print(f"'芒果' not in fruits: {'芒果' not in fruits}")

# 列表比较
a = [1, 2, 3]
b = [1, 2, 3]
c = [1, 2, 4]
print(f"\\n{a} == {b}: {a == b}")
print(f"{a} == {c}: {a == c}")
print(f"{a} < {c}: {a < c}")

# 其他内置函数
nums = [34, 12, 78, 5, 56, 91, 23]
print(f"\\nnums = {nums}")
print(f"max(nums) = {max(nums)}")
print(f"min(nums) = {min(nums)}")
print(f"sum(nums) = {sum(nums)}")`,
      codeRunnable: true,
    },
    {
      title: '元素遍历',
      content: `遍历列表是最常见的操作之一。Python提供了多种优雅的方式来遍历列表中的元素：

• for-in直接遍历：最简洁的方式，直接获取每个元素
• 通过索引遍历：使用range(len(list))配合索引访问
• enumerate()遍历：同时获取索引和元素，非常实用

推荐使用for-in直接遍历，代码最简洁。当你同时需要索引和元素值时，使用enumerate()是最Pythonic的做法，而不是手动维护计数器变量。

enumerate()函数还可以指定起始索引值，例如enumerate(list, 1)表示从1开始编号而不是默认的0。`,
      code: `cities = ["北京", "上海", "广州", "深圳", "杭州"]

# 方法一：直接遍历（最常用）
print("方法一 - 直接遍历：")
for city in cities:
    print(f"  城市: {city}")

# 方法二：通过索引遍历
print("\\n方法二 - 索引遍历：")
for i in range(len(cities)):
    print(f"  第{i}个: {cities[i]}")

# 方法三：enumerate（推荐需要索引时使用）
print("\\n方法三 - enumerate遍历：")
for index, city in enumerate(cities):
    print(f"  索引{index}: {city}")

# enumerate指定起始编号
print("\\nenumerate从1开始编号：")
for rank, city in enumerate(cities, 1):
    print(f"  第{rank}名: {city}")

# 实际应用：统计成绩
scores = [85, 92, 78, 96, 63, 88, 71, 95]
print(f"\\n成绩列表: {scores}")
print(f"平均分: {sum(scores)/len(scores):.1f}")

pass_count = 0
for score in scores:
    if score >= 80:
        pass_count += 1
print(f"80分以上: {pass_count}人")
print(f"优秀率: {pass_count/len(scores)*100:.1f}%")`,
      codeRunnable: true,
    },
    {
      title: '索引和切片',
      content: `索引和切片是访问列表元素的两种核心方式：

索引（Indexing）：通过位置访问单个元素。Python的索引从0开始，最后一个元素的索引是len(list)-1。Python还支持负索引：-1表示最后一个元素，-2表示倒数第二个，以此类推。

切片（Slicing）：通过指定范围获取列表的一部分（子列表）。切片语法是 list[start:stop:step]：
• start：起始索引（包含），默认为0
• stop：结束索引（不包含），默认为列表长度
• step：步长，默认为1

切片操作返回一个新列表，不会修改原列表。切片是Python中最强大、最灵活的特性之一，掌握它可以让代码更加简洁。

通过切片还可以修改列表中的一段元素，或者删除一段元素。`,
      code: `languages = ["Python", "Java", "C++", "JavaScript", "Go", "Rust", "Swift"]

# 正向索引
print("正向索引：")
print(f"  第一个: {languages[0]}")
print(f"  第三个: {languages[2]}")

# 负向索引
print("\\n负向索引：")
print(f"  最后一个: {languages[-1]}")
print(f"  倒数第二: {languages[-2]}")

# 基本切片
print(f"\\n完整列表: {languages}")
print(f"前三个: {languages[:3]}")
print(f"第2到4个: {languages[1:4]}")
print(f"从第3个到末尾: {languages[2:]}")

# 步长切片
print(f"\\n每隔一个: {languages[::2]}")
print(f"逆序: {languages[::-1]}")
print(f"后三个逆序: {languages[-1:-4:-1]}")

# 用切片修改列表
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(f"\\n原始列表: {nums}")

nums[2:5] = [30, 40, 50]
print(f"修改第3-5个: {nums}")

nums[::3] = [100, 100, 100, 100]
print(f"每隔3个替换: {nums}")

# 切片复制列表
original = [1, 2, 3]
copy = original[:]
copy.append(4)
print(f"\\n原始: {original}")
print(f"副本: {copy}")`,
      codeRunnable: true,
    },
    {
      title: 'len()及其他常用函数',
      content: `Python提供了一系列内置函数用于处理列表，其中最常用的包括：

• len(list)：返回列表的长度（元素个数）
• max(list) / min(list)：返回列表中的最大值/最小值
• sum(list)：返回数值列表所有元素的和
• sorted(list)：返回排序后的新列表（不修改原列表）
• reversed(list)：返回反转的迭代器
• list()：将其他可迭代对象转换为列表

这些函数都不会修改原列表，而是返回新的结果。如果需要原地修改列表，应使用列表自身的方法（如sort()、reverse()），这将在下一课详细介绍。

len()函数的时间复杂度是O(1)，因为Python在内部维护了列表的长度信息，所以可以放心频繁使用。`,
      code: `# len() 函数
items = ["书", "笔", "本子", "橡皮", "尺子"]
print(f"物品列表: {items}")
print(f"数量: {len(items)}")

# 空列表判断的惯用写法
data = []
if not data:
    print("列表为空")

# max, min, sum
scores = [85, 92, 78, 96, 63, 88, 71, 95, 82, 90]
print(f"\\n成绩: {scores}")
print(f"最高分: {max(scores)}")
print(f"最低分: {min(scores)}")
print(f"总分: {sum(scores)}")
print(f"平均分: {sum(scores) / len(scores):.1f}")

# sorted() - 返回新列表
print(f"\\n升序排列: {sorted(scores)}")
print(f"降序排列: {sorted(scores, reverse=True)}")
print(f"原列表不变: {scores}")

# 综合练习：成绩统计
print("\\n--- 成绩分析报告 ---")
sorted_scores = sorted(scores)
n = len(sorted_scores)
median = (sorted_scores[n//2 - 1] + sorted_scores[n//2]) / 2 if n % 2 == 0 else sorted_scores[n//2]
print(f"中位数: {median}")
print(f"极差: {max(scores) - min(scores)}")
above_avg = [s for s in scores if s > sum(scores)/len(scores)]
print(f"高于平均分的: {above_avg}（共{len(above_avg)}人）")`,
      codeRunnable: true,
    },
  ],
}
