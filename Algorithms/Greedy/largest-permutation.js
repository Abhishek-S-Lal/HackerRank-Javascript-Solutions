/*
 * Complete the 'largestPermutation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */

function largestPermutation(k, arr) {
    // Write your code here
     const index = new Map();

    for (let i = 0; i < arr.length; i++) {
        index.set(arr[i], i);
    }

    let max = arr.length;

    for (let i = 0; i < arr.length && k > 0; i++) {
        if (arr[i] === max) {
            max--;
            continue;
        }

        const currentNum = arr[i];
        const maxNumIndex = index.get(max);

        // Swap the current number with the maximum number
        arr[i] = max;
        arr[maxNumIndex] = currentNum;

        index.set(max, i);
        index.set(currentNum, maxNumIndex);

        k--;
        max--;
    }

    return arr;
}