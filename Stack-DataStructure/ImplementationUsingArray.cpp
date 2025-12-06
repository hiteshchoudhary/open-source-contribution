//Stack Implementation Using Array
#include<iostream>
using namespace std;

class Stack {
       public:
       int size;
       int *arr;
       int top;

    Stack(int size)
    {
        this->size=size;
        arr= new int[size];
        top=-1;
    }


    void push(int element)
    {
        if(size-top>1)
        {
            top++;
            arr[top]=element;
        }
        else
        {
            cout<<"Stack is overflow"<<endl;
        }
    }

    void pop(){
        if(top>=0)
        {
            top--;
        }
        else
        {
            cout<<"Stack is Underflow."<<endl;
        }
    }

    int peek(){
        if(top>=0)
        {
            return arr[top];
        }
        else{
            cout<<"Stack is empty"<<endl;
            return -1;
        }
    }

    bool isEmpty(){
        if(top==-1)
        {
            return true;
        }
        else{
            return false;
        }
    }
            
};

int main()
{
    Stack s(5);

    s.push(22);
    s.push(23);
    s.push(24);
    s.push(25);

   s.pop();
   s.pop();
   
   cout<<"Top element of the stack is:"<<s.peek()<<endl;

   s.pop();
   s.pop();

   cout<<"Cheking stack is empty or not"<<endl;

   if(s.isEmpty())
   {
    cout<<"Stack is Empty."<<endl;
   }
   else
   {
    cout<<"Stack is not empty."<<endl;
   }
 return 0;  
}