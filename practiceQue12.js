//Que 1 : filter out std marks 90 plus.

let stdMarks = [77, 93,87,98,65,91];

let filterMarks = stdMarks.filter((mark) => {
    return mark>90;
});

console.log(filterMarks);

//Que 2 : create an array of numbers from 1 to n.
let n = 5; //we can take input using prompt 
let arr = [];
for(let i = 1; i<=n; i++){
    arr.push(i);
}
console.log(arr);

//use reduce method and calculate sum of all numbers.
let Sum = arr.reduce((previous,val) =>{
    return previous+val;
});
console.log("sum :",Sum);

//use reduce method and calculate product of all numbers.
let product = arr.reduce((previous,val) =>{
    return previous*val;
});
console.log("product(factorial) :",product);