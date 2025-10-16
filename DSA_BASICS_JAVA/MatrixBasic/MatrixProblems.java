package com.anil.DSA.MatrixBasic;
import java.util.*;

public class MatrixProblems {

    public static void main(String[] args) {
        int[][] matrix = {
                {1, 2, 3},
                {4, 0, 6},
                {7, 8, 9}
        };

        int[][] matrixB = {
                {9, 8, 7},
                {6, 5, 4},
                {3, 2, 1}
        };

        System.out.println("1. Row-wise and Column-wise:");
        printMatrix(matrix);

        System.out.println("\n\n2. Total Sum: " + totalSum(matrix));

        System.out.println("\n3. Sum of Rows and Columns:");
        sumOfRowsAndCols(matrix);

        System.out.println("\n4. Max & Min in Rows:");
        maxMinInRows(matrix);

        System.out.println("\n5. Max & Min in Columns:");
        maxMinInCols(matrix);

        System.out.println("\n6. Addition of Matrices:");
        printMatrix(addMatrices(matrix, matrixB));

        System.out.println("\n7. Subtraction of Matrices:");
        printMatrix(subtractMatrices(matrix, matrixB));

        System.out.println("\n8. Upper & Lower Triangles:");
        printTriangles(matrix);

        System.out.println("\n9. Diagonals:");
        printDiagonals(matrix);

        System.out.println("\n\n10. Boundary Elements:");
        printBoundary(matrix);

        System.out.println("\n\n11. Row-wise Sorted:");
        sortMatrixRows(matrix);
        printMatrix(matrix);

        System.out.println("\n12. Column-wise Sorted:");
        sortMatrixColumns(matrix);
        printMatrix(matrix);

        System.out.println("\n13. Zig-Zag Pattern:");
        printZigZag(matrix);

        int[][] symmetricMatrix = {
                {1, 2, 3},
                {2, 5, 6},
                {3, 6, 9}
        };
        System.out.println("\n\n14. Symmetric Check: " + isSymmetric(symmetricMatrix));

        int[][] identityMatrix = {
                {1, 0, 0},
                {0, 1, 0},
                {0, 0, 1}
        };
        System.out.println("15. Identity Matrix Check: " + isIdentity(identityMatrix));

        System.out.println("16. Sparse Check (Expected true): " + isSparse(matrix));

        int[][] mat2x2 = {
                {4, 7},
                {2, 6}
        };
        System.out.println("17. Inverse of 2x2 Matrix:");
        double[][] inverse = inverse2x2(mat2x2);
        for (double[] row : inverse)
            System.out.println(Arrays.toString(row));
    }

    // 1
    public static void printMatrix(int[][] matrix) {
        System.out.println("Row-wise:");
        for (int[] row : matrix)
            System.out.println(Arrays.toString(row));
        System.out.println("Column-wise:");
        for (int j = 0; j < matrix[0].length; j++) {
            for (int[] ints : matrix)
                System.out.print(ints[j] + " ");
            System.out.println();
        }
    }

    // 2
    public static int totalSum(int[][] matrix) {
        int sum = 0;
        for (int[] row : matrix)
            for (int val : row)
                sum += val;
        return sum;
    }

    // 3
    public static void sumOfRowsAndCols(int[][] matrix) {
        for (int i = 0; i < matrix.length; i++) {
            int rowSum = 0;
            for (int val : matrix[i]) rowSum += val;
            System.out.println("Row " + i + " Sum = " + rowSum);
        }
        for (int j = 0; j < matrix[0].length; j++) {
            int colSum = 0;
            for (int[] ints : matrix) colSum += ints[j];
            System.out.println("Col " + j + " Sum = " + colSum);
        }
    }

    // 4
    public static void maxMinInRows(int[][] matrix) {
        for (int i = 0; i < matrix.length; i++) {
            int max = Integer.MIN_VALUE, min = Integer.MAX_VALUE;
            for (int val : matrix[i]) {
                max = Math.max(max, val);
                min = Math.min(min, val);
            }
            System.out.println("Row " + i + ": Max=" + max + ", Min=" + min);
        }
    }

    // 5
    public static void maxMinInCols(int[][] matrix) {
        for (int j = 0; j < matrix[0].length; j++) {
            int max = Integer.MIN_VALUE, min = Integer.MAX_VALUE;
            for (int[] ints : matrix) {
                max = Math.max(max, ints[j]);
                min = Math.min(min, ints[j]);
            }
            System.out.println("Col " + j + ": Max=" + max + ", Min=" + min);
        }
    }

    // 6 & 7
    public static int[][] addMatrices(int[][] A, int[][] B) {
        int[][] res = new int[A.length][A[0].length];
        for (int i = 0; i < A.length; i++)
            for (int j = 0; j < A[0].length; j++)
                res[i][j] = A[i][j] + B[i][j];
        return res;
    }

    public static int[][] subtractMatrices(int[][] A, int[][] B) {
        int[][] res = new int[A.length][A[0].length];
        for (int i = 0; i < A.length; i++)
            for (int j = 0; j < A[0].length; j++)
                res[i][j] = A[i][j] - B[i][j];
        return res;
    }

    // 8
    public static void printTriangles(int[][] matrix) {
        System.out.println("Upper:");
        for (int i = 0; i < matrix.length; i++)
            for (int j = i; j < matrix.length; j++)
                System.out.print(matrix[i][j] + " ");
        System.out.println("\nLower:");
        for (int i = 0; i < matrix.length; i++)
            for (int j = 0; j <= i; j++)
                System.out.print(matrix[i][j] + " ");
    }

    // 9
    public static void printDiagonals(int[][] matrix) {
        System.out.print("Left Diagonal: ");
        for (int i = 0; i < matrix.length; i++)
            System.out.print(matrix[i][i] + " ");
        System.out.print("\nRight Diagonal: ");
        for (int i = 0; i < matrix.length; i++)
            System.out.print(matrix[i][matrix.length - 1 - i] + " ");
    }

    // 10
    public static void printBoundary(int[][] matrix) {
        int n = matrix.length, m = matrix[0].length;
        for (int j = 0; j < m; j++) System.out.print(matrix[0][j] + " ");
        for (int i = 1; i < n; i++) System.out.print(matrix[i][m - 1] + " ");
        if (n > 1)
            for (int j = m - 2; j >= 0; j--) System.out.print(matrix[n - 1][j] + " ");
        if (m > 1)
            for (int i = n - 2; i > 0; i--) System.out.print(matrix[i][0] + " ");
    }


    public static void sortMatrixRows(int[][] matrix) {
        for (int[] row : matrix)
            Arrays.sort(row);
    }

    // 12
    public static void sortMatrixColumns(int[][] matrix) {
        int n = matrix.length, m = matrix[0].length;
        for (int j = 0; j < m; j++) {
            int[] col = new int[n];
            for (int i = 0; i < n; i++) col[i] = matrix[i][j];
            Arrays.sort(col);
            for (int i = 0; i < n; i++) matrix[i][j] = col[i];
        }
    }

    // 13
    public static void printZigZag(int[][] matrix) {
        for (int i = 0; i < matrix.length; i++) {
            if (i % 2 == 0)
                for (int j = 0; j < matrix[0].length; j++)
                    System.out.print(matrix[i][j] + " ");
            else
                for (int j = matrix[0].length - 1; j >= 0; j--)
                    System.out.print(matrix[i][j] + " ");
        }
    }

    // 14
    public static boolean isSymmetric(int[][] matrix) {
        for (int i = 0; i < matrix.length; i++)
            for (int j = 0; j < matrix.length; j++)
                if (matrix[i][j] != matrix[j][i])
                    return false;
        return true;
    }

    // 15
    public static boolean isIdentity(int[][] matrix) {
        for (int i = 0; i < matrix.length; i++)
            for (int j = 0; j < matrix.length; j++) {
                if (i == j && matrix[i][j] != 1) return false;
                if (i != j && matrix[i][j] != 0) return false;
            }
        return true;
    }

    // 16
    public static boolean isSparse(int[][] matrix) {
        int zeroCount = 0;
        for (int[] row : matrix)
            for (int val : row)
                if (val == 0) zeroCount++;
        return zeroCount > (matrix.length * matrix[0].length) / 2;
    }

    // 17
    public static double[][] inverse2x2(int[][] m) {
        int det = m[0][0] * m[1][1] - m[0][1] * m[1][0];
        if (det == 0) throw new IllegalArgumentException("Matrix is singular");
        return new double[][]{
                {m[1][1] / (double) det, -m[0][1] / (double) det},
                {-m[1][0] / (double) det, m[0][0] / (double) det}
        };
    }
}
