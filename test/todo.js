const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(todo => todo.id !== parseInt(li.id));
    saveTodos();

}
function paintTodo(todoText){
    const li = document.createElement("li");
    li.id = todoText.id;
    const span = document.createElement("span");
    span.innerText = todoText.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handtodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const obj = {
        text: newTodo,
        id : Date.now(),
    };
    toDos.push(obj);
    paintTodo(obj);
    saveTodos();
}

todoForm.addEventListener("submit", handtodoSubmit);

const saveTodosJson = localStorage.getItem(TODOS_KEY);

if(saveTodosJson !== null){
    const parseTodos = JSON.parse(saveTodosJson);
    toDos = parseTodos;
    parseTodos.forEach(paintTodo);
}