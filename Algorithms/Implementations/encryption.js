/*
 * Complete the 'encryption' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function encryption(s) {
    // Write your code here
// Remove spaces from the input string
    const sanitizedString = s.replace(/\s/g, '');

    // Calculate the number of rows and columns
    const strLength = sanitizedString.length;
    const sqrtLength = Math.sqrt(strLength);
    let rows = Math.floor(sqrtLength);
    const columns = Math.ceil(sqrtLength);

    if (rows * columns < strLength) {
        rows++;
    }

    // Create an array to hold the encoded grid
    const grid = [];
    for (let i = 0; i < columns; i++) {
        let row = '';
        for (let j = i; j < strLength; j += columns) {
            row += sanitizedString[j];
        }
        grid.push(row);
    }

    // Join the rows with spaces to get the encoded string
    const encodedString = grid.join(' ');

    return encodedString;
}
