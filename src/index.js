import "./style.css";
import "./assets/plus.png";
import "./assets/alpha-x.png";

const toDoItem = function(id, title, description, dueDate, priority) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.task = [];
}

let toDoItemList = [];
let differId = 0;

//Popup logic
const openDialogButton = document.getElementById("openDialogButton");
const createTaskButton = document.getElementById("createTaskButton");
const saveButton = document.getElementById("saveButton");
const closeButton = document.getElementById("closeButton");
const closeButtonDetail = document.getElementById("closeButtonDetail");

openDialogButton.addEventListener("click", () => {
    const title = document.getElementById("title").value;
    if (title !== "") {
        const projectTitle = document.getElementById("projectTitle");
        projectTitle.textContent = title;
        popup.showModal();
        document.getElementById("title").value = "";
    }
});

createTaskButton.addEventListener("click", () => {
    const taskItem = document.getElementById("taskItem").value;
    if (taskItem !== "") {
        const ul = document.getElementById("tasksUl");
        const li = document.createElement("li");
        const input = document.createElement("input");
        input.type = "checkbox";
        input.className = "tasks";
        const label = document.createElement("label");
        label.textContent = taskItem;

        ul.appendChild(li);
        li.appendChild(input);
        li.appendChild(label);

        document.getElementById("taskItem").value = "";
    }
});

saveButton.addEventListener("click", () => {
    const title = document.getElementById("projectTitle").textContent;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementsByClassName("priority");

    let priorityValue;
    console.log(priorityValue);
    for (const button of priority) {
    if (button.checked) {
        priorityValue = button.value;
        break;
    }
    }

    //Preciso armazenar as tarefas!
    //myToDoItem.task.push("teste");
    const myToDoItem = new toDoItem(differId, title, description, dueDate, priorityValue);

    console.log(differId)
    console.log(title);
    console.log(description);
    console.log(dueDate);
    console.log(priorityValue);
    console.log(myToDoItem.task);

    toDoItemList.push(myToDoItem);
    console.log("Teste: " + toDoItemList[0].description);

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
    
    differId++;

    //create project block

    const itemsArea = document.getElementById("itemsArea");
    itemsArea.innerHTML = "";

    for (let i = 0; i < toDoItemList.length; i++) {
        const li = document.createElement("li");
        li.className = "project";
        li.id = `project${i}`; 
        const p = document.createElement("p");
        const button = document.createElement("button");
        button.setAttribute("data-project-id", i);
        button.className = "detailButton";
        button.textContent = "Details";
        itemsArea.appendChild(li);
        li.appendChild(p);
        p.textContent = toDoItemList[i].title;
        li.appendChild(button);

        button.addEventListener("click", () => {
            //beatles melhor banda
            const projectId = button.getAttribute("data-project-id");
            console.log("Detalhes do Projeto " + projectId);

            const projetoSelecionado = toDoItemList.find(item => item.id === parseInt(projectId));
            console.log(toDoItemList.find(item => item.id === parseInt(projectId)));
            console.log("Lista de Tarefas:", toDoItemList);
            console.log("Projeto Selecionado:", projetoSelecionado);

            exibirDetalhesDoProjeto(projetoSelecionado);
            popupDetail.showModal();
        });
    }

    popup.close();
});

function exibirDetalhesDoProjeto(projeto) {
    const dialog = document.getElementById("popupDetail");

    document.getElementById("projectTitleDetail").textContent = projeto.title;
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
    ul.innerHTML = ""; // Limpa a lista antes de adicioná-la
    projeto.task.forEach(tarefa => {
        const li = document.createElement("li");
        li.textContent = tarefa;
        ul.appendChild(li);
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

closeButtonDetail.addEventListener("click", () => {
    popupDetail.close();
});

//popupDetails logic


document.getElementById("dueDate").min = new Date().toISOString().split("T")[0];