function minimumProduct(n, arr)
{

    if(n<=0)
    return -1;
let i=0;
let blockSize=0;
let max=blockSize;
let blockCount=0;
let block=arr[i];
blockSize++;
for(let i=1;i<n;i++){
    
    block= arr[i]^block;
   for(j=i+1;j<n;j++){

    if(block){
        
    }

   }

}

}


console.log(minimumProduct(5,[0,1,1,0,0]))