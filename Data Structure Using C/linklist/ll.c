#include <stdio.h>
#include <stdlib.h>

struct Node
{
    int data;
    struct Node *next;
};

struct Node *head = NULL;

void insert();
void deleteNode();
void display();

int main()
{
    int choice;

    do
    {
        printf("\n---- LINKED LIST ----\n");
        printf("Press 1 for Insert\n");
        printf("Press 2 for Delete\n");
        printf("Press 3 for Display\n");
        printf("Press 4 for Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch(choice)
        {
            case 1:
                insert();
                break;

            case 2:
                deleteNode();
                break;

            case 3:
                display();
                break;

            case 4:
                break;

            default:
                printf("Invalid choice");
        }

    } while(choice != 4);

    return 0;
}

void insert()
{
    struct Node *newNode;

    newNode = (struct Node *)malloc(sizeof(struct Node));

    printf("Enter value: ");
    scanf("%d", &newNode->data);

    newNode->next = NULL;

    if(head == NULL)
    {
        head = newNode;
    }
    else
    {
        struct Node *temp = head;

        while(temp->next != NULL)
        {
            temp = temp->next;
        }

        temp->next = newNode;
    }

    printf("Node inserted successfully");
}

void deleteNode()
{
    struct Node *temp;

    if(head == NULL)
    {
        printf("Linked list is empty");
    }
    else
    {
        temp = head;
        head = head->next;

        printf("Deleted item: %d", temp->data);

        free(temp);
    }
}

void display()
{
    struct Node *temp;

    if(head == NULL)
    {
        printf("Linked list is empty");
    }
    else
    {
        temp = head;

        while(temp != NULL)
        {
            printf("%d\t", temp->data);
            temp = temp->next;
        }
    }
}