/*
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

function flippingBits(n) {
    // Write your code here
 const maxUInt32 = Math.pow(2, 32) - 1;
    return maxUInt32 - n;
}