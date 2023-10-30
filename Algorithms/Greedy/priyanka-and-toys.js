/*
 * Complete the 'toys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY w as parameter.
 */

function toys(w) {
    // Write your code here
     w.sort((a, b) => a - b); // Sort the weights in ascending order
    let count = 0; // Count of toys purchased
    let i = 0;

    while (i < w.length) {
        const currentWeight = w[i];
        count++;
        // Find the range of toys within 4 units of the current toy's weight
        while (i < w.length && w[i] <= currentWeight + 4) {
            i++;
        }
    }

    return count;
}
