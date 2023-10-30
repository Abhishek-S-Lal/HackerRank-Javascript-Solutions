/*
 * Complete the 'sumXor' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

function sumXor(n) {
    // Write your code here
    let zeroCount = 0
    let bitstr = n.toString(2)
    for (let i = 0; i < bitstr.length; i++)
        if (bitstr[i] === '0') {
        zeroCount++
    }
    if (n === 0) {
        zeroCount = 0
    }
    return Math.pow(2, zeroCount)
}
