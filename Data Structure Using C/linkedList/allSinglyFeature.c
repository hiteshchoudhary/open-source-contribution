#include <stdio.h>
#include <stdlib.h>

struct node {
    int data;
    struct node *next;
};

struct node *head;


void creation(int n){
    struct node *ptr;
    ptr=(struct node*)malloc(sizeof(struct node));
    ptr=head;
    int data;
    printf("Enter the data\n");
    scanf("%d",&data);
    ptr->data=data;
    while(n>1){
        struct node *ptr2;
        ptr2=(struct node*)malloc(sizeof(struct node));
        int data;
        printf("Enter the data\n");
        scanf("%d",&data);
        ptr2->data=data;
        ptr2->next=NULL;
        ptr->next=ptr2;
        ptr=ptr->next;
        n--;
    }
}



void traversal(){
    int i=0;
    struct node*ptr;
    ptr=(struct node*)malloc(sizeof(struct node));
    ptr=head;
    while(ptr!=NULL){
        i++;
        printf(" data of %d node is %d\n",i,ptr->data);
        ptr=ptr->next;
    }
    
}



void insertionAtBeginning(int n){
    struct node*ptr;
    ptr=(struct node*)malloc(sizeof(struct node));
    ptr->data=n;
    ptr->next=head;
    head=ptr;
}


 void insertionAtLast(int n){
    struct node *ptr;
    struct node *ptr2;
    ptr=(struct node*)malloc(sizeof(struct node));
    ptr2=(struct node*)malloc(sizeof(struct node));
    ptr=head;
     while(ptr->next!=NULL){
         ptr=ptr->next;
    }
    ptr2->data=n;
    ptr->next=ptr2;
    ptr2->next=NULL;
 }


 void insertionInBetween(int n,int x){
     struct node *ptr;
     ptr=(struct node*)malloc(sizeof(struct node));
     struct node *ptr2;
     ptr2=(struct node*)malloc(sizeof(struct node));
     ptr=head;
     ptr2->data=n;
     int i=0;
     while(ptr!=NULL){
         i++;
         if(i == x - 1){
             break;
         }
         ptr=ptr->next;
     }
     ptr2->next=ptr->next;
     ptr->next=ptr2;
 }

void deletionAtbeginning(){
    struct node *ptr;
    ptr=(struct node*)malloc(sizeof(struct node));
    ptr=head;
    head=head->next;
    free(ptr);
}

void deletionAtLast(){
    struct node *ptr;
    ptr=(struct node*)malloc(sizeof(struct node));
    ptr=head->next;
    struct node *ptr2;
    ptr2=(struct node*)malloc(sizeof(struct node));
    ptr2=head;
    while(ptr->next!=NULL){
        ptr=ptr->next;
        ptr2=ptr2->next;
    }
    ptr2->next=NULL;
    free(ptr);
}

void deletionInBetween(int n){
    struct node *ptr;
    ptr=(struct node*)malloc(sizeof(struct node));
    ptr=head->next;
    struct node *ptr2;
    ptr2=(struct node*)malloc(sizeof(struct node));
    ptr2=head;
    int i=0;
    while(head!=NULL){
        if(i == n - 2){
            break;
        }
        ptr=ptr->next;
        ptr2=ptr2->next;
        i++;
    }
    
    ptr2->next=ptr->next;
    free(ptr);
}


int main(){
    head=(struct node*)malloc(sizeof(struct node));
    int m;
    printf("Enter the list number\n");
    scanf("%d",&m);
    creation(m);
    traversal();
    int n;
    printf("Enter for following operation\n 1.for insertionAtBeginning\n 2.for insertionInBetween\n 3.for insertionAtLast\n 4. for deletionAtbeginning\n 5.for deletionInBetween\n 6.for deletionAtLast\n");\
    scanf("%d",&n);
    switch(n){
     case 1:
        int data;
        printf("Enter the insertion number\n");
        scanf("%d",&data);
        insertionAtBeginning(data);
        traversal();
        break;        
    
    case 2:
        int data2;
        printf("Enter the insertion number\n");
        scanf("%d",&data2);
        int position;
        printf("Enter the position number\n");
        scanf("%d",&position);
        insertionInBetween(data2,position);
        traversal();
        break;
        
    case 3:
        int data3;
        printf("Enter the insertion number\n");
        scanf("%d",&data3);
        insertionAtLast(data3);
        traversal();
        break;

    case 4:
        deletionAtbeginning();
        traversal();
        break;

    case 5:
        int data4;
        printf("Enter the postion number\n");
        scanf("%d",&data4);
        deletionInBetween(data4);
        traversal();
        break;

    case 6:
        deletionAtLast();
        traversal();
        break;

    default:
    printf("Wrong input\n");
    break;
    }
     
     
    return 0;
}