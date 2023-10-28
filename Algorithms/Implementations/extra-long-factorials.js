/*
 * Complete the 'extraLongFactorials' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function extraLongFactorials(n) {
    // Write your code here
    let result = BigInt(1);
    for (let i = 2; i <= n; i++) {
        result *= BigInt(i);
    }
    console.log(result.toString());
}
