#include <stdio.h>
#include <stdlib.h>

void zeroMatrix(int **mat, int n, int m) {
    int *row = (int *)calloc(n, sizeof(int));
    int *col = (int *)calloc(m, sizeof(int));

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            if (mat[i][j] == 0) {
                row[i] = 1;
                col[j] = 1;
            }
        }
    }

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            if (row[i] || col[j]) {
                mat[i][j] = 0;
            }
        }
    }

    free(row);
    free(col);
}

int main() {
    int n, m;
    printf("Enter the number of rows and columns: ");
    scanf("%d %d", &n, &m);

    int **mat = (int **)malloc(n * sizeof(int *));
    for (int i = 0; i < n; i++) {
        mat[i] = (int *)malloc(m * sizeof(int));
        for (int j = 0; j < m; j++) {
            printf("Enter element at row %d, column %d: ", i, j);
            scanf("%d", &mat[i][j]);
        }
    }

    zeroMatrix(mat, n, m);

    printf("The modified matrix is:\n");
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            printf("%d ", mat[i][j]);
        }
        printf("\n");
    }

    for (int i = 0; i < n; i++) {
        free(mat[i]);
    }
    free(mat);

    return 0;
}
