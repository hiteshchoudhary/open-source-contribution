public class SelectionSort {

	static void selectionSort(int arr[]) {
		int n = arr.length;
		for (int i = 0; i < n - 1; i++) {
			int minIndex = i;
			for (int j = i + 1; j < n; j++) {
				if (arr[j] < arr[minIndex]) {
					minIndex = j;
				}
			}
			// Swap the minimum element which we found above with the first element
			int temp = arr[minIndex];
			arr[minIndex] = arr[i];
			arr[i] = temp;
		}
	}

	public static void main(String args[]) {
		int arr[] = { 64, 34, 25, 12, 22, 11, 90 };
		selectionSort(arr);
		// If we want we can print the sorted array
		System.out.println("Sorted array:");
		for (int i : arr) {
			System.out.print(i + " ");
		}
	}
}
// Time Complexity: O(n^2)
