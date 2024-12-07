#include <stdio.h>
#define maxsize 10

int queue[maxsize], front = -1, rear = -1;

void enqueue();
void dequeue();
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
        printf("Enter your choice: ");
        scanf("%d", &choice);
        
        switch(choice)
        {
            case 1: enqueue(); break;
            case 2: dequeue(); break;
            case 3: display(); break;
            case 4: break;
            default: printf("Invalid choice\n");
        }
    } while(choice != 4);

    return 0;
}

void enqueue()
{
    if (rear == maxsize - 1) 
    {
        printf("Queue is overflow\n");
    } 
    else 
    {
        if (front == -1) 
            front = 0;  // Initialize front when first element is added
        
        printf("Enter value: ");
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
        printf("Deleted item: %d\n", queue[front]);
        front++;
        
        // Reset front and rear if queue becomes empty
        if (front > rear) 
        {
            front = -1;
            rear = -1;
        }
    }
}

void display()
{
    if (front == -1 || front > rear) 
    {
        printf("Queue is empty\n");
    } 
    else 
    {
        printf("Queue elements: ");
        for (int i = front; i <= rear; i++) 
        {
            printf("%d\t", queue[i]);
        }
        printf("\n");
    }
}
