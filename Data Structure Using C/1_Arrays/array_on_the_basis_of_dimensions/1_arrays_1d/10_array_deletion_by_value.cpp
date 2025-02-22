#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Enter the size of array : ";
    cin >> n;
    
    // Declare the array
    int aiar[n];

    // Input elements into the array
    cout << "Enter the array elements : " << endl;
    for(int i = 0; i < n; i++) {
        cin >> aiar[i];
    } 

    // Output array elements before deletion
    cout << "Array elements before deletion: ";
    for(int i = 0; i < n; i++) {
        cout << aiar[i] << " ";
    }
    cout << endl;

    // Ask for the value to delete
    int value;
    cout << "Enter the value to delete: ";
    cin >> value;

    bool found = false;
    // Find the position of the value to delete
    for(int i = 0; i < n; i++) {
        if(aiar[i] == value) {
            // Mark the element as deleted (shift elements or mark as a special value)
            // For simplicity, we'll shift elements leftward
            for(int j = i; j < n - 1; j++) {
                aiar[j] = aiar[j + 1];
            }
            n--; // Decrease the size of the array
            found = true;
            break; // Exit the loop once found
        }
    }

    if(found) {
        // Output array elements after deletion
        cout << "Array elements after deletion: ";
        for(int i = 0; i < n; i++) {
            cout << aiar[i] << " ";
        }
        cout << endl;
    } else {
        cout << "Value not found in the array." << endl;
    }

    return 0;
}
