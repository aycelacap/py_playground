// create a variable called sum
// for loop over the numbers array 
  // check if the currNum is odd
  // if so, add to sum variable 
// return the sum

function oddSums(numbers) { // [3, 6, 8, 9, 1]
  // this is where you code
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) {
      sum += numbers[i] // 3 + 9 + 1 = 13
    }
  }
  
  return sum; // 13
}


console.log(oddSums([3, 6, 8, 9, 1])) //13