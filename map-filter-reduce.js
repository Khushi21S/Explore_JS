//Map function

const arr = [5,1,3,4,2];

//Double the arr

function double(x){
return x*2;
}

//Binary 
function binary(x){
    return x.toString(2);
}

const output = arr.map(binary);
const output1 = arr.map(function binary(x){
    return x.toString(2);
});
const output2 = arr.map((x) => x.toString(2));

// console.log(output);
// console.log(output1);
// console.log(output2);


//Filter function

function isOdd(x){//find odd numbers
    return x % 2;
}
//find even numbers
function isEven(x){
    return x%2 ===0;
}

//find numbers greater than 4

function greaterThan4(x){
    return x>4;
}

const filterOutput = arr.filter(greaterThan4);

const filterOutput2 = arr.filter(function greaterThan4(x){
    return x>4;
})

const filterOutput3 = arr.filter((x) => x>4);

// console.log(filterOutput3);


//Reduce Function

//find sum of the array

//the normal approach without using reduce.



function findSum(array){
    let sum = 0;
    for(let i=0; i<array.length; i++){
        sum = sum + array[i];
    }
    return sum;
}

// console.log(findSum(arr));


//Using reduce function


const sum = arr.reduce(function(acc, curr){
    acc = acc + curr;
    return acc;
}, 0);

// console.log(sum);

// find max of the arr;

function findMax(array){
    let max = 0;
    for(let i =0; i< arr.length; i++){
        if(array[i] > max){
            max = array[i];
        }
    }
    return max;
}

// console.log(findMax(arr));

const maxVal = arr.reduce(function(max, curr){
    if(max < curr){
        max = curr;
    }
    return max;
}, 0);

// console.log(maxVal);

//More complex example

const users = [
    {firstName: "Khushi", lastName: "Sharma", age: 23},
    {firstName: "Akshat", lastName: "Sharma", age: 22},
    {firstName: "Karan", lastName: "Aujla", age: 28},
    {firstName: "Jai", lastName: "Soni", age: 40},
]

//find list of full name of users

const list = users.map((user) => user.firstName + " " + user.lastName);

// console.log(list);

//How many users have a particular age in the object, so basically return a particular age with its count.

// {23: 2, 22: 1, 28:1 } we have to do this using a reduce function because in this we want a single value comparatively to the object we have

const list2 = users.reduce(function(acc, curr){
    if(acc[curr.age]){
        acc[curr.age] =++ acc[curr.age];
    } else{
        acc[curr.age] = 1;
    }
    return acc;
}, {});

// console.log(list2);

// find first name of all the people whose age < 30

const list3 = users.filter(x => x.age < 30).map(x=> x.firstName);

// console.log(list3);

//using reduce 

const list4 = users.reduce(function(acc, curr){
    if(curr.age < 30){
        acc.push(curr.firstName);
    }
    return acc;
}, []);

console.log(list4);