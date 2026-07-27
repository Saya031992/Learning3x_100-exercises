let arr=[1,2,3];
console.log(arr);

//Add to end
arr.push(4);
console.log(arr);

//Remove from end
arr.pop();
console.log(arr);

arr.push(5,6);
console.log(arr);

//Add to begning
arr.unshift(0);
console.log(arr);

//Remove from begning
arr.shift();
console.log(arr);

//[1,2,3,5,6]

arr.splice(2, 1);
console.log(arr);

//[1,2,5,6]

arr.splice(2,0,99);
console.log(arr);

//[1,2,99,5,6]

arr.splice(1,2,10,20);
console.log(arr);

//[1,10,20,2,5,6]

