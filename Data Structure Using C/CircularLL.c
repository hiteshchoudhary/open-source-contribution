#include <stdio.h>
#include<stdlib.h>


typedef struct Node{
    int data;
    struct Node *next;
}sNode;


void cllTraversal(sNode* head){
    sNode *ptr=head;
    do{
        printf("Element is : %d\n",ptr->data);
        ptr=ptr->next;

    }while(ptr!=head);
}

sNode * cllInsertatBeg(sNode * head,int data){
    sNode*ptr=(sNode*)malloc(sizeof(sNode));
    ptr->data=data;
    sNode *p=head->next;
    while(p->next!=head){
        p=p->next;
    }

    p->next=ptr;
    ptr->next=head;
    // head=ptr;
    // return head;
    return ptr;
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

    //linking second node and third node:
    second->data=27;
    second->next=third;

    //terminating the ll
    third->data=37;
    third->next=fourth;

    fourth->data=47;
    fourth->next=head;
    
    printf("LL before any operation:\n");
    cllTraversal(head);
    
    head=cllInsertatBeg(head,56);
    printf("LL After operation:\n");
    cllTraversal(head);
    


    return 0;
}