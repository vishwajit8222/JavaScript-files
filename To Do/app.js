const addTask = document.querySelector("button");
const ul = document.querySelector("ul");
const input = document.querySelector("input");


addTask.addEventListener("click",() => {
    let item = document.createElement("li");
    item.innerText = input.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    input.value = "";
} );

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});

//Event Delegation
//this is delete only old element and new element not delete.
 
// let delbtns = document.querySelectorAll(".delete");

// for(delbtn of delbtns){
//     delBtn.addEventListener("click",function(){
//         let par = this.parentElement;
//         par.remove();
//     });
// }
