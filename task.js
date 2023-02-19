const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const tasksList = document.querySelector('#tasksList');
const exampleTask = document.querySelector('#exampleTask');


form.addEventListener('submit', addTask);

function addTask(event) {
    event.preventDefault();
    const taskText = taskInput.value
    const taskHTML = `
            <li>
                <div>
                    <span>${taskText}</span>
                    <input type="checkbox" name="" id="">
                </div>
            </li>`;

    tasksList.insertAdjacentHTML('beforeend', taskHTML);
    taskInput.value = "";
    taskInput.focus();

    if (tasksList.children.length > 1) {
        exampleTask.classList.add('none');
    }
    console.log('work');
}

function deleteTasks() {
    console.log('del');
    tasksList.remove();

    console.log(tasksList.children.length);

    if (tasksList.children.length > 1) {
        exampleTask.classList.remove('none');
    }

}
