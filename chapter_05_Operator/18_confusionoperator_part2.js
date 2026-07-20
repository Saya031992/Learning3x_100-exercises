//2 null vs undefined

console.log(null==undefined);//true//loosely compare
console.log(null===undefined);//false//strictly compare

console.log(null==0);//false//null is not zero null is null
console.log(null>0);//false//null is not greater than 0
console.log(null>=0);//ttrue
console.log(null==0||null>0);//false//null is not greater than 0
console.log(null==0||null>0);//answer  should be true but it is false 
