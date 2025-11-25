#include <stdio.h>
#define MAX 5   // Size of circular queue

int queue[MAX];
int front = -1, rear = -1;

// Function to insert (enqueue) element
void enqueue(int value) {
    if ((front == 0 && rear == MAX - 1) || (rear + 1) % MAX == front) {
        printf("Queue Overflow! Cannot insert %d\n", value);
    } else {
        if (front == -1)  // First element
            front = 0;
        rear = (rear + 1) % MAX;
        queue[rear] = value;
        printf("%d inserted into queue.\n", value);
    }
}

// Function to remove (dequeue) element
void dequeue() {
    if (front == -1) {
        printf("Queue Underflow! Nothing to delete.\n");
    } else {
        printf("%d deleted from queue.\n", queue[front]);
        if (front == rear) {  
            // Queue became empty
            front = rear = -1;
        } else {
            front = (front + 1) % MAX;
        }
    }
}

// Function to display queue elements
void display() {
    if (front == -1) {
        printf("Queue is empty.\n");
    } else {
        printf("Queue elements: ");
        int i = front;
        while (1) {
            printf("%d ", queue[i]);
            if (i == rear) break;
            i = (i + 1) % MAX;
        }
        printf("\n");
    }
}

// Main function
int main() {
    int choice, value;

    while (1) {
        printf("\n--- Circular Queue Menu ---\n");
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
