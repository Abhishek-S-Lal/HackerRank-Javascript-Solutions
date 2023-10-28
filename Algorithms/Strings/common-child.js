/*
 * Complete the 'commonChild' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function commonChild(s1, s2) {
    // Write your code here
 const n = s1.length;
    const m = s2.length;

    // Create a 2D array to store the length of the common child
    const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));

    // Fill the dp array to find the length of the common child
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // The length of the common child is stored in dp[n][m]
    return dp[n][m];
}