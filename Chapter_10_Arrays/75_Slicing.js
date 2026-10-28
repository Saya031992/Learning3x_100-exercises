//slice and combining

let arr=[1,2,3,4,5];
//slice(start,end)--returns new array//doesnot mutate actual array
//(start,end-1)
//dont give end it will automatically take from start to end

console.log(arr.slice(1,3));
console.log(arr);

//if we dont have end like console.log(arr.slice(2));it will take all value
console.log(arr.slice(2));
console.log(arr.slice(-2));
console.log(arr.slice(-3));
console.log(arr.slice(0));
console.log(arr.slice(-3,-5));//we will always go right side so this is not possible
