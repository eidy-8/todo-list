import "./style.css";
import "./assets/plus.png";
import "./assets/circle-outline.png";

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
const cancelButton = document.getElementById('cancelButton');
const createTaskButton = document.getElementById('createTaskButton');

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
        const tasks = document.getElementById("tasks");
        const task = document.createElement("div");
        task.setAttribute("id", "task");
        const taskTitle = document.createElement("div");
        taskTitle.textContent = taskItem;
        tasks.appendChild(task);

        const circleImg = document.createElement("img");
        circleImg.setAttribute("id", "circleImg");
        circleImg.src = "./assets/circle-outline.png";
        circleImg.alt = "Check Button";

        task.appendChild(circleImg);
        task.appendChild(taskTitle);
    }
});
cancelButton.addEventListener('click', () => {
    popup.close();
});

document.getElementById("dueDate").min = new Date().toISOString().split("T")[0];