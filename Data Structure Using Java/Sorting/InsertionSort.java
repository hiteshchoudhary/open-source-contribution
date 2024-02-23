public class InsertionSort {

	static void insertionSort(int arr[]) {
		int n = arr.length;
		for (int i = 1; i < n; ++i) {
			// storing the current element in temp variable
			int temp = arr[i];
			int j = i - 1;
			// Move elements of arr[from 0 to i-1] that are greater than temp to one
			// position ahead of their current position
			while (j >= 0 && arr[j] > temp) {
				arr[j + 1] = arr[j];
				j = j - 1;
			}
			arr[j + 1] = temp;
		}
	}

	public static void main(String args[]) {
		int arr[] = { 64, 34, 25, 12, 22, 11, 90 };
		insertionSort(arr);
		// If we want we can print the sorted array
		System.out.println("Sorted array:");
		for (int i : arr) {
			System.out.print(i + " ");
		}
	}
}
// Time Complexity: O(n^2)