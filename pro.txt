#include<stdio.h>
void main() {
	int s,a=0,r,t;
	printf("Enter an integer : ");
	scanf("%d",&s);
	t=s;
	while (s!=0) {
		r=s%10;
		a=a+r;
		s=s/10;
	} printf("The sum of digits of the given number %d = %d\n",t,a);
}
