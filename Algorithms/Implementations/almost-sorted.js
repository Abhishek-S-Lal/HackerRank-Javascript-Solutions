/*
 * Complete the 'almostSorted' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function almostSorted(arr) {
    // Write your code here
    // Create a sorted version of the array to compare against
    const sortedArr = [...arr].sort((a, b) => a - b);

    // Find the indices where the array differs from the sorted version
    const differences = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== sortedArr[i]) {
            differences.push(i);
        }
    }

    // If the differences array is empty, the array is already sorted
    if (differences.length === 0) {
        console.log('yes');
        return;
    }

    // If there are exactly two differences, swap them to make it sorted
    if (differences.length === 2) {
        console.log('yes');
        console.log(`swap ${differences[0] + 1} ${differences[1] + 1}`);
        return;
    }

    // Check if reversing a subarray would make it sorted
    const subArray = arr.slice(differences[0], differences[differences.length - 1] + 1);
    if (subArray.join(' ') === sortedArr.slice(differences[0], differences[differences.length - 1] + 1).reverse().join(' ')) {
        console.log('yes');
        console.log(`reverse ${differences[0] + 1} ${differences[differences.length - 1] + 1}`);
        return;
    }

    // If none of the above conditions are met, it can't be sorted
    console.log('no');
}
