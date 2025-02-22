/*
At the End of code:
algorithm for deleting an element by position is given.
*/

#include<iostream>
using namespace std;
int main(){
    int n;
    cout << "Enter the size of array : ";
    cin >> n;

    int adai[n];
    cout << "Enter the elements of array : " << endl;
    for(int i = 0; i < n; i++){
        cin >> adai[i];
    } 

    cout << "Array Elements before Deletion : "<< endl;
    for(int i = 0; i < n; i++){
        cout << adai[i] << " ";
    }
    cout << endl;

    int index;
    cout << "Enter the Index to remove Element : " << endl;
    cin >> index;

    for(int i = index; i < n - 1; i++){
        adai[i] = adai[i+1];
    }
    n--;

    cout << "Array Elements after Deletion : "<< endl;
    for(int i = 0; i < n; i++){
        cout << adai[i] << " ";
    }
    cout << endl;


}

/*
for deleting by position:
--> index - 1;
*/