void qone(){
    int t ;
     cin >> t;
    for (int i = 0; i < t; i++) {
        int n;
        cin >> n;
        map<int,int>mpp;
        if (n == 1) {
            cout << 0 << endl;
            continue;
        }

        vector<int> arr(n);
        for (int j = 0; j < n; j++) {
            cin >> arr[j];
            mpp[arr[j]]++;
        }

        // Sort the array
        sort(arr.begin(), arr.end());

        int cnt = 0;
        int freq = 1;

        // Count pairs by iterating over the sorted array
        for (int j = 1; j < n; j++) {
            if (arr[j] == arr[j - 1]) {
                freq++; // Increment frequency if the current element matches the previous
            } else {
                // Calculate pairs for the current frequency
                cnt += (freq * (freq - 1)) / 2;
                freq = 1; // Reset frequency for the next unique element
            }
        }

        // Add pairs for the last group
        cnt += (freq * (freq - 1)) / 2;

        cout << cnt << endl;
    }
    
}
bool isPrime(int n){
    if(n<=1){
        return false;
    }
    for(int i  = 2 ; i< n ;i++){
        if(n%i==0){
            return false ;
        }
    }
    return true ;
}
void pat1(int n){
    for(int i = 1 ; i <= n ; i++){
        for(int j = n-i ; j >=0 ; j--){
            cout<<" ";
        }
        
        for(int j = 1 ; j <= 2*i-1 ; j++){
            cout<<j;
        }
        cout<<endl;
    }
}




//question 2 tle 800
//     int n , k ;
//    cin>>n>>k;
//    vector<char>arr(n,0);

// for(int i = 0 ; i < n ; i++){
//     cin>>arr[i];
// } 

// int maxi = arr[0] ; 
// for(int i = 1 ; i < n ; i++){
// maxi = max(maxi,arr[i]-arr[i-1]);
// }
// int fd = 2*(k-arr[n-1]);
// maxi=max(maxi,fd);
// cout<<maxi<<endl;
// }

//question 3
// vector<int>arr(n,0);
int cnt = 0 ,flag = 0;
  int cons = 0 ;
for(int i = 0 ; i < n ; i++){
   
    if(arr[i]=='.'){
      cons++;
      cnt++;  
    }
    if(arr[i]=='#')cons=0;
   if(cons==3){
    flag=1;
     cout<<"2"<<endl;
     break;
   } 
}
if(flag==0){
    cout<<cnt<<endl;
}
question 4 
int t  ; 
cin>>t;
for(int i = 0 ; i < t ; i++){
     int n ;
   cin>>n;
   vector<char>arr(n,0);

for(int i = 0 ; i < n ; i++){
    cin>>arr[i];
} 
if(n%3==0)cout<<"Second"<<endl;
else cout<<"First"<<endl;
q 5
int t  ; 
cin>>t;
for(int i = 0 ; i < t ; i++){
     int n ;
   cin>>n;
   vector<int>arr(n,0);

for(int i = 0 ; i < n ; i++){
    cin>>arr[i];
} 
if(arr[0]!=1) cout<<"NO"<<endl;
else cout<<"YES"<<endl;

}


q6
int t  ; 
cin>>t;
for(int i = 0 ; i < t ; i++){
     int n ;
   cin>>n;
   vector<int>arr(n,0);

for(int i = 0 ; i < n ; i++){
    cin>>arr[i];
} 
unordered_map<int,int>mpp;
for(int i = 0 ;i<n;i++ ){
  mpp[arr[i]]++;
}
if(mpp.size()>2){
    cout<<"No"<<endl;
    continue;
}
else{
    vector<int>vec;
    for(int i = 0 ; i < mpp.size() ; i++){
        if(mpp[i]!=0){
           vec.push_back(mpp[i]);
        }
    }
    if(vec.size()==1) {
        cout<<"Yes"<<endl;
        continue;
    }
    int cnt1 = vec[0] ; 
    int cnt2 = vec[1] ; 
    int nd = n/2;
    int nl = n - nd ;

    if((cnt1==nd && cnt2==nl) || (cnt1 == nl && cnt2 == nd)){
        cout<<"Yes"<<endl;
    }
    else{
        cout<<"No"<<endl;
    }
}
}

q7
int t  ; 
cin>>t;
for(int i = 0 ; i < t ; i++){
     int n ,m;
   cin>>n>>m;
   string arr ;
   string arm ; 
   cin>>arr>>arm;
   int cnt  = 0;

if(arr.find(arm)!=string :: npos){
    cout<<cnt<<endl;
    continue;
}
else{

    string str = arr ;
    str+=arr;
    cnt++;
    if(str.find(arm)!=string :: npos){
        cout<<cnt<<endl;
        continue;
    }
    else{
        while(str.length()<=25){
            str+=str;
            cnt++;
            if(str.find(arm)!=string::npos){
                cout<<cnt<<endl;
                break;
    }
    }
}
if(str.find(arm)==string::npos){
    cout<<-1<<endl;
}
}
}

q9
int t  ; 
cin>>t;
for(int i = 0 ; i < t ; i++){
     int n ,m;
   cin>>n>>m;
   int flag = 0 ;
   for(int i = 0 ; i < n ; i++){
    int x ;
    cin>>x;
    if(x==m && flag==0){
        flag = 1 ;
         cout<<"YES"<<endl;
        
       
    }
   }
if(flag==0)cout<<"NO"<<endl;

}
q10
int t  ; 
cin>>t;
for(int i = 0 ; i < t ; i++){
     int n;
   cin>>n;
   int sum  = 0 ;
   for(int i = 0 ; i < n -1  ; i++){
    int x  ;
    cin>>x;
    sum+=x;
   }
    
    
    cout<<-sum<<endl;
}

q10
int t  ; 
cin>>t;
for(int i = 0 ; i < t ; i++){
vector<vector<char>>mat(10,vector<char>(10));
for(int i = 0 ; i < 10 ; i++){
    for(int j = 0 ; j < 10 ; j++){
        cin>>mat[i][j];
    }
}
int row = 0;
int pt  = 1 ;
int sum  = 0 ;
while(row<10){
    int col = 0 ; 
    while(col<10){
        if(mat[row][col]=='X'){
            if(row == 0 || row == 9 || col == 0 || col==9)sum+=1;
            else if(((row == 1 || row == 8) && col >0 && col < 9) || col == 1 || col==8)sum+=2;
            else if(((row == 2 || row == 7) && col >1 && col < 8) || col == 2|| col==7)sum+=3;
            else if(((row == 3 || row == 6) && col >2 && col < 7) || col == 3|| col==6)sum+=4;
            else if(((row == 4 || row == 5) && col >3 && col < 6) || col == 4|| col==5)sum+=5;
        }
        col++;
    }
    row++;
}
cout<<sum<<endl;
}

q11
int t  ; 
cin>>t;
int mini = INT_MAX;
for(int i = 0 ; i < t ; i++){
int x ;
cin>>x;
mini=min(mini,abs(x));
}
cout<<mini<<endl;


//write here ;
// cout<<"Enter the fact";
// int n ;
// int ans = fib(n);
// cout<<ans;
// adjList();
// cout<<"Hello India !! Day!!!"<<endl;
// DisjointSet ds(7);
// ds.unionBySize(1,2);
// ds.unionBySize(2,3);
// ds.unionBySize(4,5);
// if(ds.findUPar(1)==ds.findUPar(2)){
// cout<<"BElong to same component ";
// }
// else{
//     cout<<"They dont belong to same component";
// }

q12
    int t;
    cin >> t;
    for (int i = 0; i < t; i++) {
        int n;
        cin >> n;
        vector<int> arr(n);
        for (int i = 0; i < n; i++) {
            cin >> arr[i];
        }

        vector<int> ans;
        ans.push_back(arr[0]); // Fix: Use push_back() instead of direct assignment

        for (int i = 1; i < n; i++) {
            if (arr[i - 1] <= arr[i]) {
                ans.push_back(arr[i]);
            } else {
                ans.push_back(arr[i]);
                ans.push_back(arr[i]);
            }
        }

        cout << ans.size() << endl;
        for (int i = 0; i < ans.size(); i++) {
            cout << ans[i] << " ";
        }

    q13
        
        cin>>arr[i];
        mini=min(mini,arr[i]);
     }
     vector<int>b;
     vector<int>c;
    for(int i = 0 ; i < n ; i++){
        if(arr[i]==mini) b.push_back(arr[i]);
        else c.push_back(arr[i]);
    }

    if(b.size()==0 || c.size()==0) cout<<-1<<endl;
    else{
        cout<<b.size()<<" "<<c.size()<<endl;
        for(int i=0; i<b.size(); i++){
            cout<<b[i]<<" ";
        }
        cout<<endl;
        for(int i=0; i<c.size(); i++){
            cout<<c[i]<<" ";
        }
        cout<<endl;
        q14
            int t;
    cin >> t;
    for (int i = 0; i < t; i++) {
    long long a , b , c ;
    cin>>a>>b>>c;
    if(((a%2)+(b%2)+(c%2))%2==1)cout<<"First"<<endl;
    else cout<<"Second"<<endl;
  
    }
q15
    // cout<<"hello";
    int t;
    cin >> t;
    for (int i = 0; i < t; i++) {
    int n ;
    cin>>n;
    int odd = 0 ; 
    int even = 0 ;

    for(int i = 0 ; i  < n ; i++){
        int x ; 
        cin>>x;
        if(x%2==0){
            even++;
        }
        else{
            odd++;
        }
    }
    if(odd==2 && even ==0){
        cout<<"YES"<<endl;
    }
    else if(odd%2==0){
        cout<<"YES"<<endl;
    }
    else{
        cout<<"NO"<<endl;
    }
    
    
  
    }