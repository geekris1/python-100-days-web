import type { DayData } from '../types'

export const day05: DayData = {
  id: 5,
  title: '分支结构',
  description: '学习Python中的条件判断语句，掌握if/elif/else和match/case的用法，编写能够根据不同条件执行不同逻辑的程序。',
  sections: [
    {
      title: 'if/elif/else 基本用法',
      content: `分支结构（条件语句）是编程中最基本的控制结构之一。它让程序可以根据不同的条件执行不同的代码。

Python使用 if、elif、else 关键字来实现分支结构：

if 条件1:
    代码块1
elif 条件2:
    代码块2
else:
    代码块3

Python的特点：
1. 使用冒号（:）标记代码块的开始
2. 使用缩进（通常4个空格）来标识代码块，而不是大括号{}
3. elif 是 else if 的缩写，可以有多个
4. else 是可选的，用于处理所有条件都不满足的情况

缩进是Python的灵魂，缩进错误会导致IndentationError。`,
      code: `# 基本if语句
age = 18
if age >= 18:
    print("你已成年，可以进入")

# if-else语句
temperature = 35
if temperature > 30:
    print(f"当前温度{temperature}°C，天气炎热，注意防暑！")
else:
    print(f"当前温度{temperature}°C，天气不错。")

# if-elif-else语句
score = 85
print(f"\\n你的成绩: {score}分")
if score >= 90:
    grade = "优秀"
elif score >= 80:
    grade = "良好"
elif score >= 70:
    grade = "中等"
elif score >= 60:
    grade = "及格"
else:
    grade = "不及格"
print(f"等级评定: {grade}")

# 多条件组合
age = 25
income = 8000
print(f"\\n年龄: {age}, 月收入: {income}")
if age >= 18 and income >= 5000:
    print("符合信用卡申请条件")
elif age >= 18:
    print("年龄达标，但收入未达标")
else:
    print("未满18岁，不能申请")`,
      codeRunnable: true,
    },
    {
      title: '条件表达式（三元运算符）',
      content: `Python提供了一种简洁的条件表达式写法，也叫三元运算符或条件运算符。

语法：值1 if 条件 else 值2

当条件为True时返回值1，否则返回值2。这种写法适用于简单的二选一场景，可以让代码更加简洁。

但要注意：如果逻辑比较复杂，还是应该使用标准的 if-else 语句，保持代码的可读性。不要为了追求简洁而牺牲可读性。`,
      code: `# 条件表达式（三元运算符）
age = 20
status = "成年" if age >= 18 else "未成年"
print(f"年龄{age}: {status}")

# 求两个数的最大值
a, b = 10, 20
max_val = a if a > b else b
print(f"\\n{a}和{b}中较大的是: {max_val}")

# 奇偶判断
for num in range(1, 11):
    parity = "偶数" if num % 2 == 0 else "奇数"
    print(f"{num}: {parity}", end="  ")
print()

# 条件表达式可以嵌套（但不推荐太深）
score = 85
level = "优秀" if score >= 90 else ("良好" if score >= 80 else ("及格" if score >= 60 else "不及格"))
print(f"\\n分数{score}: {level}")

# 实用场景：格式化输出
count = 1
print(f"\\n你有{count}条{'消息' if count == 1 else '消息'}")

items = ["苹果", "香蕉", "橙子"]
print(f"购物车中有{len(items)}件商品" if items else "购物车为空")

# 用于赋值默认值
user_input = ""
name = user_input if user_input else "游客"
print(f"欢迎, {name}!")`,
      codeRunnable: true,
    },
    {
      title: 'match/case 模式匹配',
      content: `Python 3.10引入了match/case语句（结构化模式匹配），类似于其他语言中的switch/case，但功能更加强大。

基本语法：
match 变量:
    case 模式1:
        代码块1
    case 模式2:
        代码块2
    case _:
        默认代码块

match/case的强大之处在于它不仅可以匹配简单的值，还可以匹配模式、解构数据结构等。下划线 _ 是通配符，匹配任何值，相当于default。

注意：match/case需要Python 3.10及以上版本。如果你使用的是更早的版本，可以用if/elif/else来替代。`,
      code: `# 基本的match/case用法
def get_day_type(day):
    match day:
        case "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday":
            return "工作日"
        case "Saturday" | "Sunday":
            return "周末"
        case _:
            return "无效的日期"

days = ["Monday", "Saturday", "Wednesday", "Sunday", "Holiday"]
for day in days:
    print(f"{day}: {get_day_type(day)}")

# HTTP状态码处理
print()
def handle_status(code):
    match code:
        case 200:
            return "成功"
        case 301:
            return "永久重定向"
        case 404:
            return "页面未找到"
        case 500:
            return "服务器内部错误"
        case _ if 200 <= code < 300:
            return "其他成功状态"
        case _ if 400 <= code < 500:
            return "其他客户端错误"
        case _:
            return f"未知状态码: {code}"

codes = [200, 301, 404, 500, 201, 403, 502]
for code in codes:
    print(f"HTTP {code}: {handle_status(code)}")

# 匹配数据结构
print()
def describe_point(point):
    match point:
        case (0, 0):
            return "原点"
        case (x, 0):
            return f"x轴上的点，x={x}"
        case (0, y):
            return f"y轴上的点，y={y}"
        case (x, y):
            return f"普通点 ({x}, {y})"

points = [(0, 0), (5, 0), (0, 3), (4, 7)]
for p in points:
    print(f"{p} → {describe_point(p)}")`,
      codeRunnable: true,
    },
    {
      title: '嵌套分支与代码优化',
      content: `嵌套分支是指在一个if语句内部再包含另一个if语句。虽然嵌套分支可以处理复杂的逻辑，但过深的嵌套会让代码难以阅读和维护。

一般建议嵌套层级不超过3层。如果嵌套太深，可以考虑：
1. 使用 elif 扁平化条件
2. 提前返回（Guard Clause / 卫语句）
3. 将复杂条件抽取为函数
4. 使用逻辑运算符合并条件

扁平化的代码更容易阅读和调试。这是一个重要的编程习惯。`,
      code: `# 嵌套分支的例子
print("=== 游乐园门票系统 ===")
age = 25
is_student = True
is_vip = False

# 嵌套写法（不推荐）
print("\\n--- 嵌套写法 ---")
if age < 12:
    if is_vip:
        print("儿童VIP票: 免费")
    else:
        print("儿童票: 30元")
else:
    if age >= 60:
        if is_vip:
            print("老人VIP票: 免费")
        else:
            print("老人票: 40元")
    else:
        if is_student:
            print("学生票: 50元")
        elif is_vip:
            print("VIP票: 60元")
        else:
            print("成人票: 80元")

# 扁平化写法（推荐）
print("\\n--- 扁平化写法 ---")
def get_ticket_price(age, is_student, is_vip):
    if is_vip and (age < 12 or age >= 60):
        return "免费", 0
    if age < 12:
        return "儿童票", 30
    if age >= 60:
        return "老人票", 40
    if is_student:
        return "学生票", 50
    if is_vip:
        return "VIP票", 60
    return "成人票", 80

# 测试不同情况
test_cases = [
    (8, False, False),
    (8, False, True),
    (25, True, False),
    (25, False, True),
    (25, False, False),
    (65, False, False),
    (65, False, True),
]

print(f"{'年龄':>4} {'学生':>4} {'VIP':>5} {'票种':>8} {'价格':>6}")
print("-" * 35)
for a, s, v in test_cases:
    ticket, price = get_ticket_price(a, s, v)
    price_str = f"{price}元" if price > 0 else "免费"
    print(f"{a:>4} {'是' if s else '否':>4} {'是' if v else '否':>5} {ticket:>8} {price_str:>6}")`,
      codeRunnable: true,
    },
    {
      title: '实战：BMI计算器与成绩等级',
      content: `通过两个实用的小项目来综合练习分支结构：

项目一：BMI计算器
BMI（Body Mass Index，身体质量指数）= 体重(kg) / 身高(m)²
根据WHO标准：
- BMI < 18.5：偏瘦
- 18.5 <= BMI < 24：正常
- 24 <= BMI < 28：偏胖
- BMI >= 28：肥胖

项目二：百分制转等级
根据成绩给出等级和评语，模拟一个简单的成绩管理系统。

试着修改输入数据，看看不同的结果吧！`,
      code: `# ===== BMI计算器 =====
print("=" * 40)
print("        BMI 健康指数计算器")
print("=" * 40)

height = 1.75  # 身高（米）
weight = 70    # 体重（千克）

bmi = weight / (height ** 2)
print(f"身高: {height}m")
print(f"体重: {weight}kg")
print(f"BMI指数: {bmi:.1f}")

if bmi < 18.5:
    category = "偏瘦"
    advice = "建议适当增加营养摄入，加强锻炼增肌"
    emoji = "🍽️"
elif bmi < 24:
    category = "正常"
    advice = "身材标准，继续保持健康的生活方式"
    emoji = "💪"
elif bmi < 28:
    category = "偏胖"
    advice = "建议控制饮食，增加有氧运动"
    emoji = "🏃"
else:
    category = "肥胖"
    advice = "建议咨询医生，制定科学的减重计划"
    emoji = "⚠️"

print(f"评估结果: {category} {emoji}")
print(f"健康建议: {advice}")

# ===== 成绩等级系统 =====
print()
print("=" * 40)
print("        成绩等级评定系统")
print("=" * 40)

students = [
    ("张三", 95),
    ("李四", 82),
    ("王五", 73),
    ("赵六", 61),
    ("钱七", 45),
    ("孙八", 88),
]

print(f"\\n{'姓名':>6} {'分数':>6} {'等级':>6} {'评语'}")
print("-" * 45)

excellent = good = medium = passed = failed = 0

for name, score in students:
    if not (0 <= score <= 100):
        print(f"{name:>6} {score:>6} {'无效':>6} 分数超出范围")
        continue

    if score >= 90:
        grade, comment = "A-优秀", "表现出色，继续保持！"
        excellent += 1
    elif score >= 80:
        grade, comment = "B-良好", "表现不错，再接再厉！"
        good += 1
    elif score >= 70:
        grade, comment = "C-中等", "还需努力，加油！"
        medium += 1
    elif score >= 60:
        grade, comment = "D-及格", "勉强通过，需要加把劲！"
        passed += 1
    else:
        grade, comment = "F-不及格", "需要重修，请认真复习。"
        failed += 1

    print(f"{name:>6} {score:>6} {grade:>6} {comment}")

total = len(students)
print(f"\\n--- 成绩统计 ---")
print(f"总人数: {total}")
print(f"优秀: {excellent}人 ({excellent/total*100:.0f}%)")
print(f"良好: {good}人 ({good/total*100:.0f}%)")
print(f"中等: {medium}人 ({medium/total*100:.0f}%)")
print(f"及格: {passed}人 ({passed/total*100:.0f}%)")
print(f"不及格: {failed}人 ({failed/total*100:.0f}%)")
pass_rate = (total - failed) / total * 100
print(f"及格率: {pass_rate:.0f}%")`,
      codeRunnable: true,
    },
  ],
}
