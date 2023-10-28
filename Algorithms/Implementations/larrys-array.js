/*
 * Complete the 'larrysArray' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY A as parameter.
 */

function larrysArray(arr) {
    // Write your code here
    const inversionCount = arr.reduce((count, currentElement, currentIndex) => {
        for (let j = currentIndex + 1; j < arr.length; j++) {
            if (arr[j] < currentElement) {
                count++;
            }
        }
        return count;
    }, 0);

    return inversionCount % 2 === 0 ? 'YES' : 'NO';
}