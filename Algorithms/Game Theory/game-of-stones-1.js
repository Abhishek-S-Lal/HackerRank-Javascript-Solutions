/*
 * Complete the 'gameOfStones' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER n as parameter.
 */

function gameOfStones(n) {
    // Write your code here
     // If the number of stones is a multiple of 7 and not 1 or 0, it's a losing position.
     if (n % 7 > 1) {
        return "First";
    } else {
        return "Second";
    }
}