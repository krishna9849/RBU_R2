/*

Given an array A consisting of N positive integers.

A subsequence is a sequence that can be derived from the given array
 by deleting zero or more elements(not all) without changing the order of the remaining elements.

The cost of a subsequence is equal to the sum of all elements of that subsequence.

You have to tell the maximum possible cost of a subsequence of array A, 
such that the cost of this subsequence is a prime number.

If there is no such subsequence whose cost is prime number, print “-1”.

Input Format

First line contains a single integer denoting N.
Next line contains N space separated integers denoting the elements of array A.
Output Format

Print the maximum possible cost of a subsequence of array A, such that the cost of this subsequence is a prime number.
Constraints

1<=N<=10^2
1<=Ai<=10^4
Sample Input 1

5

3 1 3 10 4

Sample Output 1

17

Explanation of Sample 1

Select the subsequence [3 1 3 10 4]. Cost of subsequence = 3+10+4 = 17, which is a prime number.

*/



function prime(num){
let count=0;
    for(let i=1;i<=num;i++){

        if(num%i==0){
            count++;
        }

    }
if(count==2){
    return true;
}
else {
    return false;
}

}


function primeSumSubsequence(nums, n)
{

    let max=nums[0];
    let maxPrime=-1;
    for(let i=1;i<nums.length;i++){

        nums[i]=Math.max(max,nums[i]+nums[i-1]);
        if(prime(nums[i])){
           maxPrime=Math.max(maxPrime,nums[i]); 
        }

    }
return maxPrime;
}



console.log("Exactly " ,primeSumSubsequence([3,3,3,3,10],5))

