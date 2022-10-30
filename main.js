// console.log('Hello World!');

let poorCountry=['Db','Sri'];
let richCountry = [...poorCountry,'USA','uk'];

// console.log(poorCountry);
// console.log(richCountry);

// richCountry.push(poorCountry);

// console.log(richCountry);

function calWithRest(...nums){
    let sum =0;
    for (let i of nums) {
        sum = sum+i;        
    }
    console.log(sum);
}

// calWithRest(1,3,4);


function calRestWithothers(a,b,...nums){
    let sum = 0;
    for(let i of nums){
        sum = sum+i;
    }
    console.log(sum);
}

// calRestWithothers(5,7,1,3,4);


var dynamicFunctionName = function(name){
    return name;
}
// console.log(dynamicFunctionName("Farhad Abideen"));

var dynamicFunctionCal = function(...nums){
    let sum=0;
    for(let i of nums){
        sum = sum+i;
    }
    return sum;
}
console.log(dynamicFunctionCal(1,3,4));