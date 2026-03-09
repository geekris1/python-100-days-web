import type { DayData } from '../types'

export const day17: DayData = {
  id: 17,
  title: '函数高级应用',
  description: '深入理解Python装饰器的原理与应用，学习自定义装饰器、带参数的装饰器、@wraps的使用以及递归调用的技巧。',
  sections: [
    {
      title: '装饰器原理',
      content: `装饰器（Decorator）是Python中一种强大的设计模式，它允许你在不修改原函数代码的前提下，为函数添加额外的功能。装饰器本质上是一个高阶函数，它接受一个函数作为参数，返回一个新的函数。

装饰器的工作原理可以分解为以下步骤：
1. 定义一个装饰器函数，接受被装饰的函数作为参数
2. 在装饰器内部定义一个包装函数（wrapper），在其中调用原函数并添加额外逻辑
3. 返回包装函数

使用 @decorator_name 语法糖可以方便地应用装饰器，它等价于 func = decorator_name(func)。`,
      code: `import time

# 手动实现装饰器的过程
def say_hello():
    print("Hello, World!")

def my_decorator(func):
    def wrapper():
        print("--- 函数调用前 ---")
        func()
        print("--- 函数调用后 ---")
    return wrapper

# 手动装饰
decorated_hello = my_decorator(say_hello)
decorated_hello()

print()

# 使用 @ 语法糖（等价写法）
@my_decorator
def say_goodbye():
    print("Goodbye, World!")

say_goodbye()

print()

# 实用案例：计时装饰器
def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} 执行耗时: {end - start:.4f}秒")
        return result
    return wrapper

@timer
def slow_sum(n):
    total = 0
    for i in range(n):
        total += i
    return total

result = slow_sum(1000000)
print(f"结果: {result}")`,
      codeRunnable: true,
    },
    {
      title: '自定义装饰器与 @wraps',
      content: `在编写装饰器时，一个常见的问题是被装饰后的函数会丢失原函数的元信息（如 __name__、__doc__ 等）。functools.wraps 装饰器可以解决这个问题，它会把原函数的元信息复制到包装函数上。

编写健壮的装饰器时，应当注意：
1. 使用 *args 和 **kwargs 让装饰器适用于任意参数的函数
2. 使用 @functools.wraps 保留原函数的元信息
3. 正确传递和返回原函数的返回值`,
      code: `from functools import wraps

# 不使用 @wraps 的问题
def bad_decorator(func):
    def wrapper(*args, **kwargs):
        """wrapper的文档"""
        return func(*args, **kwargs)
    return wrapper

@bad_decorator
def greet(name):
    """向某人打招呼"""
    return f"你好, {name}!"

print(f"函数名: {greet.__name__}")  # wrapper（丢失了原函数名）
print(f"文档: {greet.__doc__}")     # wrapper的文档

print("---")

# 使用 @wraps 修复
def good_decorator(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        """wrapper的文档"""
        return func(*args, **kwargs)
    return wrapper

@good_decorator
def greet2(name):
    """向某人打招呼"""
    return f"你好, {name}!"

print(f"函数名: {greet2.__name__}")  # greet2（保留了原函数名）
print(f"文档: {greet2.__doc__}")     # 向某人打招呼

print("---")

# 实用装饰器：日志记录
def log_call(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        args_str = ', '.join(repr(a) for a in args)
        kwargs_str = ', '.join(f'{k}={v!r}' for k, v in kwargs.items())
        all_args = ', '.join(filter(None, [args_str, kwargs_str]))
        print(f"调用 {func.__name__}({all_args})")
        result = func(*args, **kwargs)
        print(f"返回 {result!r}")
        return result
    return wrapper

@log_call
def add(a, b):
    return a + b

@log_call
def multiply(a, b):
    return a * b

add(3, 5)
print()
multiply(4, 7)`,
      codeRunnable: true,
    },
    {
      title: '带参数的装饰器',
      content: `有时我们需要装饰器本身也能接受参数，以便根据不同参数产生不同的装饰效果。带参数的装饰器需要再嵌套一层函数：最外层接受装饰器的参数，中间层接受被装饰的函数，最内层是实际的包装函数。

这种三层嵌套的结构看起来复杂，但理解了各层的职责后就很清晰：
- 第一层：接收装饰器参数，返回真正的装饰器
- 第二层：接收被装饰的函数，返回包装函数
- 第三层：实际执行逻辑的包装函数`,
      code: `from functools import wraps

# 带参数的装饰器：重复执行
def repeat(n):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            results = []
            for i in range(n):
                result = func(*args, **kwargs)
                results.append(result)
            return results
        return wrapper
    return decorator

@repeat(3)
def say_hi(name):
    print(f"Hi, {name}!")
    return f"greeted {name}"

results = say_hi("Python")
print(f"结果: {results}")

print("---")

# 带参数的装饰器：权限检查
def require_role(role):
    def decorator(func):
        @wraps(func)
        def wrapper(user, *args, **kwargs):
            if user.get('role') != role:
                print(f"权限不足！需要 '{role}' 角色，当前为 '{user.get('role')}'")
                return None
            return func(user, *args, **kwargs)
        return wrapper
    return decorator

@require_role('admin')
def delete_user(user, target_id):
    print(f"管理员 {user['name']} 删除了用户 {target_id}")
    return True

admin = {'name': '管理员', 'role': 'admin'}
normal = {'name': '普通用户', 'role': 'user'}

delete_user(admin, 1001)
delete_user(normal, 1001)

print("---")

# 带参数的装饰器：缓存结果（带过期次数）
def cache(max_size=128):
    def decorator(func):
        _cache = {}
        @wraps(func)
        def wrapper(*args):
            if args in _cache:
                print(f"  [缓存命中] {func.__name__}{args}")
                return _cache[args]
            result = func(*args)
            if len(_cache) >= max_size:
                _cache.pop(next(iter(_cache)))
            _cache[args] = result
            return result
        return wrapper
    return decorator

@cache(max_size=10)
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(f"fibonacci(10) = {fibonacci(10)}")
print(f"fibonacci(10) = {fibonacci(10)}")`,
      codeRunnable: true,
    },
    {
      title: '多个装饰器叠加',
      content: `Python允许对一个函数同时使用多个装饰器，装饰器的执行顺序是从下往上（从最靠近函数的装饰器开始装饰），但调用时的执行顺序是从上往下（最外层的装饰器最先执行）。

理解装饰器的叠加顺序对于调试和正确使用装饰器非常重要。你可以把多个装饰器想象成洋葱的层次结构，装饰的过程是从内到外包裹，调用的过程是从外到内穿透。`,
      code: `from functools import wraps

def bold(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        return f"<b>{func(*args, **kwargs)}</b>"
    return wrapper

def italic(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        return f"<i>{func(*args, **kwargs)}</i>"
    return wrapper

def underline(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        return f"<u>{func(*args, **kwargs)}</u>"
    return wrapper

@bold
@italic
@underline
def greet(name):
    return f"Hello, {name}"

# 等价于: greet = bold(italic(underline(greet)))
print(greet("Python"))
# 输出: <b><i><u>Hello, Python</u></i></b>

print("---")

# 实用示例：组合多个装饰器
def log(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print(f"[LOG] 调用 {func.__name__}")
        return func(*args, **kwargs)
    return wrapper

def validate_positive(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        for arg in args:
            if isinstance(arg, (int, float)) and arg < 0:
                raise ValueError(f"参数必须为正数，收到: {arg}")
        return func(*args, **kwargs)
    return wrapper

@log
@validate_positive
def calculate_area(width, height):
    return width * height

try:
    result = calculate_area(5, 3)
    print(f"面积: {result}")
except ValueError as e:
    print(f"错误: {e}")

try:
    result = calculate_area(-5, 3)
    print(f"面积: {result}")
except ValueError as e:
    print(f"错误: {e}")`,
      codeRunnable: true,
    },
    {
      title: '递归调用',
      content: `递归（Recursion）是指函数直接或间接地调用自身的编程技巧。递归函数必须包含两个要素：
1. 基线条件（Base Case）：递归结束的条件，防止无限递归
2. 递归步骤（Recursive Step）：将问题分解为更小的子问题

递归适合解决具有自相似结构的问题，如树遍历、分治算法、数学递推关系等。但需要注意Python默认的递归深度限制为1000层，可以通过 sys.setrecursionlimit() 修改，但过深的递归建议改用迭代方式实现。`,
      code: `# 经典递归：阶乘
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(f"5! = {factorial(5)}")    # 120
print(f"10! = {factorial(10)}")  # 3628800

# 经典递归：斐波那契数列
def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)

print(f"前10个斐波那契数: {[fib(i) for i in range(10)]}")

print("---")

# 递归：汉诺塔问题
def hanoi(n, source='A', target='C', auxiliary='B'):
    if n == 1:
        print(f"  移动盘子 {n}: {source} -> {target}")
        return
    hanoi(n - 1, source, auxiliary, target)
    print(f"  移动盘子 {n}: {source} -> {target}")
    hanoi(n - 1, auxiliary, target, source)

print("汉诺塔（3个盘子）:")
hanoi(3)

print("---")

# 递归：展平嵌套列表
def flatten(lst):
    result = []
    for item in lst:
        if isinstance(item, list):
            result.extend(flatten(item))
        else:
            result.append(item)
    return result

nested = [1, [2, 3], [4, [5, 6]], [[7, 8], 9]]
print(f"原始: {nested}")
print(f"展平: {flatten(nested)}")

# 递归：计算目录大小的模拟
def calc_size(node):
    if isinstance(node, int):
        return node
    return sum(calc_size(child) for child in node.values())

file_system = {
    'src': {'main.py': 100, 'utils.py': 50},
    'docs': {'readme.md': 30},
    'data.csv': 200,
}
print(f"总大小: {calc_size(file_system)} 字节")`,
      codeRunnable: true,
    },
  ],
}
