public class LinearSearch {

    public static int linearSearch(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                return i; // Return the index if the target is found
            }
        }
        return -1; // Return -1 if the target is not found in the array
    }

    public static void main(String[] args) {
        int[] arr = {10, 25, 30, 42, 55, 67, 89};
        int target = 42;

        int result = linearSearch(arr, target);

        if (result != -1) {
            System.out.println("Target " + target + " found at index " + result);
        } else {
            System.out.println("Target " + target + " not found in the arr");
        }
    }
}
/*
You can use this algorithm to find any element in the array and then return the index
of that element.
The message is optional you can edit them if you want
Note: Time complexity is O(n)
*/