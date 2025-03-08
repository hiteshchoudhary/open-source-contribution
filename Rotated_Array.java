//ROTATED ARRAY WITH DUPLICATION

public class Rotated_Array {
    public static void main(String[] args) {
        int arr[] = {11,11,11,12,12,12,14,15,18,30,30,5,5,5,5,6,6,6,7,8,9,9,9,9,10,10,10,10};
        System.out.println(arr.length);
        System.out.println(arr[findPivot(arr)]);
        System.out.println(search(arr, 10));
    }
    //WITH DUPLICATION
    public static int search(int arr[],int target){
        int pivot = findPivot(arr);
        if(pivot == -1)
        return binarySearch(arr, target, 0,arr.length-1);
        int ans = binarySearch(arr, target,0,pivot);
        if(ans == -1){
            ans = binarySearch(arr, target,pivot+1,arr.length-1);
        }
        return ans;
    }
    //find pivot that is the largest element in array and from here rotation starts before this and after
    //this all are asending
    public static int findPivot(int[] arr) {
        int s = 0, e = arr.length - 1;
        while(s<=e){
            int m = s+(e-s)/2;
           if(m<e && arr[m]>arr[m+1]){
                return m;
           }else if(m>s && arr[m]<arr[m-1]){
            return m-1;
           }else if(arr[s] == arr[m] && arr[m] == arr[e]){
            if(s<e && arr[s]>arr[s+1]){
                return s;
           }else
                s++;
            if(e>s && arr[e]<arr[e-1]){
                return e-1;
            }else
                e--;
           }else if(arr[m] < arr[s] || (arr[m] == arr[s] && arr[e] > arr[m])){
            e = m-1;
           }else{
            s = m+1;
           }
           
        }   
        return -1;
    }
    public static int binarySearch(int[] arr,int value,int start,int end){
        int s=start;
        int e= end;
        while(s<=e){
            int m = s + (e-s)/2;
            if(arr[m]==value){
                return m;
            }else if(arr[m]<value){
                s=m+1;
            }else{
                e=m-1;
            }
        }   
        return -1;
    }

}