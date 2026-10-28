let scores=[45,82,91,60,73];

let grades=scores.map(s=>s>70?"Pass":"Fail");
console.log(grades);

//Map is used when we want to transform new array of same size

//filter
let passing=scores.filter(s => s >= 70);
console.log(passing );
