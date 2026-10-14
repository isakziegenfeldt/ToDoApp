const toDoList = document.querySelector("#toDoList");
const addBtn = document.querySelector("#addButton");
const error = document.querySelector("#Error");
const list = document.querySelector("#list");
const listItem = document.querySelector(".listItem")
const xBtn = document.querySelector(".xBtn")
const footer = document.querySelector("#footer")
const form = document.querySelector("#newToDo")


let listDo = [];

form.addEventListener("submit", function(event){
    event.preventDefault();

    const addList = toDoList.value.trim();

    if(addList === ""){
        error.textContent = "Please enter a task"
        return;

    }



    listDo.push(addList)

   const li = document.createElement("li"); 
   li.textContent = addList 
   list.appendChild (li) 
   li.classList.add ("listItem")

const checkbox = document.createElement ("input")
checkbox.type = "checkbox"
checkbox.classList.add ("klar")

const xBtn = document.createElement ("Button") 
xBtn.textContent = "x"
xBtn.classList.add ("xBtn") 
li.prepend (checkbox) 
li.appendChild (xBtn)

xBtn.addEventListener("click", function () {
    li.remove();                              

    const index = listDo.indexOf(addList);
    listDo.splice(index, 1);                  

    console.log(listDo);
});


    console.log(listDo)

})