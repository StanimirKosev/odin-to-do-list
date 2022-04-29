function modal(){
    const inbox = document.querySelector('.inbox');

    const form = document.createElement('form');
    form.setAttribute("method", "post");
    form.setAttribute("action", "");
    form.setAttribute("id","modal"); // data attribute of the buttons will target this id
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
    todoImportance.setAttribute("id","important");
    todoImportance.setAttribute('value','Important');
    
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
    todoImportance2.setAttribute('value','Not important');

    const lessImporant = document.createElement('label');
    lessImporant.textContent = 'Not important';
    lessImporant.setAttribute("for","lessImportant");
    form.appendChild(todoImportance2);
    form.appendChild(lessImporant);

    const addBtn = document.createElement('button');
    addBtn.setAttribute('type','button');
    addBtn.textContent = 'Add';
    form.appendChild(addBtn).className = 'addBtn';

    const rmvBtn = document.createElement('button');
    rmvBtn.setAttribute('data-close-button','#modal'); // targets the modal ( form el )
    rmvBtn.setAttribute('type','button');
    rmvBtn.textContent = 'Cancel';
    form.appendChild(rmvBtn).className = 'rmvBtn';

    const overlay = document.createElement('div');
    overlay.setAttribute('id','overlay');
    inbox.appendChild(overlay);

    addBtn.addEventListener('click',() => {
        makeObjDOM();
    })

    function makeObjDOM(){  // title,description,date,priority
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value; 
        const date = document.getElementById('date').value;
       

        const listObj = document.querySelector('.listObj'); // place all todos in one element, more comfy for css
        
        const obj = document.createElement('div');   
        listObj.appendChild(obj).className = 'obj'; 
        
        const objTitle = document.createElement('p');
        objTitle.textContent = title;
        obj.appendChild(objTitle).className = 'objTitle';

        const objDesc = document.createElement('p');
        objDesc.textContent = description;
        obj.appendChild(objDesc).className = 'objDesc';

        const objDate = document.createElement('div');
        objDate.textContent = date;
        obj.appendChild(objDate).className = 'objDate';

        const rmvObj = document.createElement('button');
        rmvObj.setAttribute('type','button');
        rmvObj.textContent = 'X';
        obj.appendChild(rmvObj).className = 'rmvObj'; 

        if (displayRadioValue() === 'Important'){
            const importanceObj = document.createElement('div');
            importanceObj.textContent = displayRadioValue();
            obj.appendChild(importanceObj).className = 'importanceObj';
        }
        else if(displayRadioValue() === 'Not important'){
            const lessImporantObj = document.createElement('div');
            lessImporantObj.textContent = displayRadioValue();
            obj.appendChild(lessImporantObj).className = 'lessImportantObj';
        }

        for ( let i = 0 ; i < listObj.children.length ; i++){
            obj.setAttribute('data-obj-index',i);
        }
    }

    function displayRadioValue() {
        const ele = document.getElementsByName('ticket_type');
        let priority;
    
        for(let i = 0; i < ele.length; i++) {
            if(ele[i].checked){
            priority = ele[i].value;
            }
        }
        return priority;
    }
}

export { modal };