/*
 * Complete the 'gridSearch' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING_ARRAY G
 *  2. STRING_ARRAY P
 */

function gridSearch(G, P) {
    // Write your code here
for (let i = 0; i <= G.length - P.length; i++) {
        for (let j = 0; j <= G[i].length - P[0].length; j++) {
            if (G[i][j] === P[0][0]) {
                if (isPatternFound(G, P, i, j)) {
                    return "YES";
                }
            }
        }
    }
    return "NO";
}

function isPatternFound(G, P, r, c) {
    for (let i = 0; i < P.length; i++) {
        for (let j = 0; j < P[i].length; j++) {
            if (G[i + r][j + c] !== P[i][j]) {
                return false;
            }
        }
    }
    return true;
}
