class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = []
        for(let i = 0; i < nums.length; i++){
            let arr = [...nums.slice(0, i), ...nums.slice(i+1, nums.length)]
             let prod = arr.reduce((acc,elem) => {
                return acc * elem
            }, 1)

            result.push(prod)
        }

        return result;
    }
}
