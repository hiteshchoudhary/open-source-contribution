#include <stdio.h>
#define SIZE 5

int queue[SIZE];
int front = -1, rear = -1;

void enqueue(int value) {
    if (rear == SIZE - 1)
        printf("Queue is full (Overflow)\n");
    else {
        if (front == -1) front = 0;
        rear++;
        queue[rear] = value;
        printf("Inserted %d\n", value);
    }
}

void dequeue() {
    if (front == -1 || front > rear)
        printf("Queue is empty (Underflow)\n");
    else {
        printf("Deleted %d\n", queue[front]);
        front++;
    }
}

void display() {
    if (front == -1 || front > rear)
        printf("Queue is empty\n");
    else {
        printf("Queue: ");
        for (int i = front; i <= rear; i++)
            printf("%d ", queue[i]);
        printf("\n");
    }
}

int main() {
    enqueue(10);
    enqueue(20);
    enqueue(30);
    display();

    dequeue();
    display();

    enqueue(40);
    enqueue(50);
    enqueue(60); // This will show overflow
    display();

    return 0;
}
