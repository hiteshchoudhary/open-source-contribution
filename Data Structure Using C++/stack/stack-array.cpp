#include<iostream>
using namespace std;

template <typename T>
class stack{
  private:
    int* arr;
    int last;
    int size;
  public:
    stack(int size){
      arr = new int[size];
      last = -1;
      this->size = size;
    }
    bool isEmpty(){
      if(last == -1)return true;
      return false;
    }
    bool isFull(){
       if((last + 1) == size) return true;
       return false;
    }
    void push_back(int data){
      if(isFull()){
        cout << "Stack Overflow" <<endl;
        return;
      }
      arr[++last] = data;
    }
    void pop_back(){
      if(isEmpty()){
        cout<< "Stack is Empty" << endl;
        return;
      }
        last--;
    }
    int top(){
	    if(isEmpty()){
		    cout<< "Stack is Empty" << endl;
		    return -1;
	    }
	    return arr[last];
}
};
int main(){
	stack st(5);
	st.push_back(23);
	st.push_back(12);
	st.push_back(45);
	st.pop_back();
  st.push_back(89);
	st.push_back(56);
	st.push_back(21);
  st.push_back(9);

	cout<<st.top()<<endl;
	return 0;
}

