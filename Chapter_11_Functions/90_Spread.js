function add(a,b,c) {
    return a+b+c;
}
let num = [1,2,3];
console.log(add(...num)); //spread operator, it will spread the array into individual elements and pass them as arguments to the function  


function hasError(...codes) {
    return codes.some(c => c >=400  ); //some means atleast one value greater than 400  
}

let responsecodes = [200, 300, 404, 500];
console.log(hasError(...responsecodes)); //spread operator, it will spread the array into individual elements and pass them as arguments to the function
