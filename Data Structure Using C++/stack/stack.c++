#include <iostream>
#define MAX 1000

class Stack {
private:
    int top;
    int arr[MAX];

public:
    Stack() { top = -1; }

    bool push(int x) {
        if (top >= (MAX - 1)) {
            std::cout << "Stack Overflow\n";
            return false;
        }
        arr[++top] = x;
        std::cout << x << " pushed into stack\n";
        return true;
    }

    int pop() {
        if (top < 0) {
            std::cout << "Stack Underflow\n";
            return -1;
        }
        return arr[top--];
    }

    int peek() {
        if (top < 0) {
            std::cout << "Stack is Empty\n";
            return -1;
        }
        return arr[top];
    }

    bool isEmpty() {
        return (top < 0);
    }
};

// Driver code
int main() {
    Stack s;
    s.push(10);
    s.push(20);
    s.push(30);

    std::cout << s.pop() << " popped from stack\n";
    std::cout << "Top element is " << s.peek() << "\n";
    std::cout << "Is stack empty? " << (s.isEmpty() ? "Yes" : "No") << "\n";

    return 0;
}
