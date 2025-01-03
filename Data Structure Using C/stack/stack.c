
#include <stdio.h>
#define MAXSIZE 10

int stack[MAXSIZE], top = -1;

// Function prototypes
void push();
void pop();
void display();
void showMenu();

int main()
{
    int choice;

    do
    {
        showMenu();
        printf("Enter your choice: ");
        if (scanf("%d", &choice) != 1)
        {
            printf("Invalid input! Please enter a valid number.\n");
            while (getchar() != '\n')
                ; // Clear input buffer
            continue;
        }

        switch (choice)
        {
        case 1:
            push();
            break;
        case 2:
            pop();
            break;
        case 3:
            display();
            break;
        case 4:
            printf("Exiting the program.\n");
            break;
        default:
            printf("Invalid choice! Please try again.\n");
        }
    } while (choice != 4);

    return 0;
}

void showMenu()
{
    printf("\n---- STACK MENU ----\n");
    printf("1. Push\n");
    printf("2. Pop\n");
    printf("3. Display\n");
    printf("4. Exit\n");
}

void push()
{
    if (top == MAXSIZE - 1)
    {
        printf("Stack Overflow! Cannot add more elements.\n");
    }
    else
    {
        int value;
        printf("Enter value to push: ");
        if (scanf("%d", &value) != 1)
        {
            printf("Invalid input! Please enter a number.\n");
            while (getchar() != '\n')
                ; // Clear input buffer
            return;
        }
        stack[++top] = value;
        printf("%d pushed onto the stack.\n", value);
    }
}

void pop()
{
    if (top == -1)
    {
        printf("Stack Underflow! No elements to pop.\n");
    }
    else
    {
        printf("Popped element: %d\n", stack[top--]);
    }
}

void display()
{
    if (top == -1)
    {
        printf("Stack is empty.\n");
    }
    else
    {
        printf("Stack contents (top to bottom): ");
        for (int i = top; i >= 0; i--)
        {
            printf("%d ", stack[i]);
        }
        printf("\n");
    }
}
