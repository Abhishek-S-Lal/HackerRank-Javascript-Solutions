/*
 * Complete the 'decentNumber' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function decentNumber(n) {
    // Write your code here
    let threes = n;
    let fives = 0;

    while (threes % 3 !== 0) {
        threes -= 5;
        fives += 5;
    }

    if (threes < 0) {
        console.log(-1);
    } else {
        console.log('5'.repeat(threes) + '3'.repeat(fives));
    }
}