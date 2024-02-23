public class BinarySearch {

    public static int binarySearch(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            if (arr[mid] == target)
                return mid;
            else if (arr[mid] < target)
                left = mid + 1;// Discard left half
            else
                right = mid - 1; // Discard right half
        }
        return -1; // if the target is not found then we are returning -1
    }

    public static void main(String[] args) {
        int[] arr = { 1, 3, 7, 9, 11, 12, 45, 48, 61, 65 };
        int target = 65;
        System.out.printf("The %d is present at %d", target, binarySearch(arr, target));
    }
}
// Note: For Binary Search to work best the array should be sorted
// Time complexity T(n) = O(log n)