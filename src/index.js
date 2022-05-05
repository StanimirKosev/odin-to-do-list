import { pageLayout } from './page.js';
import { inbox , todayTodo , weekTodo} from './inbox.js';
import { modal , renderLocalStorage } from './modal.js';  
import { sidebar , pjRender } from './side-bar.js';  
                               
pageLayout();           
inbox();                
modal();                // functionality/arrangement of tasks 
sidebar();
renderLocalStorage();

// Webpack / page changing logic 

const inboxBtn = document.querySelector('.inboxBtn'); 
inboxBtn.addEventListener('click', () => {
    emptyMain(main);
    inbox();
    inboxModal(); 
})

const todayBtn = document.querySelector('.todayTodo');
todayBtn.addEventListener('click', () => {
    emptyMain(main);
    todayTodo();
})

const weekBtn = document.querySelector('.weekTodo');
weekBtn.addEventListener('click', () => {
    emptyMain(main);
    weekTodo();
})

function projectsRender(event){
    if ( event.target.className === "actualProject"){
        emptyMain(main);
        const index = event.target.getAttribute('data-pj-index');
        const project = document.querySelectorAll('[data-pj-index]')[index];
        const projectTitle = project.textContent.slice(0,-1);  
        
        pjRender(projectTitle);
    }
}
document.addEventListener('click', (event) => {
    projectsRender(event);
});

const main = document.querySelector('.inbox'); 

function emptyMain(element) {
    while(element.firstElementChild){
       element.firstElementChild.remove(); 
    }
}

//  Objects functionallity 

class Todo{
    constructor(title,description,dueDate,priority){   
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

const addBtn = document.querySelector('.addBtn'); 
addBtn.addEventListener('click', () => {

    const title = document.getElementById('title').value; 
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;             
   
    const todo = new Todo(title,description,date,displayRadioValue());
    todoLocalStorage(todo);
})

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

function todoLocalStorage(todo){ 
    const numObj = document.querySelector('.listObj');
    let key;
    let todo_serialized = JSON.stringify(todo); 
 
    for ( let i = 0 ; i < numObj.children.length ; i++){
        key = 'task_'+i; // vulnerability- might overwrite existing localstorage items 
    }

    localStorage.setItem(key,todo_serialized);
    clearForm();
}


function removeObj(event){ 
    if (event.target.className === "rmvObj"){ // removes todo's
        const key = event.target.parentElement.getAttribute('data-obj-index'); 
        event.target.parentElement.remove(); 
        localStorage.removeItem(key); 
    }

    if (event.target.className === "rmvProject"){ // removes projects

        const key = event.target.parentElement.getAttribute('data-pj-index'); 
        event.target.parentElement.remove();
        localStorage.removeItem(key); 
    }
}
document.addEventListener('click', (event) => { 
    removeObj(event);
});

function clearForm(){
    let title = document.getElementById('title').value = '';
    let description = document.getElementById('description').value = ''; 
    let date = document.getElementById('date').value = ''; 
}

// Modal - functionality  

const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

inboxModal();
function inboxModal(){
    const openModalButtons = document.querySelectorAll('[data-modal-target]');
    
    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector(button.dataset.modalTarget);
            openModal(modal);
        })
    })

    function openModal(modal){
        if ( modal == null ) return
        modal.classList.add('active');
        overlay.classList.add('active');
    }   
}

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.closeButton);
        closeModal(modal);
    })
})

function closeModal(modal){
    if ( modal == null ) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

overlay.addEventListener('click',() => {
    const modals = document.querySelectorAll('form.active');
    modals.forEach(modal => {
      closeModal(modal);
    })
})

// Sidebar modal - functionality 
const openSidebarBtns = document.querySelectorAll('[data-modal-target-project]');
const closeSidebarBtns = document.querySelectorAll('[data-close-button-project]');

openSidebarBtns.forEach(button => {
    button.addEventListener('click', () => {
        const sidebarModal = document.querySelector(button.dataset.modalTargetProject);
        openSidebarModal(sidebarModal);
        overlay.classList.add('active');
    })
})

function openSidebarModal(sidebarModal){
    if ( sidebarModal == null ) return
    sidebarModal.classList.add('active');
}   

closeSidebarBtns.forEach(button => {
    button.addEventListener('click', () => {
        const sidebarModal = document.querySelector(button.dataset.closeButtonProject);
        closeSidebarModal(sidebarModal);
        overlay.classList.remove('active');
    })
})

function  closeSidebarModal(sidebarModal){
    if ( sidebarModal == null ) return
    sidebarModal.classList.remove('active');
}



/**Prevents chrome pop up window when refreshing*/
if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
}

