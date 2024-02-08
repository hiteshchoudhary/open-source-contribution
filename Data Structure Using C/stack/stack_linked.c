#include<stdio.h>
#include<stdlib.h>

struct node{
	int data;
	struct node *next;
};

struct node *top=NULL;

void push();
void display();
void pop();

int main(){
	int op;
	while(1){
		printf("1.Push\n2.Pop\n3.Display\n4.Exit\n");
		printf("Enter your choice:");
		scanf("%d",&op);
		switch(op){
			case 1:
				push();
				break;
			case 2:
				pop();
				break;
			case 3:
				display();
				break;
			default:
				exit(0);
			}
		}
	return 0;
}

void push(){
	struct node *newnode,*temp;
	newnode=(struct node *)malloc(sizeof(struct node));
	if(newnode==NULL){
		printf("No memory Allocation\n");
		return ;
	}
	else{
		printf("Enter data:");
		scanf("%d",&newnode->data);
		if(top==NULL){
			newnode->next=NULL;
		}
		else{
			newnode->next=top;
		}
		top=newnode;
		printf("Insertion Completed\n");
	}
}

void pop(){
	if(top==NULL){
		printf("Underflow\n");
	}
	else{
		struct node *temp;
		temp=top;
		top=temp->next;
		printf("Deleted Element:%d\n",temp->data);
		free(temp);
	}
}

void display(){
	if(top==NULL){
		printf("NO elements\n");
	}
	else{
		struct node *temp=top;
		while(temp->next!=NULL){
			printf("%d\n",temp->data);
			temp=temp->next;
		}
		printf("%d\n",temp->data);
	}
}
