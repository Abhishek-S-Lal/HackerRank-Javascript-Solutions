/*
 * Complete the 'gridChallenge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function gridChallenge(grid) {
    // Write your code here
    
    // Sort each row of the grid in lexicographically increasing order
    for (let i = 0; i < grid.length; i++) {
        grid[i] = grid[i].split('').sort().join('');
    }

    // Check if each column is in lexicographically increasing order
    for (let col = 0; col < grid[0].length; col++) {
        for (let row = 1; row < grid.length; row++) {
            if (grid[row][col] < grid[row - 1][col]) {
                return "NO";
            }
        }
    }

    return "YES";

}
