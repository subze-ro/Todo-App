// version one of the app. displaying the todo list as an array on the console
const todoList =[];

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  
  
  todoList.push(name);
  console.log(todoList);

  inputElement.value = '';
}

//version 2 of the app

