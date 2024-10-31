#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

struct Node* front = NULL;
struct Node* rear = NULL;

void enqueue();
void dequeue();
void display();

int main() {
    int choice;

    do {
        printf("\n---- Queue (Linked List) ----\n");
        printf("Press 1 for Enqueue\n");
        printf("Press 2 for Dequeue\n");
        printf("Press 3 for Display\n");
        printf("Press 4 for Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);
        
        switch(choice) {
            case 1: enqueue(); break;
            case 2: dequeue(); break;
            case 3: display(); break;
            case 4: break;
            default: printf("Invalid choice\n");
        }
    } while(choice != 4);
}

void enqueue() {
    int value;
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    if(newNode == NULL) {
        printf("Memory allocation failed\n");
        return;
    }
    printf("Enter value to enqueue: ");
    scanf("%d", &value);

    newNode->data = value;
    newNode->next = NULL;

    if(rear == NULL) { 
        front = rear = newNode;
    } else {
        rear->next = newNode;
        rear = newNode;
    }
    printf("%d enqueued\n", value);
}

void dequeue() {
    if(front == NULL) {
        printf("Queue is empty (Underflow)\n");
    } else {
        struct Node* temp = front;
        printf("Dequeued item: %d\n", front->data);
        
        front = front->next;
        if(front == NULL) 
            rear = NULL;

        free(temp);
    }
}

void display() {
    if(front == NULL) {
        printf("Queue is empty\n");
    } else {
        struct Node* temp = front;
        printf("Queue elements: ");
        while(temp != NULL) {
            printf("%d\t", temp->data);
            temp = temp->next;
        }
        printf("\n");
    }
}
