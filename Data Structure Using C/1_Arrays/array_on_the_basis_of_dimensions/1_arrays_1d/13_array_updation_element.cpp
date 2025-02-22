#include<iostream>
using namespace std;
int main(){
    int n;
    cout << "Enter the size of Array : " << endl;
    cin >> n;

    int aue[n];
    cout << "Enter Array Elements : " << endl;
    for(int i = 0; i < n; i++){
        cin >> aue[i];
    } 

    cout << "Array Elements before Updation : " ;
    for(int i = 0; i < n; i++ ){
        cout << aue[i] << " ";
    }

    cout << endl;

    int index, value;
    
    cout << "Enter Index to update value : ";
    cin >> index;
    //cout << "Enter the value : ";
    //cin >> value;

    if(index >=0 && index < n){
        cout << "Enter the value : ";
        cin >> value;
        aue[index] = value;

        cout << "New Array after Updation : ";
        for(int i = 0; i < n; i++){
            cout << aue[i] << " ";
    }    
    }else{
        cout << "Index out of bounds ";
    }
 
 
 
 
    /*for(int i = index; i < n; i++){
        aue[i] = value;
        break;
    }

    cout << "New Array after Updation : ";
    for(int i = 0; i < n; i++){
        cout << aue[i] << " ";
    }*/

}