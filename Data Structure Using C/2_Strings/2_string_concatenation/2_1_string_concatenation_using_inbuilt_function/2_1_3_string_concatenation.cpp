// using strcat() function
/*
This function only works for C-style strings (character arrays)
and doesn’t work for C++-style strings (std::string objects).
*/
#include<iostream>
#include<string.h>
using namespace std;
int main(){
    char chr1[] = "I Love ";
    char chr2[]  = "C++";
    strcat(chr1,chr2);
    cout << chr1;

}