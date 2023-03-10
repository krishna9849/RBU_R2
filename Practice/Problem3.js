/*



N students have taken the examination in the Berland institute of Technology.
 The score of the ith student in the examination is Ai 
 and the maximum possible score in the examination is M.

You are student K and have hacked into thes institute database which stores the scores of all the students.

You want to increase your score as much as possible. 
But if the median of the scores of all the students changes by increasing your score, 
the examination board will get alerted and will fail you in the examination.

Given array A denoting the scores of all the students, 
print the maximum possible score you can get such that the examination board does not get alerted.

Note :

Median of an array of length N is the (N+1)/2th element of the array in sorted order. 
Like the median of [4,1,3,2] = 2, [4,1,3,2,5] = 3 and so on.
1,2,3,4   ==>   1,2 ,3 ,4 5
median = (n+1)/2th element
Input Format

First line contains three space separated integers denoting N, M, and K.
The next line contains N space-separated integers denoting the elements of array A.

Output Format

Print the maximum possible score you can get such that the examination board does not get alerted.
Constraints

1<=N<=105
1<=M<=106
1<=Ai<=M
1<=K<=N
Sample Input 1

N=3 Max posible scrore to get M = 6 K=2

5 1 3

Sample Output 1

3

Explanation of Sample 1

Initially median of the scores = [1 3 5] = 3.

If we increase the score of the Kth(i.e. 2nd) student by 1, median becomes = [2 3 5] = 3

If we again increase the score of the Kth(i.e. 2nd) student by 1, median becomes = [3 3 5] = 3

If we again increase the score of the Kth(i.e. 2nd) student by 1, median becomes = [3 4 5] = 4, hence the median changes.

So the maximum possible score of the second student, without changing the median is 3.

array starts from index =1 
*/


function increaseScore(arr, n , m ,k){

    let medianidx= n%2==0 ? n/2 : (n-1) / 2;
    //console.log(medianidx)
    var aux=arr.slice().sort();//sort(arr);
    //console.log("AUX arry" , aux)
    let currMedian=aux[medianidx];
    let median=aux[medianidx];

//    console.log(currMedian);
    while(median==currMedian){

        arr[k-1]=arr[k-1]+1;
        aux= arr.slice().sort();
       // console.log(aux);        
        currMedian=aux[medianidx];

    }

        arr[k-1]=arr[k-1]-1;


return arr[k-1];

}


console.log("Max possible marks obtained for a student k=2  is " ,increaseScore([5,2,1],3,6,2));



