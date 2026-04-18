class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;

        let count1 = Array.from({length: 26}, () => 0)
        let count2 = Array.from({length: 26}, () => 0)

         for (let i = 0; i < s1.length; i++) {
            count1[s1.charCodeAt(i) - 97]++;
            count2[s2.charCodeAt(i) - 97]++;
        }

        let matches = 0;
        for (let i = 0; i < 26; i++) {
            if (count1[i] === count2[i]) matches++;
        }


        let left = 0;
        for(let right = s1.length ; right < s2.length; right++){
            if(matches === 26) return true;

            let indexR = s2.charCodeAt(right) - 97;
            count2[indexR]++;

            if(count2[indexR] === count1[indexR]){
                matches += 1
            }else if(count2[indexR] - 1 === count1[indexR]){
                matches -= 1
            }

            let indexL = s2[left].charCodeAt(0) - 97;
            count2[indexL] -= 1;

            if(count2[indexL] === count1[indexL]){
                matches += 1
            }else if(count2[indexL] + 1 === count1[indexL]){
                matches -= 1
            }

            left += 1
        }

        return matches === 26;
    }
}
