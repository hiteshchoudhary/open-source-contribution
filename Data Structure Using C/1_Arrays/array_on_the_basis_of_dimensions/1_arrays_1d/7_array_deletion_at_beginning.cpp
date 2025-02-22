#include<iostream>
using namespace std;
int main(){
    
    int n;
    cout << "Enter the size Array : ";
    cin >> n;
    
    int adab[n];
    cout << "Enter Array elements : ";
    for(int i = 0; i < n; i++){
        cin >> adab[i];
    }

    cout << endl;

    cout << "Array elements before deletion : " << endl; 
    for(int i = 0; i <n; i++){
        cout << adab[i] << " ";
    }

    cout << endl;

    n--;
    for(int i = 0; i < n; i++){
        adab[i] = adab[i+1];
    }

    cout << "After Deletion from begining : " << endl;
    for(int i = 0; i < n; i++){
        cout << adab[i] << " ";
    }

}