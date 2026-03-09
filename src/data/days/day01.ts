import type { DayData } from '../types'

export const day01: DayData = {
  id: 1,
  title: '初识Python',
  description: '了解Python语言的发展历史、特点优势和广泛的应用领域，为学习之旅打下基础。',
  sections: [
    {
      title: 'Python简介',
      content: `Python由荷兰人Guido van Rossum于1991年发布，名字来源于他喜爱的喜剧团体Monty Python。经过三十多年的发展，Python已成为全球最受欢迎的编程语言之一。

Python的设计哲学强调代码的可读性和简洁性。它的语法非常接近自然语言（英语），使得初学者可以快速上手。Python之禅（The Zen of Python）是每个Python开发者都应该了解的设计原则。

在终端中输入 import this 就可以看到Python之禅的全部内容。`,
      code: `import this

# Python之禅中最重要的几条原则：
# Beautiful is better than ugly. 优美胜于丑陋
# Explicit is better than implicit. 明确胜于隐晦
# Simple is better than complex. 简单胜于复杂
# Readability counts. 可读性很重要`,
      codeRunnable: true,
    },
    {
      title: 'Python的优缺点',
      content: `Python的优点：

1. 简单易学：语法简洁清晰，非常适合编程初学者入门。
2. 开源免费：Python是开源的，可以自由使用和分发，甚至用于商业用途。
3. 跨平台：Python可以在Windows、macOS、Linux等多种操作系统上运行。
4. 丰富的库：拥有超过40万个第三方库，几乎可以完成任何任务。
5. 解释型语言：不需要编译，写完代码即可直接运行，开发效率极高。

Python的缺点：

1. 运行速度：作为解释型语言，执行速度比C/C++等编译型语言慢。
2. GIL限制：全局解释器锁限制了多线程的并行执行能力。
3. 移动开发：在移动应用开发领域，Python并不是主流选择。

不过对于大多数应用场景来说，Python的运行速度完全够用，而且可以通过C扩展等方式优化性能。`,
      code: `# 感受Python的简洁之美
# 用一行代码交换两个变量的值
a, b = 10, 20
print(f"交换前: a={a}, b={b}")

a, b = b, a
print(f"交换后: a={a}, b={b}")

# 在C/Java中，交换两个变量需要引入临时变量
# int temp = a; a = b; b = temp;
# Python只需要一行！`,
      codeRunnable: true,
    },
    {
      title: '安装Python环境',
      content: `要开始学习Python，首先需要安装Python解释器。

安装步骤：

1. 访问Python官网 https://www.python.org/downloads/
2. 下载最新的Python 3.x版本（推荐Python 3.10及以上）
3. 运行安装程序，务必勾选"Add Python to PATH"选项
4. 安装完成后，打开终端/命令行，输入 python --version 验证安装

macOS用户也可以使用Homebrew安装：brew install python3
Linux用户一般自带Python，可以通过包管理器更新到最新版本。

验证安装成功后，在终端输入 python 或 python3 即可进入Python交互式环境（REPL），在这里可以直接输入Python代码并立即看到执行结果。输入 exit() 或按 Ctrl+D 退出。`,
      code: `# 验证Python版本
import sys
print(f"Python版本: {sys.version}")
print(f"Python路径: {sys.executable}")

# 查看Python安装信息
import platform
print(f"操作系统: {platform.system()} {platform.release()}")
print(f"Python实现: {platform.python_implementation()}")`,
      codeRunnable: true,
    },
    {
      title: 'Python的应用领域',
      content: `Python几乎无处不在，以下是它最主要的应用领域：

1. Web开发：使用Django、Flask、FastAPI等框架可以快速构建网站和API服务。Instagram、Pinterest等知名网站都使用Python开发。

2. 数据科学与分析：NumPy、Pandas、Matplotlib等库让Python成为数据分析的首选语言。

3. 人工智能与机器学习：TensorFlow、PyTorch、scikit-learn等框架让Python在AI领域占据统治地位。

4. 自动化脚本：Python非常适合编写各种自动化脚本，如文件处理、网络爬虫、系统管理等。

5. 科学计算：在物理、化学、生物等科学研究中，Python被广泛用于数值计算和模拟。

6. 游戏开发：Pygame库可以用来开发2D游戏。

7. 网络爬虫：Scrapy、BeautifulSoup等库让网页数据抓取变得简单。

可以说，Python是一门真正的"万能胶水语言"。`,
      code: `# 让我们用Python做一些有趣的事情
# 生成一个简单的乘法口诀表

print("=== 九九乘法表 ===")
for i in range(1, 10):
    for j in range(1, i + 1):
        print(f"{j}×{i}={i*j}", end="\\t")
    print()

print()
print("看！只用几行代码就能生成完整的乘法表。")
print("这就是Python的魅力！")`,
      codeRunnable: true,
    },
  ],
}
