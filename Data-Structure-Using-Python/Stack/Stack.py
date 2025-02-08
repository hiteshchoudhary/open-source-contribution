from collections import deque
class stack:
    def __init__(self):
        self.stack = deque()
    def pop(self):
        return self.stack.pop()
    def push(self,x):
        self.stack.append(x)
    def top(self):
        return self.stack[-1]
    def length(self):
        return len(self.stack)
    def display(self):
        print(list(self.stack))
    
