// console.log('Hello World!');

// let poorCountry=['Db','Sri'];
// let richCountry = [...poorCountry,'USA','uk'];

// console.log(poorCountry);
// console.log(richCountry);

// richCountry.push(poorCountry);

// console.log(richCountry);

// function calWithRest(...nums){
//     let sum =0;
//     for (let i of nums) {
//         sum = sum+i;        
//     }
//     console.log(sum);
// }

// calWithRest(1,3,4);


// function calRestWithothers(a,b,...nums){
//     let sum = 0;
//     for(let i of nums){
//         sum = sum+i;
//     }
//     console.log(sum);
// }

// calRestWithothers(5,7,1,3,4);


// var dynamicFunctionName = function(name){
//     return name;
// }
// console.log(dynamicFunctionName("Farhad Abideen"));

// var dynamicFunctionCal = function(...nums){
//     let sum=0;
//     for(let i of nums){
//         sum = sum+i;
//     }
//     return sum;
// }
// console.log(dynamicFunctionCal(1,3,4));



var nums = [12,34,56,67];
// nums.push(23);
// console.log(nums);      
// nums.pop();
// console.log(nums);  
// nums.shift();
// console.log(nums);  
// nums.unshift(33)
// console.log(nums)

// var annonymousFun = function(x){
//     return x
// }

// console.log(annonymousFun("HI"));

// var arrowFun = (x)=>{
//     return x
// }

// console.log(arrowFun("HI"));

// var arrowFun = (...x)=>{
//     return x
// }

// console.log(arrowFun(2,3,4,5,5));


var arrayDestructuring = ["6455","5655","5656","7675"];

var [e,,,d] = arrayDestructuring;
console.log(e);
console.log(d);
