//  Queue:- it is non primitive data structure and it is based on FIFO (First In First Out)
//  Real Life Example are:- Printer

//  Disadvantage of queue:- "Ek time baad queue mai overflow and empty dono condition hogi"
//  (if rear is present at maxsize of queue, though there may be empty slots at beginning , 
//  or at middle of queue, but queue will be reported as FULL.. , Solution is Use Circular Queue)


#include <stdio.h>
#define maxsize 10 //macro

int queue[maxsize], rear = -1, front = 0;

void insert();
void Delete();
void display();

void main()
{
    int choice;
    
    do
    
    {
        printf("\n----queue----\n");
        printf("Press 1 for insert\n");
        printf("Press 2 for Delete\n");
        printf("Press 3 for display\n");
        printf("Press 4 for exit\n");
        printf("enter your choice: ");
        scanf("%d",&choice);
        
        switch(choice)
        {
            case 1: insert(); break;
            case 2: Delete(); break;
            case 3: display(); break;
            case 4: break;
            default: printf("Invalid choice");
        }
    }while(choice!=4);
}


void insert()
{
    if(rear == maxsize - 1)
    {
        printf("queue is overflow");
    }
    else
    {
        printf("Enter a value: ");
        rear++;
        scanf("%d",&queue[rear]);
    }
}
void Delete()
{
    if(front > rear)
    {
        printf("queue is empty");
    }
    else
    {
        printf("item deleted %d",queue[front]);
        front++;
    }
}
void display()
{
    if(front > rear)
    {
        printf("queue is empty");
    }
    else
    {
        for (int i = front; i<=rear; i++)
        {
            printf("%d\t",queue[i]);
        }
    }
}