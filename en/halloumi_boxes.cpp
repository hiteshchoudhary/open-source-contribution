#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

int main(){
    int t;
    cin>>t;
    while(t--){
        int n,k;
        cin>>n>>k;
        vector<int> arr;
        for(int i =0;i<n;i++){
            int inp;
            cin>>inp;
            arr.push_back(inp);
        }
        if(k>=2){
            cout<<"Yes";
        }
        else{
            vector<int> temp = arr;
            sort(temp.begin(),temp.end());

            if(temp == arr){
                cout<<"Yes";
            }
            else
                cout<<"No";
        }
        cout<<"\n";
    }
    return 0;
}