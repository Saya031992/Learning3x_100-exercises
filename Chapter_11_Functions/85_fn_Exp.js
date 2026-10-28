function greet1(name1) {
    return `Hello, ${name1}`;
}

//Function expression
const greet=function(name){
    return `Hello, ${name}`;
}

console.log(greet("John"));
console.log(greet1("John"));
