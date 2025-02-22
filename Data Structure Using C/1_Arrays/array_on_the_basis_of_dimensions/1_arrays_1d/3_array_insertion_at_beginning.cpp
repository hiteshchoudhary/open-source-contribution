#include<iostream>
using namespace std;
int main(){

    int n;
    cout << "Enter the size of array : ";
    cin >> n;

    int aiab[n], new_element;
    cout << "Enter array elements : "<< endl;

    for(int i = 0; i < n; i++){
        cin >> aiab[i];
    }

    cout << "Enter the new array element to be placed at the beginning : ";
    cin >> new_element;

    n++;

    for(int i=n; i>1; i--){
      aiab[i]=aiab[i-1];
    }

    aiab[0]=new_element;

    cout << "resultant array element";

    for(int i=0;i<n;i++){
     printf("\n%d", aiab[i]);
    }

    return 0;
    
}