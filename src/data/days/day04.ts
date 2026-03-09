import type { DayData } from '../types'

export const day04: DayData = {
  id: 4,
  title: '运算符',
  description: '全面学习Python中的各类运算符，包括算术、赋值、比较和逻辑运算符，并通过实际案例加深理解。',
  sections: [
    {
      title: '算术运算符',
      content: `算术运算符用于执行基本的数学运算。Python支持以下算术运算符：

+ 加法：两个数相加
- 减法：两个数相减
* 乘法：两个数相乘
/ 除法：结果总是浮点数
// 整除（地板除）：结果向下取整
% 取模（取余）：返回除法的余数
** 幂运算：计算次方

运算符优先级（从高到低）：** > 正负号 > * / // % > + -
建议在复杂表达式中使用括号来明确优先级，提高代码可读性。`,
      code: `# 基本算术运算
a, b = 17, 5

print(f"{a} + {b} = {a + b}")     # 加法: 22
print(f"{a} - {b} = {a - b}")     # 减法: 12
print(f"{a} * {b} = {a * b}")     # 乘法: 85
print(f"{a} / {b} = {a / b}")     # 除法: 3.4（总是返回float）
print(f"{a} // {b} = {a // b}")   # 整除: 3
print(f"{a} % {b} = {a % b}")     # 取余: 2
print(f"{a} ** {b} = {a ** b}")   # 幂: 1419857

# 注意负数的整除和取余
print(f"\\n-17 // 5 = {-17 // 5}")   # -4（向下取整，不是-3）
print(f"-17 % 5 = {-17 % 5}")       # 3（Python中余数符号与除数相同）

# 运算符优先级
result = 2 + 3 * 4      # 先乘后加 = 14
print(f"\\n2 + 3 * 4 = {result}")

result = (2 + 3) * 4    # 括号优先 = 20
print(f"(2 + 3) * 4 = {result}")

result = 2 ** 3 ** 2    # 幂运算右结合 = 2^(3^2) = 512
print(f"2 ** 3 ** 2 = {result}")

# 字符串和列表也可以使用 + 和 *
print(f"\\n'hello' + ' world' = {'hello' + ' world'}")
print(f"'ha' * 3 = {'ha' * 3}")`,
      codeRunnable: true,
    },
    {
      title: '赋值运算符',
      content: `赋值运算符用于给变量赋值。除了基本的赋值运算符=外，Python还提供了复合赋值运算符，它们是算术运算和赋值的简写形式。

复合赋值运算符：
+= 加法赋值：a += 5 等同于 a = a + 5
-= 减法赋值：a -= 5 等同于 a = a - 5
*= 乘法赋值：a *= 5 等同于 a = a * 5
/= 除法赋值：a /= 5 等同于 a = a / 5
//= 整除赋值
%= 取余赋值
**= 幂赋值

注意：Python没有 ++ 和 -- 运算符（不像C/Java）。要实现自增自减，使用 += 1 和 -= 1。`,
      code: `# 基本赋值
x = 10
print(f"初始值: x = {x}")

# 复合赋值运算符
x += 5    # x = x + 5
print(f"x += 5 → x = {x}")     # 15

x -= 3    # x = x - 3
print(f"x -= 3 → x = {x}")     # 12

x *= 2    # x = x * 2
print(f"x *= 2 → x = {x}")     # 24

x //= 5   # x = x // 5
print(f"x //= 5 → x = {x}")   # 4

x **= 3   # x = x ** 3
print(f"x **= 3 → x = {x}")   # 64

x %= 10   # x = x % 10
print(f"x %= 10 → x = {x}")   # 4

# 解包赋值（Python特色）
a, b, c = 1, 2, 3
print(f"\\n解包赋值: a={a}, b={b}, c={c}")

# 星号解包
first, *rest = [1, 2, 3, 4, 5]
print(f"first={first}, rest={rest}")

*head, last = [1, 2, 3, 4, 5]
print(f"head={head}, last={last}")

# 交换变量（Python中不需要临时变量）
a, b = 10, 20
print(f"\\n交换前: a={a}, b={b}")
a, b = b, a
print(f"交换后: a={a}, b={b}")`,
      codeRunnable: true,
    },
    {
      title: '比较运算符',
      content: `比较运算符用于比较两个值的大小关系，运算结果是布尔值（True或False）。

Python支持以下比较运算符：
== 等于：判断两个值是否相等
!= 不等于：判断两个值是否不相等
> 大于
< 小于
>= 大于等于
<= 小于等于

Python的特色功能——链式比较：
可以像数学表达式一样写连续比较，如 1 < x < 10，等同于 1 < x and x < 10。

注意区分 == （比较运算符）和 = （赋值运算符），这是初学者最容易混淆的地方。`,
      code: `# 数字比较
a, b = 10, 20
print(f"a={a}, b={b}")
print(f"a == b: {a == b}")    # False
print(f"a != b: {a != b}")    # True
print(f"a > b: {a > b}")      # False
print(f"a < b: {a < b}")      # True
print(f"a >= 10: {a >= 10}")  # True
print(f"a <= 10: {a <= 10}")  # True

# 链式比较（Python独特语法）
x = 15
print(f"\\nx = {x}")
print(f"10 < x < 20: {10 < x < 20}")      # True
print(f"10 < x < 15: {10 < x < 15}")      # False（x不小于15）
print(f"1 <= x <= 100: {1 <= x <= 100}")   # True

# 字符串比较（按字典序，逐字符比较ASCII/Unicode值）
print(f"\\n'apple' < 'banana': {'apple' < 'banana'}")   # True
print(f"'abc' == 'abc': {'abc' == 'abc'}")                # True
print(f"'abc' < 'abd': {'abc' < 'abd'}")                  # True

# == 和 is 的区别
# == 比较值是否相等，is 比较是否是同一个对象
a = [1, 2, 3]
b = [1, 2, 3]
c = a
print(f"\\na == b: {a == b}")   # True（值相同）
print(f"a is b: {a is b}")     # False（不是同一个对象）
print(f"a is c: {a is c}")     # True（c指向同一个对象）`,
      codeRunnable: true,
    },
    {
      title: '逻辑运算符',
      content: `逻辑运算符用于组合多个条件，进行布尔逻辑运算。

Python中的三个逻辑运算符：

and（与）：两个条件都为True时结果才为True
or（或）：两个条件中有一个为True结果就为True
not（非）：对条件取反，True变False，False变True

短路求值：
- and 运算中，如果第一个条件为False，不会计算第二个条件
- or 运算中，如果第一个条件为True，不会计算第二个条件

Python的逻辑运算符返回的不一定是布尔值，而是决定结果的那个操作数。这个特性可以用来实现一些简洁的写法。`,
      code: `# 基本逻辑运算
age = 25
has_id = True
has_ticket = False

print(f"age={age}, has_id={has_id}, has_ticket={has_ticket}")
print(f"age > 18 and has_id: {age > 18 and has_id}")        # True
print(f"has_id and has_ticket: {has_id and has_ticket}")     # False
print(f"has_id or has_ticket: {has_id or has_ticket}")       # True
print(f"not has_ticket: {not has_ticket}")                    # True

# 复合条件
score = 85
print(f"\\nscore = {score}")
print(f"60 <= score <= 100: {60 <= score <= 100}")       # True
print(f"score < 60 or score > 100: {score < 60 or score > 100}")  # False

# 逻辑运算符返回值（不一定是布尔值！）
print(f"\\n--- 逻辑运算符的返回值 ---")
print(f"'hello' and 'world': {'hello' and 'world'}")   # 'world'
print(f"'' and 'world': {'' and 'world'}")               # ''
print(f"'hello' or 'world': {'hello' or 'world'}")     # 'hello'
print(f"'' or 'world': {'' or 'world'}")                 # 'world'

# 利用这个特性设置默认值
username = ""
display_name = username or "匿名用户"
print(f"\\n用户名: '{username}' → 显示为: '{display_name}'")

username = "小明"
display_name = username or "匿名用户"
print(f"用户名: '{username}' → 显示为: '{display_name}'")

# 运算符优先级: not > and > or
result = True or False and False  # 等同于 True or (False and False)
print(f"\\nTrue or False and False = {result}")  # True`,
      codeRunnable: true,
    },
    {
      title: '实战：温度转换与圆面积计算',
      content: `让我们通过两个实际的小程序来综合运用今天学到的运算符知识。

程序一：温度转换器
摄氏度(C)和华氏度(F)的转换公式：
F = C × 9/5 + 32
C = (F - 32) × 5/9

程序二：圆的相关计算
圆的面积 = π × r²
圆的周长 = 2 × π × r

这两个程序用到了算术运算符、赋值运算符和格式化输出。试试修改输入值看看结果的变化吧！`,
      code: `import math

# ===== 温度转换器 =====
print("=" * 35)
print("      温度转换器")
print("=" * 35)

celsius = 37.5  # 体温
fahrenheit = celsius * 9 / 5 + 32
print(f"{celsius}°C = {fahrenheit}°F")

fahrenheit = 72  # 室温
celsius = (fahrenheit - 32) * 5 / 9
print(f"{fahrenheit}°F = {celsius:.1f}°C")

# 常见温度对照
print("\\n常见温度对照表:")
print(f"{'摄氏度':>8} {'华氏度':>8}")
print("-" * 20)
for c in [-40, 0, 20, 37, 100]:
    f = c * 9 / 5 + 32
    print(f"{c:>7}°C {f:>7.1f}°F")

# ===== 圆的计算 =====
print()
print("=" * 35)
print("      圆的计算器")
print("=" * 35)

radius = 5
area = math.pi * radius ** 2
circumference = 2 * math.pi * radius

print(f"半径: {radius}")
print(f"圆周率π: {math.pi:.10f}")
print(f"面积: {area:.2f}")
print(f"周长: {circumference:.2f}")

# 不同半径的对比
print("\\n不同半径的圆:")
print(f"{'半径':>6} {'面积':>10} {'周长':>10}")
print("-" * 30)
for r in [1, 2, 3, 5, 10]:
    a = math.pi * r ** 2
    c = 2 * math.pi * r
    print(f"{r:>6} {a:>10.2f} {c:>10.2f}")`,
      codeRunnable: true,
    },
  ],
}
