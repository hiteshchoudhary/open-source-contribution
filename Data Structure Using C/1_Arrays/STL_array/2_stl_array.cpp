#include<iostream>
#include<array>
using namespace std;
int main(){
    const int size = 5;
    array<int,size> a;
    cout << "Enter array Element : ";
    for(int i = 0; i < a.size(); i++){
        cin >> a[i];
    }

    cout << "Displaying Array : ";
    for(int i = 0; i < a.size(); i++){
        cout << a[i] << " ";
    }


}