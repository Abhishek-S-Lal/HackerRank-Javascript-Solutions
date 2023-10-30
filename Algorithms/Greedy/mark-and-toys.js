/*
 * Complete the 'maximumToys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY prices
 *  2. INTEGER k
 */

function maximumToys(prices, k) {
    // Write your code here
    prices.sort((a, b) => a - b); // Sort the prices in ascending order
    let count = 0;
    let totalCost = 0;

    for (const price of prices) {
        if (totalCost + price <= k) {
            totalCost += price;
            count++;
        } else {
            break; // Stop if the budget is exceeded
        }
    }

    return count;
}