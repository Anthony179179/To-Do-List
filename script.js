const inputTaskBox = document.getElementById("input-task");
const addTaskButton = document.getElementById("add-task-button");
let taskList = document.getElementById("task-list");
let task = document.querySelectorAll(".newTask");
let buttons = document.getElementsByClassName("delete-btn");
const checkboxes = document.getElementsByClassName("checkbox");
let taskNames = document.getElementsByClassName("task");

let globalPreviousList;


taskList.innerHTML = localStorage.getItem("globalStoredPreviousList");

//Add task when pressing the "add task" button
addTaskButton.addEventListener("click", function addTask() {
    //Create a newTask element and insert it inside of the task list
    const newTask = document.createElement("li");
    newTask.setAttribute("class", "newTask");

        //Create a checkbox and insert it inside the newTask element
        const newTaskCheckbox = document.createElement("input");
        newTaskCheckbox.setAttribute("type", "checkbox");
        newTaskCheckbox.setAttribute("class", "checkbox");
        newTask.appendChild(newTaskCheckbox);

       //Create a span where the name of the task is and insert it inside the newTask element
        const newTaskName = document.createElement("span");
        newTaskName.setAttribute("class", "task");
        newTaskName.innerHTML = inputTaskBox.value;
        newTask.appendChild(newTaskName);

        //Create a delete button and insert it inside the newTask element
        const newDeleteButton = document.createElement("button");
        newDeleteButton.setAttribute("class", "delete-btn");
        newTask.appendChild(newDeleteButton);
    taskList.appendChild(newTask);

    //Remove text in the box after creating a task
    inputTaskBox.value = "";

    newDeleteButton.addEventListener("click", function deleteTask() {
        console.log("Button clicked");
        newTask.remove();
        globalPreviousList = taskList.innerHTML;
        localStorage.setItem("globalStoredPreviousList", globalPreviousList);
    });
    newTaskCheckbox.addEventListener("click", function crossTask() {
        console.log("Task completed");
        newTaskName.classList.toggle("completed");
        globalPreviousList = taskList.innerHTML;
        localStorage.setItem("globalStoredPreviousList", globalPreviousList);
    })

    globalPreviousList = taskList.innerHTML;
    localStorage.setItem("globalStoredPreviousList", globalPreviousList);
})

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function deleteTask() {
        console.log("Button clicked");
        this.parentNode.parentNode.removeChild(this.parentNode);
        globalPreviousList = taskList.innerHTML;
        localStorage.setItem("globalStoredPreviousList", globalPreviousList);
    })
}

for (let i = 0; i < 3; i++) {
    if(taskNames[i].classList.contains("completed")) {
        checkboxes[i].checked = true;
    }
    else {
        checkboxes[i].checked = false;
    }
    //Check the checkbox
    checkboxes[i].addEventListener("click", function crossTask() {
        console.log("Task completed");
        taskNames[i].classList.toggle("completed");
        globalPreviousList = taskList.innerHTML;
        localStorage.setItem("globalStoredPreviousList", globalPreviousList);
    })
}