public class MergeSort {
    private static void mergeSort(int[] input) {
        int length = input.length;
        if (length < 2)
            return;
        int mid = length / 2;
        int[] leftHalf = new int[mid];
        int[] rightHalf = new int[length - mid];
        for (int i = 0; i < mid; i++) {
            leftHalf[i] = input[i];
        }
        for (int i = mid; i < length; i++) {
            rightHalf[i - mid] = input[i];
        }
        mergeSort(leftHalf);
        mergeSort(rightHalf);
        merge(input, leftHalf, rightHalf);
    }

    private static void merge(int[] input, int[] leftHalf, int[] rightHalf) {
        int leftSize = leftHalf.length;
        int rightSize = rightHalf.length;
        int i = 0, j = 0, k = 0;
        while (i < leftSize && j < rightSize) {
            if (leftHalf[i] <= rightHalf[j]) {
                input[k] = leftHalf[i];
                i++;
            } else {
                input[k] = rightHalf[j];
                j++;
            }
            k++;
        }
        while (i < leftSize) {
            input[k] = leftHalf[i];
            i++;
            k++;
        }
        while (j < rightSize) {
            input[k] = rightHalf[j];
            j++;
            k++;
        }
    }

    public static void main(String[] args) {
        int[] arr = { 3, 46, 7, 78, 34, 5, 76, 89, 1, 92 };
        mergeSort(arr);
        for (int i : arr)
            System.out.print(i + " ");
    }
}
