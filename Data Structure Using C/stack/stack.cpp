#include <iostream>
using namespace std;

#define MAXSIZE 10

class Stack {
private:
    int stack[MAXSIZE];
    int top;

public:
    Stack() {
        top = -1;
    }

    void push() {
        if (top == MAXSIZE - 1) {
            cout << "Stack overflow." << endl;
        } else {
            int value;
            cout << "Enter value to push: ";
            cin >> value;
            stack[++top] = value;
            cout << value << " pushed to stack." << endl;
        }
    }

    void pop() {
        if (top == -1) {
            cout << "Stack is empty. Nothing to pop." << endl;
        } else {
            cout << "Deleted item: " << stack[top--] << endl;
        }
    }

    void display() {
        if (top == -1) {
            cout << "Stack is empty." << endl;
        } else {
            cout << "Stack elements (top to bottom):" << endl;
            for (int i = top; i >= 0; i--) {
                cout << stack[i] << "\t";
            }
            cout << endl;
        }
    }
};

int main() {
    Stack s;
    int choice;

    do {
        cout << "\n---- Stack Menu ----" << endl;
        cout << "Press 1 for Push" << endl;
        cout << "Press 2 for Pop" << endl;
        cout << "Press 3 for Display" << endl;
        cout << "Press 4 for Exit" << endl;
        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice) {
            case 1: s.push(); break;
            case 2: s.pop(); break;
            case 3: s.display(); break;
            case 4: cout << "Exiting program." << endl; break;
            default: cout << "Invalid choice." << endl;
        }
    } while (choice != 4);

    return 0;
}
