/*
 * Complete the 'nimbleGame' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY s as parameter.
 */

function nimbleGame(s) {
    // Write your code here
    // Calculate the XOR of all pile positions where stones are present.
    let xorSum = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] % 2 === 1) {
            xorSum ^= i;
        }
    }

    // If the XOR sum is 0, the second player wins; otherwise, the first player wins.
    if (xorSum === 0) {
        return "Second";
    } else {
        return "First";
    }
}