//First part
let arr = ["Khushi", "Akshat"];

// Here, all the properties that we get when we do arr. , all these are the prototype of it

//When we do arr.__proto__ 

console.log(arr.__proto__);
// we are getting a function okay

console.log(Array.prototype);

//both are same, now lets create an object to make things more clear

let object = {
    name: "Khushi",
    city: "Kota",
    getIntro: function() {
        console.log(this.name + " from " + this.city);
    }
};

console.log(object.__proto__);

console.log(Object.prototype);

//These both are same;

console.log(arr.__proto__.__proto__); //Gives an object

// All three are same 

console.log(arr.__proto__.__proto__.__proto__); //Gives null

//this is what prototype chaining is. Every thing you create is an object basically

//Now lets create one more object;

let object2 = {
    name: "Akshat"
}

console.log(object2.__proto__);

//now this is advisable what are we going to do, as it can create performance issues

object2.__proto__ = object;

//here basically now object2 can access all the propeties of object, first it will search inside it only but then it will look into object, this is called prototypal inheritance