// Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

// Event Listeners
todoButton.addEventListener('click', addTodo)

// Functions
function addTodo(event) {
  // prevent form from submitting/refreshing page
  event.preventDefault() 

  // Creates Todo div
  const todoDiv = document.createElement("div")
  todoDiv.classList.add("todo")

  // Create LI
  const newTodo = document.createElement("li")
  newTodo.innerText = "herro"
  newTodo.classList.add('todo-item')
  todoDiv.appendChild(newTodo) // Adds created <li></li> to the parent <div class="todo">
  
  // Check button
  const completedButton = document.createElement('button')

  // Delete button
}