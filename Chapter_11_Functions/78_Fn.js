//without functions-repeated logic

let score1=85;
let result1=score1>=70?"Pass":"Fail";
console.log(result1);


let score2=45;
let result2=score2>=70?"Pass":"Fail";
console.log(result2);

//define
function  getResult(score){
    return score>=70?"Pass":"Fail";
}

//calling
getResult(85);//pass
getResult(20);//fail
