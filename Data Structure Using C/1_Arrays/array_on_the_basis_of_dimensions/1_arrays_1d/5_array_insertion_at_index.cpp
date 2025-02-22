#include<iostream>
using namespace std;
int main(){
    int n;
    cout << "Enter the size of array : ";
    cin >> n;

    int aiai[n];
    cout << "Enter the elements of array :";
    for(int i = 0; i < n; i++){
        cin >> aiai[i];
    }

    cout << "Array elements before insertion "<<endl;
    for(int i = 0; i < n; i++){
        cout << aiai[i] << " ";
    }

    cout << endl;

    int new_element;
    cout << "Enter new array element to insert " <<endl;
    cin >> new_element;

    cout << endl;

    int index;
    cout << "Enter element to insert at specific index : ";
    cin >> index;

    // Validate index range
    if(index < 0 || index > n) {
        cout << "Invalid index! Insertion failed." << endl;
        return 1;
    }

    for(int i = n; i > index; i--) {
        aiai[i] = aiai[i - 1];
    }

    aiai[index] = new_element;

    n++;

    cout << "Array elements after insertion " << endl;
    for(int i = 0; i < n; i++) {
        cout << aiai[i] << " ";
    }

    cout << endl;


}