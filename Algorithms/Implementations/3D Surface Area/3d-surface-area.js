/*
 * Complete the 'surfaceArea' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY A as parameter.
 */

//The optimal solution can be found in 3d-surface-area-revised file
function surfaceArea(A) {
    // Write your code here
    const H = A.length; //row length
    const W = A[0].length; //coloumn length
    let area = 2 * (H * W); //area of the top and bottom sides

    //to iterate each row
    for (let i = 0; i < H; i++) {

        //to iterate each column
        for (let j = 0; j < W; j++) {
            const height = A[i][j];

            //case: end front side area
            if (i === 0) {
                area += height;
            }

            //case: end back side area
            if (i === H - 1) {
                area += height;
            }

            //case: end left side area
            if (j === 0) {
                area += height;
            }

            //case: end right side area
            if (j === W - 1) {
                area += height;
            }

            //case: middle front side area
            if (i > 0) {
                //add height difference with the previous row 
                area += Math.max(0, height - A[i - 1][j]);
            }

            //case: middle back side area
            if (i < H - 1) {
                //add height diffenence with the next row
                area += Math.max(0, height - A[i + 1][j]);
            }

            //case: middle right side area
            if (j > 0) {
                //add height difference with the previous column
                area += Math.max(0, height - A[i][j - 1]);
            }

            //case: middle left side area
            if (j < W - 1) {
                //add height difference with the next column
                area += Math.max(0, height - A[i][j + 1]);
            }
        }
    }

    return area;
}
