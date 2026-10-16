const toDoList = document.querySelector("#toDoList");
const addBtn = document.querySelector("#addButton");
const error = document.querySelector("#Error");
const list = document.querySelector("#list");
const listItem = document.querySelector(".listItem")
const xBtn = document.querySelector(".xBtn")
const footer = document.querySelector("#footer")
const form = document.querySelector("#newToDo")

const saved = localStorage.getItem("ToDos");
const ToDos = JSON.parse(saved) || [];

function save() {
    const text = JSON.stringify(ToDos);
    localStorage.setItem("ToDos", text);
}

let listDo = [];


function updateCounter() {
const checkboxes = list.querySelectorAll(".klar")
let counter = 0;
for(let i = 0; i < ToDos.length; i++){
if(ToDos[i].done == true){
    counter++
}

}
    let itemsLeft = ToDos.length-counter

    footer.querySelector("p").textContent = itemsLeft + " items left";
}


function render(){
list.textContent = ""


for(let i = 0; i < ToDos.length;i++){


    const li = document.createElement("li");
    li.textContent = ToDos[i].todo
    list.appendChild(li)
    li.classList.add("listItem")

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.classList.add("klar")

    checkbox.addEventListener("click", function () {
        ToDos[i].done = !ToDos[i].done
        updateCounter();
        save()
    });
    
    const xBtn = document.createElement("Button")
    xBtn.textContent = "x"
    xBtn.classList.add("xBtn")
    li.prepend(checkbox)
    li.appendChild(xBtn)
    updateCounter();

    xBtn.addEventListener("click", function () {
     ToDos.splice(i,1)
      updateCounter();
     save()
        render()
    });
}
};

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const addList = toDoList.value.trim();

    if (addList === "") {
        error.textContent = "Please enter a task"
        return;
    }
    error.textContent = "";

    const item = {
        todo: addList,
        done: false
    }
    ToDos.push(item)

    console.log(listDo)
    render()
    save();

})

render()