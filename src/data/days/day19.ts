import type { DayData } from '../types'

export const day19: DayData = {
  id: 19,
  title: '面向对象编程进阶',
  description: '深入学习Python面向对象编程的进阶特性，包括@property属性装饰器、__slots__、静态方法和类方法、继承与多态，以及super()的使用。',
  sections: [
    {
      title: '@property 属性装饰器',
      content: `@property 装饰器是Python中实现属性封装的优雅方式。它允许你像访问普通属性一样访问方法，同时在背后进行数据验证或计算。

@property 的核心价值：
1. 将方法调用伪装成属性访问，接口更加简洁
2. 可以在赋值时添加数据验证逻辑
3. 可以创建只读属性或计算属性
4. 无需修改外部调用代码即可增加内部逻辑

使用 @property 定义 getter，@属性名.setter 定义 setter，@属性名.deleter 定义 deleter。`,
      code: `class Temperature:
    """温度类，支持摄氏度和华氏度"""
    
    def __init__(self, celsius=0):
        self._celsius = celsius  # 用下划线表示"受保护"属性
    
    @property
    def celsius(self):
        """获取摄氏温度"""
        return self._celsius
    
    @celsius.setter
    def celsius(self, value):
        """设置摄氏温度（带验证）"""
        if value < -273.15:
            raise ValueError("温度不能低于绝对零度 (-273.15°C)")
        self._celsius = value
    
    @property
    def fahrenheit(self):
        """计算属性：华氏温度"""
        return self._celsius * 9 / 5 + 32
    
    @fahrenheit.setter
    def fahrenheit(self, value):
        """通过华氏温度设置"""
        self.celsius = (value - 32) * 5 / 9
    
    def __repr__(self):
        return f"Temperature({self._celsius}°C / {self.fahrenheit:.1f}°F)"

t = Temperature(25)
print(t)                  # Temperature(25°C / 77.0°F)
print(f"摄氏: {t.celsius}")
print(f"华氏: {t.fahrenheit}")

t.celsius = 100
print(f"\n设置为100°C后: {t}")

t.fahrenheit = 32
print(f"设置为32°F后: {t}")

try:
    t.celsius = -300  # 会触发验证
except ValueError as e:
    print(f"\n验证错误: {e}")

print("---")

# 只读属性示例
class Rectangle:
    def __init__(self, width, height):
        self._width = width
        self._height = height
    
    @property
    def width(self):
        return self._width
    
    @property
    def height(self):
        return self._height
    
    @property
    def area(self):
        """只读计算属性"""
        return self._width * self._height
    
    @property
    def perimeter(self):
        """只读计算属性"""
        return 2 * (self._width + self._height)

rect = Rectangle(10, 5)
print(f"宽: {rect.width}, 高: {rect.height}")
print(f"面积: {rect.area}, 周长: {rect.perimeter}")`,
      codeRunnable: true,
    },
    {
      title: '__slots__ 与内存优化',
      content: `默认情况下，Python对象使用 __dict__ 字典来存储实例属性，这很灵活但消耗更多内存。当你需要创建大量相同结构的对象时，可以使用 __slots__ 来优化内存使用。

__slots__ 是一个类变量，它告诉Python：这个类的实例只会有这些固定的属性。使用 __slots__ 后：
1. 实例不再有 __dict__，节省内存
2. 不能动态添加未声明的属性
3. 属性访问速度略有提升

需要注意 __slots__ 不会被子类继承，子类需要自己声明 __slots__。`,
      code: `import sys

# 普通类（使用 __dict__）
class PointDict:
    def __init__(self, x, y):
        self.x = x
        self.y = y

# 使用 __slots__ 的类
class PointSlots:
    __slots__ = ('x', 'y')
    
    def __init__(self, x, y):
        self.x = x
        self.y = y

p1 = PointDict(1, 2)
p2 = PointSlots(1, 2)

print(f"PointDict 实例大小: {sys.getsizeof(p1)} + dict {sys.getsizeof(p1.__dict__)} 字节")
print(f"PointSlots 实例大小: {sys.getsizeof(p2)} 字节")
print(f"PointDict 有 __dict__: {hasattr(p1, '__dict__')}")
print(f"PointSlots 有 __dict__: {hasattr(p2, '__dict__')}")

# __slots__ 不允许添加未声明的属性
p1.z = 3  # 正常工作
print(f"PointDict 动态添加 z={p1.z}")

try:
    p2.z = 3  # 会报错
except AttributeError as e:
    print(f"PointSlots 无法添加: {e}")

print("---")

# 大量对象的内存对比
class UserDict:
    def __init__(self, name, age, email):
        self.name = name
        self.age = age
        self.email = email

class UserSlots:
    __slots__ = ('name', 'age', 'email')
    
    def __init__(self, name, age, email):
        self.name = name
        self.age = age
        self.email = email

count = 1000
users_dict = [UserDict(f"user{i}", 20, f"user{i}@mail.com") for i in range(count)]
users_slots = [UserSlots(f"user{i}", 20, f"user{i}@mail.com") for i in range(count)]

size_dict = sum(sys.getsizeof(u) + sys.getsizeof(u.__dict__) for u in users_dict)
size_slots = sum(sys.getsizeof(u) for u in users_slots)

print(f"创建 {count} 个对象:")
print(f"  使用 __dict__: {size_dict:,} 字节")
print(f"  使用 __slots__: {size_slots:,} 字节")
print(f"  节省: {(1 - size_slots/size_dict) * 100:.1f}%")`,
      codeRunnable: true,
    },
    {
      title: '静态方法和类方法',
      content: `Python类中有三种方法：实例方法、类方法和静态方法。

实例方法（普通方法）：第一个参数是 self，通过实例调用，可以访问实例属性和类属性。

类方法（@classmethod）：第一个参数是 cls（代表类本身），通过类或实例调用，可以访问类属性但不能直接访问实例属性。常用于创建替代构造器（工厂方法）。

静态方法（@staticmethod）：没有 self 或 cls 参数，与普通函数类似，只是逻辑上属于这个类。适合放置与类相关但不需要访问类或实例状态的工具函数。`,
      code: `class Date:
    """日期类"""
    
    def __init__(self, year, month, day):
        self.year = year
        self.month = month
        self.day = day
    
    # 实例方法
    def display(self):
        print(f"{self.year}年{self.month}月{self.day}日")
    
    # 类方法：替代构造器
    @classmethod
    def from_string(cls, date_string):
        """从字符串创建日期，格式: YYYY-MM-DD"""
        year, month, day = map(int, date_string.split('-'))
        return cls(year, month, day)
    
    @classmethod
    def today_mock(cls):
        """模拟获取今天的日期"""
        return cls(2026, 3, 9)
    
    # 静态方法
    @staticmethod
    def is_valid_date(year, month, day):
        """验证日期是否合法"""
        if month < 1 or month > 12:
            return False
        days_in_month = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        if Date.is_leap_year(year):
            days_in_month[2] = 29
        return 1 <= day <= days_in_month[month]
    
    @staticmethod
    def is_leap_year(year):
        """判断是否为闰年"""
        return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)

# 使用实例方法
d1 = Date(2026, 1, 15)
d1.display()

# 使用类方法创建对象
d2 = Date.from_string("2026-03-09")
d2.display()

d3 = Date.today_mock()
d3.display()

# 使用静态方法
print(f"\n2024是闰年: {Date.is_leap_year(2024)}")
print(f"2023是闰年: {Date.is_leap_year(2023)}")
print(f"2026-02-29合法: {Date.is_valid_date(2026, 2, 29)}")
print(f"2024-02-29合法: {Date.is_valid_date(2024, 2, 29)}")

print("---")

# 实用示例：配置管理
class Config:
    _instance = None
    _data = {}
    
    @classmethod
    def get_instance(cls):
        if cls._instance is None:
            cls._instance = cls()
        return cls._instance
    
    def set(self, key, value):
        self._data[key] = value
    
    def get(self, key, default=None):
        return self._data.get(key, default)
    
    @staticmethod
    def validate_key(key):
        return isinstance(key, str) and len(key) > 0

config = Config.get_instance()
config.set("debug", True)
config.set("version", "1.0")

print(f"debug = {config.get('debug')}")
print(f"version = {config.get('version')}")
print(f"合法键名 'name': {Config.validate_key('name')}")
print(f"合法键名 '': {Config.validate_key('')}")`,
      codeRunnable: true,
    },
    {
      title: '继承与多态',
      content: `继承（Inheritance）是面向对象编程的三大特性之一，它允许一个类（子类）继承另一个类（父类）的属性和方法，从而实现代码复用。

多态（Polymorphism）是指不同类的对象可以对同一消息做出不同的响应。在Python中，多态通过"鸭子类型"自然实现——不关注对象的类型，只关注对象是否具有所需的方法。

Python支持多重继承，一个类可以同时继承多个父类。方法解析顺序（MRO）决定了多继承时的方法查找顺序，遵循C3线性化算法。`,
      code: `class Animal:
    """动物基类"""
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def speak(self):
        return "..."
    
    def info(self):
        return f"{self.name}, {self.age}岁"

class Dog(Animal):
    def __init__(self, name, age, breed):
        super().__init__(name, age)
        self.breed = breed
    
    def speak(self):
        return "汪汪汪!"
    
    def fetch(self):
        return f"{self.name}捡回了球"

class Cat(Animal):
    def __init__(self, name, age, indoor=True):
        super().__init__(name, age)
        self.indoor = indoor
    
    def speak(self):
        return "喵喵喵~"
    
    def purr(self):
        return f"{self.name}在呼噜呼噜"

class Parrot(Animal):
    def __init__(self, name, age, vocabulary=None):
        super().__init__(name, age)
        self.vocabulary = vocabulary or []
    
    def speak(self):
        if self.vocabulary:
            return f'{self.name}说: "{self.vocabulary[0]}"'
        return "啾啾!"

# 多态演示
animals = [
    Dog("旺财", 3, "柴犬"),
    Cat("咪咪", 2),
    Parrot("波利", 5, ["你好", "再见"]),
    Dog("大黄", 5, "金毛"),
    Cat("花花", 1, indoor=False),
]

print("动物们的声音:")
for animal in animals:
    print(f"  {animal.info()} -> {animal.speak()}")

print("\n类型检查:")
for animal in animals:
    print(f"  {animal.name}: "
          f"Animal={isinstance(animal, Animal)}, "
          f"Dog={isinstance(animal, Dog)}, "
          f"Cat={isinstance(animal, Cat)}")

print("---")

# 方法解析顺序(MRO)
class A:
    def who(self):
        return "A"

class B(A):
    def who(self):
        return "B"

class C(A):
    def who(self):
        return "C"

class D(B, C):
    pass

d = D()
print(f"D().who() = {d.who()}")
print(f"MRO: {[cls.__name__ for cls in D.__mro__]}")`,
      codeRunnable: true,
    },
    {
      title: 'super() 的使用',
      content: `super() 函数用于调用父类的方法，最常见的用途是在子类的 __init__ 中调用父类的构造函数来复用初始化逻辑。

super() 的优势：
1. 不需要硬编码父类名称，更灵活
2. 在多重继承中能正确遵循MRO顺序
3. 避免直接调用父类导致的重复初始化问题

super() 不仅用于 __init__，还可以在任何需要调用父类方法的地方使用。在方法重写时，如果想在子类中扩展而非完全替代父类的行为，super() 就非常有用。`,
      code: `class Logger:
    """日志基类"""
    def __init__(self, name):
        self.name = name
        self.logs = []
    
    def log(self, message):
        entry = f"[{self.name}] {message}"
        self.logs.append(entry)
        return entry
    
    def show_logs(self):
        print(f"\n{self.name} 的日志:")
        for entry in self.logs:
            print(f"  {entry}")

class TimestampLogger(Logger):
    """带时间戳的日志"""
    def __init__(self, name):
        super().__init__(name)
        self.count = 0
    
    def log(self, message):
        self.count += 1
        timestamped = f"#{self.count} {message}"
        return super().log(timestamped)

class FilterLogger(Logger):
    """带过滤的日志"""
    def __init__(self, name, min_level='INFO'):
        super().__init__(name)
        self.min_level = min_level
        self.levels = {'DEBUG': 0, 'INFO': 1, 'WARN': 2, 'ERROR': 3}
    
    def log(self, message, level='INFO'):
        if self.levels.get(level, 0) >= self.levels.get(self.min_level, 0):
            return super().log(f"[{level}] {message}")
        return None

# 使用TimestampLogger
ts_logger = TimestampLogger("应用")
ts_logger.log("服务启动")
ts_logger.log("用户登录")
ts_logger.log("处理请求")
ts_logger.show_logs()

print("---")

# 使用FilterLogger
f_logger = FilterLogger("系统", min_level='WARN')
f_logger.log("调试信息", 'DEBUG')
f_logger.log("一般信息", 'INFO')
f_logger.log("警告", 'WARN')
f_logger.log("错误!", 'ERROR')
f_logger.show_logs()

print("---")

# super()在多重继承中的行为
class Base:
    def __init__(self):
        print("Base.__init__")

class Left(Base):
    def __init__(self):
        print("Left.__init__")
        super().__init__()

class Right(Base):
    def __init__(self):
        print("Right.__init__")
        super().__init__()

class Child(Left, Right):
    def __init__(self):
        print("Child.__init__")
        super().__init__()

print("创建 Child 实例（注意调用顺序）:")
c = Child()
print(f"\nMRO: {' -> '.join(cls.__name__ for cls in Child.__mro__)}") `,
      codeRunnable: true,
    },
  ],
}
