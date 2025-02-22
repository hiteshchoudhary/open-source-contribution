#include<iostream>
using namespace std;
int main(){
    int n,i;
    cout << "Enter the size of array : ";
    cin >> n;
    int aiar[n];
    cout << "Enter the array element : " << endl;
    for(i = 0; i < n; i++){
        cin >> aiar[i];
    } 
    
    cout << "array elements before insertion at end "<< endl;
    for(i = 0; i < n; i++){
        cout << aiar[i] << " ";
    }
    
    int new_element;
    cout << "Enter new array element :";
    cin >> new_element;

    n++;
    aiar[i] = new_element;   // or aiar[n-1] = new_element
    cout << "array elements before insertion at end "<< endl;

    for(i = 0; i < n; i++){
        cout << aiar[i] <<" ";
    }
    

}