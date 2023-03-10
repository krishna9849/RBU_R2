/*


You are given an array A, of N integers. In one operation you can:

 

· Selects the maximum element, MX, of the array,
 if there are multiple such elements the she can select any one of them.

 

· Then she removes the selected element and 
subtracts MX from each of the remaining element of the array.

 

After each operation size of the array decreases by 1. 
Find the minimum number of operations, K, required to make all the elements of array unique.

 

Also find the minimum element of the array after exactly K operations.

 

You are given T independent test cases.

 

 

Constraints

 

1 <= T <= 10
 

1 <= N <= 105
 

-109 <= Ai <= 109
 

All input values are integers.
 

Input Format

 

First-line contains T.
 

First line of each test case consists of a single integer N.
 

Second line of each test case consists of N space separated integers denoting the array A.
 

Output Format

 

Print in a newline for each test case two space integers 
denoting the minimum number of operations, K,
 required to make all the elements of array unique and 
 the minimum element of the array after exactly K operations.

 

Sample Input 1

 

2

4

6 -1 2 6

3

-1 2 3

 

Sample Output 1

 

1 -7

0 -1

 

Explanation of Sample 1

 

For 1st test case, she chooses MX = 6 and, So, array becomes: A = [-1-6, 2-6,6-6] = [ -7, -4, 0]. All the elements of array are unique and minimum element of the array is -7.

 

In 2nd test case, all elements are already unique.


*/




function solve(arr, n)
{

        let numsCount= new Map();
        let k=0,ops=0;
        let min=arr[0];
        for(let i=0;i<arr.length;i++){
            let count = numsCount.get(arr[i]) || 0;
            numsCount.set(arr[i],count + 1);
        }
        numsCount.forEach((ele)=>{
            if(ele>1){
                k=k+ele-1;
            }
        })
        console.log(numsCount)
        for(let i=0;i<arr.length;i++){
            let max=findMax(arr);
            if(numsCount.get(max[0])>1){
                
                let count= numsCount.get(max[0]);
                numsCount.set(max[0],count - 1);
                for(let j=0;j<arr.length;j++){
                    arr[j]=arr[j]-max[0];
                    min=Math.min(min,arr[j]);
                }
                
            }
            console.log(arr)
        }
        
      //  k= Math.max(0,k-1);
   // console.log(arr);        
return  [k , min]
}

function findMax(arr){
    let max=[arr[0],0];
    for(let j=1;j<arr.length;j++){
        if(max[0] < arr[j]){
            max[0]=arr[j];
            max[1]=j
        }
    }
    return max;
}




console.log(solve([1,7,7,7,3,3,3,2,2], 3))