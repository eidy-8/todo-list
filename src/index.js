import "./style.css";
import "./assets/plus.png";
import "./assets/alpha-x.png";

let differId = 0;

const toDoItem = function(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.task = [];
}

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
        document.getElementById("title").value = "";
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
    const title = document.getElementById("projectTitle").textContent;
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

    const myToDoItem = new toDoItem(title, description, dueDate, priorityValue);
    myToDoItem.task.push('teste');

    console.log(title);
    console.log(description);
    console.log(dueDate);
    console.log(priorityValue);
    console.log(myToDoItem.task);

    //create project block
    differId++;

    const itemsArea = document.getElementById("itemsArea");
    const li = document.createElement("li");
    li.className = "project";
    li.id = `project${differId}`; 
    const p = document.createElement("p");
    const button = document.createElement("button");
    button.setAttribute("data-project-id", differId);
    button.className = "detailButton";
    button.textContent = "Details";
    itemsArea.appendChild(li);
    li.appendChild(p);
    p.textContent = title;
    li.appendChild(button);

    button.addEventListener("click", () => {
        const projectId = button.getAttribute("data-project-id");
        console.log("Detalhes do Projeto " + projectId);
    });

    popup.close();
});

closeButton.addEventListener('click', () => {
    document.getElementById("description").value = "";
    document.getElementById("dueDate").value = "";
    const priorityOptions = document.getElementsByName("read");
    for (const option of priorityOptions) {
        option.checked = false;
    }
    document.getElementById("taskItem").value = "";
    const ul = document.getElementById("tasksUl");
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }

    popup.close();
});

//popupDetails logic


document.getElementById("dueDate").min = new Date().toISOString().split("T")[0];