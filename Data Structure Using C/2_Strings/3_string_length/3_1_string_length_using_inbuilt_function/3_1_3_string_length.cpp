/*
The C library function size_t strlen(const char *str)
computes the length of the string str up to, 
but not including the terminating null character.
*/

// using strlen() function

#include<iostream>
#include<string.h>
using namespace std;
int main(){
    string str1 = "Arshvir";

     // size using old style
    // size of string object using strlen function
    cout << strlen(str1.c_str()) << endl;

}