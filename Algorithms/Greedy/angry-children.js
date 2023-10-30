/*
 * Complete the 'maxMin' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */

function maxMin(k, arr) {
    // Write your code here
    arr.sort((a, b) => a - b); // Sort the array in ascending order
    let minUnfairness = Infinity;

    for (let i = 0; i <= arr.length - k; i++) {
        const unfairness = arr[i + k - 1] - arr[i];
        if (unfairness < minUnfairness) {
            minUnfairness = unfairness;
        }
    }

    return minUnfairness;
}