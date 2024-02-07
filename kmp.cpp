#include <bits/stdc++.h>
using namespace std;

int main()
{
    string s;
    cin>>s;
    int n=s.length();
    vector<int>kmp(n+1);
    kmp[0]=-1;
    int i=0;
    int j=-1;
    while(i<n)
    {
        while(j!=-1 and s[i]!=s[j])
        j=kmp[j];
        i++;j++;
        kmp[i]=j;
    }
    for(auto it:kmp)
    cout<<it<<" ";
return 0;
}
