#include<iostream>
using namespace std;
int main(){
    int row, col;
    cout << "Enter Row and Column : ";
    cin >> row >> col;

    int arr_2d[row][col];
    cout << "Enter Elements of Array : " << endl;
    for(int i = 0; i < row; i++){
        for(int j = 0; j < col; j++){
            cout << "Enter element of arr_2d[" << i << "]" << "[" << j << "] : ";
            cin >> arr_2d[i][j]; 
        }
    }

    cout << "2D Array Elements are : " << endl;
    for(int i = 0; i < row; i++){
        cout << endl;
        for(int j = 0; j < col; j++ ){
            cout << "arr_2d[" << i << "]" << "[" <<j <<"] : " << arr_2d[i][j] << " | ";
        }
    }

}