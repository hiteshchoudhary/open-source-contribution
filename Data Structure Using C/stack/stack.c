
#include <stdio.h>
#include<stdbool.h>
#define maxsize 50

int stack[maxsize], top = -1;

void push();
void pop();
void display();
void peek(void);
void printSize(void);
bool isEmpty(void);
bool isFull(void);
void clearStack(void);


int main()
{
    int choice;
    
    do
    {
        printf("\n----stack----\n");
        printf("Press 1 for push\n");
        printf("Press 2 for pop\n");
        printf("Press 3 Peek (top element)\n");
        printf("Press 4 Size of stack\n");
        printf("Press 5 Check if empty\n");
        printf("Press 6 Check if full\n");
        printf("Press 7 for display\n");
        printf("Press 8 to clear stack\n");
        printf("Press 9 for exit\n");
        printf("enter your choice: ");
        scanf("%d",&choice);
        
        switch(choice)
        {
            case 1: push(); break;
            case 2: pop(); break;
            case 3: peek(); break;
            case 4: printSize(); break;
            case 5: printf("%s\n", isEmpty() ? "Stack is empty" : "Stack is not empty"); break;
            case 6: printf("%s\n", isFull() ? "Stack is full" : "Stack is not full"); break;
            case 7: display(); break;
            case 8: clearStack(); break;
            case 9: break;
            default: printf("Invalid choice");
        }
    }while(choice!=9);

    return 0;
}

void peek()
{
    if(top == -1)
        printf("Stack is empty!\n");
    else
        printf("peek element is: %d\n",stack[top]);
}

void printSize()
{ printf("stack size: %d\n",top+1); }

bool isEmpty()
{ return top == -1;}

bool isFull()
{ return top == maxsize-1;}

void clearStack()
{ top = -1; }

void push()
{
    if(top == maxsize - 1 )
    {
        printf("stack is overflow\n");
    }
    else
    {
        printf("enter value:");
        top++;
        scanf("%d",&stack[top]);
    }
}
void pop()
{
    if(top == -1){
        printf("stack is empty\n");
    }
    else
    {
        printf("deleted item %d\n",stack[top]);
        top--;
    }
}
void display()
{
    if (top == -1)
    {
        printf("stack is empty\n");
    }
    else
    {
        for(int i =0; i<=top; i++)
        {
            printf("%d\t",stack[i]);
        }
    }
}
