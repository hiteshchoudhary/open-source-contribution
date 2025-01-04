class Stack:
    def __init__(self):
        self.stack = []
        self.top = -1
        self.length = 5
    
    def push(self, data):
        if (self.top == self.length-1):
            print("Stack is full")
            return
        self.top +=  1
        self.stack.append(data)
    
    def pop(self):
        if (self.top == -1):
            print("Stack is empty")
            return
        
        item = self.stack.pop()
        self.top -= 1
        return item

s = Stack()
s.push(10)
s.push(20)
print(s.pop())


        