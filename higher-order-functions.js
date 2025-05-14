// Calculate area, circumference and diameter of circle given radius of 4 circles in an array. 

const rad = [3,1,2,4];

//Optimised Way

const area = function( radius){
    return Math.PI*radius*radius;
}

const circumference = function(radius){
    return 2*Math.PI*radius;
}

const diameter = function(radius){
    return 2*radius
}

function calculate(logic, radius){
    const output = [];
    for(let i=0; i<radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
};

console.log(rad.map(area));

//to work exactly as map 
Array.prototype.calculate1 = function (logic){
    const output = [];
    for(let i=0; i<this.length; i++){
        output.push(logic(this[i]));
    }
    return output;
};

console.log(rad.calculate1(area));

console.log(calculate(area, rad));
console.log(calculate(circumference, rad));
console.log(calculate(diameter, rad));






//Repetitive Code
// function calculateArea(radius){
//     const output = [];

//     for(let i=0; i<radius.length; ++i){
//         output.push((Math.PI)*radius[i]*radius[i]);
//     }
//     console.log(output);
// }


// function calculateCircumference(radius){
//     const output = [];

//     for(let i=0; i<radius.length; ++i){
//         output.push(2 * (Math.PI)*radius[i]);
//     }
//     console.log(output);
// }

// function calculatediameter(radius){
//     const output = [];

//     for(let i=0; i<radius.length; ++i){
//         output.push(2 * radius[i]);
//     }
//     console.log(output);
// }

// calculateArea(rad);
// calculateCircumference(rad);
// calculatediameter(rad);