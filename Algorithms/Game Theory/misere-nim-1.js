/*
 * Complete the 'misereNim' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY s as parameter.
 */

function misereNim(pile) {
    // Write your code here
   let xor = pile[0], totalStones = pile[0];
        for(let i = 1; i < pile.length; i++) {
            totalStones += pile[i];
            xor = xor ^ pile[i];
        }
        
        if (totalStones == pile.length) {
            return totalStones % 2 == 0 ? 'First' : 'Second';
        }
        
        return xor ? 'First' : 'Second';
}