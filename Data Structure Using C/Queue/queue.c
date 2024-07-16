#include <stdio.h>
#define maxsize 10

int queue[maxsize], front = -1, rear = -1;

void enqueue()
{
    if (rear == maxsize - 1)
    {
        printf("Queue is overflow\n");
    }
    else
    {
        printf("Enter value: ");
        if (front == -1)
        {
            front = 0; // Initialize front
        }
        rear++;
        scanf("%d", &queue[rear]);
    }
}
void dequeue()
{
    if (front == -1 || front > rear)
    {
        printf("Queue is empty\n");
    }
    else
    {
        printf("Deleted item %d\n", queue[front]);
        front++;
        if (front > rear)
        { // Reset queue when it becomes empty
            front = rear = -1;
        }
    }
}

void display()
{
    if (front == -1)
    {
        printf("Queue is empty\n");
    }
    else
    {
        printf("Queue elements are: ");
        for (int i = front; i <= rear; i++)
        {
            printf("%d\t", queue[i]);
        }
        printf("\n");
    }
}

int main()
{
    int choice;

    do
    {
        printf("\n----queue----\n");
        printf("Press 1 for push\n");
        printf("Press 2 for pop\n");
        printf("Press 3 for display\n");
        printf("Press 4 for exit\n");
        printf("enter your choice: ");
        scanf("%d", &choice);

        switch (choice)
        {
        case 1:
            enqueue();
            break;
        case 2:
            dequeue();
            break;
        case 3:
            display();
            break;
        case 4:
            break;
        default:
            printf("Invalid choice");
        }
    } while (choice != 4);
}
