#include<iostream>
using namespace std;
int main(){
    int arr[6] = {1,3,5,7,3};
    int pos = 3;
    int element = 9;
    int n = 5;

    cout << "Array before Insersion "<<endl;
    for(int i = 0; i < n; i++){
        cout << "arr [" << i << "]" << " = "<< arr[i] <<endl;
    }

    for(int i = n; i >= pos; i--){
        arr[i] = arr[i-1];
        arr[pos - 1] = element;
    }

    cout << "Array After Insertion "<<endl;
    for(int i = 0; i <= n; i++){
        cout << "arr [" << i << "]" << " = "<< arr[i] <<endl;
    }
}