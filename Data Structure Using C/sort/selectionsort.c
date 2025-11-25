#include<stdio.h>

void selectionsort(int arr[] , int n){
    for(int i=0 ; i<n-1 ; i++){
        int sidx=i;
        for(int j=i+1 ; j<n ; j++){
            if(arr[j]<arr[sidx]){
                sidx=j;
            }
        }
        int temp=arr[i];
        arr[i]=arr[sidx];
        arr[sidx]=temp;
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

    selectionsort(arr , n);
    display(arr , n);
    return 0;


}