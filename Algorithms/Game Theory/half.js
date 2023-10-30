/*
 * Complete the 'half' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function half(N) {
    // Write your code here
    if (N <= 1) {
        return N;
    }

    let maxNim = Math.floor(Math.log2(N)) + 1;
    let maxNimCnt = N - (1 << (maxNim - 1)) + 1;

    if (maxNimCnt % 2 === 0) {
        return 1;
    }

    let nimToReduce = 1 << Math.floor(Math.log2(maxNim));

    let targetNim = maxNim ^ nimToReduce;
    targetNim = targetNim ^ 1;

    let targetValueToReduce = 1 << (nimToReduce - 1);
    let reduceTo = (1 << targetNim) - 1;
    let minCut = Math.floor(targetValueToReduce / 2) + targetValueToReduce % 2;

    return targetValueToReduce - minCut >= reduceTo ? targetValueToReduce - reduceTo : minCut;
}