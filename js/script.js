'use strict';

class Todo {
    constructor(form, input, todoList, todoCompleted, todoContainer){
        this.form = document.querySelector(form);
        this.input = document.querySelector(input);
        this.todoList = document.querySelector(todoList);
        this.todoCompleted = document.querySelector(todoCompleted);
        this.todoContainer = document.querySelector(todoContainer);
        this.todoData = new Map(JSON.parse(localStorage.getItem('toDoList')));
    }
    
    addToStorage(){
        localStorage.setItem('toDoList', JSON.stringify([...this.todoData]));
    }

    render(){
        if (this.input.getAttribute('key')){
             this.input.removeAttribute('key');
            }
        this.todoList.textContent = '';
        this.todoCompleted.textContent = '';
        this.todoData.forEach(this.createItem, this);
        this.addToStorage();
        this.input.value = '';
    }

    createItem(todo) {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        // li.key = todo.key;
        li.setAttribute('key', todo.key);
        li.insertAdjacentHTML('beforeend', `
            <span class="text-todo">${todo.value}</span>
            <div class="todo-buttons">
                <button class="todo-edit"></button>
                <button class="todo-remove"></button>
                <button class="todo-complete"></button>
            </div>
        `);

        if(todo.completed){
            this.todoCompleted.append(li);
        } else {
            this.todoList.append(li);
        }
    }

    addTodo(e){
        e.preventDefault();
            if (this.input.value.trim()){
                if (this.input.getAttribute('key')){
                        for (let key of this.todoData){
                             if (key[0] === this.input.getAttribute('key')){
                            key[1].value = this.input.value;
                            localStorage.setItem('toDoList', JSON.stringify([...this.todoData]));
                            this.render();
                            this.input.removeAttribute('key');
                        }
                    }
                } else {
                const newTodo = {
                    value: this.input.value,
                    completed: false,
                    key: this.generateKey()
                };
            this.todoData.set(newTodo.key, newTodo);
            this.render();
          }
        }
    }

    generateKey(){
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    deleteItem(liKey){
        for (let key of this.todoData){
            
            if (key[0] === liKey){
                this.todoData.delete(key[0]);
                localStorage.setItem('toDoList', JSON.stringify([...this.todoData]));
            }
        }
        this.render();
    }

    completedItem(liKey){
        for (let key of this.todoData){
            
            if (key[0] === liKey){
                key[1].completed = !key[1].completed;
                localStorage.setItem('toDoList', JSON.stringify([...this.todoData]));
            }
        }

        this.render();
    }

    editItem(liKey){
        for (let key of this.todoData){
            
            if (key[0] === liKey){
                console.log(' editItem foo', key, key[1].value)
                this.input.value = key[1].value;
                this.input.setAttribute('key', liKey)
                // key[1].completed = !key[1].completed;
                // localStorage.setItem('toDoList', JSON.stringify([...this.todoData]));
            }
        }

    }

    handler(){
        //todo-container
        this.todoContainer.addEventListener('click', (event) => {

           const todoRemove1 = document.querySelectorAll('.todo-remove'),
                todoComplete1 = document.querySelectorAll('.todo-complete'),
                todoEdit = document.querySelectorAll('.todo-edit'),
                target = event.target;

                if (target.matches('.todo-remove')){
                        todoRemove1.forEach((elem) => {
                        if (target === elem){
                         this.animate(target.closest('li'), this.deleteItem.bind(this));
                        //  this.deleteItem(target.closest('li').getAttribute('key'));
                        }
                    });
                } else  if (target.matches('.todo-complete')){
                    todoComplete1.forEach((elem) => {
                        if (target === elem){
                        this.animate(target.closest('li'), this.completedItem.bind(this));
                        // this.completedItem(target.closest('li').getAttribute('key'));
                        }
                    });
                }  else if (target.matches('.todo-edit')){
                    todoEdit.forEach((elem) => {
                        if (target === elem){
                            console.log(' todoEdit.forEach')
                            this.editItem(target.closest('li').getAttribute('key'))
                            // this.animate(target.closest('li'), this.completedItem.bind(this));
                        // this.completedItem(target.closest('li').getAttribute('key'));
                        }
                    });
                }
        });
    }

    init() {
        this.form.addEventListener('submit', this.addTodo.bind(this));
        this.render();
        this.handler();
    }

    animate(elem, callback){
        let count = 0,
            sizeChange = 0;
       
            function step() {
                // console.log(window.innerWidth, elem.offsetLeft);
            sizeChange = window.innerWidth - elem.offsetLeft;
            count ++;
            elem.style.left = count * 15 + 'px';
            
            if (sizeChange > 0) {
              window.requestAnimationFrame(step);
            } else {
              window.cancelAnimationFrame(myReq);
              callback(elem.getAttribute('key'));
                }
            }
        
        const myReq = window.requestAnimationFrame(step);
    }
}

const todo = new Todo('.todo-control', '.header-input', '.todo-list', '.todo-completed', '.todo-container');

todo.init();
// todo.animate()

