import type { DayData } from '../types'

export const day18: DayData = {
  id: 18,
  title: '面向对象编程入门',
  description: '学习Python面向对象编程的基础概念，包括类的定义、__init__构造方法、实例属性和方法、对象的创建与使用，为后续OOP进阶打下基础。',
  sections: [
    {
      title: '类和对象的概念',
      content: `面向对象编程（Object-Oriented Programming，简称OOP）是一种重要的编程范式。它通过将数据和操作数据的方法组织在一起，形成"对象"，来模拟现实世界中的事物。

核心概念：
- 类（Class）：对象的蓝图或模板，定义了一类事物共有的属性和行为
- 对象（Object）：类的实例，是根据类创建的具体事物
- 属性（Attribute）：对象的数据，描述对象的状态
- 方法（Method）：对象的行为，定义对象能做什么

打个比方：类就像建筑图纸，对象就是根据图纸建造出来的房子。同一张图纸可以建造多栋房子，每栋房子都有相同的结构，但地址、住户等具体信息各不相同。`,
      code: `# 最简单的类
class Dog:
    pass

# 创建对象（实例化）
dog1 = Dog()
dog2 = Dog()

print(type(dog1))        # <class '__main__.Dog'>
print(isinstance(dog1, Dog))  # True
print(dog1 is dog2)      # False（两个不同的对象）

# 可以动态添加属性（但不推荐这样做）
dog1.name = "旺财"
dog1.age = 3
print(f"{dog1.name}, {dog1.age}岁")

print("---")

# 用类组织相关数据和行为
class Student:
    school = "Python大学"  # 类属性，所有实例共享
    
    def __init__(self, name, grade):
        self.name = name      # 实例属性
        self.grade = grade    # 实例属性
    
    def introduce(self):      # 实例方法
        print(f"大家好，我是{self.school}的{self.name}，{self.grade}年级")

s1 = Student("小明", 2)
s2 = Student("小红", 3)

s1.introduce()  # 大家好，我是Python大学的小明，2年级
s2.introduce()  # 大家好，我是Python大学的小红，3年级

# 类属性是共享的
print(f"s1的学校: {s1.school}")
print(f"s2的学校: {s2.school}")
print(f"是同一个值: {s1.school is s2.school}")`,
      codeRunnable: true,
    },
    {
      title: '__init__ 构造方法',
      content: `__init__ 是Python类中最重要的特殊方法（也叫魔术方法或双下方法），它在创建对象时自动被调用，用于初始化对象的属性。

__init__ 方法的特点：
1. 第一个参数必须是 self，代表新创建的实例本身
2. 可以接受额外的参数，用于初始化实例属性
3. 不需要返回值（不能 return 非 None 值）
4. 每次创建新对象时自动调用

self 参数是Python的约定名称，它让实例方法能够访问和修改实例的属性。虽然可以用其他名称代替，但强烈建议始终使用 self。`,
      code: `class BankAccount:
    """银行账户类"""
    
    def __init__(self, owner, balance=0):
        """初始化账户
        
        Args:
            owner: 账户持有人
            balance: 初始余额，默认为0
        """
        self.owner = owner
        self.balance = balance
        self.transactions = []  # 交易记录
        print(f"账户创建成功！持有人: {owner}, 余额: {balance}元")
    
    def deposit(self, amount):
        """存款"""
        if amount <= 0:
            print("存款金额必须大于0")
            return
        self.balance += amount
        self.transactions.append(f"存入 {amount}元")
        print(f"存入 {amount}元，当前余额: {self.balance}元")
    
    def withdraw(self, amount):
        """取款"""
        if amount <= 0:
            print("取款金额必须大于0")
            return
        if amount > self.balance:
            print(f"余额不足！当前余额: {self.balance}元")
            return
        self.balance -= amount
        self.transactions.append(f"取出 {amount}元")
        print(f"取出 {amount}元，当前余额: {self.balance}元")
    
    def show_history(self):
        """显示交易记录"""
        print(f"\n{self.owner} 的交易记录:")
        if not self.transactions:
            print("  暂无交易记录")
        for i, t in enumerate(self.transactions, 1):
            print(f"  {i}. {t}")
        print(f"  当前余额: {self.balance}元")

# 创建账户并操作
account = BankAccount("张三", 1000)
account.deposit(500)
account.withdraw(200)
account.withdraw(2000)
account.deposit(300)
account.show_history()`,
      codeRunnable: true,
    },
    {
      title: '实例属性和实例方法',
      content: `实例属性是绑定在具体对象上的数据，每个对象都有独立的一份。实例方法是定义在类中、以 self 作为第一个参数的函数，它可以访问和修改实例的属性。

关于属性访问的规则：
- 通过 self.属性名 在方法内部访问实例属性
- 通过 对象.属性名 在外部访问实例属性
- 实例属性优先于类属性：如果实例和类有同名属性，访问时优先返回实例属性

方法本质上就是函数，只不过第一个参数固定为 self。调用方法时，Python会自动将对象传入 self 参数。`,
      code: `class Circle:
    """圆形类"""
    
    pi = 3.14159265  # 类属性
    
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        """计算面积"""
        return self.pi * self.radius ** 2
    
    def perimeter(self):
        """计算周长"""
        return 2 * self.pi * self.radius
    
    def scale(self, factor):
        """缩放半径"""
        self.radius *= factor
    
    def info(self):
        """显示信息"""
        print(f"圆 (r={self.radius:.2f}): "
              f"面积={self.area():.2f}, 周长={self.perimeter():.2f}")

c1 = Circle(5)
c2 = Circle(10)

c1.info()
c2.info()

c1.scale(2)
print("\nc1 放大2倍后:")
c1.info()

print("---")

# 类属性 vs 实例属性
class Counter:
    count = 0  # 类属性：记录创建了多少个实例
    
    def __init__(self, name):
        self.name = name       # 实例属性
        Counter.count += 1     # 修改类属性
        self.id = Counter.count
    
    def show(self):
        print(f"Counter #{self.id}: {self.name} (总数: {Counter.count})")

a = Counter("Alpha")
b = Counter("Beta")
c = Counter("Gamma")

a.show()
b.show()
c.show()

# 类属性通过类名访问
print(f"\n共创建了 {Counter.count} 个Counter实例")`,
      codeRunnable: true,
    },
    {
      title: '创建和使用对象',
      content: `掌握了类的基本定义后，让我们通过一个更完整的例子来练习创建和使用对象。这个例子展示了如何设计一个实用的类，包括数据封装、方法交互和对象之间的协作。

设计类时的建议：
1. 明确类的职责——一个类应该只负责一件事
2. 属性用于存储状态，方法用于修改状态或执行行为
3. 提供有意义的方法名，让代码具有可读性
4. 适当使用默认参数值简化对象创建`,
      code: `class TodoList:
    """待办事项管理"""
    
    def __init__(self, title="我的待办"):
        self.title = title
        self.tasks = []
    
    def add(self, task, priority="普通"):
        """添加任务"""
        self.tasks.append({
            'content': task,
            'priority': priority,
            'done': False
        })
        print(f"✓ 已添加: {task} [优先级: {priority}]")
    
    def complete(self, index):
        """完成任务"""
        if 0 <= index < len(self.tasks):
            self.tasks[index]['done'] = True
            print(f"✓ 已完成: {self.tasks[index]['content']}")
        else:
            print(f"无效索引: {index}")
    
    def show(self):
        """显示所有任务"""
        print(f"\n{'=' * 35}")
        print(f"  {self.title}")
        print(f"{'=' * 35}")
        if not self.tasks:
            print("  (暂无任务)")
        for i, task in enumerate(self.tasks):
            status = "✓" if task['done'] else "○"
            pri = f"[{task['priority']}]" if task['priority'] != "普通" else ""
            print(f"  {i}. {status} {task['content']} {pri}")
        done_count = sum(1 for t in self.tasks if t['done'])
        print(f"\n  进度: {done_count}/{len(self.tasks)}")
        print(f"{'=' * 35}")
    
    def pending_count(self):
        """未完成任务数"""
        return sum(1 for t in self.tasks if not t['done'])

# 使用示例
todo = TodoList("Python学习计划")
todo.add("学习类和对象", "高")
todo.add("完成练习题")
todo.add("阅读官方文档", "高")
todo.add("写一个小项目", "低")

todo.show()

todo.complete(0)
todo.complete(1)

todo.show()

print(f"还有 {todo.pending_count()} 个任务未完成")`,
      codeRunnable: true,
    },
    {
      title: '综合案例：学生成绩管理',
      content: `通过一个学生成绩管理系统的综合案例，把本节课学到的所有知识点串联起来。这个案例涉及多个对象的创建与交互，展示了面向对象编程在实际场景中的应用。

通过这个例子你可以看到，面向对象编程的核心优势在于：
- 将相关的数据和行为组织在一起
- 通过方法提供清晰的操作接口
- 对象之间可以相互协作完成复杂任务`,
      code: `class Student:
    """学生类"""
    def __init__(self, name, student_id):
        self.name = name
        self.student_id = student_id
        self.scores = {}
    
    def add_score(self, subject, score):
        self.scores[subject] = score
    
    def average(self):
        if not self.scores:
            return 0
        return sum(self.scores.values()) / len(self.scores)
    
    def highest(self):
        if not self.scores:
            return None
        best = max(self.scores, key=self.scores.get)
        return best, self.scores[best]
    
    def report(self):
        print(f"  {self.name} (学号: {self.student_id})")
        for subj, score in self.scores.items():
            level = "优秀" if score >= 90 else "良好" if score >= 80 else "及格" if score >= 60 else "不及格"
            print(f"    {subj}: {score} ({level})")
        print(f"    平均分: {self.average():.1f}")


class Classroom:
    """班级类"""
    def __init__(self, name):
        self.name = name
        self.students = []
    
    def add_student(self, student):
        self.students.append(student)
    
    def class_average(self, subject):
        scores = [s.scores.get(subject, 0) for s in self.students if subject in s.scores]
        return sum(scores) / len(scores) if scores else 0
    
    def top_student(self):
        if not self.students:
            return None
        return max(self.students, key=lambda s: s.average())
    
    def summary(self):
        print(f"\n{'=' * 40}")
        print(f"  班级: {self.name} ({len(self.students)}人)")
        print(f"{'=' * 40}")
        for student in self.students:
            student.report()
            print()
        best = self.top_student()
        if best:
            print(f"  最优学生: {best.name} (均分: {best.average():.1f})")
        subjects = set()
        for s in self.students:
            subjects.update(s.scores.keys())
        for subj in sorted(subjects):
            print(f"  {subj} 班级平均: {self.class_average(subj):.1f}")
        print(f"{'=' * 40}")

# 创建班级
classroom = Classroom("Python一班")

# 添加学生和成绩
data = [
    ("小明", "2024001", {"语文": 85, "数学": 92, "英语": 78}),
    ("小红", "2024002", {"语文": 95, "数学": 88, "英语": 93}),
    ("小刚", "2024003", {"语文": 72, "数学": 95, "英语": 68}),
]

for name, sid, scores in data:
    student = Student(name, sid)
    for subj, score in scores.items():
        student.add_score(subj, score)
    classroom.add_student(student)

classroom.summary()`,
      codeRunnable: true,
    },
  ],
}
