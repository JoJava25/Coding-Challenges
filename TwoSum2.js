function twoSum(nums, target){
    for(let i = 0; i <= nums.length - 1; i++){
        for(let n = 0; n <= nums.length - 1; n++){
            if(i !== n){
                if(nums[i] + nums[n] === target){
                    return [i,n]
                }
            }
        }
    }
    
}

console.log(twoSum([1,3,5,7], 8))
console.log(twoSum([1,3,5,7], 4))