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

    document.createElement("li");


    console.log(listDo)

})