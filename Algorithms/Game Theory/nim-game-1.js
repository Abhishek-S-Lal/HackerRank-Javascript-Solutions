/*
 * Complete the 'nimGame' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY pile as parameter.
 */

function nimGame(piles) {
    // Write your code here
    // Calculate the XOR of the number of objects in all piles.
    let xorSum = 0;
    for (const pile of piles) {
        xorSum ^= pile;
    }

    // If the XOR sum is 0, the first player loses (Second player wins).
    if (xorSum === 0) {
        return "Second";
    } else {
        return "First";
    }
}