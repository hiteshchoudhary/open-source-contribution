#include<iostream>
using namespace std;
int main(){
    int n;
    cout << "Enter the size of array : ";
    cin >> n;
    int art[n];
    cout << "Enter Array Element : "<< endl;
    for(int i = 0; i < n; i++){
        cin >> art[i];
    }
    cout << "Traverse of Array is : "<<endl;
    for(int i = 0; i < n; i++){
        cout << "art[" << i << "] : " << art[i] << endl;
    }
}