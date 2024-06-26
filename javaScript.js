// javaScript code
console.log("hello world javascript");
let a = 10;
let b = 12.5;
console.log(`sum of a and b : ${a+b}`);

//template literals
// console.log("Your pay", a + b, "rupees.")
console.log(`Your pay ${a+b} rupees.`);

//operators
let a1 = 10;
let a2 = 20;

//arithmetic
console.log(a1+a2);
console.log(a1-a2);
console.log(a1*a2);
console.log(a1/a2);

// assignment 
let x = 4;
x += 1;
console.log("x value : ",x); //5
x -= 1;
console.log("x value : ",x); //4
x *= 2;
console.log("x value : ",x); //8
x /= 1;
console.log("x value : ",x); //8
x **=2;
console.log("x value : ",x); //64
x %= 1;
console.log("x value : ",x); //0

//comparison
console.log(a1>a2);
console.log(a1<a2);
console.log(a1>=a2);
console.log(a1<=a2);
console.log(a1==a2);
console.log(a1===a2);
console.log(a1!=a2);
console.log(a1!==a2);
//comparison non-numbers
console.log('a'=='A');
console.log('b'<'a'); //a = 97 , b = 98 , ....
console.log('A'<'B'); //A = 65 , B = 66 , ....

//logical 
let cond1 = a1 < a2;
let cond2 = a1 == 10;
console.log("condions are : ",cond1 && cond2);
console.log("condions are : ",a1<a2 || a1 == 15);
console.log("condions are : ",!(a1>a2));

//condition statements
let age = 23;
if(age>=18){
    console.log("You can drive");
}
//ternary operators
console.log(age > 18 ? "adult" : "not adult");

let firstname = "Vishwajit";
if(firstname == "Vishwajit"){
    console.log(`Welcome ${firstname}`);
}

//Practice Que traffic light
let color = "green";
if(color == "red"){
    console.log("Stop!");
}else if(color == "yellow"){
    console.log("Go slow");
}else if(color == "green"){
    console.log("Go");
}else{
    console.log("Invalid color!")
}
//Practice Que Good or bad string if start with a and length should be greater than 4
let str = "apple";
if(str[0]=='a' && str.length>=4){
    console.log("Good string");
}else{
    console.log("Bad string");
}
//Practice Que popcorn prices based on size
let size = "M";
if(size == "XL"){
    console.log("Rs. 250");
}else if(size == "L"){
    console.log("Rs. 200");
}else if(size == "M"){
    console.log("Rs. 100");
}else if(size == "S"){
    console.log("Rs. 50");
}
//multiplication table
let num = 5; // prompt("enter number");
for(i=1; i<=10; i++){
    let result = num*i;
    console.log(num, " * ",i," = ",result);
}

//create student object
const student = {
    // key : value pair
    name : "Vishwajit",
    age : 20,
    cgpa : 7.0,
    isPass : true
};
console.log(student.name); 
console.log(student["name"]);

//Loops
//for loop
for(let i=1; i<=5; i++){
    console.log("i =",i);
}
//while loop
let n1 = 1;
while(n1<=5){
    console.log(n1);
    n1++;
}
//do while loop
let n2 = 1;
do{
    console.log(n2);
    n2++;
}while(n2 <= 10);

//for-of loop
let str1 = "vishwajit";
let charSize = 0;
for(let str of str1){
    console.log(str);
    charSize++;
}
console.log(charSize);
//for-in loop
//we have access student object key
for(let key in student){
    console.log("key =",key , " value=",student[key]);
}

//string
let sentence1 = "I am a 'Tony Stark'.";
let sentence2 = 'I am a "Tony Stark".';
console.log(sentence1 + " " + sentence2);//concatenation
let marvelActor = "Tony Stark";
console.log(marvelActor[0]); //index
console.log(marvelActor.length);
console.log(marvelActor[marvelActor.length-1]);
//string methods
let space = "       vish     "
console.log(space.trim());
console.log(marvelActor.toUpperCase());
console.log(marvelActor.toLowerCase());
console.log(marvelActor.indexOf("y"));
console.log(space.trim().toUpperCase());//method chaining
console.log(marvelActor.slice(5));//Stark
console.log(marvelActor.slice(0,5));//Tony
console.log(marvelActor.slice(-3));//ark
console.log(marvelActor.replace("Stark","Ironman"));
console.log(marvelActor.replace("S","s"));
console.log(marvelActor.repeat(3));