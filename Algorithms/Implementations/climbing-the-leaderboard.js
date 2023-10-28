/*
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

function climbingLeaderboard(ranked, player) {
    // Write your code here
    const uniqueRanked = [...new Set(ranked)].sort((a, b) => b - a);
    const playerRanks = [];
    let j = uniqueRanked.length - 1;

    for (let i = 0; i < player.length; i++) {
        while (j >= 0 && player[i] >= uniqueRanked[j]) {
            j--;
        }
        playerRanks.push(j + 2);
    }

    return playerRanks;
}
