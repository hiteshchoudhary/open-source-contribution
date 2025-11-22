#include <stdio.h>

int linearSearch(int arr[], int size, int target) {
    int i;
    for (i = 0; i < size; i++) {
        if (arr[i] == target) {
            return i; //this is if the element is found
        }
    }
    return -1; //this will give not found if element not found
}

int main() {
    int arr[100], n, target, i;

    printf("Enter the number of elements: ");
    scanf("%d", &n);

    printf("Enter %d elements:\n", n);
    for (i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("Enter the element to search for: ");
    scanf("%d", &target);

    int result = linearSearch(arr, n, target);

    if (result != -1) {
        printf("Element found at index %d (position %d)\n", result, result + 1);
    } else {
        printf("Element not found in the array.\n");
    }

    return 0;
}