//rule of thumb;
//==loose equuality(does type correction,suprising)
//===strict equality(does not do type correction,not surprising)

console.log(""==0);//empty string=0true
console.log(""===0);//false

console.log("0"==0);//true
console.log("0"===0);//false
console.log(""=="0");//false empty string is zero//we have one cgaracter here so answer is false
//"0"--one charter in double quotes

console.log(""==="0");//false//will say ask properly
console.log("0"===0);//true
console.log(""==="0");//false