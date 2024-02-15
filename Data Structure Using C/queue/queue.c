#include <stdio.h>
#include <stdbool.h>
#define maxsize 10

// Array implementation of a queue

// You can enqueue, dequeue
// if full print Queue during enque and Exit
// if empty during dequeue print no itme and Exit
// dequeue: if not empty, print head and add increment head
// enqueue: if not full, add item to queue and increment tail

int queue[maxsize];
int head=0;
int tail=0;

// declarations
bool isEmpty();
bool isFull();
void enqueue();
void dequeue();
void print_queue();

bool isEmpty(){
    return head == tail;
}

bool isFull(){
    return (tail+1) % maxsize == head;
}

void print_queue(){
    for(int i = head; i!= tail; i=(i+1) % maxsize){
        printf(" %d ", queue[i]);
    }
    printf("\n");
}

void enqueue(){
    if(isFull()){
        printf("Queue is full \n");
        printf("Queue elements are: \n");
        print_queue();
        printf("\n");
        return;
    }
    printf("enter value:");
    scanf("%d", &queue[tail]);
    tail = (tail+1) % maxsize;
}

void dequeue(){
    if(isEmpty()){
        printf("Queue is empty, cannot dequeue\n");
        print_queue();
        return;
    }
    int item = queue[head];
    head = (head+1) % maxsize;
    print_queue();
}


int main()
{
    int choice;
    do
    {
        printf("\n----queue----\n");
        printf("Press 1 for enqueue\n");
        printf("Press 2 for dequeue\n");
        printf("Press 3 for print\n");
        printf("Press 4 for exit\n");
        printf("enter your choice: ");
        scanf("%d",&choice);
        
        switch(choice)
        {
            case 1: enqueue(); break;
            case 2: dequeue(); break;
            case 3: print_queue(); break;
            case 4: break;
            default: printf("Invalid choice");
        }
    }while(choice!=4);
}