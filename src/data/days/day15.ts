import type { DayData } from '../types'

export const day15: DayData = {
  id: 15,
  title: '函数应用实战',
  description: '通过实际案例巩固函数知识：随机验证码生成、素数判断、最大公约数、数据统计以及递归初探。',
  sections: [
    {
      title: '生成随机验证码',
      content:
        '验证码是日常开发中常见的需求。我们可以利用 random 模块和字符串操作来生成不同类型的验证码：\n\n' +
        '- 纯数字验证码\n' +
        '- 字母数字混合验证码\n\n' +
        '这个例子综合运用了函数定义、默认参数、random 模块以及字符串操作，是一个很好的练习。\n\n' +
        '思路：先定义候选字符集合，然后从中随机选取指定数量的字符拼接起来。',
      code:
        'import random\n' +
        'import string\n\n' +
        '# 生成纯数字验证码\n' +
        'def generate_number_code(length=6):\n' +
        "    return ''.join(random.choices(string.digits, k=length))\n\n" +
        '# 生成字母数字混合验证码\n' +
        'def generate_mixed_code(length=4):\n' +
        '    chars = string.ascii_letters + string.digits\n' +
        "    return ''.join(random.choices(chars, k=length))\n\n" +
        '# 生成不含易混淆字符的验证码\n' +
        'def generate_clear_code(length=6):\n' +
        "    chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'\n" +
        "    return ''.join(random.choices(chars, k=length))\n\n" +
        '# 测试\n' +
        "print('--- 纯数字验证码 ---')\n" +
        'for i in range(3):\n' +
        "    print(f'  验证码{i+1}: {generate_number_code()}')\n\n" +
        "print('\\n--- 混合验证码 ---')\n" +
        'for i in range(3):\n' +
        "    print(f'  验证码{i+1}: {generate_mixed_code(6)}')\n\n" +
        "print('\\n--- 清晰验证码（去除O/0/I/1等）---')\n" +
        'for i in range(3):\n' +
        "    print(f'  验证码{i+1}: {generate_clear_code()}')",
      codeRunnable: true,
    },
    {
      title: '判断素数函数',
      content:
        '素数（质数）是只能被1和自身整除的大于1的自然数。判断一个数是否为素数是经典的编程练习。\n\n' +
        '基本思路：如果一个数 n 不是素数，那么它至少有一个因子不超过 √n。因此我们只需要检查从 2 到 √n 的所有数即可，这大大减少了计算量。\n\n' +
        '进一步优化：除了2以外的偶数都不是素数，所以可以先判断是否为偶数，再只检查奇数因子。',
      code:
        'import math\n\n' +
        'def is_prime(n):\n' +
        '    """判断一个数是否为素数"""\n' +
        '    if n < 2:\n' +
        '        return False\n' +
        '    if n == 2:\n' +
        '        return True\n' +
        '    if n % 2 == 0:\n' +
        '        return False\n' +
        '    for i in range(3, int(math.sqrt(n)) + 1, 2):\n' +
        '        if n % i == 0:\n' +
        '            return False\n' +
        '    return True\n\n' +
        '# 测试\n' +
        'test_numbers = [1, 2, 3, 4, 17, 20, 97, 100]\n' +
        'for n in test_numbers:\n' +
        '    result = "是" if is_prime(n) else "不是"\n' +
        "    print(f'{n} {result}素数')\n\n" +
        '# 找出100以内的所有素数\n' +
        'primes = [n for n in range(2, 101) if is_prime(n)]\n' +
        "print(f'\\n100以内的素数({len(primes)}个):')\n" +
        'print(primes)',
      codeRunnable: true,
    },
    {
      title: '最大公约数与最小公倍数',
      content:
        '最大公约数（GCD）和最小公倍数（LCM）是数学中的基本概念：\n\n' +
        '最大公约数：两个数共有因子中最大的那个。经典的计算方法是欧几里得算法（辗转相除法），基本思想是 gcd(a, b) = gcd(b, a % b)，直到余数为0。\n\n' +
        '最小公倍数：两个数的公倍数中最小的那个。可以利用公式 lcm(a, b) = a * b / gcd(a, b) 来计算。\n\n' +
        'Python的 math 模块提供了 gcd() 函数，Python 3.9+ 还提供了 lcm() 函数，但理解底层原理对于编程能力的提升非常有帮助。',
      code:
        '# 手动实现欧几里得算法\n' +
        'def gcd(a, b):\n' +
        '    """辗转相除法求最大公约数"""\n' +
        '    while b != 0:\n' +
        '        a, b = b, a % b\n' +
        '    return a\n\n' +
        'def lcm(a, b):\n' +
        '    """利用GCD计算最小公倍数"""\n' +
        '    return a * b // gcd(a, b)\n\n' +
        '# 测试\n' +
        'pairs = [(12, 8), (15, 25), (7, 13), (100, 75)]\n' +
        'for a, b in pairs:\n' +
        "    print(f'gcd({a}, {b}) = {gcd(a, b)},  lcm({a}, {b}) = {lcm(a, b)}')\n\n" +
        '# 求多个数的最大公约数\n' +
        'from functools import reduce\n\n' +
        'def gcd_of_list(numbers):\n' +
        '    return reduce(gcd, numbers)\n\n' +
        'nums = [24, 36, 60, 48]\n' +
        "print(f'\\n{nums} 的最大公约数: {gcd_of_list(nums)}')\n\n" +
        '# 化简分数\n' +
        'def simplify_fraction(numerator, denominator):\n' +
        '    common = gcd(abs(numerator), abs(denominator))\n' +
        '    return numerator // common, denominator // common\n\n' +
        'n, d = simplify_fraction(48, 36)\n' +
        "print(f'\\n48/36 化简为 {n}/{d}')",
      codeRunnable: true,
    },
    {
      title: '数据统计函数',
      content:
        '编写一组用于数据统计的函数，这在数据处理和分析中非常实用。我们将实现以下功能：\n\n' +
        '- 平均值（mean）\n' +
        '- 中位数（median）\n' +
        '- 众数（mode）\n' +
        '- 方差与标准差（variance & standard deviation）\n\n' +
        '这些函数的实现综合运用了排序、字典计数、数学运算等知识。在实际项目中可以使用 statistics 标准库或 numpy 第三方库来完成这些计算。',
      code:
        'def mean(data):\n' +
        '    """计算平均值"""\n' +
        '    return sum(data) / len(data)\n\n' +
        'def median(data):\n' +
        '    """计算中位数"""\n' +
        '    sorted_data = sorted(data)\n' +
        '    n = len(sorted_data)\n' +
        '    mid = n // 2\n' +
        '    if n % 2 == 0:\n' +
        '        return (sorted_data[mid - 1] + sorted_data[mid]) / 2\n' +
        '    return sorted_data[mid]\n\n' +
        'def mode(data):\n' +
        '    """计算众数"""\n' +
        '    counts = {}\n' +
        '    for x in data:\n' +
        '        counts[x] = counts.get(x, 0) + 1\n' +
        '    max_count = max(counts.values())\n' +
        '    return [k for k, v in counts.items() if v == max_count]\n\n' +
        'def variance(data):\n' +
        '    """计算方差"""\n' +
        '    avg = mean(data)\n' +
        '    return sum((x - avg) ** 2 for x in data) / len(data)\n\n' +
        'def std_dev(data):\n' +
        '    """计算标准差"""\n' +
        '    return variance(data) ** 0.5\n\n' +
        '# 测试\n' +
        'scores = [85, 90, 78, 92, 88, 95, 78, 85, 90, 85]\n' +
        "print(f'数据: {scores}')\n" +
        "print(f'平均值: {mean(scores):.2f}')\n" +
        "print(f'中位数: {median(scores)}')\n" +
        "print(f'众数: {mode(scores)}')\n" +
        "print(f'方差: {variance(scores):.2f}')\n" +
        "print(f'标准差: {std_dev(scores):.2f}')",
      codeRunnable: true,
    },
    {
      title: '递归初探',
      content:
        '递归是函数调用自身的编程技巧。递归的两个核心要素：\n\n' +
        '1. 基本情况（Base Case）：递归终止的条件，防止无限递归\n' +
        '2. 递归步骤（Recursive Step）：将问题分解为更小的子问题\n\n' +
        '递归的优点是代码简洁优雅，特别适合处理树形结构、分治算法等场景。缺点是深度过大可能导致栈溢出（Python默认递归深度限制为1000），且有时效率不如迭代。\n\n' +
        '经典递归案例包括：阶乘、斐波那契数列、汉诺塔等。初学者应先理解递归的执行过程，再考虑性能优化。',
      code:
        '# 阶乘\n' +
        'def factorial(n):\n' +
        '    if n <= 1:\n' +
        '        return 1\n' +
        '    return n * factorial(n - 1)\n\n' +
        'for i in range(1, 8):\n' +
        "    print(f'{i}! = {factorial(i)}')\n\n" +
        '# 斐波那契数列（带缓存优化）\n' +
        'def fibonacci(n, cache={}):\n' +
        '    if n in cache:\n' +
        '        return cache[n]\n' +
        '    if n <= 1:\n' +
        '        return n\n' +
        '    cache[n] = fibonacci(n - 1, cache) + fibonacci(n - 2, cache)\n' +
        '    return cache[n]\n\n' +
        "print('\\n斐波那契数列前15项:')\n" +
        'fib_list = [fibonacci(i) for i in range(15)]\n' +
        'print(fib_list)\n\n' +
        '# 递归求列表之和\n' +
        'def recursive_sum(lst):\n' +
        '    if not lst:\n' +
        '        return 0\n' +
        '    return lst[0] + recursive_sum(lst[1:])\n\n' +
        'numbers = [1, 2, 3, 4, 5]\n' +
        "print(f'\\n递归求和 {numbers}: {recursive_sum(numbers)}')\n\n" +
        '# 汉诺塔\n' +
        "def hanoi(n, source='A', target='C', auxiliary='B'):\n" +
        '    if n == 1:\n' +
        "        print(f'  {source} -> {target}')\n" +
        '        return\n' +
        '    hanoi(n - 1, source, auxiliary, target)\n' +
        "    print(f'  {source} -> {target}')\n" +
        '    hanoi(n - 1, auxiliary, target, source)\n\n' +
        "print('\\n汉诺塔(3个盘子)的移动步骤:')\n" +
        'hanoi(3)',
      codeRunnable: true,
    },
  ],
}
