import type { DayData } from '../types'

export const day14: DayData = {
  id: 14,
  title: '函数和模块',
  description: '学习Python函数的定义、各种参数类型、返回值以及模块的导入和使用，掌握代码复用和组织的核心机制。',
  sections: [
    {
      title: '定义函数',
      content:
        '函数是组织好的、可重复使用的代码块。使用 def 关键字定义函数，函数可以接受参数并返回结果。\n\n' +
        '函数的基本结构：\n' +
        '- def 函数名(参数列表):\n' +
        '- 函数体（缩进的代码块）\n' +
        '- return 语句（可选）\n\n' +
        '函数命名通常使用小写字母和下划线（snake_case）。良好的函数设计应该只做一件事，函数名应该清晰地描述其功能。\n\n' +
        '没有 return 语句的函数默认返回 None。',
      code:
        '# 最简单的函数\n' +
        'def greet():\n' +
        "    print('你好，世界！')\n\n" +
        'greet()\n\n' +
        '# 带参数的函数\n' +
        'def greet_person(name):\n' +
        "    print(f'你好，{name}！')\n\n" +
        "greet_person('小明')\n" +
        "greet_person('小红')\n\n" +
        '# 带返回值的函数\n' +
        'def add(a, b):\n' +
        '    return a + b\n\n' +
        'result = add(3, 5)\n' +
        "print(f'3 + 5 = {result}')\n\n" +
        '# 函数的文档字符串\n' +
        'def circle_area(radius):\n' +
        '    """计算圆的面积。\n\n' +
        '    参数:\n' +
        '        radius: 圆的半径\n' +
        '    返回:\n' +
        '        圆的面积\n' +
        '    """\n' +
        '    import math\n' +
        '    return math.pi * radius ** 2\n\n' +
        "print(f'半径为5的圆面积: {circle_area(5):.2f}')",
      codeRunnable: true,
    },
    {
      title: '参数类型：位置参数、关键字参数、默认值',
      content:
        'Python函数支持灵活的参数传递方式：\n\n' +
        '位置参数（Positional）：按照位置顺序传递，最常见的方式。\n\n' +
        '关键字参数（Keyword）：通过参数名指定，可以不按顺序传递。\n\n' +
        '默认值参数（Default）：定义函数时为参数指定默认值，调用时可以省略。注意：带默认值的参数必须放在不带默认值的参数后面。\n\n' +
        '特别注意：不要使用可变对象（如列表、字典）作为默认值，因为默认值只会在函数定义时创建一次，之后的调用会共享同一个对象。',
      code:
        '# 位置参数\n' +
        'def power(base, exp):\n' +
        '    return base ** exp\n\n' +
        "print(f'2^10 = {power(2, 10)}')\n\n" +
        '# 关键字参数（可以不按顺序）\n' +
        "print(f'3^4 = {power(exp=4, base=3)}')\n\n" +
        '# 默认值参数\n' +
        "def say_hello(name, greeting='你好'):\n" +
        "    print(f'{greeting}，{name}！')\n\n" +
        "say_hello('小明')\n" +
        "say_hello('Alice', greeting='Hello')\n\n" +
        '# 默认值陷阱的正确做法\n' +
        'def append_to(item, target=None):\n' +
        '    if target is None:\n' +
        '        target = []\n' +
        '    target.append(item)\n' +
        '    return target\n\n' +
        "print(append_to('a'))\n" +
        "print(append_to('b'))  # 每次都是新列表\n\n" +
        '# 混合使用\n' +
        "def create_profile(name, age, city='未知', hobby='无'):\n" +
        "    return f'{name}, {age}岁, 城市: {city}, 爱好: {hobby}'\n\n" +
        "print(create_profile('小明', 20, hobby='编程'))",
      codeRunnable: true,
    },
    {
      title: '可变参数：*args 和 **kwargs',
      content:
        'Python提供了两种可变参数机制，让函数能接受不定数量的参数：\n\n' +
        '*args（星号参数）：接收任意数量的位置参数，在函数内部表现为元组。\n\n' +
        '**kwargs（双星号参数）：接收任意数量的关键字参数，在函数内部表现为字典。\n\n' +
        '参数的定义顺序必须是：普通参数 → *args → 关键字参数 → **kwargs。\n\n' +
        '* 和 ** 也可以在函数调用时用于解包序列和字典。',
      code:
        '# *args - 接收任意数量的位置参数\n' +
        'def calc_sum(*args):\n' +
        "    print(f'参数: {args}, 类型: {type(args)}')\n" +
        '    return sum(args)\n\n' +
        "print(f'求和: {calc_sum(1, 2, 3)}')\n" +
        "print(f'求和: {calc_sum(1, 2, 3, 4, 5)}')\n\n" +
        '# **kwargs - 接收任意数量的关键字参数\n' +
        'def print_info(**kwargs):\n' +
        '    for key, value in kwargs.items():\n' +
        "        print(f'{key}: {value}')\n\n" +
        "print_info(name='小明', age=20, city='北京')\n\n" +
        '# 混合使用\n' +
        'def flexible(required, *args, **kwargs):\n' +
        "    print(f'必填: {required}')\n" +
        "    print(f'额外位置参数: {args}')\n" +
        "    print(f'额外关键字参数: {kwargs}')\n\n" +
        "print('---')\n" +
        "flexible('hello', 1, 2, 3, x=10, y=20)\n\n" +
        '# 解包操作\n' +
        'numbers = [1, 2, 3, 4, 5]\n' +
        "print(f'\\n解包求和: {calc_sum(*numbers)}')\n\n" +
        "info = {'name': '小红', 'age': 19}\n" +
        'print()\n' +
        'print_info(**info)',
      codeRunnable: true,
    },
    {
      title: '返回值与多返回值',
      content:
        '函数通过 return 语句返回结果。Python函数的一个特色是可以返回多个值——实际上是返回一个元组，在调用端通过解包赋值给多个变量。\n\n' +
        'return 语句的特点：\n' +
        '- 遇到 return 立即结束函数执行\n' +
        '- 可以返回任意类型的值\n' +
        '- 返回多个值时，用逗号分隔，实际返回元组\n' +
        '- 没有 return 或 return 后没有值，返回 None',
      code:
        '# 返回多个值\n' +
        'def min_max(numbers):\n' +
        '    return min(numbers), max(numbers)\n\n' +
        'data = [3, 1, 4, 1, 5, 9, 2, 6]\n' +
        'lo, hi = min_max(data)\n' +
        "print(f'最小值: {lo}, 最大值: {hi}')\n\n" +
        '# 返回字典（更清晰）\n' +
        'def analyze(numbers):\n' +
        '    return {\n' +
        "        'count': len(numbers),\n" +
        "        'sum': sum(numbers),\n" +
        "        'avg': sum(numbers) / len(numbers),\n" +
        "        'min': min(numbers),\n" +
        "        'max': max(numbers)\n" +
        '    }\n\n' +
        'result = analyze([10, 20, 30, 40, 50])\n' +
        'for key, value in result.items():\n' +
        "    print(f'{key}: {value}')\n\n" +
        '# 提前返回（卫语句模式）\n' +
        'def divide(a, b):\n' +
        '    if b == 0:\n' +
        "        return '错误：除数不能为0'\n" +
        '    return a / b\n\n' +
        "print(f'\\n10 / 3 = {divide(10, 3):.2f}')\n" +
        "print(f'10 / 0 = {divide(10, 0)}')",
      codeRunnable: true,
    },
    {
      title: '模块导入与常用标准库',
      content:
        '模块（Module）是包含Python代码的文件，通过导入模块可以复用别人写好的代码。Python拥有丰富的标准库，无需安装即可使用。\n\n' +
        '导入方式：\n' +
        '- import 模块名\n' +
        '- from 模块名 import 函数名\n' +
        '- import 模块名 as 别名\n\n' +
        '常用标准库：\n' +
        '- math：数学函数\n' +
        '- random：随机数\n' +
        '- datetime：日期时间\n' +
        '- os/os.path：操作系统接口\n' +
        '- json：JSON数据处理',
      code:
        '# math 模块\n' +
        'import math\n' +
        "print(f'π = {math.pi}')\n" +
        "print(f'e = {math.e}')\n" +
        "print(f'sqrt(2) = {math.sqrt(2):.4f}')\n" +
        "print(f'ceil(3.2) = {math.ceil(3.2)}')\n" +
        "print(f'floor(3.8) = {math.floor(3.8)}')\n\n" +
        '# random 模块\n' +
        'import random\n' +
        "print(f'\\n随机整数(1-10): {random.randint(1, 10)}')\n" +
        "print(f'随机小数: {random.random():.4f}')\n\n" +
        "colors = ['红', '橙', '黄', '绿', '蓝']\n" +
        "print(f'随机选择: {random.choice(colors)}')\n\n" +
        'sample = random.sample(range(1, 36), 5)\n' +
        "print(f'随机抽样: {sorted(sample)}')\n\n" +
        '# datetime 模块\n' +
        'from datetime import datetime, timedelta\n' +
        'now = datetime.now()\n' +
        "print(f'\\n当前时间: {now.strftime(\"%Y-%m-%d %H:%M\")}')\n\n" +
        'future = now + timedelta(days=30)\n' +
        "print(f'30天后: {future.strftime(\"%Y-%m-%d\")}')\n\n" +
        '# json 模块\n' +
        'import json\n' +
        "data = {'name': '小明', 'scores': [90, 85, 92]}\n" +
        'json_str = json.dumps(data, ensure_ascii=False, indent=2)\n' +
        "print(f'\\nJSON:\\n{json_str}')",
      codeRunnable: true,
    },
  ],
}
