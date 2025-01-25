const {x, calculateSum}= require ("./sum.js");

require("./xyz.js");

var name= "Namaste Nodejs";
var a= 10;
var b= 20;
// console.log(name);
// console.log(a+b);

calculateSum(10,20);
console.log(x);
//we have global object here also it is global

//global is not part of V8 engine
//it is one of the superpowers given to us by V8 engine








