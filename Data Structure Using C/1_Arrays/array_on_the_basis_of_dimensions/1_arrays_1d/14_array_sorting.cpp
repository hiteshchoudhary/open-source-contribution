#include <iostream>
using namespace std;

// Function to perform Bubble Sort
void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

int main() {
    int n;
    cout << "Enter the size of array : ";
    cin >> n;

    int als[n];
    cout << "Enter array elements : " << endl;
    for (int i = 0; i < n; i++) {
        cin >> als[i];
    }

    // Call Bubble Sort function
    bubbleSort(als, n);

    // Output sorted array
    cout << "Sorted array: ";
    for (int i = 0; i < n; i++) {
        cout << als[i] << " ";
    }
    cout << endl;

    return 0;
}
