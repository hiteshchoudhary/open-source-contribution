#include <stdio.h>
#define maxsize 10

int stack[maxsize], front = -1, rear = -1;

void push();
void pop();
void display();

int main()
{
    int choice;
    
    do
    {
        printf("\n----queue----\n");
        printf("Press 1 for enqueue\n");
        printf("Press 2 for dequeue\n");
        printf("Press 3 for display\n");
        printf("Press 4 for exit\n");
        printf("enter your choice: ");
        scanf("%d",&choice);
        
        switch(choice)
        {
            case 1: push(); break;
            case 2: pop(); break;
            case 3: display(); break;
            case 4: break;
            default: printf("Invalid choice");
        }
    }while(choice!=4);
}

void push()   // enqueue
{
    if(rear == maxsize - 1)
    {
        printf("queue is overflow");
    }
    else
    {
        if(front == -1)
            front = 0;
        rear++;
        printf("enter value:");
        scanf("%d",&stack[rear]);
    }
}

void pop()    // dequeue
{
    if(front == -1 || front > rear)
    {
        printf("queue is empty");
    }
    else
    {
        printf("deleted item %d", stack[front]);
        front++;
    }
}

void display()
{
    if(front == -1 || front > rear)
    {
        printf("queue is empty");
    }
    else
    {
        for(int i = front; i <= rear; i++)
        {
            printf("%d\t", stack[i]);
        }
    }
}
