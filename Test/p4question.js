/*

ARRAY EQUALITY

Problem Statement

Amy has an array A, of N integers. She wants to make all the elements of the array equal.

On each day she can select a subarray of A, with length exactly M and perform following operation:

· Pick any element of the selected subarray 
and increase or decrease it by 1. She can perform this operation 
any number of times she wants (possibly 0), on that day.

Find the minimum number of days required to make all the elements of the array A equal.

NOTE: A subarray is the sequence of consecutive elements of the array.

You are given T independent test cases.

Constraints

1 <= T <= 5
1 <= N <= 10^5
1 <= Ai <= 10^2
1 <= M <= N
All input values are integers.
Input Format

First-line contains T.
First line of each test case consists of two space separated integers N and M.
Second line of each test case consists of N space separated integers denoting the array A.
Output Format

Print in a newline for each test case single integer denoting
 the minimum number of days required to make all the elements of the array A equal.
Sample Input 1

1

5 3

1 2 2 3 1

Sample Output 1

1

Explanation of Sample 1

 

On first day she can chose the subarray A[2:4] = { 2, 2, 3} 
and decrease the first two element of this subarray by 1 
and last element by 2. So, A[2:4] = {1, 1, 1}

 
*/