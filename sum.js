
console.log("this is hi from sum");

//we are not exporting the module
//so it is protected , the variables and functions we cannot 
//access them from the outside

var x=10;
function calculateSum(a ,b){
    console.log( a+b);

}
module.exports ={
    x,
    calculateSum
}