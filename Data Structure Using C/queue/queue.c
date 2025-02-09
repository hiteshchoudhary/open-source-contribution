#include <stdio.h>
#define SIZE 100

int queue[SIZE];
int n = 5;  
int rear = -1;  
int front = -1; 


void qTraverse() {
    if (front == -1 || front > rear) { 
        printf("Queue is empty.\n");
    } else {
        printf("Queue: ");
        for (int i = front; i <= rear; i++) {
            printf("%d ", queue[i]);
        }
        printf("\n");
    }
}


void enqueue(int ele) {
    if (rear == n - 1) { 
        printf("Queue Overflow. Cannot enqueue %d.\n", ele);
    } else {
        if (front == -1) { 
            front = 0;
        }
        rear++;
        queue[rear] = ele; 
        printf("%d is added to the queue.\n", ele);
        qTraverse();
    }
}


void dequeue() {
    if (front == -1 || front > rear) { 
        printf("Queue Underflow. Cannot dequeue.\n");
    } else {
        int ele = queue[front]; 
        front++;
        printf("%d is dequeued from the queue.\n", ele);
        if (front > rear) { 
            front = rear = -1;
        }
        qTraverse();
    }
}


int main() {
    int ele, choice;

    printf("QUEUE IMPLEMENTATION\n\n");

    while (1) {
        printf("Menu:\n");
        printf("1. TRAVERSE\n");
        printf("2. ENQUEUE\n");
        printf("3. DEQUEUE\n");
        printf("4. EXIT\n");
        printf("Enter Your Choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                qTraverse();
                break;
            case 2:
                printf("Enter the element to enqueue: ");
                scanf("%d", &ele);
                enqueue(ele);
                break;
            case 3:
                dequeue();
                break;
            case 4:
                printf("Exiting the program.\n");
                return 0;
            default:
                printf("Invalid choice. Please try again.\n");
        }
        printf("\n");
    }
    return 0;
}

