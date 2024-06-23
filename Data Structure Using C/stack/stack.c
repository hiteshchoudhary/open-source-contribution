#include <stdio.h>
#define maxsize 10

int stack[maxsize], top = -1;

void push();
void pop();
void display();

int main()
{
    int choice;
    
    do
    {
        printf("\n----stack----\n");
        printf("Press 1 for push\n");
        printf("Press 2 for pop\n");
        printf("Press 3 for display\n");
        printf("Press 4 for exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);
        
        switch(choice)
        {
            case 1: push(); break;
            case 2: pop(); break;
            case 3: display(); break;
            case 4: break;
            default: printf("Invalid choice\n");
        }
    } while(choice != 4);
    
    return 0; // Ensure the program terminates properly
}

void push()
{
    if(top == maxsize - 1)
    {
        printf("Stack is overflow\n");
    }
    else
    {
        printf("Enter value: ");
        top++;
        scanf("%d", &stack[top]);
    }
}

void pop()
{
    if(top == -1)
    {
        printf("Stack is empty\n");
    }
    else
    {
        printf("Deleted item %d\n", stack[top]);
        top--;
    }
}

void display()
{
    if(top == -1)
    {
        printf("Stack is empty\n");
    }
    else
    {
        for(int i = 0; i <= top; i++)
        {
            printf("%d\t", stack[i]);
        }
        printf("\n");
    }
}
