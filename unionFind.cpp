#include <stdlib.h>
#include <vector>

std::vector<int> parent, csize;

int find(int u) {
    return (parent[u] == u ? u : parent[u] = find(parent[u]));
}

void Union(int u, int v) {
    int upar = find(u), vpar = find(v);
    if(upar == vpar) return;

    if(csize[upar] < csize[vpar]) {
        parent[upar] = vpar;
        csize[vpar] += csize[upar];
    }
    else {
        parent[vpar] = upar;
        csize[upar] += csize[vpar];
    }
} 

int main() {
    parent.resize(10);
    csize.resize(10,1);

    for(int i=0;i<10;i++) parent[i] = i;
    Union(1,2);
    return 0;
}