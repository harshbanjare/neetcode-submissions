class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
     
    const rows = Array.from({length: 9}, () => new Set())
    const cols = Array.from({length: 9}, () => new Set())
    const boxes = Array.from({length: 9}, () => new Set())

    for(let row = 0; row < 9; row++){
        for(let col = 0; col < 9; col++){
            let curr = board[row][col];
            let boxIndex = 3 * Math.floor(row/3) + Math.floor(col/3)
            if(curr === ".") continue
            if(
                rows[row].has(curr) ||
                cols[col].has(curr) ||
                boxes[boxIndex].has(curr)
            ) return false

            rows[row].add(curr)
            cols[col].add(curr)
            boxes[boxIndex].add(curr)
        }
    }

    return true
    }
}
