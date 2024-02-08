// Stack is Non Primitive Data Structure And It is based On LIFO (Last In First Out)
// Real Life Example Are:- Keyboard Backspace Button, ctrl + z(undo action)

#include <stdio.h>

#define maxsize 10

int stack[maxsize], top = -1;

void push();
void pop();
void display();

void main()
{
    int choice;
    do
    {
        printf("\n----stack----\n");
        printf("Press 1 for push\n");
        printf("Press 2 for pop\n");
        printf("Press 3 for display\n");
        printf("Press 4 for exit\n");
        printf("Enter Your choice: ");
        scanf("%d",&choice);
        switch(choice)
        {
            case 1: push(); break;
            case 2: pop(); break;
            case 3: display(); break;
            case 4: break;
            default: printf("Invalid Choice");
        }
    }while(choice!=4);
}

void push()
{
    if (top == maxsize - 1)
    {
        printf("Stack is overflow");
    }
    else
    {
        printf("Enter Value: ");
        top++;
        scanf("%d",&stack[top]);
    }
}
void pop()
{
    if(top == -1){
        printf("Stack is empty");
    }
    else
    {
        printf("deleted item %d", stack[top]);
        top--;
    }
}
void display()
{
    if (top == -1)
    {
        printf("Stack is empty");
    }
    else
    {
        for(int i = 0; i<= top; i++)
        {
            printf("%d\t", stack[i]);
        }
    }
}