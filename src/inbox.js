// inbox - main/middle content

function inbox(){
    const inbox = document.querySelector('.inbox'); // from page.js

    const inboxTitle = document.createElement('div');
    inboxTitle.textContent = 'Inbox';
    inbox.appendChild(inboxTitle).className = 'inboxTitle';

    const addTask = document.createElement('button');
    addTask.textContent = '+ Add Task';
    inbox.appendChild(addTask).className = 'addTask';
    addTask.addEventListener('click', () => {
        modal();  
        addTask.disabled = true; 
    })

    function modal(){
        const form = document.createElement('form');
        form.setAttribute("method", "post");
        form.setAttribute("action", "");
        inbox.appendChild(form);

        const todoTitle = document.createElement('input');
        todoTitle.setAttribute("type", "text");
        todoTitle.setAttribute("name", "title");
        todoTitle.setAttribute("placeholder", "Title");
        form.appendChild(todoTitle);

        const todoDesc = document.createElement('input');
        todoDesc.setAttribute("type", "text");
        todoDesc.setAttribute("name", "description");
        todoDesc.setAttribute("placeholder", "Description");
        form.appendChild(todoDesc);

        const todoDate = document.createElement('input');
        todoDate.setAttribute("type", "date");
        todoDate.setAttribute("name", "date");
        form.appendChild(todoDate);

        const todoImportance = document.createElement('input');
        todoImportance.setAttribute("type", "radio");
        todoImportance.setAttribute("name", "ticket_type");
        todoImportance.setAttribute("id","important")
        
        const important = document.createElement('label');
        important.textContent = 'Important';
        important.setAttribute("for","important");
        form.appendChild(todoImportance);
        form.appendChild(important);

        const todoImportance2 = document.createElement('input');
        todoImportance2.setAttribute("type", "radio");
        todoImportance2.setAttribute("name", "ticket_type");
        todoImportance2.setAttribute("id","lessImportant")
        todoImportance2.setAttribute('checked','true');

        const lessImporant = document.createElement('label');
        lessImporant.textContent = 'Less important';
        lessImporant.setAttribute("for","lessImportant");
        form.appendChild(todoImportance2);
        form.appendChild(lessImporant);

        const addBtn = document.createElement('button');
        addBtn.textContent = 'Add';
        form.appendChild(addBtn).className = 'addBtn';

        const rmvBtn = document.createElement('button');
        rmvBtn.textContent = 'Remove';
        form.appendChild(rmvBtn).className = 'rmvBtn';
    }

}

export { inbox };