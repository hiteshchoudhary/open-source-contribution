#include <stdbool.h>
#include <stdio.h>

#define N 4 // Define the size of the chessboard (e.g., for 4x4)

// Function to print the solution board
void printSolution(int board[N][N]) {
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            printf(" %d ", board[i][j]); // 1 for queen, 0 for empty
        }
        printf("\n");
    }
}

// Function to check if placing a queen at board[row][col] is safe
bool isSafe(int board[N][N], int row, int col) {
    int i, j;

    // Check this row on the left side
    for (i = 0; i < col; i++) {
        if (board[row][i]) {
            return false;
        }
    }

    // Check upper diagonal on left side
    for (i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j]) {
            return false;
        }
    }

    // Check lower diagonal on left side
    for (i = row, j = col; j >= 0 && i < N; i++, j--) {
        if (board[i][j]) {
            return false;
        }
    }

    return true; // No attack found
}

// Recursive function to solve the N-Queens problem using backtracking
bool solveNQUtil(int board[N][N], int col) {
    // Base case: If all queens are placed, return true
    if (col >= N) {
        return true;
    }

    // Consider this column and try placing a queen in all rows one by one
    for (int i = 0; i < N; i++) {
        // Check if the queen can be placed at board[i][col]
        if (isSafe(board, i, col)) {
            // Place the queen
            board[i][col] = 1;

            // Recur to place the rest of the queens
            if (solveNQUtil(board, col + 1)) {
                return true;
            }

            // If placing queen at board[i][col] doesn't lead to a solution,
            // then backtrack and remove the queen from board[i][col]
            board[i][col] = 0; // BACKTRACK
        }
    }

    // If the queen cannot be placed in any row in this column, return false
    return false;
}

// Driver program to test the above functions
int main() {
    int board[N][N];
    // Initialize the board with 0s
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            board[i][j] = 0;
        }
    }

    if (solveNQUtil(board, 0) == false) {
        printf("Solution does not exist");
        return 0;
    }

    printSolution(board);
    return 0;
}