#include<stdio.h>

int binarySearch(int arr[],int n, int key){
    int s=0,e=n-1,mid=s+(e-s)/2;
    while(s<=e){
        if(arr[mid]==key){return mid;}
        if(key>arr[mid]){
            s=mid+1;
        }else e=mid-1;
        mid=s+(e-s)/2;

    }
    return -1;
}

int main(){

int arr[]={12,23,34,45,56,67,78,89,90,98};
int n=sizeof(arr)/sizeof(arr[0]);
int key=89;

int res=binarySearch( arr, n , key);
if(res != -1){
    printf("The element is present at the index of %d",res);
}else printf("Not Founded!");


    return 0;

}