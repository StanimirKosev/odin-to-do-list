// inbox - main/middle content

function inbox(){
    const inbox = document.querySelector('.inbox'); // from page.js

    const inboxTitle = document.createElement('div');
    inboxTitle.textContent = 'Inbox';
    inbox.appendChild(inboxTitle).className = 'inboxTitle';

    const addTask = document.createElement('button'); 
    addTask.textContent = '+ Add Task';
    addTask.setAttribute('data-modal-target','#modal'); // 1st button targeting modal ( the form element )
    inbox.appendChild(addTask).className = 'addTask';
    /*addTask.addEventListener('click', () => {
        modal();  
        addTask.disabled = true; 
    })*/

   /* function makeObjDOM(){  // title,description,date,priority
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value; 
        const date = document.getElementById('date').value;
       /* const priority = document.getElementById('lessImportant').value;
        
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
    }*/

}



export { inbox };