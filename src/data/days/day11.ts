import type { DayData } from '../types'

export const day11: DayData = {
  id: 11,
  title: '字符串',
  description: '深入学习Python字符串的定义、转义字符、运算操作、常用方法以及格式化输出，掌握文本处理的核心技能。',
  sections: [
    {
      title: '字符串定义与转义字符',
      content:
        '在Python中，字符串是用单引号、双引号或三引号括起来的字符序列。三引号（三个单引号或三个双引号）可以用来定义多行字符串。\n\n' +
        '转义字符以反斜杠（\\）开头，用于表示一些特殊字符：\n' +
        '- \\n 表示换行\n' +
        '- \\t 表示制表符\n' +
        '- \\\\ 表示反斜杠本身\n' +
        '- \\\" 表示双引号\n\n' +
        '如果不希望反斜杠被解释为转义字符，可以在字符串前加 r，表示原始字符串（raw string）。',
      code:
        '# 字符串的多种定义方式\n' +
        "s1 = 'hello'\n" +
        's2 = "world"\n' +
        "s3 = '''这是一个\n" +
        "多行字符串'''\n" +
        'print(s1, s2)\n' +
        'print(s3)\n\n' +
        '# 转义字符\n' +
        "print('第一行\\n第二行')\n" +
        "print('制表符\\t分隔')\n" +
        "print('反斜杠: \\\\')\n\n" +
        '# 原始字符串\n' +
        "path = r'C:\\Users\\name\\Documents'\n" +
        'print(path)',
      codeRunnable: true,
    },
    {
      title: '字符串运算：拼接与重复',
      content:
        '字符串支持多种运算操作：\n\n' +
        '- 使用 + 拼接两个字符串\n' +
        '- 使用 * 重复字符串\n' +
        '- 使用 in 检查子串是否存在\n' +
        '- 使用 len() 获取字符串长度\n\n' +
        '需要注意的是，字符串是不可变类型，所有"修改"操作都会返回新的字符串对象。',
      code:
        "s1 = 'Hello'\n" +
        "s2 = 'World'\n\n" +
        '# 拼接\n' +
        "result = s1 + ' ' + s2\n" +
        'print(result)\n\n' +
        '# 重复\n' +
        "line = '-' * 20\n" +
        'print(line)\n\n' +
        '# 成员判断\n' +
        "print('Hello' in result)\n" +
        "print('Python' in result)\n\n" +
        '# 长度\n' +
        "print(f'字符串长度: {len(result)}')",
      codeRunnable: true,
    },
    {
      title: '字符串切片',
      content:
        '字符串切片是Python中非常强大的功能，语法为 s[start:stop:step]：\n\n' +
        '- start 是起始索引（包含），默认为 0\n' +
        '- stop 是结束索引（不包含），默认为字符串末尾\n' +
        '- step 是步长，默认为 1\n\n' +
        '索引可以使用负数，-1 表示最后一个字符，-2 表示倒数第二个，以此类推。利用切片可以轻松实现字符串反转等操作。',
      code:
        "s = 'Hello, Python!'\n\n" +
        '# 基本索引\n' +
        "print(s[0])      # 'H'\n" +
        "print(s[-1])     # '!'\n\n" +
        '# 切片\n' +
        "print(s[0:5])    # 'Hello'\n" +
        "print(s[7:])     # 'Python!'\n" +
        "print(s[:5])     # 'Hello'\n\n" +
        '# 带步长的切片\n' +
        "print(s[::2])    # 每隔一个字符取一个\n" +
        "print(s[::-1])   # 反转字符串\n\n" +
        '# 实用示例：判断回文\n' +
        "word = 'racecar'\n" +
        'is_palindrome = word == word[::-1]\n' +
        "print(f'{word} 是回文: {is_palindrome}')",
      codeRunnable: true,
    },
    {
      title: '常用字符串方法',
      content:
        'Python字符串对象内置了大量实用方法：\n\n' +
        '大小写转换：upper()、lower()、capitalize()、title()、swapcase()\n\n' +
        '查找与替换：find()、index()、count()、replace()、startswith()、endswith()\n\n' +
        '分割与连接：split()、join()、strip()、lstrip()、rstrip()\n\n' +
        '判断方法：isdigit()、isalpha()、isalnum()、isspace()\n\n' +
        '其中 find() 在找不到子串时返回 -1，而 index() 会抛出异常。strip() 用于去除两端的空白字符，在处理用户输入时非常有用。',
      code:
        "s = '  Hello, Python World!  '\n\n" +
        '# 大小写转换\n' +
        'print(s.strip().upper())\n' +
        'print(s.strip().lower())\n' +
        'print(s.strip().title())\n\n' +
        '# 查找与替换\n' +
        "print(s.find('Python'))      # 返回起始索引\n" +
        "print(s.find('Java'))        # 找不到返回 -1\n" +
        "print(s.count('l'))          # 统计出现次数\n" +
        "print(s.replace('World', '世界'))\n\n" +
        '# 分割与连接\n' +
        "words = 'apple,banana,cherry'\n" +
        "fruit_list = words.split(',')\n" +
        'print(fruit_list)\n' +
        "print(' | '.join(fruit_list))\n\n" +
        '# 去除空白\n' +
        "user_input = '  hello  '\n" +
        "print(f'[{user_input.strip()}]')\n" +
        "print(f'[{user_input.lstrip()}]')\n" +
        "print(f'[{user_input.rstrip()}]')",
      codeRunnable: true,
    },
    {
      title: '字符串格式化与f-string',
      content:
        'Python提供了多种字符串格式化方式，其中f-string（格式化字符串字面量）是Python 3.6+推荐的方式，语法简洁且性能最好。\n\n' +
        '三种格式化方式对比：\n' +
        '1. % 运算符：最早期的方式，类似C语言的 printf\n' +
        '2. str.format()：更灵活的格式化方法\n' +
        '3. f-string：在字符串前加 f，用花括号 {} 直接嵌入表达式\n\n' +
        'f-string 中可以执行任意Python表达式，包括函数调用、算术运算等，还支持格式说明符来控制数字精度和对齐方式。',
      code:
        "name = '小明'\n" +
        'age = 18\n' +
        'score = 95.678\n\n' +
        '# % 格式化（了解即可）\n' +
        "print('我叫%s，今年%d岁' % (name, age))\n\n" +
        '# str.format()\n' +
        "print('我叫{}，今年{}岁'.format(name, age))\n\n" +
        '# f-string（推荐）\n' +
        "print(f'我叫{name}，今年{age}岁')\n\n" +
        '# f-string 中使用表达式\n' +
        "print(f'{name}明年就{age + 1}岁了')\n" +
        "print(f'成绩保留两位小数: {score:.2f}')\n\n" +
        '# 对齐和填充\n' +
        'for i in range(1, 4):\n' +
        "    print(f'{i:>3} x 5 = {i*5:<3}')\n\n" +
        '# 千位分隔符\n' +
        'big_number = 1234567890\n' +
        "print(f'格式化数字: {big_number:,}')",
      codeRunnable: true,
    },
  ],
}
