// async await

// async function ---> returns a promise --> if it is already a promise, it will return that only but if its not then it will convert it into a promise

// async function returnValue(){
//     return "Hello"
// }

// console.log(returnValue());

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Hello"), 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Hello 2"), 10000);
});

// p1.then(() => console.log("Hi, I am Khushi"))
// .then(() => console.log("Programme executed"))

// function programme() {
//   p1.then(() => console.log("Hello"));
//   console.log("Hi I am KHushi");
//   console.log("HI I am not KHuhsi");
// }

// programme();

async function newProgramme() {
  const value = await p1;
  console.log(value);
  const value2 = await p2;
  console.log(value2);
  console.log("Hi I am KHushi");
  console.log("HI I am not KHuhsi");
}

newProgramme();


//how fetch works

