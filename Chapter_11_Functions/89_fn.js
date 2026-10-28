//immedately invoked function expressionIIFE
//they dont need to be called

function name1() {
    console.log("Hello");   
}
name1(); //calling the function

//IIFE

(function() {
    console.log("Anonymous function");
})(); //calling the function   

//arrow function
(() => {
    console.log("Arrow function");
})(); //calling the function