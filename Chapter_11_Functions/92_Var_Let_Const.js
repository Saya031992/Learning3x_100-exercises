var a=10;
console.log(a);//10
//function scoped-Traitor

//define
function printHello() {
    console.log("Hello Testing Academt");//hello Testing Academy
    var a=20;
    console.log(a);//20
    if(true){
        var a=30;//once we change the value inside function then it will take latest value function sccoped
        console.log(a);//30
}
console.log(a);//30
}
printHello();

//let-block scoped
let b=20;//global scope 
console.log(b);//20

function printHello1() {
    console.log("Hello Testing Academy");//hello Testing Academy    
    let b=30;
    console.log(b);//30//local sccope
    if(true){
        let b=5;   
        console.log(b);//5
}
console.log("let ->", b);//30
}
//callling of function 
printHello();
console.log(b );//20

let a =10;
let a=20;

//will not allow you to have redeclaration

var a=10;
var a=20;

//will allow you to have redeclaration

var nn="Hello";
let nn="Hello";

//not possible let will not allow you to have if var is there

const pi=3.14;
console.log(pi);//3.14
pi=3.14159;

//assignment to constant variable is not allowed    
{
    block scoped
}

const a=[1,2,3];
a.push(10);
//a reference is constant but array can be modified//1,2,3,10
function adasd(){
    function scoped
}
