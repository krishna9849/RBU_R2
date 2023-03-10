var maxSubArray = function(nums) {

let solution=nums[0]
for(let i=1;i<nums.length;i++){
    console.log(nums);
    nums[i]=Math.max(nums[i] , nums[i]+nums[i-1]);
    
    solution=Math.max(nums[i],solution)


}

return solution;

};

console.log(maxSubArray([1,2,3,-4]))

//console.log(maxSubArray([-2,-1,-2]))