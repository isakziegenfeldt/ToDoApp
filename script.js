const toDoList = document.querySelector("#toDoList");
const addBtn = document.querySelector("#addButton");
const error = document.querySelector("#Error");
const list = document.querySelector("#list");
const listItem = document.querySelector(".listItem")
const xBtn = document.querySelector(".xBtn")
const footer = document.querySelector("#footer")
const form = document.querySelector("#newToDo")


let listDo = [];


function updateCounter(){
        const checkboxes = list.querySelectorAll(".klar")
        let itemsLeft = 0;

        for (let i = 0; i < checkboxes.length; i++){
            if(!checkboxes[i].checked){ 
                itemsLeft++;
            }
             
        }
         footer.querySelector("p").textContent = itemsLeft + " items left";
    }

form.addEventListener("submit", function(event){
    event.preventDefault();

    const addList = toDoList.value.trim();

    if(addList === ""){
        error.textContent = "Please enter a task"
        return;

    }
    error.textContent = "";



    listDo.push(addList)

   const li = document.createElement("li"); 
   li.textContent = addList 
   list.appendChild (li) 
   li.classList.add ("listItem")

const checkbox = document.createElement ("input")
checkbox.type = "checkbox"
checkbox.classList.add ("klar")

checkbox.addEventListener("click", function () {
    updateCounter();
});

const xBtn = document.createElement ("Button") 
xBtn.textContent = "x"
xBtn.classList.add ("xBtn") 
li.prepend (checkbox) 
li.appendChild (xBtn)
updateCounter();

xBtn.addEventListener("click", function () {
    li.remove();                              

    const index = listDo.indexOf(addList);
    listDo.splice(index, 1);                  

    console.log(listDo);
    updateCounter();
});


    console.log(listDo)

    

})