//Selecting elements
//with id
let id = document.getElementById("heading1");
console.dir(id);
//with class
let headingClass = document.getElementsByClassName("heading");
console.dir(headingClass);
console.log(headingClass);
//with tag
let tag = document.getElementsByTagName("p");
console.dir(tag);
console.log(tag); 

//Query selectors
let firstEl = document.querySelector("#heading1");//1st element
console.dir(firstEl);
document.querySelector(".heading");
document.querySelector("p");

let allEl = document.querySelectorAll(".heading");//all element
console.dir(allEl);

//element properties
//tagName,innerText,textContent,innerHTML

//practice que 1 : 
//create heading element with text -"hello javaScript".
//append"from college students" to this text using js.

let q1  = document.querySelector("#q1");
q1.innerText = q1.innerText + " from college students.";
console.dir(q1.innerText);

//practice que 2 : 
//create 3 divs with common class name -"Box".
//access them & add some unique text to each of them,

let divs = document.querySelectorAll(".Box");

let idx = 1;
for(let div of divs){
    div.innerText = `new unique value ${idx}`;
    idx++;
}

//attributes

let h2 = document.querySelector("h2");
let heading = h2.getAttribute("id");
console.log(heading);

heading = h2.setAttribute("id","new q2");
heading = h2.getAttribute("id");
console.log(heading);

h2.style.backgroundColor = "red";
h2.style.color = "white";

//insert (add) elements
//prepend
let btn1 = document.createElement("button");
btn1.innerText = "prepend button";
let Div = document.querySelector(".box");
Div.prepend(btn1);
//append
let btn2 = document.createElement("button");
btn2.innerText = "append button";
Div.append(btn2);
//before
let btn3 = document.createElement("button");
btn3.innerText = "before button";
Div.before(btn3);
//after
let btn4 = document.createElement("button");
btn4.innerText = "after button";
Div.after(btn4);

//delete element
// btn1.remove();
// btn2.remove();
// btn3.remove();
// btn4.remove();

//practice que 1:
//create a new button elment.give text "click me",background color red & color white.
//insert button as the first element inside the body tag.

let newbtn = document.createElement("button");
newbtn.innerText = "click me";
newbtn.style.backgroundColor = "red";
newbtn.style.color = "white";

document.querySelector("body").prepend(newbtn);

//practice que 2:
//create a <p> tag in html, give it  class & some style.
//now create new class in css file and try to append to the <p> element.
//solve this problem using classList & its methods.

let para = document.querySelector("p"); 
para.classList.add("newpara");

//for remove newpara class
// para.classList.remove("newpara");
//for check if class exists
// para.classList.contains("newpara");
//toggle btw add & remove
// para.classList.toggle();
//show all classes 
// para.classList;

//DOM events
//node.event = () => {} //only one event create.
newbtn.onclick = (evt) => {
    console.log("click by onclick");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
}
//node.addEventListener(event,callback function)
newbtn.addEventListener("dblclick",function(e){
    console.log("button double clicked throught event listener (callback function).");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);
});
//node.addEventListener(event,callback arrow function)
let box = document.querySelector(".box");
const mouseover = (event)  => {
    console.log("cursoe in div#box throught event listener (callback arrow function).");
    console.log(event);
    console.log(event.type);
    console.log(event.target);
    console.log(event.clientX,event.clientY);
};
box.addEventListener("mouseover",mouseover);
//node.removeEventListener(event,callback)
// box.removeEventListener("mouseover",mouseover);

//practice que: 1
//create a toggle button that chnages the screen to dark-mode & light-mode.
let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currmode = "light";
modeBtn.addEventListener("click",() =>{
    if(currmode == "light"){
        currmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currmode);
});
