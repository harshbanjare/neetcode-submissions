class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map();
        const bucket =  Array.from({length: nums.length+1}, () => []);
        nums.forEach(e => freq.set(e, (freq.get(e)??0)+1));
        let result = [];

        for(let [elem, count] of freq){
            bucket[count].push(elem)
        }
        

        for(let i = nums.length; i >= 0; i--){
            for(let j = 0; j < bucket[i].length; j++){
                result.push(bucket[i][j]);
                if(result.length === k){
                    return result;
                }
            }
        }


    }
}
