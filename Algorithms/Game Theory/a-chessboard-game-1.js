/*
 * Complete the 'chessboardGame' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x
 *  2. INTEGER y
 */

function chessboardGame(x, y) {
    // Write your code here
    // If the cell (x, y) is in one of the winning positions, the first player wins.
    if (x % 4 === 0 || x % 4 === 3 || y % 4 === 0 || y % 4 === 3) {
        return "First";
    } else {
        return "Second";
    }
}