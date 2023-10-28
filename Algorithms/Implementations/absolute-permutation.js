/*
 * Complete the 'absolutePermutation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 */

function absolutePermutation(n, k) {
    // Write your code here
    if (k === 0) {
        // If k is zero, the original sequence is the solution.
        return Array.from({ length: n }, (_, i) => i + 1);
    }

    if (n % (2 * k) !== 0) {
        // It's not possible to create the required permutation.
        return [-1];
    }

    const result = new Array(n);
    for (let i = 0; i < n; i++) {
        if (i % (2 * k) < k) {
            // Compute the first part of the permutation.
            result[i] = i + 1 + k;
        } else {
            // Compute the second part of the permutation.
            result[i] = i + 1 - k;
        }
    }

    return result;
}