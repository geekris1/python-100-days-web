import type { DayData } from '../types'

export const day07: DayData = {
  id: 7,
  title: '分支和循环实战',
  description: '通过经典编程练习巩固分支和循环结构的使用，包括素数判断、斐波那契数列、水仙花数、百钱百鸡问题和九九乘法表。',
  sections: [
    {
      title: '100以内的素数',
      content: `素数（也叫质数）是指大于1的自然数中，除了1和它本身以外不能被其他自然数整除的数。例如2、3、5、7、11都是素数，而4、6、8、9不是。

判断一个数n是否为素数的基本方法是：尝试用2到√n之间的所有整数去除n，如果都不能整除，则n是素数。为什么只需要检查到√n？因为如果n有一个大于√n的因子a，那么n/a必然是一个小于√n的因子，我们在前面已经检查过了。

这个问题综合运用了for循环、if判断、break语句以及数学函数，是一个非常经典的编程练习题。`,
      code: `import math

# 方法一：逐个判断
print("100以内的素数：")
count = 0
for n in range(2, 101):
    is_prime = True
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            is_prime = False
            break
    if is_prime:
        print(n, end=" ")
        count += 1
print(f"\\n共有{count}个素数")

# 方法二：埃拉托斯特尼筛法（更高效）
print("\\n用筛法找素数：")
sieve = [True] * 101
sieve[0] = sieve[1] = False
for i in range(2, int(math.sqrt(100)) + 1):
    if sieve[i]:
        for j in range(i * i, 101, i):
            sieve[j] = False

primes = [i for i in range(101) if sieve[i]]
print(primes)
print(f"共{len(primes)}个素数")`,
      codeRunnable: true,
    },
    {
      title: '斐波那契数列',
      content: `斐波那契数列是一个非常著名的数列：1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

它的规律是：从第三项开始，每一项都等于前两项之和。用数学公式表示就是：F(1)=1, F(2)=1, F(n)=F(n-1)+F(n-2)（n≥3）。

斐波那契数列在自然界中随处可见——向日葵的种子排列、松果的螺旋、兔子的繁殖问题等都与它有关。相邻两项的比值会趋近于黄金分割比（约0.618）。

实现斐波那契数列有多种方式：循环法、递归法、生成器等。循环法效率最高，递归法最直观但效率较低（有大量重复计算）。`,
      code: `# 方法一：用循环生成前20个斐波那契数
print("前20个斐波那契数：")
a, b = 1, 1
fib_list = [a, b]
for _ in range(18):
    a, b = b, a + b
    fib_list.append(b)
for i, num in enumerate(fib_list, 1):
    print(f"F({i}) = {num}")

# 方法二：打印斐波那契数列中不超过1000的数
print("\\n不超过1000的斐波那契数：")
a, b = 1, 1
while a <= 1000:
    print(a, end=" ")
    a, b = b, a + b
print()

# 验证相邻项比值趋近黄金分割
print("\\n相邻项比值（趋近黄金分割）：")
a, b = 1, 1
for i in range(15):
    a, b = b, a + b
    ratio = a / b
    print(f"F({i+3})/F({i+4}) = {ratio:.6f}")`,
      codeRunnable: true,
    },
    {
      title: '水仙花数',
      content: `水仙花数（Narcissistic Number），也叫自恋数或阿姆斯特朗数，是指一个n位数，其各位数字的n次幂之和等于该数本身。

最常见的是三位数的水仙花数。对于三位数abc，如果 a³ + b³ + c³ = abc，那么abc就是水仙花数。例如：153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153。

要找出所有三位水仙花数，需要：
1. 遍历100到999之间的所有三位数
2. 分别取出百位、十位和个位数字
3. 计算各位数字的立方和
4. 判断立方和是否等于原数

提取各位数字可以用整除（//）和取余（%）运算符。`,
      code: `# 找出所有三位水仙花数
print("三位水仙花数：")
for num in range(100, 1000):
    hundreds = num // 100
    tens = (num // 10) % 10
    units = num % 10
    if hundreds**3 + tens**3 + units**3 == num:
        print(f"{num} = {hundreds}³ + {tens}³ + {units}³ = {hundreds**3} + {tens**3} + {units**3}")

# 更通用的方法：找出n位自恋数
print("\\n四位自恋数：")
for num in range(1000, 10000):
    digits = [int(d) for d in str(num)]
    n = len(digits)
    if sum(d**n for d in digits) == num:
        expr = " + ".join(f"{d}⁴" for d in digits)
        print(f"{num} = {expr}")

# 用函数封装：判断一个数是否为自恋数
def is_narcissistic(num):
    digits = [int(d) for d in str(num)]
    n = len(digits)
    return sum(d**n for d in digits) == num

print("\\n1到10000中所有自恋数：")
result = [n for n in range(1, 10001) if is_narcissistic(n)]
print(result)`,
      codeRunnable: true,
    },
    {
      title: '百钱百鸡问题',
      content: `百钱百鸡问题源自中国古代数学家张丘建的《算经》：公鸡5文钱一只，母鸡3文钱一只，小鸡1文钱三只。用100文钱买100只鸡，问公鸡、母鸡、小鸡各多少只？

这是一个经典的穷举法（暴力枚举）问题。设公鸡x只、母鸡y只、小鸡z只，需要满足两个条件：
• x + y + z = 100（总共100只鸡）
• 5x + 3y + z/3 = 100（总共100文钱）

由条件可知：公鸡最多20只（100÷5），母鸡最多33只（100÷3），小鸡数量必须是3的倍数。通过嵌套循环穷举所有可能的x和y的组合，计算对应的z，然后验证条件是否满足。

这个问题很好地展示了穷举法的思路：当问题的解空间有限时，可以遍历所有可能的解，逐一验证。`,
      code: `# 百钱百鸡问题
print("百钱百鸡问题的所有解：")
print(f"{'公鸡':>4} {'母鸡':>4} {'小鸡':>4} {'总钱数':>6} {'总只数':>6}")
print("-" * 30)

solutions = 0
for roosters in range(0, 21):        # 公鸡最多20只
    for hens in range(0, 34):         # 母鸡最多33只
        chicks = 100 - roosters - hens  # 小鸡数量由总数确定
        if chicks < 0:
            continue
        if chicks % 3 != 0:           # 小鸡必须3只一组
            continue
        money = 5 * roosters + 3 * hens + chicks // 3
        if money == 100:
            solutions += 1
            print(f"{roosters:>4} {hens:>4} {chicks:>4} {money:>6} {roosters+hens+chicks:>6}")

print(f"\\n共有{solutions}组解")

# 优化版本：减少循环次数
print("\\n优化后的解法：")
for x in range(0, 21):
    for y in range(0, 34):
        z = 100 - x - y
        if z > 0 and z % 3 == 0 and 5*x + 3*y + z//3 == 100:
            print(f"公鸡{x}只，母鸡{y}只，小鸡{z}只")`,
      codeRunnable: true,
    },
    {
      title: '九九乘法表',
      content: `九九乘法表是最经典的嵌套循环练习之一。通过双重循环，外层控制行数（被乘数），内层控制列数（乘数），就能完整地打印出乘法表。

打印九九乘法表时需要注意格式化输出：
• 使用f-string格式化可以轻松控制对齐方式
• end参数可以控制print不换行，改用空格或制表符分隔
• 每行打印完后需要一个空的print()来换行

这个例子还展示了多种打印风格，包括标准的下三角形式和完整的矩形形式，帮助你熟练掌握格式化输出和嵌套循环的配合使用。`,
      code: `# 标准九九乘法表（下三角）
print("=== 标准九九乘法表 ===")
for i in range(1, 10):
    for j in range(1, i + 1):
        print(f"{j}×{i}={i*j:<4}", end="")
    print()

# 完整矩形乘法表
print("\\n=== 完整矩形乘法表 ===")
# 打印表头
print("    ", end="")
for j in range(1, 10):
    print(f"{j:>4}", end="")
print()
print("    " + "----" * 9)

for i in range(1, 10):
    print(f"{i:>2} |", end="")
    for j in range(1, 10):
        print(f"{i*j:>4}", end="")
    print()

# 用列表生成式生成乘法表
print("\\n=== 用列表生成式 ===")
table = [f"{j}×{i}={i*j}" for i in range(1, 10) for j in range(1, i+1)]
idx = 0
for i in range(1, 10):
    for j in range(1, i+1):
        print(f"{table[idx]:<10}", end="")
        idx += 1
    print()`,
      codeRunnable: true,
    },
  ],
}
