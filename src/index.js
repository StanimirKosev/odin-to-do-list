import { pageLayout } from './page.js';
import { inbox , todayTodo , weekTodo} from './inbox.js';
import { modal } from './modal.js';  
import { sidebar , pjRender } from './side-bar.js';
                                  
pageLayout(); //   - localstorage 
inbox();
modal();
sidebar();

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

const main = document.querySelector('.inbox');
function emptyMain(element) {
    while(element.firstElementChild){
       element.firstElementChild.remove(); 
    }
}



/*const projectBtn = document.querySelectorAll('[data-pj-index]');*/
/*projectBtn.addEventListener('click', () => {
    emptyMain(main);
})*/
function projectsRender(event){
    if ( event.target.className === "actualProject"){
       emptyMain(main);
        const index = event.target.getAttribute('data-pj-index');
      const project = document.querySelectorAll('[data-pj-index]')[index];
      const projectTitle = project.textContent.slice(0,-1);  // get the title of the el
    
      pjRender(projectTitle);
    }
}




document.addEventListener('click', (event) => {
    projectsRender(event);
});



document.addEventListener('click', (event) => {
    removeTodo(event);
});

function removeTodo(event){
    if (event.target.className === "rmvObj"){
        const index = event.target.parentElement.getAttribute('data-obj-index');
        document.querySelectorAll('[data-obj-index]')[index].remove();

        const numObj = document.querySelector('.listObj');
        for ( let i = 0 ; i < numObj.children.length ; i++){
            document.querySelectorAll('[data-obj-index]')[i].setAttribute('data-obj-index', i ); 
        }
    }

    if (event.target.className === "rmvProject"){
        const index = event.target.parentElement.getAttribute('data-pj-index');
        document.querySelectorAll('[data-pj-index]')[index].remove();
        
        const numPj = document.querySelector('.listProjects');

   
    for ( let i = 0 ; i < numPj.children.length ; i++){
        document.querySelectorAll('[data-pj-index]')[i].setAttribute('data-pj-index', i );
    }
    }
}

// Modal

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
        console.log(modals);
      closeModal(modal);
    })
})
// Sidebar modal
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

  /*class Todo{
    constructor(title,description,dueDate,priority){   
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

}

const addTaskBtn = document.querySelector('.addTask'); 
addTaskBtn.addEventListener('click', () => {

    const makeTodo = document.querySelector('.addBtn'); 
    makeTodo.addEventListener('click', () => {
    
    
        const title = document.getElementById('title').value; 
        const description = document.getElementById('description').value;
        const date = document.getElementById('date').value;             
       
        makeTodoo(title,description,date,displayRadioValue()); 
    })
})

function  makeTodoo(title,description,date,priority){
    const todo = new Todo(title,description,date,priority);
    console.log(todo);

}*/

/*function clearForm(){
    let title = document.getElementById('title').value = '';
    let author = document.getElementById('author').value = '';
    let pages = document.getElementById('pages').value = '';
}*/

/*function displayRadioValue() {
    const ele = document.getElementsByName('ticket_type');
    let priority;

    for(let i = 0; i < ele.length; i++) {
        if(ele[i].checked){
        priority = ele[i].value;
        }
    }
    return priority;
}*/