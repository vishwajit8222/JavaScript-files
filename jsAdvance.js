//start from Arrays topic

let marks = [98,70,55,80,89];
console.log(marks);
console.log(marks.length);//property
let frdsGroup = ["vishwajit","vraj","vivek","vishwa","vyonish"];
console.log(frdsGroup[0]);
console.log(frdsGroup[0][4]);
console.log(frdsGroup[2].length);
//looping in array
for(let i = 0; i<marks.length; i++){
    console.log(marks[i]);
}
for(let frd of frdsGroup){
    console.log(frd.toUpperCase());
}

//array methods

//push()
marks.push(77);
console.log("Add new marks at end !",marks);
//pop()
marks.pop();
console.log("remove marks at end !",marks);
//unshift()
marks.unshift(40);
console.log("Add new marks at start !",marks);
//shift()
marks.shift();
console.log("remove new marks at end !",marks);
//toString()
console.log(marks.toString());
//concat()
console.log(frdsGroup.concat(marks));
//slice(): not change in original array
console.log(frdsGroup.slice(0,2));
//splice(start,deleteCount,add elements) : change in original array
console.log(frdsGroup.splice(4,1,"sonu"));
console.log(frdsGroup);

//Functions

console.log("hi! log function");
"hi toUpperCase funsion".toUpperCase();
[1,2,3].push(4); //all are the functions.

//function definition8  
function myFunction(){
    console.log("I am learning function.");
}
//function call
myFunction();

//create a function for add two numbers.
function sum(n1,n2){ //n1 & n2 is parameters
    return n1+n2;
    console.log("dead code");
    //if we write code after return that code are deadcode or non working code. 
}
console.log(sum(2,5)); //2 & 5 is arguments

//Arrow function (modern js feature)
const arrowSum = (a,b) => {
    console.log(a+b);
}
console.log("Arrow function!")
arrowSum(2,3);

//Array methods (modern js)

//forEach loop in Arrays
let arr = ["pune", "delhi", "mumbai"];
arr.forEach((val, idx, arr) =>{
    console.log(val.toUpperCase(), idx, arr);
});
//map 
let newArr = arr.map((city) =>{
    return city;
});
console.log("New array of same size old array :",newArr);
//filter
let numbers = [10, 13, 28, 33, 36];
let filterArr = numbers.filter((val) => {
    return val%2==0;
});
console.log("new filtered array :",filterArr);
//reduce :- output only single value
const minimumNumber = numbers.reduce((res, curr) => {
    let min = Math.min(res,curr);
    return min;
});
console.log("Minimum number of array :",minimumNumber)

//objects
const student = {
    fullName : "Rathod Vishwajit",
    stdMarks : 97,
    printMarks : function () {
        console.log("marks =", this.marks);//student.stdMarks
    },
};

//prototypes

const empoyee = {
    calcTax() {
        console.log("tax rate is 10%.")
    },
} ;
const karanArjun = {
    salary : 5000,
};
//we set our prototype in karanArjun (prototype = calcTax).
karanArjun.__proto__ = empoyee; 
karanArjun.calcTax();

const karanArjun1 = {
    salary : 5000,
    calcTax() {
        console.log("tax rate is 20%.")
    },
};
karanArjun1.__proto__ = empoyee; 
//print closest calcTax() means it self func. (20%)
karanArjun1.calcTax();

//class
class ToyotaCar{
    constructor(brand){
        //custom
        console.log("creating constructor");
        this.brand = brand;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brand = brand; 
        //this keyword means the object for calls function. 
    }
}
let fortuner = new ToyotaCar("fortuner");
fortuner.setBrand("fortuner");
console.log(fortuner);
let lexus = new ToyotaCar();
console.log(lexus);

//inheritance
class Parent{
    hello(){
        console.log("hello by Parent");
    }
}
class Child extends Parent{
    //we can use hello() function
    hello(){
        //method overriding : print chlid method(hello()).
        console.log("hello by Child");
    }
}
let obj = new Child();
obj.hello();

class Person{
    constructor(){
        console.log("enter parent constructor");
        this.species = "homo sapiens";
    }
    eat(){
        console.log("eat");
    }
}
class Engineer extends Person{
    constructor(branch){
        console.log("enter child constructor");
        super();//it is must be to call ,we call parent constructor means Person constructor.
        this.branch = branch;
        console.log("exit child constructor");
    }
    work(){
        //we can use or access parent method through super keyword.
        super.eat();
        console.log("solve problems.")
    }
}
let engObj = new Engineer("cse");
engObj.work();

//asynchronous
console.log("one");
console.log("two");
setTimeout(() => {  //in setTimeout we pass function and that function is called Callback.
    console.log("hello");
},4000);
console.log("three");
console.log("four");

function getData(dataId){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("seccess");
        },3000);
    });
}

//callback hell
getData(1, () => {
    console.log("getting data2 ...");
    getData(2, () => {
        console.log("getting data3 ...");
        getData(3, () => {
            console.log("getting data4 ...");
            getData(4);
        });
    });
});

//promises
const getPromise = () => {
    return new Promise((resolve,reject) => {
        console.log("I am a promise");
        // resolve("success");
        reject("some error occurred");
    });
};
let promise = getPromise();
promise.then((res) => {
    console.log("promise fulfilled",res);
});
promise.catch((err) => {
    console.log("rejected",err);
});

//promise chain
getData(1).then((res) => {
    return getData(2);
})
.then((res) => {
    return getData(3);
})
.then((res) => {
    console.log(res);
});

//Async-Await
function api(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 2000);
    });
}
async function getWeatherData(){
    await api(); //1st call
    await api(); //2nd call
}
// async function getAllData(){
//     console.log("getting data1");
//     await getData(1);
//     console.log("getting data2");
//     await getData(2);
//     console.log("getting data3");
//     await getData(3);
//     console.log("getting data4");
//     await getData(4);
// }

//IIFE
(async function (){
    console.log("getting data1");
    await getData(1);
    console.log("getting data2");
    await getData(2);
    console.log("getting data3");
    await getData(3);
    console.log("getting data4");
    await getData(4);
})();