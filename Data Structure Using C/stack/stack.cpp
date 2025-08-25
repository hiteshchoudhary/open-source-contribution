#include<iostream>
#include<conio.h>
#include<Stack>
using namespace std;
class Stack
{
    int top;
    int maxsize;
    int *st;

public:
    Stack(int size)
    {
        maxsize = size;
        top = -1;
        st = new int[maxsize];
    }
    void push(int value)
    {
        if (top == maxsize - 1)
        {
            cout << "Stack is overflow" << endl;
        }
        else
        {
            top++;
            st[top] = value;
            cout << "Pushed " << value << " to Stack" << endl;
        }
    }
    void pop()
    {
        if (top == -1)
        {
            cout << "Stack is empty" << endl;
        }
        else
        {
            cout << "Popped " << st[top] << " from Stack" << endl;
            top--;
        }
    }
    void display()
    {
        if (top == -1)
        {
            cout << "Stack is empty" << endl;
        }
        else
        {
            cout << "Stack elements are: ";
            for (int i = top; i >= 0; i--)
            {
                cout << st[i] << " ";
            }
            cout << endl;
        }
    }
};
int main()
{
    
    int choice, value;
    int size;
    cout << "Enter the size of Stack: ";
    cin >> size;
    Stack s(size);
    do
    {
        cout << "\n----Stack----" << endl;
        cout << "Press 1 for push" << endl;
        cout << "Press 2 for pop" << endl;
        cout << "Press 3 for display" << endl;
        cout << "Press 4 for exit" << endl;
        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice)
        {
            case 1:
                cout << "Enter value: ";
                cin >> value;
                s.push(value);
                break;
            case 2:
                s.pop();
                break;
            case 3:
                s.display();
                break;
            case 4:
                break;
            default:
                cout << "Invalid choice" << endl;
        }
    } while (choice != 4);
    return 0;
}