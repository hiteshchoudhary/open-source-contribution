#include<iostream>
using namespace std;
int main(){
    int arr[6] = {12,34,3,45,1,23};
    int min = arr[0];
    for(int i = 0; i < 5; i++){
        if(arr[i] < min){
            min = arr[i];  
        }
    }
    cout << min;
}