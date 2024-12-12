#include<stdio.h>
#define size 50

int main(){
	int n=5,arr[size]={1,2,3,4,5};
	int choice,ele,pos,i;
	int low=1,high=n,mid,flag=0;
	while(1){
			printf("1.Traverse\n2.Insert\n3.Delete\n4.Sequentciatly Search\n5.Binary Search\n6.Exit\n");
	printf("Enter Your Choice: ");
	scanf("%d",&choice);
	switch(choice){
		case 1:
			for(i=0;i<n;i++){
				printf("%d ",arr[i]);
			}
			break;
		case 2:
			printf("Enter element which you want to insert: ");
			scanf("%d",&ele);
			printf("Enter position where you want to insert the element: ");
			scanf("%d",&pos);
			for(i=n-1;i>=pos;i--){
				arr[i+1]=arr[i];
				printf("POS: %d I: %d ARR[i]: %d ARR[i+1]: %d\n",pos,i,arr[i],arr[i+1]);
			}
			arr[pos]=ele;
			n++;
			for(int i=0;i<n;i++){
				printf("%d ",arr[i]);
			}
			break;
		case 3:
			printf("Enter position where you want to delete the element: ");
			scanf("%d",&pos);
			int temp=arr[pos];
			for(i=pos;i<n;i++){
				printf("POS: %d I: %d ARR[i]: %d ARR[i+1]: %d\n",pos,i,arr[i],arr[i+1]);
				arr[i]=arr[i+1];
			}
			n--;
				for(int i=0;i<n;i++){
				printf("%d ",arr[i]);
			}
			break;
		case 4:
			printf("Enter Element: ");
			scanf("%d",&ele);
			i=0;
			while(i<n){
				if(arr[i]==ele){
					printf("Search Succesfull %d found on %d index",ele,i);
					flag=1;
					break;
				}
				i++;
			}
			if(flag==0){
				printf("%d is not found.",ele);
			}
			break;
		case 5:
			low=1;
			high=n;
			mid=0;
			printf("Enter Element: ");
			scanf("%d",&ele);
			while(low<=n){
				mid=(low+high)/2;
				if(ele<arr[mid]){
					high=mid-1;
				}else if(ele>arr[mid]){
					low=mid+1;
				}else{
					printf("Search Succesfully! %d founded",ele);
			flag=1;
			break;
				}	
			}
			if(flag==0){
			printf("%d is not found.",ele);
			}
			break;
		case 6:
			return 0;
		default:
			printf("Please! Enter valid choice.");
			
	}
printf("\n\n");
	}		
	return 0;
}