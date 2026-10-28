let fruits=["banana","apple","cherry"];
fruits.sort();
console.log(fruits);
//alphabetical by default

let score=[4,3,2];
console.log(score.sort());

let nums=[10,1,21,2];
nums.sort();
console.log(nums);
//natural sorting--it happens based on ten's places//lexioggraphic sorting

//proper sorting/modify
nums.sort((a,b) => a-b);//Asc
nums.sort((a,b => b-a));//Desc
console.log(nums);
nums.reverse(); 
console.log(nums);



