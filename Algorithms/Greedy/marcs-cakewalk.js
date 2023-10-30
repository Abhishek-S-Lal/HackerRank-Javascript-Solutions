/*
 * Complete the 'marcsCakewalk' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY calorie as parameter.
 */

function marcsCakewalk(calorie) {
    // Write your code here
    
    calorie.sort((a,b)=>b-a)
    
    let minCalorie = 0;
    for(let i=0; i<calorie.length; i++){
        minCalorie += Math.pow(2,i)*calorie[i]
    }
    return minCalorie

}