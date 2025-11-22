
#include<stdio.h>

void merge(int arr[] , int st , int mid , int end){
    int temp[100];
    int i=st , j=mid+1 , k=0;
    while(i<=mid && j<= end){
        if(arr[i] < arr[j]){
            temp[k++]=arr[i++];
        }
        else{
            temp[k++]=arr[j++];
        }
    }
    while(i<=mid){
        temp[k++]=arr[i++];
    }
    while(j<=end){
        temp[k++]=arr[j++];
    }
    for(i=st , j=0 ; i<=end ; i++ , j++){
        arr[i]=temp[j];
    }

}

void mergesort(int arr[] , int st , int end){
    if(st < end){
        int mid = (st+end)/2;
        mergesort(arr , st , mid); //left
        mergesort(arr , mid+1 , end); //right

        merge(arr , st , mid , end);
    }

}



void display(int arr[] , int n){
    for(int i=0 ; i<n ; i++){
        printf("%d " , arr[i]);
    }
}

int main(){
    int st=0 , end=4 , n=5;
    int arr[]={2,4,1,5,3};

    mergesort(arr , st , end);
    display(arr , n);
    return 0;


}