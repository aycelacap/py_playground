/*
 * Complete the 'minimumMoves' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr1
 *  2. INTEGER_ARRAY arr2
 */

// str
// declare a value of numbers
// accessing indices can determine increment/decrement (the elements 
// don't have to be the same arr1[0] = 5, arr2[0] = 7 -> +2 in count)
// iterate over arr1 and compare values at same indices
// add or subtract values -> Math.abs(-10)

// since we can't iterate over a number, we need to change the element into a string
// we can then split the string to isolate each stringNumber and turn it back into a number
// add values to running total

function minimumMoves(arr1, arr2) {
    let runningTotal = 0;
    
    for (let i = 0; i < arr1.length; i++) { //arr1 = [123, 543]
        let stringifiedNum1 = arr1[i].toString(); // "123"
        let splittedNum1 = stringifiedNum1.split(""); // ["1", "2", "3"]
        
        let stringifiedNum2 = arr2[i].toString(); // "321"
        let splittedNum2 = stringifiedNum2.split(""); // ["3", "2", "1"]
        
        for (let j = 0; j < splittedNum1.length; j++) { // ["1", "2", "3"]
            let num1 = splittedNum1[j];
            let num2 = splittedNum2[j];
            let steps = Math.abs(num2 - num1);
            
            runningTotal += steps
            
        }
        
    }
    
    
    return runningTotal;
}