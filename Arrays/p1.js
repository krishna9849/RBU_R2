/*


lucky number from the given matrix
Problem Statement Sharukh is an teacher in relevel 
and he asked students to find the lucky number from the given m x n matrix of distinct numbers,
 return all lucky numbers in the matrix in any order.
  A lucky number is an element of the matrix such that 
  it is the minimum element in its row and maximum in its column.

Input Format 
First line contains a two integer denoting M and N.
 Next line contains space separated integers denoting the elements of array m x n.

Output Format
 Output should contain exactly 1 line containing space separated integers
  denoting the lucky numbers from the matrix

Constraints b m == mat.length b n == mat[i].length b 1 <= n, m <= 50 b 1 <= matrix[i][j] <= 105.
 b All elements in the matrix are distinct.

Sample Input 
1 3 3 
3 7 8 9 11 13 15 16 17

Sample Output 1 15

Explanation of Sample 1 First line represents m x n ie. 3 x 3 matrix (3 row , 3 columns)

Input: matrix = [[3,7,8],[9,11,13],[15,16,17]] 

Output: 15 Explanation: 15 is the only lucky number
 since it is the minimum in its row and the maximum in its column.

Sample Input 
2 2 2 
7 8 1 2

Sample Output 2 7 

Explanation of Sample 2 
First line represents m x n ie. 2 x 2 matrix (2 row , 2 columns) 
Input: matrix = [[7,8],[1,2]] 
Output: 7 Explanation: 7 is the only lucky number
 since it is the minimum in its row and the maximum in its column.

*/


var findminMmaxN=(arr)=>{
let minrow ,col,max, i=0;

while(i<arr.length){


  minrow=rowmin(arr,i);
  //console.log(minrow[0]  , minrow[1]);
  max=colmax(arr,minrow[1]);
  if(minrow[0]==max){
    return max;
  }
  

  i++;
}



}

function rowmin(arr,row){
  let minrowval=arr[row][0];
    let mincol=0;
  for(let j=1;j<arr[row].length-1;j++){
    
    if(minrowval>arr[row][j]){
      minrowval=arr[row][j];
      mincol=j
    }

  }
return [minrowval , mincol];
}


function colmax(arr,col){
let colmax=arr[0][col];

for(let i=1;i<arr.length;i++){
  colmax=Math.max(colmax,arr[i][col]);
}

return colmax;
}



console.log(findminMmaxN([[19,9,8],[41,31,38],[16,18,17]]))