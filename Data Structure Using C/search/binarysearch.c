#include <stdio.h>

int main() {
    int arr[100], n, i, key;
    int low, high, mid;

    // Input array size
    printf("Enter the number of elements: ");
    scanf("%d", &n);

    // Input sorted array
    printf("Enter %d sorted elements:\n", n);
    for (i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    // Input the element to search for
    printf("Enter the element to search: ");
    scanf("%d", &key);

    // Binary Search starts
    low = 0;
    high = n - 1;
    int found = 0;

    while (low <= high) {
        mid = (low + high) / 2;

        if (arr[mid] == key) {
            printf("Element found at index %d (position %d)\n", mid , mid+1);
            found = 1;
            break;
        } else if (arr[mid] < key) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    if (!found) {
        printf("Element not found in the array.\n");
    }

    return 0;
}