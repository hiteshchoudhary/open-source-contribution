#include <iostream>
using namespace std;

char year[28] = {'A', 'B', 'C', 'K', 'F', 'G', 'A', 'I', 'D', 'E', 'F', 'N', 'B', 'C', 'D', 'L', 'G', 'A', 'B', 'J', 'E', 'F', 'G', 'H', 'C', 'D', 'E', 'M'};
int month[2][12] = {{1, 4, 4, 7, 2, 5, 7, 3, 6, 1, 4, 6}, {1, 4, 5, 1, 3, 6, 1, 4, 7, 2, 5, 7}};
char day[7][10] = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};
int i, j, y, m, d, one[100], two[14][12];

void setyear();
void setmonth(int p, int q);

int main()
{
	setyear();
	setmonth(7, 0);
	setmonth(14, 1);
	while (1)
	{
		cout << "\n\nFormat is YY/MM/DD...";
		cout << "\nEnter Year (2001 to 2100) : ";
		cin >> y;
		cout << "Enter Month : ";
		cin >> m;
		cout << "Enter Date : ";
		cin >> d;
		cout << "\nD'day is ";
		cout << day[((d - 1 + two[one[y - 1] - 1][m - 1]) % 7)];
		cout << endl;
	}
	return 0;
}

void setyear()
{
	for (i = j = 0; i < 100; i++)
	{
		j %= 28;
		one[i] = int(year[j++]) - 64;
		//		cout<<i+1<<"\t"<<(one[i])<<endl;
	}
}

void setmonth(int p, int q)
{
	for (i = p - 7; i < p; i++)
	{
		for (j = 0; j < 12; j++)
		{
			month[q][j] %= 7;
			two[i][j] = month[q][j]++;
			//				cout<<two[i][j]<<"\t";
		}
		//		cout<<endl;
	}
	//	cout<<endl;
}
