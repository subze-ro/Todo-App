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

      todoList.forEach((todoObject, index) => {
       
        const { name, dueDate } = todoObject;
        const html = 

        `<div>${name}</div>
         <div>${dueDate}</div>
         
        <button onclick"
            todoList.splice(${index}, 1);
            renderTodoList();

        " class="delete-todo-button">Delete</button>`;

        todoListHTML += html;
        
      });
      
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


