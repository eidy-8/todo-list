import "./style.css";
import "./assets/plus.png";
import "./assets/alpha-x.png";

const toDoItem = function(id, title, description, dueDate, priority) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checkList = [];
    this.task = [];
}

let toDoItemList = [];
let differId = 0;
let taskId = 0;
let collectedTasks = [];
//list to be copied by myToDoItem.task
function addTask(taskItens) {
    collectedTasks.push(taskItens);
}

//Popup logic
const openDialogButton = document.getElementById("openDialogButton");
const createTaskButton = document.getElementById("createTaskButton");
const saveButton = document.getElementById("saveButton");
const closeButton = document.getElementById("closeButton");

const createTaskButtonDetail = document.getElementById("createTaskButtonDetail");
const saveButtonDetail = document.getElementById("saveButtonDetail");
const clearButtonDetail = document.getElementById("clearButtonDetail");
const deleteButtonDetail = document.getElementById("deleteButtonDetail");
const closeButtonDetail = document.getElementById("closeButtonDetail");

openDialogButton.addEventListener("click", updateProjectTitle);

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 13 || event.key === "Enter") {
        event.preventDefault();
        updateProjectTitle();
    }
});

function updateProjectTitle() {
    const title = document.getElementById("title").value;
    if (title !== "") {
        const projectTitle = document.getElementById("projectTitle");
        projectTitle.textContent = title;
        popup.showModal();
        document.getElementById("title").value = "";
    }
}

createTaskButton.addEventListener("click", updateProjectTask)

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 13 || event.key === "Enter") {
        event.preventDefault();
        updateProjectTask();
    }
});

function updateProjectTask() {
    const taskItem = document.getElementById("taskItem").value;

    if (taskItem !== "") {
        const ul = document.getElementById("tasksUl");
        const li = document.createElement("li");
        const input = document.createElement("input");
        input.type = "checkbox";
        input.className = "tasks";
        input.id = `checkbox${taskId}`;

        const label = document.createElement("label");
        label.textContent = taskItem;
        label.htmlFor = `checkbox${taskId}`;

        taskId++;

        ul.appendChild(li);
        li.appendChild(input);
        li.appendChild(label);

        addTask(taskItem);

        document.getElementById("taskItem").value = "";
    }
}

saveButton.addEventListener("click", () => {
    const title = document.getElementById("projectTitle").textContent;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementsByClassName("priority");
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    let checklist = [];

    let priorityValue;
    for (const button of priority) {
        if (button.checked) {
            priorityValue = button.value;
            break;
        }
    }

    const myToDoItem = new toDoItem(differId, title, description, dueDate, priorityValue);

    for (let i = 0; i < collectedTasks.length; i++) {
        myToDoItem.task.push(collectedTasks[i]);
    }

    checkboxes.forEach((checkbox) => {
        const checkboxId = checkbox.id;
        const checkboxLabel = checkbox.nextElementSibling.textContent;
        const isChecked = checkbox.checked;

        checklist.push({
            id: checkboxId,
            label: checkboxLabel,
            marked: isChecked,
        });
    });

    myToDoItem.checkList = checklist;

    console.log("differId: " + differId)
    console.log("title: " + title);
    console.log("description: " + description);
    console.log("dueDate: " + dueDate);
    console.log("priorityValue: " + priorityValue);
    console.log("myToDoItem.task: " + myToDoItem.task);
    console.log("myToDoItem.checkList", myToDoItem.checkList);

    toDoItemList.push(myToDoItem);

    //delete all the data inputted by the user previously
    document.getElementById("taskItem").value = "";
    document.getElementById("description").value = "";
    document.getElementById("dueDate").value = "";
    for (const button of priority) {
        button.checked = false;
    }
    if (document.getElementById("tasksUl")) {
        while (document.getElementById("tasksUl").firstChild) {
            document.getElementById("tasksUl").removeChild(document.getElementById("tasksUl").firstChild);
        }
    }
    taskId = 0;
    myToDoItem.checklist = [];
    collectedTasks = [];

    //create project block
    const itemsArea = document.getElementById("itemsArea");

    const li = document.createElement("li");
    li.className = "project";

    li.id = `project${differId}`; // erro
    
    const p = document.createElement("p");
    const button = document.createElement("button");
    button.setAttribute("data-project-id", differId);
    button.className = "detailButton";
    button.textContent = "Details";
    itemsArea.appendChild(li);
    li.appendChild(p);
    p.textContent = toDoItemList[differId].title;
    li.appendChild(button);

    differId++;

    button.addEventListener("click", () => {
        const projectId = button.getAttribute("data-project-id");
        console.log("Detalhes do Projeto " + projectId);

        const selectedProject = toDoItemList.find(item => item.id === parseInt(projectId));
        console.log("Lista de tasks:", toDoItemList);
        console.log("Projeto Selecionado:", selectedProject);

        showProjectDetail(selectedProject);
        popupDetail.showModal();
    });

    popup.close();
});

function showProjectDetail(projeto) {
    const dialog = document.getElementById("popupDetail");

    document.getElementById("projectTitleDetail").textContent = projeto.title; //o erro
    document.getElementById("descriptionDetail").value = projeto.description;
    document.getElementById("dueDateDetail").value = projeto.dueDate;

    const priorityOptions = document.querySelectorAll("#priorityOptionDetail input[type=radio]");
    for (const option of priorityOptions) {
        if (option.value === projeto.priority) {
            option.checked = true;
        } else {
            option.checked = false;
        }
    }

    const ul = document.getElementById("tasksUlDetail");
    ul.innerHTML = "";
    projeto.checkList.forEach((item, index) => {
        const li = document.createElement("li");
        const input = document.createElement("input");
        input.type = "checkbox";
        input.className = "tasks";
        input.id = `checkboxDetail${index}`;

        const label = document.createElement("label");
        label.textContent = item.label;
        label.htmlFor = `checkboxDetail${index}`;

        ul.appendChild(li);
        li.appendChild(input);
        li.appendChild(label);

        input.checked = item.marked;
    });
}

closeButton.addEventListener("click", () => {
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

document.getElementById("dueDate").min = new Date().toISOString().split("T")[0];

//detail screen logic

createTaskButtonDetail.addEventListener("click", updateProjectTaskDetail);

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 13 || event.key === "Enter") {
        event.preventDefault();
        updateProjectTaskDetail();
    }
});

function updateProjectTaskDetail() {
    const taskItemDetail = document.getElementById("taskItemDetail").value;

    if (taskItemDetail !== "") {
        const ulDetail = document.getElementById("tasksUlDetail");
        const liDetail = document.createElement("li");
        const inputDetail = document.createElement("input");
        inputDetail.type = "checkbox";
        inputDetail.className = "tasks";
        inputDetail.id = `checkboxDetail${taskId}`;

        const labelDetail = document.createElement("label");
        labelDetail.textContent = taskItemDetail;
        labelDetail.htmlFor = `checkboxDetail${taskId}`;

        taskId++;

        ulDetail.appendChild(liDetail);
        liDetail.appendChild(inputDetail);
        liDetail.appendChild(labelDetail);

        const projectId = document.getElementById("projectTitleDetail").textContent;
        const selectedProject = toDoItemList.find(item => item.title === projectId);

        if (selectedProject) {
            selectedProject.task.push(taskItemDetail);
        }

        document.getElementById("taskItemDetail").value = "";
    }
}

clearButtonDetail.addEventListener("click", () => {
    const projectId = document.getElementById("projectTitleDetail").textContent;
    const selectedProject = toDoItemList.find(item => item.title === projectId);

    if (selectedProject) {
        const checkboxesDetail = document.querySelectorAll('#tasksUlDetail input[type=checkbox]:checked');
        
        checkboxesDetail.forEach((checkbox) => {
            const checkboxId = checkbox.id;
            const checkboxLabel = checkbox.nextElementSibling.textContent;

            const taskIndex = selectedProject.task.indexOf(checkboxLabel);
            if (taskIndex !== -1) {
                selectedProject.task.splice(taskIndex, 1);
            }

            const liDetail = checkbox.parentElement;
            liDetail.remove();
        });
    }
});

deleteButtonDetail.addEventListener("click", () => {
    // Exibe uma caixa de diálogo de confirmação
    const confirmation = confirm("Are you sure you want to delete this project?");

    // Verifica se o usuário confirmou
    if (confirmation) {
        const projectId = document.getElementById("projectTitleDetail").textContent;
        const selectedProjectIndex = toDoItemList.findIndex(item => item.title === projectId);

        console.log(selectedProjectIndex);

        if (selectedProjectIndex !== -1) {
            // Remove o projeto do toDoItemList
            toDoItemList.splice(selectedProjectIndex, 1, "deleted");

            // Remove o bloco div correspondente na tela principal (itemsArea)
            const projectBlocks = document.getElementById("itemsArea");
            var divToRemove = document.getElementById(`project${selectedProjectIndex}`);
            divToRemove.parentNode.removeChild(divToRemove);

            popupDetail.close();
        }
    }
});


saveButtonDetail.addEventListener("click", () => {
    const projectId = document.getElementById("projectTitleDetail").textContent;
    const selectedProject = toDoItemList.find(item => item.title === projectId);

    if (selectedProject) {
        selectedProject.description = document.getElementById("descriptionDetail").value;
        selectedProject.dueDate = document.getElementById("dueDateDetail").value;

        const priorityOptions = document.querySelectorAll("#priorityOptionDetail input[type=radio]");
        for (const option of priorityOptions) {
            if (option.checked) {
                selectedProject.priority = option.value;
                break;
            }
        }

        const checkboxes = document.querySelectorAll('#tasksUlDetail input[type=checkbox]');
        selectedProject.checkList = [];
        checkboxes.forEach((checkbox, index) => {
            const checkboxLabel = checkbox.nextElementSibling.textContent;
            const isChecked = checkbox.checked;

            selectedProject.checkList.push({
                id: `checkboxDetail${index}`,
                label: checkboxLabel,
                marked: isChecked,
            });
        });

        console.log("Projeto Atualizado:", selectedProject);
    }

    popupDetail.close();
});

closeButtonDetail.addEventListener("click", () => {
    popupDetail.close();
});