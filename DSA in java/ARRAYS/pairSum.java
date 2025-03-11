import java.util.* ;
import java.io.*; 
public class Solution {
    public static int pairSum(int arr[], int n, int target) {
        int count = 0;
        int left = 0;
        int right = arr.length - 1;
        while(left < right) {
            int sum = arr[left] + arr[right];
            if(sum == target) {
                count++;
                left++;
                right--;
            } else if(sum < target) {
                left++;
            } else {
                right--;
            }
        }
        if(count == 0) {
            return -1;
        }
        return count;
    }
}