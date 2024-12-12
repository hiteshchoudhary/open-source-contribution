#include <stdio.h>
#define size 50

int main()
{
	char str[size];
	int choice;
	int i = 0;

	printf("1.Length\n2.lower\n3.upper\n4.copy\n5.append\n6.reverse\n7.compare\n8.substr\n9.insert\n10.delete");
	scanf("%d", &choice);

	switch (choice)
	{
	case 1:
		printf("Enter str: ");
		scanf("%s", str);
		//	printf("%s",str);

		while (str[i] != '\0')
		{
			i++;
		}
		printf("Length of %s is: %d", str, i);
	}
	break;

	return 0;
}
