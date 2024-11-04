#include <stdio.h>

void insert(int arr[], int *n, int index, int element) {
    if (index >= 0 && index <= *n) {
        for (int i = *n; i > index; i--) {
            arr[i] = arr[i - 1];
        }
        arr[index] = element;
        (*n)++;
    } else {
        printf("Invalid index\n");
    }
}

int search(int arr[], int n, int element) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == element) return i;
    }
    return -1;
}

void delete(int arr[], int *n, int index) {
    if (index >= 0 && index < *n) {
        for (int i = index; i < *n - 1; i++) {
            arr[i] = arr[i + 1];
        }
        (*n)--;
    } else {
        printf("Invalid index\n");
    }
}
