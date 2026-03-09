import type { DayData } from '../types'

export const day20: DayData = {
  id: 20,
  title: '面向对象编程应用',
  description: '学习Python面向对象编程的高级应用，包括运算符重载、__str__和__repr__方法、抽象类ABC、常用魔术方法，以及综合案例——扑克牌游戏。',
  sections: [
    {
      title: '__str__ 与 __repr__',
      content: `__str__ 和 __repr__ 是Python中最常用的两个魔术方法，它们定义了对象的字符串表示形式。

__str__：面向用户的友好表示，当你使用 print() 或 str() 时被调用。应该返回可读性好的描述。

__repr__：面向开发者的精确表示，当你在交互式环境中直接输入对象名或使用 repr() 时被调用。理想情况下应返回一个可以重建该对象的字符串（如合法的Python表达式）。

如果只实现一个，优先实现 __repr__，因为当 __str__ 未定义时，Python会退而使用 __repr__。`,
      code: `class Vector:
    """二维向量"""
    
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
    
    def __str__(self):
        return f"({self.x}, {self.y})"

v = Vector(3, 4)
print(f"str:  {v}")         # (3, 4)
print(f"repr: {repr(v)}")   # Vector(3, 4)
print(f"列表中: {[v]}")     # [Vector(3, 4)]  列表中用repr

print("---")

class Product:
    """商品类"""
    
    def __init__(self, name, price, stock):
        self.name = name
        self.price = price
        self.stock = stock
    
    def __str__(self):
        status = "有货" if self.stock > 0 else "缺货"
        return f"{self.name} - ¥{self.price:.2f} ({status})"
    
    def __repr__(self):
        return f"Product(name={self.name!r}, price={self.price}, stock={self.stock})"

products = [
    Product("Python编程入门", 59.9, 100),
    Product("数据结构与算法", 79.0, 0),
    Product("机器学习实战", 99.5, 50),
]

print("商品列表:")
for p in products:
    print(f"  {p}")

print(f"\n开发者视图:")
for p in products:
    print(f"  {repr(p)}")`,
      codeRunnable: true,
    },
    {
      title: '运算符重载',
      content: `Python允许通过定义特殊的魔术方法来重载运算符，让自定义类的对象支持 +、-、*、==、<、[] 等运算操作。

常见的运算符对应的魔术方法：
- __add__(self, other)：+ 加法
- __sub__(self, other)：- 减法
- __mul__(self, other)：* 乘法
- __eq__(self, other)：== 等于
- __lt__(self, other)：< 小于
- __le__(self, other)：<= 小于等于
- __len__(self)：len() 函数
- __getitem__(self, key)：[] 索引访问
- __contains__(self, item)：in 运算符
- __bool__(self)：bool() 转换

运算符重载让你的类能融入Python的语法体系，使用起来更加自然。`,
      code: `class Vector:
    """支持运算的二维向量"""
    
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
    
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    
    def __sub__(self, other):
        return Vector(self.x - other.x, self.y - other.y)
    
    def __mul__(self, scalar):
        return Vector(self.x * scalar, self.y * scalar)
    
    def __rmul__(self, scalar):
        return self.__mul__(scalar)
    
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y
    
    def __abs__(self):
        return (self.x ** 2 + self.y ** 2) ** 0.5
    
    def __bool__(self):
        return self.x != 0 or self.y != 0
    
    def __neg__(self):
        return Vector(-self.x, -self.y)

v1 = Vector(2, 3)
v2 = Vector(4, 1)

print(f"v1 = {v1}")
print(f"v2 = {v2}")
print(f"v1 + v2 = {v1 + v2}")
print(f"v1 - v2 = {v1 - v2}")
print(f"v1 * 3 = {v1 * 3}")
print(f"2 * v2 = {2 * v2}")
print(f"|v1| = {abs(v1):.2f}")
print(f"-v1 = {-v1}")
print(f"v1 == v2: {v1 == v2}")
print(f"v1 == Vector(2,3): {v1 == Vector(2, 3)}")

zero = Vector(0, 0)
print(f"\nbool(v1) = {bool(v1)}")
print(f"bool(zero) = {bool(zero)}")

print("---")

# __getitem__ 和 __len__
class Matrix:
    """简单矩阵"""
    def __init__(self, data):
        self.data = data
        self.rows = len(data)
        self.cols = len(data[0]) if data else 0
    
    def __getitem__(self, index):
        return self.data[index]
    
    def __len__(self):
        return self.rows
    
    def __repr__(self):
        rows = ['  [' + ', '.join(f'{x:4}' for x in row) + ']' for row in self.data]
        return 'Matrix([\\n' + ',\\n'.join(rows) + '\\n])'

m = Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print(f"矩阵:\n{m}")
print(f"行数: {len(m)}")
print(f"第2行: {m[1]}")
print(f"m[0][2] = {m[0][2]}")`,
      codeRunnable: true,
    },
    {
      title: '抽象类 ABC',
      content: `抽象类（Abstract Base Class，ABC）是一种不能被直接实例化的类，它定义了子类必须实现的方法接口。Python通过 abc 模块提供抽象类的支持。

使用抽象类的目的：
1. 定义统一的接口规范，确保所有子类都实现特定方法
2. 提供部分默认实现，减少子类的重复代码
3. 在大型项目中起到"契约"的作用

使用 @abstractmethod 装饰器标记的方法必须在子类中被实现，否则子类也无法实例化。抽象类可以包含非抽象的普通方法，为子类提供共享的默认行为。`,
      code: `from abc import ABC, abstractmethod
import math

class Shape(ABC):
    """图形抽象基类"""
    
    @abstractmethod
    def area(self):
        """计算面积（子类必须实现）"""
        pass
    
    @abstractmethod
    def perimeter(self):
        """计算周长（子类必须实现）"""
        pass
    
    def description(self):
        """非抽象方法，提供默认实现"""
        return (f"{self.__class__.__name__}: "
                f"面积={self.area():.2f}, 周长={self.perimeter():.2f}")

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return math.pi * self.radius ** 2
    
    def perimeter(self):
        return 2 * math.pi * self.radius

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height
    
    def perimeter(self):
        return 2 * (self.width + self.height)

class Triangle(Shape):
    def __init__(self, a, b, c):
        self.a, self.b, self.c = a, b, c
    
    def area(self):
        s = (self.a + self.b + self.c) / 2
        return math.sqrt(s * (s - self.a) * (s - self.b) * (s - self.c))
    
    def perimeter(self):
        return self.a + self.b + self.c

# 不能直接实例化抽象类
try:
    s = Shape()
except TypeError as e:
    print(f"无法实例化抽象类: {e}")

# 使用子类
shapes = [
    Circle(5),
    Rectangle(4, 6),
    Triangle(3, 4, 5),
]

print("\n图形信息:")
for shape in shapes:
    print(f"  {shape.description()}")

# 多态：统一接口处理不同图形
total_area = sum(s.area() for s in shapes)
print(f"\n总面积: {total_area:.2f}")

# isinstance 检查
print(f"\nCircle 是 Shape 的子类: {issubclass(Circle, Shape)}")
print(f"Circle(5) 是 Shape 实例: {isinstance(Circle(5), Shape)}")`,
      codeRunnable: true,
    },
    {
      title: '常用魔术方法',
      content: `魔术方法（Magic Methods / Dunder Methods）是Python中以双下划线开头和结尾的特殊方法。它们让你的类能与Python的内置语法和函数无缝集成。

常用魔术方法分类：
- 构造与析构：__init__、__del__、__new__
- 字符串表示：__str__、__repr__、__format__
- 比较运算：__eq__、__lt__、__gt__、__le__、__ge__、__ne__
- 算术运算：__add__、__sub__、__mul__、__truediv__
- 容器协议：__len__、__getitem__、__setitem__、__contains__、__iter__
- 上下文管理：__enter__、__exit__
- 可调用：__call__`,
      code: `class SmartList:
    """增强列表：支持多种魔术方法"""
    
    def __init__(self, *items):
        self._data = list(items)
    
    def __repr__(self):
        return f"SmartList({', '.join(repr(x) for x in self._data)})"
    
    def __len__(self):
        return len(self._data)
    
    def __getitem__(self, index):
        return self._data[index]
    
    def __setitem__(self, index, value):
        self._data[index] = value
    
    def __contains__(self, item):
        return item in self._data
    
    def __iter__(self):
        return iter(self._data)
    
    def __add__(self, other):
        if isinstance(other, SmartList):
            return SmartList(*self._data, *other._data)
        return NotImplemented
    
    def __eq__(self, other):
        if isinstance(other, SmartList):
            return self._data == other._data
        return NotImplemented
    
    def __call__(self, func):
        """让对象可调用：对每个元素应用函数"""
        return SmartList(*[func(x) for x in self._data])
    
    def __bool__(self):
        return len(self._data) > 0

sl = SmartList(1, 2, 3, 4, 5)
print(f"列表: {sl}")
print(f"长度: {len(sl)}")
print(f"索引 sl[2]: {sl[2]}")
print(f"切片 sl[1:4]: {sl[1:4]}")
print(f"3 in sl: {3 in sl}")

sl2 = SmartList(6, 7, 8)
print(f"\n合并: {sl + sl2}")
print(f"相等: {sl == SmartList(1, 2, 3, 4, 5)}")

# __call__: 将对象当函数使用
doubled = sl(lambda x: x * 2)
print(f"\n每项乘2: {doubled}")

squared = sl(lambda x: x ** 2)
print(f"每项平方: {squared}")

print(f"\n遍历:")
for item in sl:
    print(f"  {item}", end="")
print()

print("---")

# __enter__ 和 __exit__: 上下文管理器
class Timer:
    """计时器上下文管理器"""
    import time
    
    def __init__(self, label="操作"):
        self.label = label
    
    def __enter__(self):
        import time
        self.start = time.time()
        print(f"[{self.label}] 开始计时...")
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        import time
        elapsed = time.time() - self.start
        print(f"[{self.label}] 耗时: {elapsed:.4f}秒")
        return False

with Timer("求和计算"):
    total = sum(range(1000000))
    print(f"  结果: {total}")`,
      codeRunnable: true,
    },
    {
      title: '综合案例：扑克牌游戏',
      content: `让我们用面向对象编程的知识来实现一个简单的扑克牌游戏。这个案例综合运用了类的定义、魔术方法、运算符重载、继承等概念，展示了OOP在实际编程中的强大表现力。

游戏规则简化版：比大小。每位玩家从洗好的牌堆中抽取指定数量的牌，比较手牌中最大的一张，最大牌的玩家获胜。`,
      code: `import random

class Card:
    """扑克牌"""
    SUITS = ['♠', '♥', '♦', '♣']
    RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    
    def __init__(self, suit, rank):
        self.suit = suit
        self.rank = rank
    
    @property
    def value(self):
        return self.RANKS.index(self.rank)
    
    def __repr__(self):
        return f"{self.suit}{self.rank}"
    
    def __eq__(self, other):
        return self.value == other.value
    
    def __lt__(self, other):
        return self.value < other.value
    
    def __gt__(self, other):
        return self.value > other.value


class Deck:
    """一副牌"""
    def __init__(self):
        self.cards = [Card(s, r) for s in Card.SUITS for r in Card.RANKS]
        self.shuffle()
    
    def shuffle(self):
        random.shuffle(self.cards)
    
    def deal(self, count=1):
        dealt = self.cards[:count]
        self.cards = self.cards[count:]
        return dealt
    
    def __len__(self):
        return len(self.cards)
    
    def __repr__(self):
        return f"Deck({len(self)}张牌)"


class Player:
    """玩家"""
    def __init__(self, name):
        self.name = name
        self.hand = []
        self.wins = 0
    
    def receive(self, cards):
        self.hand.extend(cards)
    
    def best_card(self):
        return max(self.hand) if self.hand else None
    
    def show_hand(self):
        hand_str = ' '.join(str(c) for c in sorted(self.hand))
        best = self.best_card()
        print(f"  {self.name}: [{hand_str}] (最大: {best})")
    
    def clear_hand(self):
        self.hand = []


class Game:
    """扑克牌比大小游戏"""
    def __init__(self, player_names, cards_per_round=5):
        self.players = [Player(name) for name in player_names]
        self.cards_per_round = cards_per_round
    
    def play_round(self, round_num):
        deck = Deck()
        print(f"\n{'='*40}")
        print(f"  第 {round_num} 轮")
        print(f"{'='*40}")
        
        for player in self.players:
            player.clear_hand()
            player.receive(deck.deal(self.cards_per_round))
        
        print("各玩家手牌:")
        for player in self.players:
            player.show_hand()
        
        best_players = []
        best_value = -1
        for player in self.players:
            card = player.best_card()
            if card.value > best_value:
                best_value = card.value
                best_players = [player]
            elif card.value == best_value:
                best_players.append(player)
        
        if len(best_players) == 1:
            winner = best_players[0]
            winner.wins += 1
            print(f"\n  本轮赢家: {winner.name}!")
        else:
            names = '、'.join(p.name for p in best_players)
            for p in best_players:
                p.wins += 1
            print(f"\n  平局: {names}")
    
    def play(self, rounds=3):
        print("扑克牌比大小游戏开始!")
        print(f"玩家: {', '.join(p.name for p in self.players)}")
        print(f"每轮发牌: {self.cards_per_round}张, 共{rounds}轮")
        
        for i in range(1, rounds + 1):
            self.play_round(i)
        
        print(f"\n{'='*40}")
        print("  最终成绩")
        print(f"{'='*40}")
        for player in sorted(self.players, key=lambda p: p.wins, reverse=True):
            print(f"  {player.name}: {player.wins}胜")
        
        max_wins = max(p.wins for p in self.players)
        champions = [p for p in self.players if p.wins == max_wins]
        if len(champions) == 1:
            print(f"\n  冠军: {champions[0].name}!")
        else:
            print(f"\n  并列冠军: {'、'.join(p.name for p in champions)}!")

random.seed(42)
game = Game(["小明", "小红", "小刚"], cards_per_round=5)
game.play(rounds=3)`,
      codeRunnable: true,
    },
  ],
}
