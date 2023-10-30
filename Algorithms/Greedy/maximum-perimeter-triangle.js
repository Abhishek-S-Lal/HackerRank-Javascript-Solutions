/*
 * Complete the 'maximumPerimeterTriangle' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY sticks as parameter.
 */

function maximumPerimeterTriangle(sticks) {
    // Write your code here
    // Sort the sticks in non-decreasing order
    sticks.sort((a, b) => a - b);

    // Find the largest valid triangle with the maximum perimeter
    let maxPerimeter = -1;
    let triangle = [];

    for (let i = 0; i < sticks.length - 2; i++) {
        if (sticks[i] + sticks[i + 1] > sticks[i + 2]) {
            const perimeter = sticks[i] + sticks[i + 1] + sticks[i + 2];
            if (perimeter > maxPerimeter) {
                maxPerimeter = perimeter;
                triangle = [sticks[i], sticks[i + 1], sticks[i + 2]];
            }
        }
    }

    return maxPerimeter === -1 ? [-1] : triangle;
}