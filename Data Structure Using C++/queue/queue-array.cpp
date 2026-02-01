#include<iostream>
using namespace std;

class queue{
	int* arr;
	int front;
	int last;
	int size;
	public:
	queue(int size){
		arr = new int(size);
		front = -1;
		last = -1;
		this->size = size;
	}
	bool isEmpty(){
		if(front == -1 && last == -1)return true;
		return false;
	}
	bool isFull(){
		if((last + 1)%size == front)return true;
		return false;
	}
	void push_back(int data){
		if(isFull()){
			cout << "Queue Overflow "<< endl;
			return;
		}
		if(isEmpty()){
			++front;
			arr[++last] = data;
			return;
		}
		last = (last+1)%size;
		arr[last] = data;
	}
	void pop_front(){
		if(isEmpty()){
			cout << "Queue is Empty" << endl;
			return;
		}
		if(front == last){
			front = -1;
			last  = -1;
			return;
		}
		front = (front+1)%size;
	}
	int top(){
		if(isEmpty()){
			cout << "Queue is Empty" << endl;
			return -1;
		}
		return arr[front];
	}
};
int main(){
       queue q(5);
	   q.push_back(1);
	   q.push_back(2);
	   q.push_back(3);
	   q.push_back(4);
	   q.push_back(5);
	   
	   cout << q.top() << endl;
	   q.pop_front();
	   cout << q.top() << endl;
	   q.push_back(6);

}
