class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map(e => e.length+"#"+e).join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = []
        let i = 0;

        while(i < str.length){
            let j = i;
            while(str[j] !== "#"){
                j++;
            }
            let length = Number(str.slice(i,j));
            let string = str.slice(j+1, length + j + 1)
            result.push(string);
            i = j + length + 1;
        }
        return result;
    }
}
