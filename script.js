const todo_input = document.getElementById("todo_input");
const btn = document.getElementById("btn");
const todo_list = document.getElementById("todo_list");

function add() {
    const list_item = document.createElement('li');
    const task_text = document.createTextNode(todo_input.value);
    list_item.appendChild(task_text);

    const delete_btn = document.createElement('button');
    delete_btn.textContent = 'x';
    delete_btn.onclick = function() {
        todo_list.removeChild(list_item);
    };
    list_item.appendChild(delete_btn);
    todo_list.appendChild(list_item);
    todo_input.value = '';
}