// version one of the app. displaying the todo list as an array on the console
const todoList =[{
        name: 'make dinner', 
        dueDate: '2025-1-23', 
      },{
        name: 'wash dishes',
        dueDate: '2025-1-23'
      }];

renderTodoList();

function renderTodoList() {

      let todoListHTML = ``;

      for (let i = 0; i < todoList.length; i++ ) {
        const todoObject = todoList[i] ;
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        //below is the shortcut for these two commented lines
        const { name, dueDate } = todoObject;
        const html = 

        `<div>${name}</div>
         <div>${dueDate}</div>
         
        <button onclick"
            todoList.splice(${i}, 1);
            renderTodoList();

        " class="delete-todo-button">Delete</button>`;

        todoListHTML += html;
      }
     
      document.querySelector('.js-todo-list')
      .innerHTML = todoListHTML;
}

function addTodo(){
      const inputElement = document.querySelector('.js-name-input');
      const name = inputElement.value;

      const dateInputElement = document.querySelector('.js-due-date-input');

        const dueDate = dateInputElement.value;

            
      todoList.push({
        //name: name, 
        //dueDate: dueDate
        // the shorthand property syntax. a shortcut for these two lines above put here below. This property is a shortcut for when object's property name and value name are the same
        name, 
        dueDate});

     

      inputElement.value = '';

      renderTodoList();       
    }


