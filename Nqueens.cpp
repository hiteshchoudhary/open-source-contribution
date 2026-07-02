#include <iostream>
#include <vector>
using namespace std;

// Print the board
void printBoard(vector<string> &board, int n)
{
    for (int i = 0; i < n; i++)
    {
        cout << board[i] << endl;
    }
    cout << endl;
}

// Check if we can place a queen
bool isSafe(int row, int col,
            vector<int> &leftRow,
            vector<int> &upperDiagonal,
            vector<int> &lowerDiagonal,
            int n)
{
    if (leftRow[row] == 1)
        return false;

    if (lowerDiagonal[row + col] == 1)
        return false;

    if (upperDiagonal[n - 1 + col - row] == 1)
        return false;

    return true;
}

// Backtracking function
void solve(int col,
           vector<string> &board,
           vector<int> &leftRow,
           vector<int> &upperDiagonal,
           vector<int> &lowerDiagonal,
           int n)
{
    // Base Case
    if (col == n)
    {
        printBoard(board, n);
        return;
    }

    // Try placing queen in every row
    for (int row = 0; row < n; row++)
    {
        if (isSafe(row, col, leftRow, upperDiagonal, lowerDiagonal, n))
        {
            // Place Queen
            board[row][col] = 'Q';
            leftRow[row] = 1;
            lowerDiagonal[row + col] = 1;
            upperDiagonal[n - 1 + col - row] = 1;

            // Recursive Call
            solve(col + 1, board, leftRow, upperDiagonal, lowerDiagonal, n);

            // Backtracking
            board[row][col] = '.';
            leftRow[row] = 0;
            lowerDiagonal[row + col] = 0;
            upperDiagonal[n - 1 + col - row] = 0;
        }
    }
}

int main()
{
    int n;

    cout << "Enter value of N: ";
    cin >> n;

    vector<string> board(n, string(n, '.'));

    // Hash Arrays
    vector<int> leftRow(n, 0);
    vector<int> upperDiagonal(2 * n - 1, 0);
    vector<int> lowerDiagonal(2 * n - 1, 0);

    solve(0, board, leftRow, upperDiagonal, lowerDiagonal, n);

    return 0;
}