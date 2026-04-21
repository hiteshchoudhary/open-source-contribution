#include <stdio.h>
#include <stdlib.h>

int SIZE;
#define PRINT_AND_MSG(msg, SIZE) \
    (printf(" %s", msg), scanf("%d", &SIZE))

void swap(int *val1, int *val2) {
    int temp = *val1;
    *val1 = *val2;
    *val2 = temp;
}

void Heapify(int *array, int n, int i) {
    int largest = i;
    int l = 2 * i + 1;
    int r = 2 * i + 2;

    if (l < n && array[l] > array[largest])
        largest = l;

    if (r < n && array[r] > array[largest])
        largest = r;

    if (largest != i) {
        swap(&array[i], &array[largest]);
        Heapify(array, n, largest);
    }
}

void Heap_sort(int *array, int n) {
    int i;
    for (i = n / 2 - 1; i >= 0; i--)
        Heapify(array, n, i);          // ✅ use n, not SIZE

    for (i = n - 1; i >= 0; i--) {
        swap(&array[0], &array[i]);
        Heapify(array, i, 0);
    }

    printf("Sorted Elements: ");
    for (i = 0; i <= n - 1; i++)      // ✅ use n, not SIZE
        printf("%d\t", array[i]);
    printf("\n");
}

int main(void) {                       // ✅ int main, not void main
    PRINT_AND_MSG("Enter size of array:", SIZE);

    int *array = malloc(SIZE * sizeof(int));  // ✅ no cast

    if (array == NULL) {               // ✅ NULL check
        printf("Memory allocation failed\n");
        return 1;
    }

    for (int i = 0; i <= SIZE - 1; i++)
        scanf("%d", &array[i]);

    Heap_sort(array, SIZE);

    free(array);                       // ✅ free memory
    return 0;                          // ✅ return exit status
}