/*
 * Complete the 'jimOrders' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts 2D_INTEGER_ARRAY orders as parameter.
 */

function jimOrders(orders) {
    // Write your code here
     const orderWithIndices = orders.map((order, index) => ({ order, index }));
    
    // Sort orders by the sum of order time and time placed
    orderWithIndices.sort((a, b) => {
        const aTotalTime = a.order[0] + a.order[1];
        const bTotalTime = b.order[0] + b.order[1];
        return aTotalTime - bTotalTime || a.index - b.index;
    });
    
    // Extract the indices of the sorted orders
    return orderWithIndices.map(order => order.index + 1);
}