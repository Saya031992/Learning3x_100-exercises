function doubleMe(a){
    return a*2;
}

const doubleA = (a) => a*2; //arrow function 
doubleA(10); 

const getEnv = () => "Staging";
console.log(getEnv());

//multiline

const getResult=(score)=>{
    if(score>50)
        return "Pass";
        return "Fail";
    }

    console.log(getResult(60));
    console.log(getResult(40));
    