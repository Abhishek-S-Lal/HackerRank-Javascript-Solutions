/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(arr) {
    // Write your code here
    let result = 0;
    
    for (const num of arr) {
        result ^= num;
    }
    
    return result;
}