/*
 * Complete the 'towerBreakers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 */

function towerBreakers(n, m) {
    // Write your code here
    // If the number of towers is even or the height of the towers is 1, the first player wins.
    if (m === 1 || n % 2 === 0) {
        return 2;
    } else {
        return 1;
    }
}