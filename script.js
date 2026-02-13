const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

addButton.addEventListener('click', addTodo);

function addTodo() {
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${todoText}</span>
            <div>
                <button class="complete-button">Complete</button>
                <button class="delete-button">Delete</button>
            </div>
        `;

        todoList.appendChild(listItem);
        todoInput.value = '';

        const completeButton = listItem.querySelector('.complete-button');
        const deleteButton = listItem.querySelector('.delete-button');

        completeButton.addEventListener('click', completeTodo);
        deleteButton.addEventListener('click', deleteTodo);
    }
}

function completeTodo(event) {
    const listItem = event.target.parentNode.parentNode;
    listItem.classList.toggle('completed');
}

function deleteTodo(event) {
    const listItem = event.target.parentNode.parentNode;
    todoList.removeChild(listItem);
}