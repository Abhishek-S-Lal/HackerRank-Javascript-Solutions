/*
 * Complete the 'beautifulPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY A
 *  2. INTEGER_ARRAY B
 */

function beautifulPairs(A, B) {
    // Write your code here
    const countA = new Array(1001).fill(0);
    const countB = new Array(1001).fill(0);

    // Count the occurrences of each element in array A
    for (let i = 0; i < A.length; i++) {
        countA[A[i]]++;
    }

    // Count the occurrences of each element in array B
    for (let i = 0; i < B.length; i++) {
        countB[B[i]]++;
    }

    let beautifulPairsCount = 0;

    // Calculate the number of beautiful pairs
    for (let i = 1; i <= 1000; i++) {
        beautifulPairsCount += Math.min(countA[i], countB[i]);
    }

    // If there is at least one non-matching pair, increment beautifulPairsCount by 1
    if (beautifulPairsCount < A.length) {
        beautifulPairsCount++;
    } else {
        // If all pairs are matching, decrement one to make at least one pair non-matching
        beautifulPairsCount--;
    }

    return beautifulPairsCount;
}
