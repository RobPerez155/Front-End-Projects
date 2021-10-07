// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("change", filterTodo);

// Functions
function addTodo(event) {
  // prevent form from submitting/refreshing page
  event.preventDefault();

  // Creates Todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // Create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo); // Adds created <li></li> to the parent <div class="todo"> on #15

  // Save todo in local storage
  saveLocalTodos(todoInput.value);

  // Check complete button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class= "fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  // Check trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  // Append to the list <ul>
  todoList.appendChild(todoDiv);

  // Clear input value
  todoInput.value = "";
}

function deleteCheck(event) {
  const item = event.target;

  //Delete ToDo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    removeLocalTodos(todo)
    todo.addEventListener("transitionend", function () {
      todo.remove(); // This will remove the whole <li>
    });
  }

  // Checkmark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(event) {
  const todos = todoList.childNodes; /* returns the element's children */

  todos.forEach(function (todo) {
    switch (event.target.value) {
      case "all":
        todo.style.display = "flex";
        break;

      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;

      case "incompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}

// Saving to local storage
function saveLocalTodos(todo) {
  // Check if there are existing todo's
  let todos;
  if (localStorage.getItem("todos") === null) {
    // If there is no existing todo's this will creat an empty todos array.
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos")); // This will parse the existing todos back into an array, in other words, this returns an array
  }
  todos.push(todo); // Here we push the new todo to the array
  localStorage.setItem("todos", JSON.stringify(todos)); // This puts the array back into local storage
}

function getTodos() {
  // Check if there are existing todo's
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  // Adding local storage back to ui
  todos.forEach(function (todo) {
    // Creates Todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // Check complete button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class= "fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // Check trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // Append to the list <ul>
    todoList.appendChild(todoDiv);
  });
}

function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText // This gives us the name of the todo
  todos.splice(todos.indexOf(todoIndex), 1) // .splice(position of element to remove, how many elements to remove) - indexOf gives the index of the string given to it
  localStorage.setItem('todos', JSON.stringify(todos)) // resets the array
}
