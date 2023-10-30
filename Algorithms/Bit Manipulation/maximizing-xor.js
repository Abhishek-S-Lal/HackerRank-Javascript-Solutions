/*
 * Complete the 'maximizingXor' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER l
 *  2. INTEGER r
 */

function maximizingXor(l, r) {
    // Write your code here
    let maxXOR = 0;

    for (let i = l; i <= r; i++) {
        for (let j = i; j <= r; j++) {
            const currentXOR = i ^ j;
            if (currentXOR > maxXOR) {
                maxXOR = currentXOR;
            }
        }
    }

    return maxXOR;
}