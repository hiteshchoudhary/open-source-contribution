#include <stdio.h>
#include <stdlib.h>

// Node for Singly Linked List
struct Node {
    int data;
    struct Node* next;
};

// Node for Doubly Linked List
struct DNode {
    int data;
    struct DNode* prev;
    struct DNode* next;
};

// Node for Circular Linked List and Doubly Circular Linked List
struct CNode {
    int data;
    struct CNode* next;
    struct CNode* prev;
};

// Singly Linked List Functions
struct Node* createSinglyLinkedList(int data);
void insertSinglyLinked(struct Node** head, int data, int position);
struct Node* searchSinglyLinked(struct Node* head, int data);
void deleteSinglyLinked(struct Node** head, int position);
void displaySinglyLinked(struct Node* head);

// Doubly Linked List Functions
struct DNode* createDoublyLinkedList(int data);
void insertDoublyLinked(struct DNode** head, int data, int position);
struct DNode* searchDoublyLinked(struct DNode* head, int data);
void deleteDoublyLinked(struct DNode** head, int position);
void displayDoublyLinked(struct DNode* head);

// Circular Linked List Functions
struct CNode* createCircularLinkedList(int data);
void insertCircularLinked(struct CNode** head, int data, int position);
struct CNode* searchCircularLinked(struct CNode* head, int data);
void deleteCircularLinked(struct CNode** head, int position);
void displayCircularLinked(struct CNode* head);

// Doubly Circular Linked List Functions
struct CNode* createDoublyCircularLinkedList(int data);
void insertDoublyCircularLinked(struct CNode** head, int data, int position);
struct CNode* searchDoublyCircularLinked(struct CNode* head, int data);
void deleteDoublyCircularLinked(struct CNode** head, int position);
void displayDoublyCircularLinked(struct CNode* head);

int main() {
    // Singly Linked List
    struct Node* sll = createSinglyLinkedList(1);
    insertSinglyLinked(&sll, 2, 2);
    insertSinglyLinked(&sll, 3, 3);
    displaySinglyLinked(sll);
    deleteSinglyLinked(&sll, 2);
    displaySinglyLinked(sll);

    // Doubly Linked List
    struct DNode* dll = createDoublyLinkedList(1);
    insertDoublyLinked(&dll, 2, 2);
    insertDoublyLinked(&dll, 3, 3);
    displayDoublyLinked(dll);
    deleteDoublyLinked(&dll, 2);
    displayDoublyLinked(dll);

    // Circular Linked List
    struct CNode* cll = createCircularLinkedList(1);
    insertCircularLinked(&cll, 2, 2);
    insertCircularLinked(&cll, 3, 3);
    displayCircularLinked(cll);
    deleteCircularLinked(&cll, 2);
    displayCircularLinked(cll);

    // Doubly Circular Linked List
    struct CNode* dcll = createDoublyCircularLinkedList(1);
    insertDoublyCircularLinked(&dcll, 2, 2);
    insertDoublyCircularLinked(&dcll, 3, 3);
    displayDoublyCircularLinked(dcll);
    deleteDoublyCircularLinked(&dcll, 2);
    displayDoublyCircularLinked(dcll);

    return 0;
}

// Functions for Singly Linked List
struct Node* createSinglyLinkedList(int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

void insertSinglyLinked(struct Node** head, int data, int position) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    if (position == 1) {
        newNode->next = *head;
        *head = newNode;
        return;
    }
    struct Node* temp = *head;
    for (int i = 1; i < position - 1 && temp != NULL; i++)
        temp = temp->next;
    newNode->next = temp->next;
    temp->next = newNode;
}

struct Node* searchSinglyLinked(struct Node* head, int data) {
    struct Node* temp = head;
    while (temp != NULL) {
        if (temp->data == data)
            return temp;
        temp = temp->next;
    }
    return NULL;
}

void deleteSinglyLinked(struct Node** head, int position) {
    if (*head == NULL) return;
    struct Node* temp = *head;
    if (position == 1) {
        *head = temp->next;
        free(temp);
        return;
    }
    for (int i = 1; i < position - 1 && temp != NULL; i++)
        temp = temp->next;
    if (temp == NULL || temp->next == NULL) return;
    struct Node* next = temp->next->next;
    free(temp->next);
    temp->next = next;
}

void displaySinglyLinked(struct Node* head) {
    struct Node* temp = head;
    while (temp != NULL) {
        printf("%d -> ", temp->data);
        temp = temp->next;
    }
    printf("NULL\n");
}

// Functions for Doubly Linked List
struct DNode* createDoublyLinkedList(int data) {
    struct DNode* newNode = (struct DNode*)malloc(sizeof(struct DNode));
    newNode->data = data;
    newNode->prev = newNode->next = NULL;
    return newNode;
}

void insertDoublyLinked(struct DNode** head, int data, int position) {
    struct DNode* newNode = (struct DNode*)malloc(sizeof(struct DNode));
    newNode->data = data;
    if (position == 1) {
        newNode->next = *head;
        newNode->prev = NULL;
        if (*head != NULL) (*head)->prev = newNode;
        *head = newNode;
        return;
    }
    struct DNode* temp = *head;
    for (int i = 1; i < position - 1 && temp != NULL; i++)
        temp = temp->next;
    newNode->next = temp->next;
    newNode->prev = temp;
    if (temp->next != NULL)
        temp->next->prev = newNode;
    temp->next = newNode;
}

struct DNode* searchDoublyLinked(struct DNode* head, int data) {
    struct DNode* temp = head;
    while (temp != NULL) {
        if (temp->data == data)
            return temp;
        temp = temp->next;
    }
    return NULL;
}

void deleteDoublyLinked(struct DNode** head, int position) {
    if (*head == NULL) return;
    struct DNode* temp = *head;
    if (position == 1) {
        *head = temp->next;
        if (*head != NULL)
            (*head)->prev = NULL;
        free(temp);
        return;
    }
    for (int i = 1; i < position && temp != NULL; i++)
        temp = temp->next;
    if (temp == NULL) return;
    if (temp->next != NULL)
        temp->next->prev = temp->prev;
    if (temp->prev != NULL)
        temp->prev->next = temp->next;
    free(temp);
}

void displayDoublyLinked(struct DNode* head) {
    struct DNode* temp = head;
    while (temp != NULL) {
        printf("%d <-> ", temp->data);
        temp = temp->next;
    }
    printf("NULL\n");
}

// Functions for Circular Linked List
struct CNode* createCircularLinkedList(int data) {
    struct CNode* newNode = (struct CNode*)malloc(sizeof(struct CNode));
    newNode->data = data;
    newNode->next = newNode;
    return newNode;
}

void insertCircularLinked(struct CNode** head, int data, int position) {
    struct CNode* newNode = (struct CNode*)malloc(sizeof(struct CNode));
    newNode->data = data;
    if (position == 1) {
        if (*head == NULL) {
            newNode->next = newNode;
            *head = newNode;
        } else {
            struct CNode* temp = *head;
            while (temp->next != *head)
                temp = temp->next;
            temp->next = newNode;
            newNode->next = *head;
            *head = newNode;
        }
        return;
    }
    struct CNode* temp = *head;
    for (int i = 1; i < position - 1 && temp->next != *head; i++)
        temp = temp->next;
    newNode->next = temp->next;
    temp->next = newNode;
}

struct CNode* searchCircularLinked(struct CNode* head, int data) {
    struct CNode* temp = head;
    if (!head) return NULL;
    do {
        if (temp->data == data)
            return temp;
        temp = temp->next;
    } while (temp != head);
    return NULL;
}

void deleteCircularLinked(struct CNode** head, int position) {
    if (*head == NULL) return;
    struct CNode *temp = *head, *prev;
    if (position == 1) {
        while (temp->next != *head)
            temp = temp->next;
        if (temp == *head) {
            free(*head);
            *head = NULL;
            return;
        }
        temp->next = (*head)->next;
        free(*head);
        *head = temp->next;
        return;
    }
    struct CNode* curr = *head;
    for (int i = 1; i < position && curr->next != *head; i++) {
        prev = curr;
        curr = curr->next;
    }
    if (curr->next == *head) return;
    prev->next = curr->next;
    free(curr);
}

void displayCircularLinked(struct CNode* head) {
    if (head == NULL) return;
    struct CNode* temp = head;
    do {
        printf("%d -> ", temp->data);
        temp = temp->next;
    } while (temp != head);
    printf("(back to head)\n");
}

// Functions for Doubly Circular Linked List
struct CNode* createDoublyCircularLinkedList(int data) {
    struct CNode* newNode = (struct CNode*)malloc(sizeof(struct CNode));
    newNode->data = data;
    newNode->next = newNode;
    newNode->prev = newNode;
    return newNode;
}

void insertDoublyCircularLinked(struct CNode** head, int data, int position) {
    struct CNode* newNode = (struct CNode*)malloc(sizeof(struct CNode));
    newNode->data = data;
    if (position == 1) {
        if (*head == NULL) {
            newNode->next = newNode->prev = newNode;
            *head = newNode;
        } else {
            struct CNode* last = (*head)->prev;
            newNode->next = *head;
            newNode->prev = last;
            last->next = *head->prev = newNode;
            *head = newNode;
        }
        return;
    }
    struct CNode* temp = *head;
    for (int i = 1; i < position - 1 && temp->next != *head; i++)
        temp = temp->next;
    newNode->next = temp->next;
    newNode->prev = temp;
    temp->next->prev = newNode;
    temp->next = newNode;
}

struct CNode* searchDoublyCircularLinked(struct CNode* head, int data) {
    if (!head) return NULL;
    struct CNode* temp = head;
    do {
        if (temp->data == data)
            return temp;
        temp = temp->next;
    } while (temp != head);
    return NULL;
}

void deleteDoublyCircularLinked(struct CNode** head, int position) {
    if (*head == NULL) return;
    struct CNode *temp = *head;
    if (position == 1) {
        if (temp->next == *head) {
            free(*head);
            *head = NULL;
            return;
        }
        struct CNode* last = (*head)->prev;
        *head = (*head)->next;
        last->next = *head;
        (*head)->prev = last;
        free(temp);
        return;
    }
    for (int i = 1; i < position && temp->next != *head; i++)
        temp = temp->next;
    if (temp->next == *head) return;
    temp->prev->next = temp->next;
    temp->next->prev = temp->prev;
    free(temp);
}

void displayDoublyCircularLinked(struct CNode* head) {
    if (head == NULL) return;
    struct CNode* temp = head;
    do {
        printf("%d <-> ", temp->data);
        temp = temp->next;
    } while (temp != head);
    printf("(back to head)\n");
}
