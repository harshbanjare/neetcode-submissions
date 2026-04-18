class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxHeightLeft = []
        let maxHeightRight = []

        let total = 0;

        let largestLeft = 0;
        for(let i = 0; i < height.length; i++){
            maxHeightLeft.push(largestLeft)
            largestLeft = Math.max(largestLeft, height[i])
        }

        let largestRight = 0;
        for (let i = height.length - 1; i >= 0; i--){
            maxHeightRight[i] = largestRight;
            largestRight = Math.max(largestRight, height[i])
        }

        height.forEach((h,idx)=>{
            total += Math.max(Math.min(maxHeightLeft[idx], maxHeightRight[idx]) - h, 0)
        })

        return total;
        
    }
}
