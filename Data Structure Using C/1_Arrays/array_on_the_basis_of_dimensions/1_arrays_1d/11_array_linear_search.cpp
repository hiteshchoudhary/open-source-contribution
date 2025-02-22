#include<iostream>
using namespace std;
int main(){
    int n;
    cout << "Enter the size of array : ";
    cin >> n;

    int als[n];
    cout << "Enter array elements : " << endl;
    for (int i = 0; i < n; i++){
        cin >> als[i];
    } 
    
    int element;
    cout << "Enter element to search : ";
    cin >> element;

    bool found = false;

    for(int i = 0; i < n; i++){
        if(als[i] == element){
            cout << "Element is found at index [" << i << "]" << "and position is : "<< i+1 << endl;
            found = true;
            break;
        }
    }
    
    if(!found){
            cout << "Element not found " << endl;
        }

}