#include<iostream>
using namespace std;

class node{
    public:
    int data;
    node* next;
    node(int d){
        data = d;
        next = NULL;
    }
};

class queue{
    public:
    node* end;
    node* front;
    queue(){
        end = NULL;
        front = NULL;
    }
    bool isEmpty(){
        if(end == NULL) return true;
        return false;
    }
    void push_back(int d){
        if(isEmpty()){
            front = new node(d);
            end = front;
            return;
        }
        node* tmp = new node(d);
        end->next = tmp;
        end = tmp;
    }
    void pop_front(){
        if(isEmpty()){
            cout<< "Queue is Empty" << endl;
            return;
        }
        if(front == end){
            node* tmp = front;
            front = NULL;
            end = NULL;
            delete[] tmp;
            return;
        }
        node* tmp = front;
        front = front->next;
        delete[] tmp;
        
    }
    int top(){
        if(isEmpty()){
            cout << "Queue is Empty" << endl;
            return -1;
        }
        return front->data;
    }
};

int main(){
    queue q;
    q.push_back(2);
    q.push_back(4);
    cout<< q.top()<<endl;
    q.pop_front();
    cout<< q.top()<<endl;
    q.pop_front();
    cout<< q.top()<<endl;
    q.push_back(3);
    q.push_back(9);
    cout<< q.top()<<endl;
}