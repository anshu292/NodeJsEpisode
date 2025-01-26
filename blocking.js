const crypto = require("node:crypto");
console.log("Hello World");
var a= 105454;
var b= 30434;
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("First key is generated");
//we do not need a callback function here

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512" , (err, key) =>{
    console.log("Second key is generated");
});

function multiplyFn(x, y){
    const result= a*b;
     return result;

}
const ans= multiplyFn(10,20);

console.log("Multiplication value is "+ ans);



