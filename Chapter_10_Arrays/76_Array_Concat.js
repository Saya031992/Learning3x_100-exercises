let a=[1,2];
let b=[3,4];
let c=a.concat(b);
console.log(c);

//spread(modern-way)
let d=[...a,...b];
console.log(d);

//join
//array into big string

    let s=["pass","fail","skip"].join(" | ");
    console.log(s);