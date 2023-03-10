/*

XOR operation

1 0 => 1

0 1 => 1

0 0 => 0
1 1 => 0




Question Name: Minimum Product 1

Problem Statement

You are given an array A of length N.
 You need to partition the array into continuous blocks such that :

the Bitwise XOR of elements of each block is greater than 0.
The Product of the number of blocks and maximum of the sizes of all blocks is minimized.
Like say the array was : [0,1,1,0,1].

Then we can Partition it into three blocks as : (1,2), (2,3), (4,4) 
(these represent the start and end of each block) = [0,1], [1,0], [1].

Here the Bitwise XOR of elements of each block is = 1(greater than 0),

number of blocks = 3,

maximum of the sizes of all blocks = maximum(2,2,1) = 2

Input Format

First-line contains a single integer N, denoting the length of the array.
The next line contains N space-separated integers denoting the array elements.
Output Format

Print the minimum product of : 
the number of blocks and the maximum of the sizes of all blocks you can get.
 If there is no way to partition the array print -1.
Constraints

1<=N<=1000
Elements of the array are either 0 or 1.
Sample Input 1

5

0 1 1 0 0

Sample Output 1

6

Explanation of Sample 1

We can partition the array as : (1,2), (3,5)
(these represent the start and end of each block) = [0,1], [1,0,0].



*/