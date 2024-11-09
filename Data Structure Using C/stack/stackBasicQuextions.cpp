#include <iostream>
#include <stack>
#include<vector>

using namespace std;

void reverseUsingStack()
{
    string name = "SUSOVAN";
    stack<char> st;

    for (char ch : name)
    {
        st.push(ch);
    }

    while (!st.empty())
    {
        cout << st.top();
        st.pop();
    }
}

void solve(stack<int> &st, int pos, int &mid)
{
    // Base case
    if (pos == 1)
    {
        mid = st.top();
        return;
    }

    // 1 case
    pos--;
    int temp = st.top();
    st.pop();

    // recursion
    solve(st, pos, mid);

    // backtracking
    st.push(temp);
}

int getMid(stack<int> &st)
{
    if (st.empty())
    {
        cout << "Stack is empty ";
    }
    else
    {

        int size = st.size();
        int pos = -1;

        if (size & 1) // ODD size stack
        {
            pos = (size / 2) + 1;
        }
        else // EVEN size stack
        {
            pos = size / 2;
        }

        int mid = -1;
        solve(st, pos, mid);
        return mid;
    }

    return -1;
}

void pushAtBottom(stack<int> &st, int x, int n)
{
    // base case
    if (n == 0)
    {
        st.push(x);
        return;
    }

    // 1case
    n--;
    int temp = st.top();
    st.pop();

    // recursion call
    pushAtBottom(st, x, n);

    // backTracking
    st.push(temp);
}

void printStack(stack<int> st)
{

    cout << "STACK ele: " << endl;
    while (!st.empty())
    {
        cout << st.top() << endl;
        st.pop();
    }
    return;
}

void insertInSortedStack(stack<int> &st, int ele)
{
    // base case
    if (st.empty() || st.top() <= ele)
    {
        st.push(ele);
        return;
    }

    // 1st Case
    int temp = st.top();
    st.pop();

    // Recursion call
    insertInSortedStack(st, ele);

    // backtracking
    st.push(temp);
}

class ArrayStack
{
public:
    int *arr;
    int size;
    int top1;
    int top2;

    ArrayStack(int size)
    {
        this->arr = new int[size];
        this->size = size;
        this->top1 = -1;
        this->top2 = size;
    }

    void push1(int data)
    {
        if (top2 - top1 == 1)
        {
            cout << "Overflow,Array is full" << endl;
            return;
        }
        else
        {
            top1++;
            arr[top1] = data;
            cout << data << " Inserted into stack1" << endl;
        }
    }

    void push2(int data)
    {
        if (top2 - top1 == 1)
        {
            cout << "Overflow,Array is full" << endl;
            return;
        }
        else
        {
            top2--;
            arr[top2] = data;
            cout << data << " Inserted into stack2" << endl;
        }
    }

    void pop1()
    {
        if (top1 == -1)
        {
            cout << "Underflow, stack1 is empty" << endl;
            return;
        }
        else
        {
            arr[top1] = -1;
            top1--;
            cout << "POP done on stack1" << endl;
        }
    }

    void pop2()
    {
        if (top2 == size)
        {
            cout << "Underflow, stack2 is empty" << endl;
            return;
        }
        else
        {
            arr[top2] = -1;
            top2++;
            cout << "POP done on stack2" << endl;
        }
    }
};

bool isRedundant(string s)
{
    stack<char> st;
    for (char ch : s)
    {
        if (ch == '(' || ch == '+' || ch == '-' || ch == '*' || ch == '/')
        {
            st.push(ch);
        }
        else if(ch == ')')
        {
            int operatorCount = 0;
            while (!st.empty() && st.top() != '(')
            {
                char temp = st.top();
                if (temp == '+' || temp == '-' || temp == '*' || temp == '/')
                {
                    operatorCount++;
                }
                st.pop();
            }
            st.pop(); // pop the opening bracket

            if (operatorCount == 0)
            {
                // No operator present between (),Redundant Parenthesis present
                return true;
            }
        }
    }

    return false;
}

void findNextMin(vector<int> &arr)
{
    stack<int> st;
    st.push(-1);

    for(int i=arr.size()-1; i>=0; i--)
    {
        int curr = arr[i];
        while(st.top() >= curr)
        {
            st.pop();
        }
        
        arr[i] = st.top();
        st.push(curr);
        
    }
}
void findPrevMin(vector<int> &arr)
{
    stack<int> st;
    st.push(-1);
    for(int i=0; i<arr.size(); i++)
    {
        int curr = arr[i];
        while(st.top() >= curr)
        {
            st.pop();
        }
        arr[i] = st.top();
        st.push(curr);
    }
}
int main()
{
    // Q1 reverse using stack
    //  reverseUsingStack();

    // stack<int> st;
    // st.push(10);
    // st.push(20);
    // st.push(30);

    // // Q2  Get mid element of a stack
    // int ans = getMid(st);
    // cout << "Mid element of the stack is: " << ans << endl;

    // // Q3 push a ele bottom of the stack
    // int n = st.size(), x = 89;
    // cout<<"Before"<<endl;
    // printStack(st);
    // pushAtBottom(st, x, n);
    // cout<<"After"<<endl;
    // printStack(st);

    /// Q4 insert a element in a sorted stack
    // int ele = 90;
    // insertInSortedStack(st,ele);
    // printStack(st);

    // // Q4 Implement two stack in one array
    // ArrayStack* st = new ArrayStack(5);
    // st->push1(10);
    // st->push1(20);
    // st->push2(100);
    // st->push2(200);
    // st->push2(300);
    // st->push2(45);
    // st->pop1();
    // st->pop1();

    // Q4 Redundant Parenthesis

    // string eq = "((A+(B+C)))";
    // if (isRedundant(eq))
    // {
    //     cout << "Yes Redundant Parenthesis present" << endl;
    // }
    // else
    // {
    //     cout << "No Redundant Parenthesis present" << endl;
    // }

    vector<int> arr = {5, 6, 2, 3, 1, 7};
    //Q5 Next smaller element
    // findNextMin(arr);
    //Q6 Previous Smaller element 
    findPrevMin(arr);

    for(int ele:arr){
        cout<<ele<<" ";
    }

    return 0;
}