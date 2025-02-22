#include<iostream>
#include<array>
using namespace std;
int main(){
    array<int,5> arr = {1,2,3,4,5};
    int size = arr.size();
    for(int i = 0; i< size; i++){
            cout << arr[i] << " ";
    }
    cout << endl;
    cout << arr[4] << endl;

    cout << "using .at function : " << arr.at(3) << endl;
    cout << "Empty or Not : " << arr.empty() << endl;

    cout << "First Element : " << arr.front() << endl;
    cout << "Last Element : "<< arr.back() << endl;
    //cout << "data : " << arr.data() << endl;

    for(auto i: arr){
        cout << i << " ";
    }

}