class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {

        let tMap = new Map(), winMap = new Map();

        let left = 0, right = 0, smallest = Infinity, minLeft, minRight, satisfied = 0;

        for(let i = 0; i < t.length; i++){
            tMap.set(t[i], (tMap.get(t[i]) ?? 0) + 1)
        }

        while(right < s.length){
            let current = s[right]; 
            winMap.set(current, (winMap.get(current) ?? 0) + 1)

            if(tMap.get(current) && winMap.get(current) === tMap.get(current)){
                satisfied += 1;
            } 

            while(tMap.size === satisfied){
                if(right - left + 1 < smallest){
                    smallest = right - left + 1;
                    minLeft = left;
                    minRight = right;
                }                
                winMap.set(s[left], winMap.get(s[left]) - 1)
                if(tMap.get(s[left]) && winMap.get(s[left]) < tMap.get(s[left])) satisfied--;
                left++;
            }
            right++;
        }

        if(smallest === Infinity) return ""

        return s.slice(minLeft, minRight+1)
    }
}
