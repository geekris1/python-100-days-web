import type { DayData } from '../types'

export const day12: DayData = {
  id: 12,
  title: '集合',
  description: '学习Python集合（set）的创建、集合运算、常用方法以及frozenset，掌握这种高效的无序不重复数据结构。',
  sections: [
    {
      title: '创建集合与基本特性',
      content:
        '集合（set）是Python中的一种无序、不重复的数据结构。集合的主要特点：\n\n' +
        '- 元素不重复：自动去除重复值\n' +
        '- 无序性：不支持索引访问\n' +
        '- 元素必须是可哈希的（不可变类型）\n\n' +
        '创建集合有两种方式：使用花括号 {} 或 set() 函数。注意，创建空集合必须使用 set()，因为 {} 创建的是空字典。\n\n' +
        '集合最常见的用途是去重和成员检测，集合的成员检测（in 运算）比列表快得多，因为集合底层使用哈希表实现。',
      code:
        '# 创建集合\n' +
        "s1 = {1, 2, 3, 4, 5}\n" +
        "s2 = set([1, 2, 2, 3, 3, 3])\n" +
        "print(f's1 = {s1}')\n" +
        "print(f's2 = {s2}')  # 自动去重\n\n" +
        '# 创建空集合\n' +
        'empty_set = set()\n' +
        "print(f'空集合: {empty_set}, 类型: {type(empty_set)}')\n\n" +
        '# 从字符串创建集合\n' +
        "char_set = set('hello')\n" +
        "print(f'字符集合: {char_set}')\n\n" +
        '# 利用集合去重\n' +
        'numbers = [1, 5, 2, 3, 2, 4, 1, 5, 3]\n' +
        'unique = list(set(numbers))\n' +
        "print(f'去重后: {unique}')\n\n" +
        '# 成员检测\n' +
        "print(f'3 在集合中: {3 in s1}')\n" +
        "print(f'集合大小: {len(s1)}')",
      codeRunnable: true,
    },
    {
      title: '集合运算：交集、并集、差集',
      content:
        '集合支持数学意义上的集合运算，这是集合最强大的特性之一：\n\n' +
        '- 交集（&）：两个集合共有的元素\n' +
        '- 并集（|）：两个集合所有的元素\n' +
        '- 差集（-）：在一个集合中但不在另一个集合中的元素\n' +
        '- 对称差集（^）：只在其中一个集合中的元素（非共有的）\n\n' +
        '这些运算符也有对应的方法形式：intersection()、union()、difference()、symmetric_difference()。\n\n' +
        '此外还可以用 <= 判断子集关系，用 >= 判断超集关系。',
      code:
        'A = {1, 2, 3, 4, 5}\n' +
        'B = {4, 5, 6, 7, 8}\n' +
        "print(f'A = {A}')\n" +
        "print(f'B = {B}')\n\n" +
        '# 交集\n' +
        "print(f'交集 A & B = {A & B}')\n\n" +
        '# 并集\n' +
        "print(f'并集 A | B = {A | B}')\n\n" +
        '# 差集\n' +
        "print(f'差集 A - B = {A - B}')\n" +
        "print(f'差集 B - A = {B - A}')\n\n" +
        '# 对称差集\n' +
        "print(f'对称差集 A ^ B = {A ^ B}')\n\n" +
        '# 子集与超集\n' +
        'C = {1, 2, 3}\n' +
        "print(f'C = {C}')\n" +
        "print(f'C 是 A 的子集: {C <= A}')\n" +
        "print(f'A 是 C 的超集: {A >= C}')\n\n" +
        '# 实用示例：找出两个班级的共同选课\n' +
        "class1 = {'数学', '物理', '英语', '化学'}\n" +
        "class2 = {'数学', '生物', '英语', '历史'}\n" +
        "print(f'共同课程: {class1 & class2}')\n" +
        "print(f'所有课程: {class1 | class2}')",
      codeRunnable: true,
    },
    {
      title: '集合的增删操作',
      content:
        '集合是可变的（mutable），提供了多种增删元素的方法：\n\n' +
        '添加元素：\n' +
        '- add(elem)：添加单个元素\n' +
        '- update(iterable)：批量添加多个元素\n\n' +
        '删除元素：\n' +
        '- remove(elem)：删除指定元素，不存在则抛出 KeyError\n' +
        '- discard(elem)：删除指定元素，不存在也不报错\n' +
        '- pop()：随机移除并返回一个元素\n' +
        '- clear()：清空集合\n\n' +
        '在实际开发中，推荐使用 discard() 而不是 remove()，因为它更安全，不需要额外的存在性检查。',
      code:
        "fruits = {'苹果', '香蕉', '橙子'}\n" +
        "print(f'初始集合: {fruits}')\n\n" +
        '# add - 添加单个元素\n' +
        "fruits.add('葡萄')\n" +
        "print(f'添加葡萄: {fruits}')\n\n" +
        '# add 重复元素不会报错\n' +
        "fruits.add('苹果')\n" +
        "print(f'重复添加苹果: {fruits}')\n\n" +
        '# update - 批量添加\n' +
        "fruits.update(['西瓜', '芒果'])\n" +
        "print(f'批量添加: {fruits}')\n\n" +
        '# discard - 安全删除（推荐）\n' +
        "fruits.discard('香蕉')\n" +
        "print(f'删除香蕉: {fruits}')\n\n" +
        "fruits.discard('菠萝')  # 不存在也不会报错\n" +
        "print('discard不存在元素，无报错')\n\n" +
        '# pop - 随机移除一个元素\n' +
        'removed = fruits.pop()\n' +
        "print(f'移除了: {removed}')\n" +
        "print(f'剩余: {fruits}')\n\n" +
        '# clear - 清空\n' +
        'fruits.clear()\n' +
        "print(f'清空后: {fruits}')",
      codeRunnable: true,
    },
    {
      title: '集合推导式',
      content:
        '集合推导式（Set Comprehension）与列表推导式语法类似，只是使用花括号 {} 而不是方括号 []。集合推导式会自动去除重复值。\n\n' +
        '语法格式：{表达式 for 变量 in 可迭代对象 if 条件}\n\n' +
        '集合推导式非常适合在创建集合的同时进行数据转换和过滤，代码简洁且高效。',
      code:
        '# 基本集合推导式\n' +
        'squares = {x ** 2 for x in range(10)}\n' +
        "print(f'平方集合: {squares}')\n\n" +
        '# 带条件的集合推导式\n' +
        'even_squares = {x ** 2 for x in range(10) if x % 2 == 0}\n' +
        "print(f'偶数的平方: {even_squares}')\n\n" +
        '# 字符串处理\n' +
        "sentence = 'hello world hello python'\n" +
        'unique_words = {word.upper() for word in sentence.split()}\n' +
        "print(f'不重复的单词: {unique_words}')\n\n" +
        '# 从列表中提取不重复的首字母\n' +
        "names = ['Alice', 'Bob', 'Anna', 'Charlie', 'Amy', 'Bill']\n" +
        'initials = {name[0] for name in names}\n' +
        "print(f'所有首字母: {initials}')\n\n" +
        '# 实用示例：找出列表中的重复元素\n' +
        'numbers = [1, 2, 3, 2, 4, 5, 1, 6, 3]\n' +
        'seen = set()\n' +
        'duplicates = set()\n' +
        'for n in numbers:\n' +
        '    if n in seen:\n' +
        '        duplicates.add(n)\n' +
        '    seen.add(n)\n' +
        "print(f'重复元素: {duplicates}')",
      codeRunnable: true,
    },
    {
      title: 'frozenset：不可变集合',
      content:
        'frozenset 是集合的不可变版本，创建后不能添加或删除元素。frozenset 的特点：\n\n' +
        '- 不可变，因此是可哈希的\n' +
        '- 可以作为字典的键或另一个集合的元素\n' +
        '- 支持所有不修改集合的操作（交集、并集等）\n' +
        '- 不支持 add、remove、discard 等修改操作\n\n' +
        '当你需要一个"常量"集合，或者需要将集合作为字典键时，frozenset 是最佳选择。',
      code:
        '# 创建 frozenset\n' +
        'fs = frozenset([1, 2, 3, 4, 5])\n' +
        "print(f'frozenset: {fs}')\n" +
        "print(f'类型: {type(fs)}')\n\n" +
        '# frozenset 支持集合运算\n' +
        'fs2 = frozenset([4, 5, 6, 7])\n' +
        "print(f'交集: {fs & fs2}')\n" +
        "print(f'并集: {fs | fs2}')\n\n" +
        '# frozenset 可以作为字典的键\n' +
        'group_scores = {\n' +
        "    frozenset(['小明', '小红']): 95,\n" +
        "    frozenset(['小李', '小张']): 88,\n" +
        '}\n' +
        'for group, score in group_scores.items():\n' +
        "    members = ', '.join(group)\n" +
        "    print(f'小组({members}): {score}分')\n\n" +
        '# frozenset 可以作为集合的元素\n' +
        'set_of_sets = {\n' +
        '    frozenset([1, 2]),\n' +
        '    frozenset([3, 4]),\n' +
        '    frozenset([1, 2]),  # 重复，会被去除\n' +
        '}\n' +
        "print(f'集合的集合: {set_of_sets}')",
      codeRunnable: true,
    },
  ],
}
