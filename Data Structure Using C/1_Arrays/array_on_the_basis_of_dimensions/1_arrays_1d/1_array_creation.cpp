#include<iostream>
using namespace std;
int main(){
    int n;     // n refers to size of array
    cout << "Enter the size of array :";
    cin >> n;

    int arr[n];    // array declaration

    cout << "Enter array elements ";
    for(int i = 0; i < n; i++){
        cin >> arr[i];
    }

    for(int j = 0; j < n; j++){
        cout << arr[j]<<" ";
    }
    
}