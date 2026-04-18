class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = new Map();
        let left = 0;
        let result = 0;
    
        for(let right = 0; right < s.length; right++){

            map.set(s[right], (map.get(s[right]) ?? 0) + 1)

            while((right - left + 1 ) - Math.max(...map.values()) > k){
                map.set(s[left], map.get(s[left]) - 1)
                left += 1
            }

            result = Math.max(result, right - left + 1)
        }

        return result;
    }
}
