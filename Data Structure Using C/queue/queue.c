#include <stdio.h>
#define maxsize 10

int queue[maxsize];
int front = -1, rear = -1;

void enqueue();
void dequeue();
void display();
void peek_front();
void peek_rear();

int main()
{
    int choice;
    
    do
    {
        printf("\n----queue----\n");
        printf("Press 1 for enqueue\n");
        printf("Press 2 for dequeue\n");
        printf("Press 3 for display\n");
        printf("Press 4 for peek front\n");
        printf("Press 5 for peek rear\n");
        printf("Press 6 for exit\n");
        printf("enter your choice: ");
        scanf("%d", &choice);
        
        switch(choice)
        {
            case 1: enqueue(); break;
            case 2: dequeue(); break;
            case 3: display(); break;
            case 4: peek_front(); break;
            case 5: peek_rear(); break;
            case 6: break;
            default: printf("Invalid choice");
        }
    }while(choice != 6);
    
    return 0;
}

void enqueue()
{
    if(rear == maxsize - 1)
    {
        printf("queue is overflow\n");
    }
    else
    {
        printf("enter value: ");
        if(front == -1)
        {
            front = 0;
        }
        rear++;
        scanf("%d", &queue[rear]);
    }
}

void dequeue()
{
    if(front == -1 || front > rear)
    {
        printf("queue is empty\n");
        front = -1;
        rear = -1;
    }
    else
    {
        printf("deleted item: %d\n", queue[front]);
        front++;
    }
}

void display()
{
    if(front == -1 || front > rear)
    {
        printf("queue is empty\n");
    }
    else
    {
        printf("queue elements are: ");
        for(int i = front; i <= rear; i++)
        {
            printf("%d\t", queue[i]);
        }
        printf("\n");
    }
}

void peek_front()
{
    if(front == -1 || front > rear)
    {
        printf("queue is empty\n");
    }
    else
    {
        printf("front element: %d\n", queue[front]);
    }
}

void peek_rear()
{
    if(rear == -1 || front > rear)
    {
        printf("queue is empty\n");
    }
    else
    {
        printf("rear element: %d\n", queue[rear]);
    }
}
