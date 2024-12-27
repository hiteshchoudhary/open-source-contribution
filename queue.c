#include<stdio.h>
#include<conio.h>
int f=0,b=0,q[100];

int enQ(int s){
    if(b<s){
        int element;
        printf("\nEnter element :");
        scanf("%d",&element);
        q[b]=element;
        b++;
        printf("b= %d\n",b);
        printf("s= %d\n",s);
    }else{
        printf("Queue is full\n");
    }
    return 0;
}

int deQ(){
    if(f<b){
        printf("removed element is :");
        printf("%d \n",q[f]);
        f++;
    }else{
        printf("Queue is empty\n");
    }
    return 0;
}

void display(){
    int i;
    printf("Queue is :");
    for(i=f;i<b;i++){
        printf("%d ",q[i]);
    }
    printf("\n");
}

int main(){
    int s;
    printf("Enter the number of elements you want to enter: ");
    scanf("%d",&s);
    int q[s];

    do{
        int ch;
        printf("1. Enqueue\n2. Dequeue\n3. Display\n4. Exit \n");
        scanf("%d",&ch);
        switch(ch){
            case 1: 
            enQ(s);
            break;

            case 2: 
            deQ();
            break;

            case 3:
            display();
            break;

            case 4:
            return 0;
        }
    }
    while(1);
}