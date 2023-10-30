/*
 * Complete the 'luckBalance' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. 2D_INTEGER_ARRAY contests
 */

function luckBalance(k, contests) {
    // Write your code here
    
   const importantContests = [];
    let totalLuck = 0;

    for (const contest of contests) {
        const [luck, isImportant] = contest;
        totalLuck += luck;

        if (isImportant) {
            importantContests.push(luck);
        }
    }

    importantContests.sort((a, b) => a - b);

    let maxImportantLosses = importantContests.length - k;
    if (maxImportantLosses < 0) {
        maxImportantLosses = 0;
    }

    for (let i = 0; i < maxImportantLosses; i++) {
        totalLuck -= 2 * importantContests[i];
    }

    return totalLuck;
}
