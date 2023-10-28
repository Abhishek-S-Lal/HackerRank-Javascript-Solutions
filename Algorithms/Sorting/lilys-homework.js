/*
 * Complete the 'lilysHomework' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
function lilysHomework(arr) {
    const minimumSwaps = (arr) => {
        const n = arr.length;
        //slice() method is used to return a new array
        const sorted = arr.slice().sort((a, b) => a - b);
        const indexMap = {};

        for (let i = 0; i < n; i++) {
            indexMap[arr[i]] = i;
        }

        let swaps = 0;

        for (let i = 0; i < n; i++) {
            if (arr[i] !== sorted[i]) {
                swaps++;
                const current = arr[i];
                const correctValue = sorted[i];
                const correctIndex = indexMap[correctValue];

                arr[i] = correctValue;
                arr[correctIndex] = current;
                indexMap[current] = correctIndex;
                indexMap[correctValue] = i;
            }
        }

        return swaps;
    }

    const reversedArr = arr.slice().reverse();
    const minSwapsAsc = minimumSwaps(arr);
    const minSwapsDesc = minimumSwaps(reversedArr);

    return Math.min(minSwapsAsc, minSwapsDesc);
}