import type { DayData } from '../types'

export const day13: DayData = {
  id: 13,
  title: '字典',
  description: '学习Python字典（dict）的创建、操作、常用方法以及字典推导式，掌握这种最常用的键值对数据结构。',
  sections: [
    {
      title: '创建字典',
      content:
        '字典（dict）是Python中最重要的数据结构之一，用于存储键值对（key-value pair）。字典的特点：\n\n' +
        '- 键必须是不可变类型（字符串、数字、元组等）且唯一\n' +
        '- 值可以是任意类型\n' +
        '- 从Python 3.7+开始，字典保持插入顺序\n\n' +
        '创建字典有多种方式：花括号语法、dict()构造函数、dict.fromkeys()等。选择哪种方式取决于具体场景。',
      code:
        '# 花括号语法\n' +
        "person = {'name': '小明', 'age': 20, 'city': '北京'}\n" +
        'print(person)\n\n' +
        '# dict() 构造函数\n' +
        "config = dict(host='localhost', port=8080, debug=True)\n" +
        'print(config)\n\n' +
        '# 从键列表创建（值相同）\n' +
        "keys = ['语文', '数学', '英语']\n" +
        'scores = dict.fromkeys(keys, 0)\n' +
        "print(f'初始成绩: {scores}')\n\n" +
        '# 从元组列表创建\n' +
        "pairs = [('a', 1), ('b', 2), ('c', 3)]\n" +
        'd = dict(pairs)\n' +
        'print(d)\n\n' +
        '# 空字典\n' +
        'empty = {}\n' +
        "print(f'空字典: {empty}, 类型: {type(empty)}')",
      codeRunnable: true,
    },
    {
      title: '字典的基本操作',
      content:
        '字典支持以下基本操作：\n\n' +
        '访问元素：使用 d[key] 或 d.get(key) 访问值。区别在于 d[key] 在键不存在时抛出 KeyError，而 d.get(key) 返回 None 或指定的默认值。\n\n' +
        '修改元素：直接通过 d[key] = value 赋值，键存在则更新，不存在则添加。\n\n' +
        '删除元素：del d[key]、d.pop(key) 或 d.popitem()。\n\n' +
        '其他操作：len() 获取长度，in 检查键是否存在。',
      code:
        "student = {'name': '小明', 'age': 20, 'grade': 'A'}\n\n" +
        '# 访问元素\n' +
        "print(student['name'])\n" +
        "print(student.get('age'))\n" +
        "print(student.get('phone', '未设置'))  # 带默认值\n\n" +
        '# 修改元素\n' +
        "student['age'] = 21\n" +
        "print(f'修改年龄: {student}')\n\n" +
        '# 添加新键值对\n' +
        "student['email'] = 'xiaoming@example.com'\n" +
        "print(f'添加邮箱: {student}')\n\n" +
        '# 删除元素\n' +
        "removed = student.pop('grade')\n" +
        "print(f'删除的成绩: {removed}')\n" +
        "print(f'删除后: {student}')\n\n" +
        '# 检查键是否存在\n' +
        "print(f\"'name' 存在: {'name' in student}\")\n" +
        "print(f\"'phone' 存在: {'phone' in student}\")\n\n" +
        "print(f'字典长度: {len(student)}')",
      codeRunnable: true,
    },
    {
      title: '字典常用方法：keys/values/items',
      content:
        '字典提供了三个核心视图方法：\n\n' +
        '- keys()：返回所有键的视图\n' +
        '- values()：返回所有值的视图\n' +
        '- items()：返回所有键值对的视图（每对为元组）\n\n' +
        '这些视图对象是动态的，当字典被修改时会自动反映变化。在遍历字典时，items() 是最常用的方法，它让我们同时获取键和值。\n\n' +
        '其他实用方法还有：update() 合并字典、setdefault() 安全设置默认值、copy() 创建浅拷贝。',
      code:
        "scores = {'语文': 92, '数学': 88, '英语': 95, '物理': 78}\n\n" +
        '# keys / values / items\n' +
        "print(f'所有科目: {list(scores.keys())}')\n" +
        "print(f'所有分数: {list(scores.values())}')\n\n" +
        '# 遍历字典（最常用方式）\n' +
        'for subject, score in scores.items():\n' +
        "    print(f'{subject}: {score}分')\n\n" +
        '# 计算平均分\n' +
        'avg = sum(scores.values()) / len(scores)\n' +
        "print(f'\\n平均分: {avg:.1f}')\n\n" +
        '# update - 合并/更新字典\n' +
        "extra = {'化学': 85, '数学': 90}  # 数学会被更新\n" +
        'scores.update(extra)\n' +
        "print(f'\\n更新后: {scores}')\n\n" +
        '# setdefault - 键不存在才设置\n' +
        "scores.setdefault('生物', 80)\n" +
        "scores.setdefault('语文', 100)  # 已存在，不会更新\n" +
        "print(f'setdefault后: {scores}')",
      codeRunnable: true,
    },
    {
      title: '字典推导式',
      content:
        '字典推导式（Dict Comprehension）允许我们用简洁的语法创建字典，格式为：\n\n' +
        '{键表达式: 值表达式 for 变量 in 可迭代对象 if 条件}\n\n' +
        '字典推导式可以用于数据转换、过滤、反转键值对等场景，是Python中非常高效的写法。与使用循环手动构建字典相比，代码更加简洁。',
      code:
        '# 基本字典推导式\n' +
        'squares = {x: x ** 2 for x in range(1, 6)}\n' +
        "print(f'平方字典: {squares}')\n\n" +
        '# 带条件的字典推导式\n' +
        'even_squares = {x: x ** 2 for x in range(1, 11) if x % 2 == 0}\n' +
        "print(f'偶数的平方: {even_squares}')\n\n" +
        '# 反转键值对\n' +
        "original = {'a': 1, 'b': 2, 'c': 3}\n" +
        'flipped = {v: k for k, v in original.items()}\n' +
        "print(f'反转后: {flipped}')\n\n" +
        '# 过滤字典\n' +
        "scores = {'小明': 92, '小红': 58, '小李': 85, '小张': 45, '小王': 76}\n" +
        'passed = {name: score for name, score in scores.items() if score >= 60}\n' +
        "print(f'及格的同学: {passed}')\n\n" +
        '# 字符串长度字典\n' +
        "words = ['Python', 'Java', 'Go', 'JavaScript', 'Rust']\n" +
        'word_lengths = {word: len(word) for word in words}\n' +
        "print(f'单词长度: {word_lengths}')",
      codeRunnable: true,
    },
    {
      title: '嵌套字典',
      content:
        '字典的值可以是任意类型，包括另一个字典，这就形成了嵌套字典。嵌套字典在实际开发中非常常见，例如表示JSON数据、配置文件、数据库记录等。\n\n' +
        '访问嵌套字典使用连续的方括号或 get() 方法链。修改嵌套字典中的值也可以使用连续的键访问。\n\n' +
        '在处理嵌套字典时要特别注意键可能不存在的情况，推荐使用 get() 方法逐层安全访问。',
      code:
        '# 嵌套字典：学生信息\n' +
        'students = {\n' +
        "    '001': {\n" +
        "        'name': '小明',\n" +
        "        'age': 20,\n" +
        "        'scores': {'语文': 92, '数学': 88, '英语': 95}\n" +
        '    },\n' +
        "    '002': {\n" +
        "        'name': '小红',\n" +
        "        'age': 19,\n" +
        "        'scores': {'语文': 88, '数学': 95, '英语': 90}\n" +
        '    }\n' +
        '}\n\n' +
        '# 访问嵌套数据\n' +
        "print(f\"小明的数学成绩: {students['001']['scores']['数学']}\")\n\n" +
        '# 安全访问（推荐）\n' +
        "math_score = students.get('003', {}).get('scores', {}).get('数学', '无数据')\n" +
        "print(f'003号的数学成绩: {math_score}')\n\n" +
        '# 遍历嵌套字典\n' +
        'for sid, info in students.items():\n' +
        "    name = info['name']\n" +
        "    avg = sum(info['scores'].values()) / len(info['scores'])\n" +
        "    print(f'{sid} {name}: 平均分 {avg:.1f}')\n\n" +
        '# 修改嵌套值\n' +
        "students['001']['scores']['数学'] = 92\n" +
        "print(f\"\\n修改后小明的数学: {students['001']['scores']['数学']}\")\n\n" +
        '# 添加新学生\n' +
        "students['003'] = {\n" +
        "    'name': '小李',\n" +
        "    'age': 21,\n" +
        "    'scores': {'语文': 80, '数学': 90, '英语': 85}\n" +
        '}\n' +
        "print(f'\\n现在有 {len(students)} 个学生')",
      codeRunnable: true,
    },
  ],
}
