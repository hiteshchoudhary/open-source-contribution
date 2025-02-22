#include<iostream>
using namespace std;
int main(){
    int arr_3d[3][3][3] = {{{1,2,3},{1,2,3},{1,2,3}},
                           {{1,2,3},{1,2,3},{1,2,3}},
                           {{1,2,3},{1,2,3},{1,2,3}}};
    for(int i = 0; i < 3; i++){
        for(int j = 0; j < 3; j++){
            for(int k = 0; k < 3; k++){
                cout << arr_3d[i][j][k] << " ";
            }
            cout << ",";
        }
        cout << endl;
    }
}