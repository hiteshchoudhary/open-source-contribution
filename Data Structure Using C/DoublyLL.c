#include <stdio.h>
#include<stdlib.h>


typedef struct Node{
    int data;
    struct Node *prev;
    struct Node *next;
}sNode;


void DllTraversal(sNode* head){

    sNode* p=head;
    
    while (p->next!=NULL)
    {
        printf("element : %d\n",p->data);
        p=p->next;
    }
    printf("element : %d\n",p->data);
    
    printf("Reverse of Dll:\n");
    
    while (p!=NULL)
    {
        printf("element : %d\n",p->data);
        p=p->prev;
    }
    

    // printf("Reverse of Dll:\n");
    // do   
    // {
    //     printf("element: %d\n",p->data);
    //     p=p->prev;
    // }while (p->prev!=NULL);
    
}

int main()
{
    /* code */
    //alocating memory in heap
    struct Node *head = (struct Node*)malloc(sizeof(struct Node));
    struct Node *second = (struct Node*)malloc(sizeof(struct Node));
    struct Node *third = (struct Node*)malloc(sizeof(struct Node));
    struct Node *fourth = (struct Node*)malloc(sizeof(struct Node));
    //linking head node and second node:
    head->data=17;
    head->next=second;
    head->prev=NULL;

    //linking second node and third node:
    second->data=27;
    second->next=third;
    second->prev=head;

    third->data=37;
    third->next=fourth;
    third->prev=second;

    fourth->data=47;
    fourth->next=NULL;
    fourth->prev=third;

    printf("LL before any operation:\n");
    DllTraversal(head);
    
    


    return 0;
}