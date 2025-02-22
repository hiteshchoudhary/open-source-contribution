    #include <iostream>
    using namespace std;

    // traversal function
    void traversal(int arr[], int size) {
        for (int i = 0; i < size; i++) {
            cout << arr[i] << " ";
        }
        cout << endl;
    }

    // insertion at beginning function
    void insertionAtBeg(int arr[], int &size, int new_element) {
        for (int i = size; i > 0; i--) {
            arr[i] = arr[i - 1];
        }
        arr[0] = new_element;
        size++;
        traversal(arr, size);
    }

    // insertion at end function
    void insertionAtEnd(int arr[], int &size, int new_element) {
        arr[size] = new_element;
        size++;
        traversal(arr, size);
    }

    // insertion at index function
    void insertionAtIndex(int arr[], int &size, int new_element, int index) {
        for (int i = size; i > index; i--) {
            arr[i] = arr[i - 1];
        }
        arr[index] = new_element;
        size++;
        traversal(arr, size);
    }

    //deletion at beginning function
    void deleteAtBeg(int arr[], int &size){
        for(int i = 0; i < size; i++){
            arr[i] = arr[i+1];
        }
        size--;
        traversal(arr,size);
    }

    //deletion at end function
    void deletionAtEnd(int arr[], int &size){
        size--;
        traversal(arr, size);
    }

    //deletion at index
    void deletionAtIndex(int arr[], int &size, int index){
        for(int i = index; i < size; i++){
            arr[i] = arr[i+1];
        }
        size--;
        traversal(arr,size);
    }

    /*//deletion by value
    void deletionByValue(int arr[], int size, int value){

    }*/

    // Update Array
    void updateArray(int arr[], int &size, int index, int value){
        if(index > size && index < 0){
            cout << "Array Index Out of Bounds" << endl;
        }
        else{
        for(int i = index; i < size; i++){
            arr[i] = value;
            break;
        }
    }
        traversal(arr, size);
    }

    // Linear Search
    void linearSearchArray(int arr[], int &size, int value){
        bool found = false;
        for(int i = 0; i < size; i++){
            if(arr[i] == value){
                cout << "Element is found at Index : " << i << endl;
                found = true;
                break; 
            }
            
        }
        if(!found){
            cout << "Element not found " << endl;
        }
    }

    int main() {
        int size, choice, new_element, index;

        cout << "Enter initial size of array: ";
        cin >> size;

        int arr[size];

        cout << "Enter Array Elements: " << endl;
        for (int i = 0; i < size; i++) {
            cin >> arr[i];
        }

        do {
            cout << "\nMenu:\n";
            cout << "1. Traverse Array\n";
            cout << "2. Insert at Beginning\n";
            cout << "3. Insert at End\n";
            cout << "4. Insert at Index\n";
            cout << "5. Deletion at Beginning\n";
            cout << "6. Deletion at Ending\n"; 
            cout << "7. Deletion at Index\n"; 
            cout << "8. Update Array\n";  
            cout << "9. Search Element via Linear Search\n";  
            cout << "14. Exit\n";
            cout << "Enter your choice: ";
            cin >> choice;

            switch (choice) {
                case 1:
                    traversal(arr, size);
                    break;
                case 2:
                    cout << "Enter new element to insert at beginning: ";
                    cin >> new_element;
                    insertionAtBeg(arr, size, new_element);
                    break;
                case 3:
                    cout << "Enter new element to insert at end: ";
                    cin >> new_element;
                    insertionAtEnd(arr, size, new_element);
                    break;
                case 4:
                    cout << "Enter new element to insert: ";
                    cin >> new_element;
                    cout << "Enter index to insert the new element at: ";
                    cin >> index;
                    if (index >= 0 && index <= size) {
                        insertionAtIndex(arr, size, new_element, index);
                    } else {
                        cout << "Invalid index. Please enter a valid index." << endl;
                    }
                    break;
                case 5:
                    deleteAtBeg(arr,size);
                    break;
                case 6:
                    deletionAtEnd(arr,size);
                    break;
                case 7:
                    cout << "Enter index" << endl;
                    //int index;
                    cin >> index;
                    deletionAtIndex(arr, size,index);
                    break;   
                case 8:
                    int new_element;
                    cout << "Enter index : ";
                    cin >> index;
                    cout << "Enter value : ";
                    cin >> new_element;
                    updateArray(arr,size,index,new_element);
                    break;   
                case 9:
                    cout << "Enter value to search : ";
                    cin >> new_element;
                    linearSearchArray(arr,size,new_element);
                    break;
                case 10:
                    cout << "Exiting." << endl;
                    break;   
                default:
                    cout << "Invalid choice. Please enter a valid option." << endl;
            }
        } while (choice != 14);

        ///delete[] arr;  // Deallocate the dynamically allocated array
        return 0;
    }
