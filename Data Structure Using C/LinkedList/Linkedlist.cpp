#include <iostream>
using namespace std;

struct node{
    int data;
    node *next;
};

node *first = NULL;




int main(){

    int A[5] = {12,13,14,15,16};
    first = new node;
    first->data = A[0];
    first->next = NULL;
    node *last = first;
   


    for(int i = 1 ; i<5; i++){
        node *q = new node;
        q->data = A[i];
        q->next = NULL;
        last->next = q;
        last = q;
    }
    node *p = first;

    while(p!= NULL){
        cout<<p->data<<endl;
        p = p->next;
    }


    return 0;

}
