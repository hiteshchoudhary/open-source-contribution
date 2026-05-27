#include<iostream>
#include<vector>
#include<list>
using namespace std;
class hashtables{
    private:
    vector<list<pair<int, int>>> Hash;
    int size;
    int countelements;
    public:
    hashtables(int size){
        countelements= 0;
        this->size = size;
        Hash.resize(this->size);
    }


    void createhash(){
        vector<list<pair<int, int>>> oldhash = Hash;
        this->size*=2;
        countelements = 0;
        Hash.clear();
        Hash.resize(this->size);
        for (auto bucket : oldhash)
        {
         for(auto list : bucket)
         {
            addvalue(list.first,list.second);
         }
        }
         
    }
    bool rehash(){
       double loadfactor = countelements/this->size;
        return loadfactor>0.75;
    }
    int index(int key){
        return key%this->size;
    }

    void addvalue(int key,int value){
        if (rehash())
        {
           createhash();
        }
        int idx = index(key);
        Hash[idx].push_back({key,value});
        countelements++;
        
    }
    void search(int key){
        int idx = index(key);
        for ( auto list : Hash[idx])
        {
           
            if (list.first == key)
            {
                cout<< "key: "<<list.first<<" "<<"value: "<<list.second<<endl;
               return;
            }  
        }
        cout<<" no value for "<<key <<endl;
        
    }
};

int main()
{
    hashtables test(10);
    test.addvalue(31, 12);
    test.addvalue(32, 24);
    test.addvalue(33, 55);
    test.addvalue(34, 23);
    test.addvalue(35, 32);
    test.addvalue(36, 48);
    test.addvalue(37, 52);
    test.addvalue(38, 22);
    test.addvalue(39, 19);
    test.addvalue(40, 18);
    test.addvalue(41, 15);
    test.addvalue(42, 13);
    test.addvalue(44, 17);

    test.search(33);
    test.search(44);

    return 0;
}