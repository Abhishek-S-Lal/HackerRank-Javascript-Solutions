/*
 * Complete the 'surfaceArea' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY A as parameter.
 */

function surfaceArea(A) {
    const H = A.length;
    const W = A[0].length;

    const getSideArea = (i, j) => {
        //we use the deltas array to represent the four possible directions (front, back, left, and right).
        const deltas = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        return deltas.reduce((acc, [dx, dy]) =>
            acc + Math.max(0, A[i][j] - (A[i + dx]?.[j + dy] || 0)), 0);
    };

    let area = 2 * H * W;

    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            area += getSideArea(i, j);
        }
    }

    return area;
}