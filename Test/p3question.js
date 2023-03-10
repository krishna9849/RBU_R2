/*


Question Name: Minimum Array

Problem Statement

You are given an array A of length N and an integer M. 
You need to find the minimum possible value of L 
such that there exists another array B of length N such that :

L>=0
(A1+B1)%M <= (A2+B2)%M <= …… <= (AN-1+BN-1)%M <= (AN+BN)%M
Maximum of (B1, B2, …, BN) = L
Input Format

First line contains two space separated integers N and M.
Next line contains N space separated integers denoting the elements of array A.
Output Format

You need to print the minimum possible value of L 
such that there exists another array B of length N 
which satisfies the given conditions.
Constraints

1<=N,M<=10^5
0<=Ai<=10^8
Sample Input 1

5 7

0 13 8 3 9

Sample Output 1

1

Explanation of Sample 1

Let array B = [0 1 0 0 1]

(A1+B1)%7 = (0+0)%7 = 0

(A2+B2)%7 = (13+1)%7 = 0

(A3+B3)%7 = (8+0)%7 = 1

(A4+B4)%7 = (3+0)%7 = 3

(A5+B5)%7 = (9+1)%7 = 3

It can be seen that (A1+B1)<=(A2+B2)<=(A3+B3)<=(A4+B4)<=(A5+B5)

And Maximum(0,1,0,0,1) = 1

*/