class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let map = new Map();
        let maxLength = 0;

        for(let right = 0; right < s.length; right++){
            if(map.has(s[right]) && map.get(s[right]) >= left){
                left = map.get(s[right]) + 1
            }

            maxLength = Math.max(maxLength, right - left + 1)
            map.set(s[right], right)
        }

        return maxLength;
        
    }
}
