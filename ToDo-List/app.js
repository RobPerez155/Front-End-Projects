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
  todoDiv.appendChild(newTodo) // Adds created <li></li> to the parent <div class="todo"> on #15
  
  // Check complete button
  const completedButton = document.createElement('button')
  completedButton.innerHTML = '<i class= "fas fa-check"></i>';
  completedButton.classList.add('complete-btn')
  todoDiv.appendChild(completedButton)

  // Check trash button
  const trashButton = document.createElement('button')
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn')
  todoDiv.appendChild(trashButton)

  // Append to the list <ul>
  todoList.appendChild(todoDiv)
}