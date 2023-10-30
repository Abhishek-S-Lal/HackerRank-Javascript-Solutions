/*
 * Complete the 'minimumAbsoluteDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function minimumAbsoluteDifference(arr) {
    // Write your code here
    arr.sort((a,b)=>a-b)
    
    let min = Number.MAX_SAFE_INTEGER, diff;
    for(let i=1; i<arr.length; i++){
        diff = Math.abs(arr[i]-arr[i-1])
        if(diff<min){
            min = diff
        }
    }
    return min

}