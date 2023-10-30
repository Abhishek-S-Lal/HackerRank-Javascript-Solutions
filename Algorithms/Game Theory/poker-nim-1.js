/*
 * Complete the 'pokerNim' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY c
 */

function pokerNim(k, c) {
    // Write your code here
    // Calculate the XOR of the number of objects in all piles.
    let xorSum = 0;
    for (const pileSize of c) {
        xorSum ^= pileSize;
    }

    // If the XOR sum is 0, the first player wins; otherwise, the second player wins.
    if (xorSum === 0) {
        return "Second";
    } else {
        return "First";
    }
}