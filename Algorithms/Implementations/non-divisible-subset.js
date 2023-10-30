/*
 * Complete the 'nonDivisibleSubset' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY s
 */

function nonDivisibleSubset(k, S) {
    // Write your code here
    // Initialize an array to store the count of remainders
    const remainders = new Array(k).fill(0);

    // Count the remainders of elements in S when divided by k
    for (let i = 0; i < S.length; i++) {
        remainders[S[i] % k]++;
    }

    // Initialize the result as the minimum of either remainders[0] or 1
    let result = Math.min(remainders[0], 1);

    // For each remainder from 1 to k/2 (inclusive)
    for (let i = 1; i <= k / 2; i++) {
        if (i !== k - i) {
            // Take the maximum of remainders[i] and remainders[k-i]
            result += Math.max(remainders[i], remainders[k - i]);
        }
    }

    // If k is even and there are elements with remainder k/2, add 1 to the result
    if (k % 2 === 0) {
        result++;
    }

    return result;
}