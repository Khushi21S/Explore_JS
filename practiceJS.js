// Q1) Write a function that takes an array (a) and a value (n) as argument. Return the nth element of 'a'4

function myFunction(a, n) {
  return a[n - 1];
}

// console.log(myFunction([1,2,3,4,5], 3))
// expected: 3
// console.log(myFunction([10,9,8,7,6], 5))
// expected: 6
// console.log(myFunction([7,2,1,6,3], 1))
// expected: 7

// Q2.)Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'. Return the result

function myFunction(a) {
  return a.slice(3);
}

//console.log(myFunction([1,2,3,4]))
// expected: [4]
//console.log(myFunction([5,4,3,2,1,0]))
// expected: [2,1,0]
//console.log(myFunction([99,1,1]))
// expected: []

//Q3.) Write a function that takes an array (a) as argument. Extract the last 3 elements of 'a'. Return the resulting array

function myFunction(a) {
  return a.slice(a.length - 3);
}

// console.log(myFunction([1,2,3,4,5]));
// console.log(myFunction([10,9,8,7,6]));
// console.log(myFunction([7,2,1,6,3]));

//Q4.) Write a function that takes an array (a) as argument. Extract the first 3 elements of a. Return the resulting array

function myFunction(a) {
  return a.slice(0, 3);
}

// console.log(myFunction([1,2,3,4,5]));
// console.log(myFunction([10,9,8,7,6]));
// console.log(myFunction([7,2,1,6,3]));

//Q5.) Write a function that takes an array (a) and a number (n) as arguments. It should return the last n elements of a.

function myFunction(a, n) {
  return a.slice(a.length - n);
}

// console.log(myFunction([1,2,3,4,5], 3))
// console.log(myFunction([10,9,8,7,6], 5))
// console.log(myFunction([7,2,1,6,3], 1))

//Q6.) Write a function that takes an array (a) and a value (b) as argument. The function should remove all elements equal to 'b' from the array. Return the filtered array.

function myFunction(a, b) {
  return a.filter((i) => i != b);
}

// console.log(myFunction([1,2,3,4,5], 3))
// console.log(myFunction([10,9,8,7,6, 8], 8))
// console.log(myFunction([7,2,1,6,3, 1], 1))

//Q7.) Write a function that takes an array (a) as argument. Return the number of elements in a.

function myFunction(a) {
  return a.length;
}

// console.log(myFunction([1,2,5]));
// console.log(myFunction([10,9,8,7,6]));
// console.log(myFunction([7,2,1,6]));

//Q8.) Write a function that takes an array of numbers as argument. Return the number of negative values in the array.

function myFunction(a) {
  return a.filter((element) => element < 0).length;
}

// console.log(myFunction([1,2,5, -2, -1]));
// console.log(myFunction([10,9,8,7,6, -9]));
// console.log(myFunction([7,2,1,6, -8, -7, -1, -2]));

//Q9)Write a function that takes an array of strings as argument. Sort the array elements alphabetically. Return the result.

function myFunction(a) {
  return a.sort();
}

// console.log(myFunction(['q','a', 'e', 'p', 'r']));

//Q10) Write a function that takes an array of numbers as argument. It should return an array with the numbers sorted in descending order.

function myFunction(a) {
  return a.sort((a, b) => b - a);
}

// console.log(myFunction([1,2,5, -2, -1]));
// console.log(myFunction([10,9,8,7,6, -9]));
// console.log(myFunction([7,2,1,6, -8, -7, -1, -2]));

//Q11) Write a function that takes an array of numbers as argument. It should return the sum of the numbers.

function myFunction(a) {
  return a.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
  }, 0);
}

// console.log(myFunction([1, 2, 5]));
// console.log(myFunction([10, 9, 8, 7, 6]));
// console.log(myFunction([7, 2, 1, 6]));


//Q12) Write a function that takes an array of numbers as argument. It should return the average of the numbers.

function myFunction(a){
    let sum = a.reduce(((acc, curr) => acc+curr), 0);
    let avg = sum/a.length;
    return avg;
}

// console.log(myFunction([1, 2, 6]));
// console.log(myFunction([10, 9, 8, 7, 6]));
// console.log(myFunction([7, 2, 1, 6]));

//Q13) Write a function that takes an array of strings as argument. Return the longest string.

function myFunction(a){
   return a.reduce((acc, curr) => {
   return curr.length > acc.length ? curr : acc
   }, "");
}

// console.log(myFunction(['ssss', 'ww', 'qqq']));

//Q14.) Write a function that takes an array as argument. It should return true if all elements in the array are equal. It should return false otherwise.

function myFunction(a){
    return a.every((element) => element ===a[0]);
}

// console.log(myFunction([2,2,2,2,2]));
// console.log(myFunction([2,2,2,2,22]))

//Q15) Write a function that takes arguments an arbitrary number of arrays. It should return an array containing the values of all arrays.

function myFunction(...arrays){
    return arrays.flat();
}

// console.log(myFunction([11,11,23], [23,5,21,5]))

//Q16) Write a function that takes an array of objects as argument. Sort the array by property b in ascending order. Return the sorted array

function myFunction(a){
    return a.sort((a,b) => a.b-b.b);
}

// console.log(myFunction([
//   { a: 1, b: 5 },
//   { a: 2, b: 2 },
//   { a: 3, b: 8 }
// ]))

//Q17) Write a function that takes two arrays as arguments. Merge both arrays and remove duplicate values. Sort the merge result in ascending order. Return the resulting array

function myFunction(a,b){
   let arr = a.concat(b);
   let arr1 = [...new Set (arr)]; // removes duplicates
   return arr1.sort((a,b) => a-b);
}

// console.log(myFunction([2,3,4], [2222,4,3]));

//Q18) Write a function that takes an array (a) and a number (b) as arguments. Sum up all array elements with a value greater than b. Return the sum

function myFunction(a,b){
  return a.reduce((acc, curr) => {
    if(curr > b) acc = acc + curr;
    return acc;
  }, 0)
}

// 


//Q19) Write a function that takes two numbers (min and max) as arguments. Return an array of numbers in the range min to max

function myFunction(min, maxi){
  return Array.from({length: maxi -min +1}, (_, i) => min+i);
}

console.log(myFunction(3,7))


//Write a function that takes an array of strings as argument. Group those strings by their first letter. Return an object that contains properties with keys representing first letters. The values should be arrays of strings containing only the corresponding strings. For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to. { a: ['Alf', 'Alice'], b: ['Ben']}