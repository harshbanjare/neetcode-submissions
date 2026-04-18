class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const alphaNum = new Set("abcdefghijklmnopqrstuvwxyz0123456789".split(''))
    

        let left = 0;
        let right = s.length - 1;


        while(left < right){
            while(left<right && !alphaNum.has(s[left].toLowerCase())){
                left++;
            }
            while( left<right && !alphaNum.has(s[right].toLowerCase())){
                right--;
            }

            if(s[left].toLowerCase() !== s[right].toLowerCase()){
                return false;
            }

            left++;
            right--;
        }
        return true;

    }
}
