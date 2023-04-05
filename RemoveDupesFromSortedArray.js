let removeDuplicates = function(nums){
    let freq = {count : 0}

    for(let i = 0; i <= nums.length - 1; i++){
        let current = nums[i]

        if(freq[current] && current != "_"){
            nums.splice(i, 1)
            nums.push("_")
            i--
        }else if(! freq[current] && current != "_"){
            freq[current] = 1
            freq.count++
        }
    }
    return [freq.count, nums]
}


console.log(removeDuplicates([1, 1, 2]))
console.log(removeDuplicates([1, 3, 5, 5, 8, 10, 10]))
console.log(removeDuplicates([4, 8, 8, 12, 15, 15, 18, 29, 29]))
