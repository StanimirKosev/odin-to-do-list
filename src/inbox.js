// inbox - main/middle content

function inbox(){
const inbox = document.querySelector('.inbox'); // from page.js

const inboxTitle = document.createElement('div');
inboxTitle.textContent = 'Inbox';
inbox.appendChild(inboxTitle).className = 'inboxTitle';

const addTask = document.createElement('button');
addTask.textContent = '+ Add Task';
inbox.appendChild(addTask).className = 'addTask';

}

export { inbox };