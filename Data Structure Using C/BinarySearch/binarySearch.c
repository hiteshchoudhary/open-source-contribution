#include <stdio.h>

int binarySearch(int arr[], int size, int target) {
    int start = 0, end = size - 1;

    while (start <= end) {
        int mid = start + (end - start) / 2;

        if (arr[mid] == target)
            return 1; 
        else if (arr[mid] > target)
            end = mid - 1; 
        else
            start = mid + 1; 
    }
    return -1; 
}

int main() {
    int array[10] = {5, 9, 12, 19, 25, 32, 45, 56, 64, 74};
    int tar = 45;
    int size = sizeof(array) / sizeof(array[0]);

    printf("%d", binarySearch(array, size, tar)); 

    return 0;
}
