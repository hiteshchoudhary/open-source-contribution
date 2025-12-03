#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct Node {
    int data;
    struct Node *next;
} Node;

// Stack top pointer
Node *mainStack = NULL;
Node *undoStack = NULL;
Node *redoStack = NULL;

// Function prototypes
void push(Node **stack, int value);
int pop(Node **stack);
int peek(Node *stack);
int isEmpty(Node *stack);
void display(Node *stack);

void pushMain(int value);
void undo();
void redo();
void saveToFile(char *filename);
void loadFromFile(char *filename);

//======================= MAIN PROGRAM ===========================
int main() {
    int choice, value;

    while (1) {
        printf("\n======= ADVANCED STACK MENU =======\n");
        printf("1. Push\n");
        printf("2. Pop\n");
        printf("3. Undo\n");
        printf("4. Redo\n");
        printf("5. Display Stack\n");
        printf("6. Save Stack to File\n");
        printf("7. Load Stack From File\n");
        printf("8. Exit\n");
        printf("Enter choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter value: ");
                scanf("%d", &value);
                pushMain(value);
                break;

            case 2:
                value = pop(&mainStack);
                if (value != -1) {
                    push(&undoStack, value); // allow undo
                    printf("Popped: %d\n", value);
                }
                break;

            case 3:
                undo();
                break;

            case 4:
                redo();
                break;

            case 5:
                display(mainStack);
                break;

            case 6:
                saveToFile("stack_data.txt");
                break;

            case 7:
                loadFromFile("stack_data.txt");
                break;

            case 8:
                printf("Exiting...\n");
                return 0;

            default:
                printf("Invalid choice!\n");
        }
    }
}

//===================== BASIC STACK FUNCTIONS =====================

void push(Node **stack, int value) {
    Node *newNode = (Node*) malloc(sizeof(Node));
    newNode->data = value;
    newNode->next = *stack;
    *stack = newNode;
}

int pop(Node **stack) {
    if (*stack == NULL) {
        printf("Error: Stack is empty.\n");
        return -1;
    }
    Node *temp = *stack;
    int value = temp->data;
    *stack = (*stack)->next;
    free(temp);
    return value;
}

int peek(Node *stack) {
    if (stack == NULL) {
        printf("Stack empty.\n");
        return -1;
    }
    return stack->data;
}

int isEmpty(Node *stack) {
    return stack == NULL;
}

void display(Node *stack) {
    if (stack == NULL) {
        printf("Stack is empty.\n");
        return;
    }

    printf("Stack contents: ");
    Node *temp = stack;
    while (temp != NULL) {
        printf("%d ", temp->data);
        temp = temp->next;
    }
    printf("\n");
}

//===================== ADVANCED OPERATIONS =======================

void pushMain(int value) {
    push(&mainStack, value);
    // Clearing redo on new operation
    while (!isEmpty(redoStack))
        pop(&redoStack);
}

void undo() {
    if (isEmpty(mainStack)) {
        printf("Nothing to undo.\n");
        return;
    }
    int val = pop(&mainStack);
    push(&undoStack, val);
    printf("Undo: removed %d\n", val);
}

void redo() {
    if (isEmpty(undoStack)) {
        printf("Nothing to redo.\n");
        return;
    }
    int val = pop(&undoStack);
    push(&mainStack, val);
    push(&redoStack, val);
    printf("Redo: restored %d\n", val);
}

//===================== FILE SAVE/LOAD ============================

void saveToFile(char *filename) {
    FILE *fp = fopen(filename, "w");
    if (!fp) {
        printf("Error opening file.\n");
        return;
    }

    Node *temp = mainStack;
    while (temp != NULL) {
        fprintf(fp, "%d\n", temp->data);
        temp = temp->next;
    }

    fclose(fp);
    printf("Stack saved to %s\n", filename);
}

void loadFromFile(char *filename) {
    FILE *fp = fopen(filename, "r");
    if (!fp) {
        printf("Error: File not found.\n");
        return;
    }

    // Clear current stack
    while (!isEmpty(mainStack))
        pop(&mainStack);

    int value;
    while (fscanf(fp, "%d", &value) != EOF) {
        push(&mainStack, value);
    }

    fclose(fp);
    printf("Stack loaded from %s\n", filename);
}
