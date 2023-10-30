// Complete the getMinimumCost function below.
function getMinimumCost(k, c) {
    c.sort((a, b) => b - a); // Sort the prices in descending order
    let totalCost = 0;
    let multiplier = 0;

    for (let i = 0; i < c.length; i++) {
        if (i % k === 0) {
            multiplier++;
        }
        totalCost += (multiplier * c[i]);
    }

    return totalCost;

}