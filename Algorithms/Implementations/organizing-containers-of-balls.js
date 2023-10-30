/*
 * Complete the 'organizingContainers' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts 2D_INTEGER_ARRAY container as parameter.
 */

function organizingContainers(container) {
    // Write your code here
     const containerSum = container.map((row) => row.reduce((acc, val) => acc + val, 0));
    const ballCount = new Array(container.length).fill(0);

    for (let i = 0; i < container.length; i++) {
        for (let j = 0; j < container[i].length; j++) {
            ballCount[j] += container[i][j];
        }
    }

    containerSum.sort((a, b) => a - b);
    ballCount.sort((a, b) => a - b);

    for (let i = 0; i < containerSum.length; i++) {
        if (containerSum[i] !== ballCount[i]) {
            return "Impossible";
        }
    }

    return "Possible";

}