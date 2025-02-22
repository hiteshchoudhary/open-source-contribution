// using for loop
#include<iostream>
using namespace std;
int main(){
    string str1 = "I am Currently ";
    string str2 = "Learning DSA in C++";
    string result;

    for(int i = 0; str1[i]!= '\0'; i++){
        result = result + str1[i];
    }

    for(int i = 0; str2[i] != '\0'; i++){
        result += str2[i];
    }

    cout << result;

    return 0;
}