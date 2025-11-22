#include<stdio.h>

void insertionsort(int arr[] , int n){
    for(int i=1 ; i<n ; i++){
        int curr=arr[i];
        int pre=i-1;
        while(pre>=0 && arr[pre]>curr){
            arr[pre+1]=arr[pre];
            pre--;
        }
        arr[pre+1]=curr;
    }
}

void display(int arr[] , int n){
    for(int i=0 ; i<n ; i++){
        printf("%d " , arr[i]);
    }
}

int main(){
    int n=5;
    int arr[]={2,4,1,5,3};

    insertionsort(arr , n);
    display(arr , n);
    return 0;


}