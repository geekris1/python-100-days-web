import type { DayData } from '../types'

export const day09: DayData = {
  id: 9,
  title: '列表进阶',
  description: '深入学习列表的常用方法，包括添加、删除、排序元素的方法，以及列表生成式和嵌套列表的使用。',
  sections: [
    {
      title: '添加元素：append、insert和extend',
      content: `列表是可变的，我们可以随时向列表中添加新元素。Python提供了三种主要的添加方法：

• append(item)：在列表末尾追加一个元素。这是最常用的添加方式，时间复杂度为O(1)。
• insert(index, item)：在指定位置插入一个元素，原来该位置及之后的元素依次后移。时间复杂度为O(n)。
• extend(iterable)：将另一个可迭代对象中的所有元素逐个追加到列表末尾。相当于把另一个列表"展开"后合并进来。

注意append和extend的区别：append是把参数作为一个整体追加（如果传入列表，会作为子列表嵌套进去），而extend是把参数中的元素逐个追加。

此外，还可以用 += 运算符来扩展列表，效果与extend相同。`,
      code: `# append - 在末尾添加
fruits = ["苹果", "香蕉"]
print(f"初始: {fruits}")

fruits.append("橘子")
print(f"append('橘子'): {fruits}")

fruits.append("葡萄")
print(f"append('葡萄'): {fruits}")

# insert - 在指定位置插入
fruits.insert(0, "西瓜")
print(f"insert(0, '西瓜'): {fruits}")

fruits.insert(2, "芒果")
print(f"insert(2, '芒果'): {fruits}")

# extend - 合并另一个列表
more_fruits = ["樱桃", "草莓"]
fruits.extend(more_fruits)
print(f"extend(['樱桃','草莓']): {fruits}")

# append vs extend 的区别
list_a = [1, 2, 3]
list_b = [1, 2, 3]

list_a.append([4, 5])
list_b.extend([4, 5])
print(f"\\nappend([4,5]): {list_a}")    # [1, 2, 3, [4, 5]]
print(f"extend([4,5]): {list_b}")       # [1, 2, 3, 4, 5]

# += 运算符（等价于extend）
nums = [1, 2, 3]
nums += [4, 5, 6]
print(f"\\n+= 运算: {nums}")`,
      codeRunnable: true,
    },
    {
      title: '删除元素：remove、pop和del',
      content: `从列表中删除元素同样有多种方式：

• remove(value)：删除列表中第一个等于value的元素。如果元素不存在会抛出ValueError异常。
• pop(index)：删除并返回指定索引处的元素。不传参数时默认删除并返回最后一个元素。
• del语句：通过索引或切片删除元素，这是Python的关键字而不是列表的方法。
• clear()：清空列表中的所有元素。

pop()和remove()的区别在于：pop通过索引删除，并返回被删除的元素；remove通过值删除，不返回被删除的元素。

当你需要被删除的元素值时，使用pop()；当你知道要删除的值但不知道索引时，使用remove()。`,
      code: `animals = ["猫", "狗", "兔", "鱼", "鸟", "猫", "龟"]
print(f"初始: {animals}")

# remove - 按值删除（只删第一个匹配项）
animals.remove("猫")
print(f"remove('猫'): {animals}")

# pop - 按索引删除并返回
last = animals.pop()
print(f"pop(): {animals}，删除了: {last}")

second = animals.pop(1)
print(f"pop(1): {animals}，删除了: {second}")

# del - 按索引或切片删除
nums = [10, 20, 30, 40, 50, 60, 70, 80]
print(f"\\nnums = {nums}")

del nums[0]
print(f"del nums[0]: {nums}")

del nums[2:5]
print(f"del nums[2:5]: {nums}")

# clear - 清空列表
temp = [1, 2, 3, 4, 5]
print(f"\\ntemp = {temp}")
temp.clear()
print(f"clear(): {temp}")

# 安全删除：先检查再删除
colors = ["红", "绿", "蓝"]
target = "黄"
if target in colors:
    colors.remove(target)
else:
    print(f"\\n'{target}' 不在列表中，无法删除")`,
      codeRunnable: true,
    },
    {
      title: '排序和反转：sort和reverse',
      content: `列表提供了两个原地修改的方法来改变元素顺序：

• sort()：对列表进行原地排序（默认升序），会修改原列表。
• reverse()：将列表元素原地反转。

sort()方法的参数：
• key：指定一个函数，用于从每个元素中提取比较键。例如 key=len 按长度排序，key=str.lower 忽略大小写排序。
• reverse：设为True时降序排列，默认False（升序）。

注意区分sort()和sorted()：sort()是列表的方法，原地修改列表，返回None；sorted()是内置函数，返回新列表，不修改原列表。选择哪个取决于你是否需要保留原始顺序。`,
      code: `# sort() - 原地排序
numbers = [34, 12, 78, 5, 56, 91, 23]
print(f"原始: {numbers}")

numbers.sort()
print(f"升序: {numbers}")

numbers.sort(reverse=True)
print(f"降序: {numbers}")

# 按自定义规则排序
words = ["Python", "Go", "JavaScript", "C", "Rust", "Java"]
print(f"\\n原始: {words}")

words.sort(key=len)
print(f"按长度排序: {words}")

words.sort(key=str.lower)
print(f"按字母排序: {words}")

# reverse() - 原地反转
items = ["A", "B", "C", "D", "E"]
print(f"\\n原始: {items}")
items.reverse()
print(f"反转: {items}")

# sort() vs sorted() 的区别
original = [3, 1, 4, 1, 5, 9, 2, 6]
new_list = sorted(original)
print(f"\\noriginal: {original}")
print(f"sorted(): {new_list}")

original.sort()
print(f"sort():   {original}")

# 实用示例：学生成绩排名
students = [("张三", 85), ("李四", 92), ("王五", 78), ("赵六", 96), ("钱七", 88)]
students.sort(key=lambda s: s[1], reverse=True)
print("\\n成绩排名：")
for rank, (name, score) in enumerate(students, 1):
    print(f"  第{rank}名: {name} - {score}分")`,
      codeRunnable: true,
    },
    {
      title: '列表生成式',
      content: `列表生成式（List Comprehension）是Python中一种简洁而强大的创建列表的方式。它可以用一行代码替代传统的循环写法，让代码更加Pythonic。

基本语法：[表达式 for 变量 in 可迭代对象]
带条件：[表达式 for 变量 in 可迭代对象 if 条件]
嵌套：[表达式 for 变量1 in 可迭代对象1 for 变量2 in 可迭代对象2]

列表生成式不仅写法简洁，执行效率通常也比等价的for循环更高，因为Python内部对其做了优化。

但要注意：过于复杂的列表生成式反而会降低可读性。如果逻辑超过两层嵌套或条件很复杂，建议改用普通循环。代码的可读性永远比简洁性更重要。`,
      code: `# 基本列表生成式
squares = [x**2 for x in range(1, 11)]
print(f"1到10的平方: {squares}")

# 带条件的列表生成式
evens = [x for x in range(1, 21) if x % 2 == 0]
print(f"1到20的偶数: {evens}")

# 字符串处理
words = ["Hello", "World", "Python", "Coding"]
upper = [w.upper() for w in words]
lengths = [len(w) for w in words]
print(f"\\n大写: {upper}")
print(f"长度: {lengths}")

# 带条件筛选
scores = [85, 42, 92, 78, 56, 96, 63, 88, 31, 95]
passed = [s for s in scores if s >= 60]
failed = [s for s in scores if s < 60]
print(f"\\n所有成绩: {scores}")
print(f"及格: {passed}")
print(f"不及格: {failed}")

# if-else表达式（注意位置不同）
labels = ["及格" if s >= 60 else "不及格" for s in scores]
print(f"标签: {labels}")

# 嵌套列表生成式
pairs = [(x, y) for x in range(1, 4) for y in range(1, 4) if x != y]
print(f"\\n不相等的配对: {pairs}")

# 展平嵌套列表
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat = [num for row in matrix for num in row]
print(f"展平矩阵: {flat}")`,
      codeRunnable: true,
    },
    {
      title: '嵌套列表',
      content: `嵌套列表就是列表中包含列表，最常见的用途是表示二维数据结构，如矩阵、表格、棋盘等。

访问嵌套列表中的元素需要使用多级索引：list[row][col]。第一个索引选取外层列表的元素（即内层列表），第二个索引选取内层列表中的元素。

创建嵌套列表时需要注意一个常见陷阱：使用 [[0]*n]*m 创建二维列表时，所有行实际上指向同一个列表对象，修改一行会影响所有行。正确的方式是使用列表生成式 [[0]*n for _ in range(m)]。

嵌套列表在实际开发中应用广泛，例如存储学生的多科成绩、表示游戏地图、处理图像像素数据等。`,
      code: `# 创建嵌套列表（二维列表 / 矩阵）
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# 访问元素
print(f"matrix[0][0] = {matrix[0][0]}")
print(f"matrix[1][2] = {matrix[1][2]}")
print(f"matrix[2][1] = {matrix[2][1]}")

# 遍历二维列表
print("\\n遍历矩阵：")
for row in matrix:
    for item in row:
        print(f"{item:>4}", end="")
    print()

# 正确创建m×n的零矩阵
rows, cols = 3, 4
grid = [[0] * cols for _ in range(rows)]
grid[0][0] = 1
grid[1][2] = 5
print(f"\\n修改后的网格：")
for row in grid:
    print(row)

# 常见陷阱演示
print("\\n--- 陷阱演示 ---")
bad_grid = [[0] * 3] * 3
bad_grid[0][0] = 99
print(f"错误方式: {bad_grid}")  # 所有行都被修改了！

good_grid = [[0] * 3 for _ in range(3)]
good_grid[0][0] = 99
print(f"正确方式: {good_grid}")  # 只有第一行被修改

# 实际应用：学生成绩表
students = [
    ["张三", 85, 92, 78],
    ["李四", 96, 88, 91],
    ["王五", 72, 65, 80],
]
print("\\n学生成绩表：")
print(f"{'姓名':>4} {'语文':>4} {'数学':>4} {'英语':>4} {'平均':>6}")
for student in students:
    name = student[0]
    scores = student[1:]
    avg = sum(scores) / len(scores)
    print(f"{name:>4} {scores[0]:>4} {scores[1]:>4} {scores[2]:>4} {avg:>6.1f}")`,
      codeRunnable: true,
    },
  ],
}
