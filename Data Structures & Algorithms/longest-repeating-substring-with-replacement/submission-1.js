class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let freq = new Map();
        let result = 0;

        for(let right = 0; right < s.length; right++){
            freq.set(s[right], (freq.get(s[right]) ?? 0) + 1)

            if((right-left+1) - Math.max(...freq.values()) > k){
                freq.set(s[left], freq.get(s[left]) - 1)
                left += 1;
            }

            result = Math.max(result, right - left +1)

        }

        return result;
    }
}
