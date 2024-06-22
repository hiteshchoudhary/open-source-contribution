#include <stdio.h>
#define maxsize 10

int queue[maxsize], front = -1, end = -1;

void enqueue();
void dequeue();
void display();

void enqueue(){
    if(end == maxsize){
        printf("Overflow");
    }
    else{
        printf("Enter a number");
        end++;
        scanf("%d",&queue[end]);
        if(front == -1){
            front = 0;
        }
    }
}

void dequeue(){
    if(front == -1){
        printf("Underflow");
    }
    else{
        printf("Deleted element is %d",queue[front]);
        front++;
    }
}

void display(){
    if(front == -1){
        printf("Queue is empty");
    }
    else{
        for(int i = front; i <= end; i++){
            printf("%d ",queue[i]);
        }
        printf("\n");
    }
}

int main(){

    int choice;
    
    do
    {
        printf("\n----queue----\n");
        printf("Press 1 for enqueue\n");
        printf("Press 2 for dequeue\n");
        printf("Press 3 for display\n");
        printf("Press 4 for exit\n");
        printf("enter your choice: ");
        scanf("%d",&choice);
        
        switch(choice)
        {
            case 1: enqueue(); break;
            case 2: dequeue(); break;
            case 3: display(); break;
            case 4: break;
            default: printf("Invalid choice");
        }
    }while(choice!=4);
}
