import "./style.css";
import "./assets/plus.png";
import "./assets/alpha-x.png";

const toDoItem = function(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checkList = [];
    this.task = [];
}

const projetos = [];

//Popup logic
const openDialogButton = document.getElementById('openDialogButton');
const createTaskButton = document.getElementById('createTaskButton');
const saveButton = document.getElementById("saveButton");
const closeButton = document.getElementById('closeButton');

openDialogButton.addEventListener('click', () => {
    const title = document.getElementById("title").value;
    if (title !== "") {
        const projectTitle = document.getElementById("projectTitle");
        projectTitle.textContent = title;
        popup.showModal();
    }
});

createTaskButton.addEventListener('click', () => {
    const taskItem = document.getElementById("taskItem").value;
    if (taskItem !== "") {
        const ul = document.getElementById("tasksUl");
        const li = document.createElement("li");
        const input = document.createElement("input");
        input.type = 'checkbox';
        input.className = 'tasks';
        const label = document.createElement("label");
        label.textContent = taskItem;

        ul.appendChild(li);
        li.appendChild(input);
        li.appendChild(label);
    }
});

saveButton.addEventListener("click", () => {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementsByClassName("priority");

    let priorityValue;
    for (const button of priority) {
    if (button.checked) {
        priorityValue = button.value;
        break;
    }
    }
    console.log(title);
    console.log(description);
    console.log(dueDate);
    console.log(priorityValue);
});

closeButton.addEventListener('click', () => {
    // document.getElementById("title").value = '';
    popup.close();
});

document.getElementById("dueDate").min = new Date().toISOString().split("T")[0];