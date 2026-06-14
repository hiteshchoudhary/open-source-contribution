#include <stdio.h>
#include <stdlib.h>

#define MAXSIZE 10

int stack[MAXSIZE], top = -1;

void push();
void pop();
void display();
void peek();

int main() {
    int choice;

    do {
        printf("\n---- Stack Operations ----\n");
        printf("1. Push\n");
        printf("2. Pop\n");
        printf("3. Display\n");
        printf("4. Peek\n");
        printf("5. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1: push(); break;
            case 2: pop(); break;
            case 3: display(); break;
            case 4: peek(); break;
            case 5: printf("Exiting...\n"); break;
            default: printf("Invalid choice. Try again.\n");
        }
    } while (choice != 5);

    return 0;
}

void push() {
    if (top == MAXSIZE - 1) {
        printf("Stack Overflow! Cannot push more elements.\n");
    } else {
        int val;
        printf("Enter value: ");
        scanf("%d", &val);
        stack[++top] = val;
        printf("%d pushed successfully.\n", val);
    }
}

void pop() {
    if (top == -1) {
        printf("Stack Underflow! Stack is empty.\n");
    } else {
        printf("Popped: %d\n", stack[top--]);
    }
}

void peek() {
    if (top == -1) {
        printf("Stack is empty.\n");
    } else {
        printf("Top element: %d\n", stack[top]);
    }
}

void display() {
    if (top == -1) {
        printf("Stack is empty.\n");
    } else {
        printf("Stack (top to bottom): ");
        for (int i = top; i >= 0; i--) {
            printf("%d ", stack[i]);
        }
        printf("\n");
    }
}