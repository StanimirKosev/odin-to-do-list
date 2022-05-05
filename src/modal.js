function modal(){
    const parent = document.getElementById('parent'); 

    const form = document.createElement('form');
    form.setAttribute("method", "post");
    form.setAttribute("action", "");
    form.setAttribute("id","modal"); 
    parent.appendChild(form);

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
    rmvBtn.setAttribute('data-close-button','#modal'); 
    rmvBtn.setAttribute('type','button');
    rmvBtn.textContent = 'Cancel';
    form.appendChild(rmvBtn).className = 'rmvBtn';

    const overlay = document.createElement('div');
    overlay.setAttribute('id','overlay');
    parent.appendChild(overlay);

    addBtn.addEventListener('click',() => {
        makeObjDOM();
    })
}

function makeObjDOM(){  
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value; 
    let date = document.getElementById('date').value;

    const listObj = document.querySelector('.listObj'); 
    
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
       
        obj.setAttribute('data-obj-index','task_'+i); // vulnerability- might overwrite existing localstorage items 
    }                                                 

    function displayRadioValue(){
        const ele = document.getElementsByName('ticket_type');
        let priority;
    
        for (let i = 0; i < ele.length; i++){
            if (ele[i].checked){
            priority = ele[i].value;
            }
        }
        return priority;
    }
}

function renderLocalStorage(){
    for ( let i = 0 ; i < localStorage.length  ; i++ ){
        let key =  Object.keys(localStorage).sort()[i];

        if (key.includes('task')){
            let todo_deserialized = JSON.parse(localStorage.getItem(key));
        
            const listObj = document.querySelector('.listObj'); 

            const obj = document.createElement('div');   
            obj.setAttribute('data-obj-index',key);    
            listObj.appendChild(obj).className = 'obj';
        
            const objTitle = document.createElement('p');
            objTitle.textContent = todo_deserialized.title;
            obj.appendChild(objTitle).className = 'objTitle';
        
            const objDesc = document.createElement('p');
            objDesc.textContent = todo_deserialized.description;
            obj.appendChild(objDesc).className = 'objDesc';
        
            const objDate = document.createElement('div');
            objDate.textContent = todo_deserialized.date;
            obj.appendChild(objDate).className = 'objDate';
        
            const rmvObj = document.createElement('button');
            rmvObj.setAttribute('type','button');
            rmvObj.textContent = 'X';
            obj.appendChild(rmvObj).className = 'rmvObj'; 
        
            if (todo_deserialized.priority === 'Important'){
                const importanceObj = document.createElement('div');
                importanceObj.textContent = todo_deserialized.priority;
                obj.appendChild(importanceObj).className = 'importanceObj';
            }
            else if(todo_deserialized.priority === 'Not important'){
                const lessImporantObj = document.createElement('div');
                lessImporantObj.textContent = todo_deserialized.priority;
                obj.appendChild(lessImporantObj).className = 'lessImportantObj';
            }   
        }
    
        if (key.includes('project')){
            let project_deserialized = JSON.parse(localStorage.getItem(key));

            const listProjects = document.querySelector('.listProjects')
        
            const actualProject = document.createElement('button');
            actualProject.setAttribute('data-pj-index',key);
            listProjects.appendChild(actualProject).className = 'actualProject';
        
            const titleProject = document.createElement('div');
            titleProject.textContent = project_deserialized;
            actualProject.appendChild(titleProject);
        
            const rmvProject = document.createElement('button');
            rmvProject.textContent = 'X';
            actualProject.appendChild(rmvProject).className = 'rmvProject';  
        }
    }  
}



export { modal , renderLocalStorage};