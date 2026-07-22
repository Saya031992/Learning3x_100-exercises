console.log("Enter the number!");

const input = require('fs').readFileSync(0, 'utf8').trim();
const number=Number(input);

console.log("Hi",number);
