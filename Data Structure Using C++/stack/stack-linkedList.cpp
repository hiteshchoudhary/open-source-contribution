#include<iostream>
using namespace std;

template <typename T> class node
{
	public:
	T data;
	node<T>* next;
	public:
	node(T data){
		this->data = data;
		next = NULL;
	}
};

template <typename T> class stack{
    node<T>* last;
    node<T>* head;
	public:
    stack(){
	    last = NULL;
	    head = NULL;
    }
    bool empty(){
	    if(last == NULL) return true;
	    return false;
    }
    void push(T d){
	    if(empty()){
		    head = new node(d);
		    last = head;
		    return;
	    }
	    node<T>* tmp = new node(d);
	    last->next = tmp;
	    last = tmp;
    }
    void pop(){
	    if(empty()){
		    cout << " Stack is Empty " << endl;
		    return;
	    }
	    node<T>* curr = head;
	    node<T>* prev = NULL;
	    while(curr->next){
		    prev = curr;
		    curr = curr->next;
	    }
	    delete[] curr;
		last = prev;
		if(prev)
	    prev->next = NULL;
	    
    }
    int top(){
	    if(empty()){
		    cout<< " Stack is Empty " << endl;
		    return -1;
	    }
	    return last->data;
    }
};

int main(){
        stack<int> st;
        st.push(12);
		cout<< st.top() << endl;
		st.push(144);
		st.push(13);
		st.push(169);
		cout<< st.top() << endl;
		st.pop();
		cout<< st.top() << endl;
		st.pop();
		st.pop();
		st.pop();
		//st.pop_back();
        st.push(14);
		st.push(196);
		cout<< st.top() << endl;
}



