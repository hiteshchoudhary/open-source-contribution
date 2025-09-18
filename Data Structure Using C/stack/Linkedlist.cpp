#include<iostream>
using namespace std;

class node{
public:
int data;
node* next=nullptr;

node(int d){
  data=d;
  }
};

void traverse(node* head){
  while(head!=nullptr){
    cout<<head->data<<"->";
    head=head->next;
  }
  cout<<"NULL";
  cout<<endl;
}

int main(){

  node* n1=new node(1);
  node* n2=new node(2);
  node* n3=new node(3);
  node* n4=new node(4);

  node* head=n1;
  n1->next=n2;
  n2->next=n3;
  n3->next=n4;

  traverse(head);

  return 0;
}