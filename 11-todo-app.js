// version one of the app. displaying the todo list as an array on the console
const todoList =['make dinner', 'wash dishes'];

renderTodoList();

function renderTodoList() {

      let todoListHTML = ``;

      for (let i = 0; i < todoList.length; i++ ) {
        const todo = todoList[i] ;
        const html = `<p>${todo}</p>`
        todoListHTML += html;
      }

      console.log(todoListHTML);

      document.querySelector('.js-todo-list')
      .innerHTML = todoListHTML;
}

function addTodo(){
      const inputElement = document.querySelector('.js-name-input');
      const name = inputElement.value;
      
      
      todoList.push(name);
      console.log(todoList);

      inputElement.value = '';

      renderTodoList();       
    }

//version 2 of the app

