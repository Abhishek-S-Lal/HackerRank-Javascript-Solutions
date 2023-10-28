/*
 * Complete the 'biggerIsGreater' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING w as parameter.
 */

function biggerIsGreater(w) {
    // Write your code here
// Convert the string to an array of characters for easier manipulation
    const word = w.split('');

    // Find the first character that is not in increasing order from right to left
    let i = word.length - 1;
    while (i > 0 && word[i] <= word[i - 1]) {
        i--;
    }

    // If no such character exists, the string is already the largest possible
    if (i === 0) {
        return 'no answer';
    }

    // Find the smallest character to the right of i, but larger than word[i-1]
    let j = word.length - 1;
    while (word[j] <= word[i - 1]) {
        j--;
    }

    // Swap the characters at positions i-1 and j
    [word[i - 1], word[j]] = [word[j], word[i - 1]];

    // Reverse the substring to the right of i-1 to get the lexicographically smallest string
    const suffix = word.splice(i).reverse();
    word.push(...suffix);

    return word.join('');
}