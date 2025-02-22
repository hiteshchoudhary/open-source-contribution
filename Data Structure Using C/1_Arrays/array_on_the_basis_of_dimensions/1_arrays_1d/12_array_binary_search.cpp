#include <iostream>
using namespace std;

// Function to perform binary search
int binarySearch(int arr[], int size, int element) {
    int low = 0;
    int high = size - 1;
    
    while (low <= high) {
        int mid = low + (high - low) / 2;
        
        if (arr[mid] == element) {
            return mid; // Element found, return index
        } else if (arr[mid] < element) {
            low = mid + 1; // Element is in the right half
        } else {
            high = mid - 1; // Element is in the left half
        }
    }
    
    return -1; // Element not found
}

int main() {
    int n;
    cout << "Enter the size of array : ";
    cin >> n;

    int abs[n];
    cout << "Enter array elements : " << endl;
    for (int i = 0; i < n; i++) {
        cin >> abs[i];
    }

    // Perform manual sorting (Bubble Sort) - optional step
    // Bubble sort implementation
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (abs[j] > abs[j + 1]) {
                // Swap elements
                int temp = abs[j];
                abs[j] = abs[j + 1];
                abs[j + 1] = temp;
            }
        }
    }

    int element;
    cout << "Enter element to search : ";
    cin >> element;

    // Perform binary search
    int index = binarySearch(abs, n, element);

    if (index != -1) {
        cout << "Element " << element << " found at index " << index << " (position " << index + 1 << ")" << endl;
    } else {
        cout << "Element not found" << endl;
    }

    return 0;
}
