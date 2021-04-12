
let todoListElement = null;
let completedTodosElement = null;

document.addEventListener("DOMContentLoaded", () => {
    todoListElement = document.querySelector("#todolist");
    completedTodosElement = document.querySelector("#completed");
    const inputTaskElement = document.querySelector(".form #title");
    const submitBtnElement = document.querySelector(".form > .btn-submit");
    
    console.log(inputTaskElement.innerText);
    submitBtnElement.addEventListener("click", () => {
        const taskContent = inputTaskElement.value;
        addTaskToListTodo(taskContent);
    });
});

function makeTodo(data) {
    const textElement = document.createElement("h2");
    textElement.innerText = data;
    
    textElement.addEventListener("click", (e) => {
        const containerElement = e.target.parentElement
        containerElement.dispatchEvent(new Event("click"));
    })

    const container = document.createElement("div");
    container.append(textElement);
    container.classList.add('item', 'shadow');
    return container;
}


function setTodoOnClick(todoElement){
    todoElement.addEventListener("click", (e) => {
        onTodoClick(e.target);
    });
}

function addTaskToListTodo(taskContent) {
    const todoElement = makeTodo(taskContent);
    setTodoOnClick(todoElement);

    todoListElement.append(todoElement)
}

function addTaskToCompletedList(task){
    completedTodosElement.append(task);
}

function removeTask(taskElement){
    taskElement.remove();
}

function onTodoClick(taskElement) {
    const parentElement = taskElement.parentElement;

    if(parentElement === todoListElement){
        removeTask(taskElement);
        addTaskToCompletedList(taskElement);
    } else if(parentElement === completedTodosElement){
        const taskText = taskElement.children[0].innerText;
        let resultConfirm = confirm(`Apakah kamu yakin untuk menghapus task "${taskText}" ?`);
        if(resultConfirm){
            removeTask(taskElement);
            alert(`Task "${taskText}" sudah selesai!`);
        }
            
    }
}

