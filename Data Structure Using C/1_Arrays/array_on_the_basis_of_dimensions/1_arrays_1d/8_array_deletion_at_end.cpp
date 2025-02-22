#include<iostream>
using namespace std;
int main(){
    int n;
    cout << "Enter the size of array "<<endl;
    cin >> n;

    int adae[n];

    cout << "Enter Array Elements " << endl;
    for(int i = 0; i < n; i++){
        cin >> adae[i];
    }
    cout << "Array Elements before Deletion "<< endl;
    for(int i = 0; i < n; i++){
        cout << adae[i] << " ";
    }
    cout << endl;

    n--;

    cout << "Array after Deletion " << endl;
    for(int i = 0; i < n; i++){
        cout << adae[i] << " ";
    }

}