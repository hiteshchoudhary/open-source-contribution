#include <stdio.h>
#define MAX 5   // Maximum size of queue

int queue[MAX];
int front = -1, rear = -1;

// Function to insert (enqueue) element in queue
void enqueue(int value) {
    if (rear == MAX - 1) {
        printf("Queue Overflow! Cannot insert %d\n", value);
    } else {
        if (front == -1)   // first element
            front = 0;
        rear++;
        queue[rear] = value;
        printf("%d inserted into queue.\n", value);
    }
}

// Function to remove (dequeue) element from queue
void dequeue() {
    if (front == -1 || front > rear) {
        printf("Queue Underflow! Nothing to delete.\n");
    } else {
        printf("%d deleted from queue.\n", queue[front]);
        front++;
    }
}

// Function to display the queue
void display() {
    if (front == -1 || front > rear) {
        printf("Queue is empty.\n");
    } else {
        printf("Queue elements: ");
        for (int i = front; i <= rear; i++) {
            printf("%d ", queue[i]);
        }
        printf("\n");
    }
}

// Main function
int main() {
    int choice, value;

    while (1) {
        printf("\n--- Queue Menu ---\n");
        printf("1. Enqueue\n2. Dequeue\n3. Display\n4. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter value to insert: ");
                scanf("%d", &value);
                enqueue(value);
                break;
            case 2:
                dequeue();
                break;
            case 3:
                display();
                break;
            case 4:
                printf("Exiting program...\n");
                return 0;
            default:
                printf("Invalid choice! Try again.\n");
        }
    }
}
