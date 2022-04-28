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
        todoTitle.setAttribute("id","title");
        form.appendChild(todoTitle);

        const todoDesc = document.createElement('input');
        todoDesc.setAttribute("type", "text");
        todoDesc.setAttribute("name", "description");
        todoDesc.setAttribute("placeholder", "Description");
        todoDesc.setAttribute("id","description");
        form.appendChild(todoDesc);

        const todoDate = document.createElement('input');
        todoDate.setAttribute("type", "date");
        todoDate.setAttribute("name", "date");
        todoDate.setAttribute("id","date");
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
        addBtn.setAttribute('type','button');
        addBtn.textContent = 'Add';
        form.appendChild(addBtn).className = 'addBtn';

        const rmvBtn = document.createElement('button');
        rmvBtn.setAttribute('type','button');
        rmvBtn.textContent = 'Remove';
        form.appendChild(rmvBtn).className = 'rmvBtn';

        addBtn.addEventListener('click', () => { 
            makeObjDOM()
        })
    }

    function makeObjDOM(){  // title,description,date,priority
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value; 
        const date = document.getElementById('date').value;
       /* const priority = document.getElementById('lessImportant').value;*/
        
        const obj = document.createElement('div');    
        inbox.appendChild(obj).className = 'obj';
        
        const objTitle = document.createElement('p');
        objTitle.textContent = title;
        obj.appendChild(objTitle).className = 'objTitle';

        const objDesc = document.createElement('p');
        objDesc.textContent = description;
        obj.appendChild(objDesc).className = 'objDesc';

        const objDate = document.createElement('div');
        objDate.textContent = date;
        obj.appendChild(objDate).className = 'objDate';
    }

}

export { inbox };