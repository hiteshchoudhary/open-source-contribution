#include <stdio.h>
#include <stdlib.h>

// Define the structure of a node
struct Node {
    int data;
    struct Node* next;
};

struct Node* head = NULL; // Head pointer to the singly linked list

// Function to traverse and display the list
void traverse() {
    if (head == NULL) {
        printf("List is empty.\n");
    } else {
        struct Node* temp = head;
        printf("List: ");
        while (temp != NULL) {
            printf("%d -> ", temp->data);
            temp = temp->next;
        }
        printf("NULL\n");
    }
}

// Function to insert a node at the end
void insertNode(int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = NULL;

    if (head == NULL) {
        head = newNode; // If the list is empty
    } else {
        struct Node* temp = head;
        while (temp->next != NULL) {
            temp = temp->next;
        }
        temp->next = newNode; // Insert at the end
    }
    printf("%d inserted into the list.\n", data);
}

// Function to delete a node by value
void deleteNode(int value) {
    if (head == NULL) {
        printf("List is empty. Nothing to delete.\n");
        return;
    }
    struct Node *temp = head, *prev = NULL;

    // Check if the head node needs to be deleted
    if (temp != NULL && temp->data == value) {
        head = temp->next;
        free(temp);
        printf("%d deleted from the list.\n", value);
        return;
    }

    // Traverse to find the node to delete
    while (temp != NULL && temp->data != value) {
        prev = temp;
        temp = temp->next;
    }

    if (temp == NULL) { // Value not found
        printf("Value %d not found in the list.\n", value);
        return;
    }

    prev->next = temp->next; // Unlink the node
    free(temp);
    printf("%d deleted from the list.\n", value);
}

// Function to search for a node
void searchNode(int value) {
    struct Node* temp = head;
    int position = 1;

    while (temp != NULL) {
        if (temp->data == value) {
            printf("%d found at position %d.\n", value, position);
            return;
        }
        temp = temp->next;
        position++;
    }
    printf("%d not found in the list.\n", value);
}

// Main function
int main() {
    int choice, value;

    printf("SINGLY LINKED LIST IMPLEMENTATION\n\n");
    while (1) {
        printf("Menu:\n");
        printf("1. Traverse\n");
        printf("2. Insert Node\n");
        printf("3. Delete Node\n");
        printf("4. Search Node\n");
        printf("5. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                traverse();
                break;
            case 2:
                printf("Enter value to insert: ");
                scanf("%d", &value);
                insertNode(value);
                break;
            case 3:
                printf("Enter value to delete: ");
                scanf("%d", &value);
                deleteNode(value);
                break;
            case 4:
                printf("Enter value to search: ");
                scanf("%d", &value);
                searchNode(value);
                break;
            case 5:
                printf("Exiting...\n");
                return 0;
            default:
                printf("Invalid choice. Try again.\n");
        }
        printf("\n");
    }
    return 0;
}
