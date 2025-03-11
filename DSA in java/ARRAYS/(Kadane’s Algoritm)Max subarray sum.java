import java.util.* ;
import java.io.*; 

public class Solution {
	
	public static long maxSubarraySum(int[] arr, int n) {
		long maxSum = Integer.MIN_VALUE;
		long sum = arr[0];
		for(int i=1; i<n; i++) {
			if(arr[i] < sum + arr[i]) {
				sum = sum + arr[i];
			} else {
				sum = arr[i];
			}
			if(sum > maxSum) {
				maxSum = sum;
			}
			
			// if(sum < 0) {
			// 	sum = arr[i];
			// } else {
			// 	sum = sum + arr[i];
			// }
			// maxSum = Math.max(sum, maxSum);
		}
		if(maxSum < 0) {
			return 0;
		}
		return maxSum;
	}

}