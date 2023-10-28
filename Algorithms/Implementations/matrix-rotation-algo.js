/*
 * Complete the 'matrixRotation' function below.
 *
 * The function accepts following parameters:
 *  1. 2D_INTEGER_ARRAY matrix
 *  2. INTEGER r
 */

function matrixRotation(matrix, r) {
    // Write your code here
 const rows = matrix.length;
    const cols = matrix[0].length;
    const numLayers = Math.min(rows, cols) / 2;
    const rotatedMatrix = [...Array(rows)].map(() => Array(cols).fill(0));

    for (let layer = 0; layer < numLayers; layer++) {
        const perimeter = 2 * (rows - 2 * layer) + 2 * (cols - 2 * layer) - 4;

        const flatLayer = [];

        // Extract the current layer into a 1D array
        for (let i = layer; i < rows - layer; i++) {
            flatLayer.push(matrix[i][layer]);
        }
        for (let i = layer + 1; i < cols - layer; i++) {
            flatLayer.push(matrix[rows - layer - 1][i]);
        }
        for (let i = rows - layer - 2; i >= layer; i--) {
            flatLayer.push(matrix[i][cols - layer - 1]);
        }
        for (let i = cols - layer - 2; i > layer; i--) {
            flatLayer.push(matrix[layer][i]);
        }

        // Rotate the 1D array
        const rotatedFlatLayer = rotateArray(flatLayer, r % perimeter);

        // Update the rotated values back to the matrix
        let index = 0;
        for (let i = layer; i < rows - layer; i++) {
            matrix[i][layer] = rotatedFlatLayer[index++];
        }
        for (let i = layer + 1; i < cols - layer; i++) {
            matrix[rows - layer - 1][i] = rotatedFlatLayer[index++];
        }
        for (let i = rows - layer - 2; i >= layer; i--) {
            matrix[i][cols - layer - 1] = rotatedFlatLayer[index++];
        }
        for (let i = cols - layer - 2; i > layer; i--) {
            matrix[layer][i] = rotatedFlatLayer[index++];
        }
    }

    // Print the rotated matrix
    for (let i = 0; i < rows; i++) {
        console.log(matrix[i].join(" "));
    }
}

function rotateArray(arr, k) {
    // Function to rotate an array to the right by k positions
    k %= arr.length;
    reverseArray(arr, 0, arr.length - 1);
    reverseArray(arr, 0, k - 1);
    reverseArray(arr, k, arr.length - 1);
    return arr;
}

function reverseArray(arr, start, end) {
    // Function to reverse an array in place from start to end
    while (start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }

}