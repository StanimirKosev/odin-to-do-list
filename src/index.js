// separate the application logic from the DOM stuff, do it in different modules
// Single Responsibility - a class should have one responsibility
import { pageLayout } from './page.js';
import { inbox , todayTodo , weekTodo} from './inbox.js';
import { modal , makeObjDOM } from './modal.js';  
import { sidebar , makeProject } from './side-bar.js';

                                    
pageLayout(); //  side bar - wiring up everything - localstorage 
inbox();    // might need to write the form in html if i want validations
modal();
sidebar();

/*const addBtn = document.querySelector('.addBtn');
addBtn.addEventListener('click', () => {
    add();
})

function add(){
    if (whichBtn === 'Task'){
        makeObjDOM();
    }
    else if (whichBtn === 'Project'){
        makeProject();
    }
}*/


function emptyMain(element) {
    while(element.firstElementChild) {
       element.firstElementChild.remove();
    }
  }
const main = document.querySelector('.inbox');

// diff pages logic
const inboxBtn = document.querySelector('.inboxBtn');
inboxBtn.addEventListener('click', () => {
    emptyMain(main);
    inbox();
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


document.addEventListener('click', (event) => {
    removeTodo(event);
})

function removeTodo(event){
    if (event.target.className === "rmvObj"){
        const index = event.target.parentElement.getAttribute('data-obj-index');
        console.log(index);
        document.querySelectorAll('[data-obj-index]')[index].remove();
    }

    if (event.target.className === "rmvProject"){
        const index = event.target.parentElement.getAttribute('data-pj-index');
        document.querySelectorAll('[data-pj-index]')[index].remove();
    }

    const numObj = document.querySelector('.listObj');
    const numPj = document.querySelector('.listProjects');
    
    for ( let i = 0 ; i < numObj.children.length ; i++){
        document.querySelectorAll('[data-obj-index]')[i].setAttribute('data-obj-index', i ); //update data attr
    }
    for ( let i = 0 ; i < numPj.children.length ; i++){
        document.querySelectorAll('[data-pj-index]')[i].setAttribute('data-pj-index', i );
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

/*function clearForm(){
    let title = document.getElementById('title').value = '';
    let author = document.getElementById('author').value = '';
    let pages = document.getElementById('pages').value = '';
}*/
openModal();
// Modal
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');



function openModal(){ // change the name l8
    const openModalButtons = document.querySelectorAll('[data-modal-target]');
    let whichBtn;
    console.log(openModalButtons);

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.className === 'addTask' ){
                whichBtn = 'Task';
               /* const modal = document.querySelector(button.dataset.modalTarget);
                openModal(modal);*/
            }

            else if (button.className === 'addProject'){
                whichBtn = 'Project';
                /*const modal = document.querySelector(button.dataset.modalTargetProject);
                openModal(modal);*/
            }
              const modal = document.querySelector(button.dataset.modalTarget);
                openModal(modal);
        })
    })

    function openModal(modal){
        if ( modal == null ) return
        modal.classList.add('active');
        overlay.classList.add('active');
    }



    const addBtn = document.querySelector('.addBtn');
    addBtn.addEventListener('click', () => {
        add();
    })
    
    function add(){
        console.log(whichBtn);
        if (whichBtn === 'Task'){
            makeObjDOM();
        }
        else if (whichBtn === 'Project'){
            makeProject();
        }
    }
}
/*openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
        console.log('ulqlq');
    })
})

function openModal(modal){
    if ( modal == null ) return
    modal.classList.add('active');
    overlay.classList.add('active');
}*/

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


/**Prevents chrome pop up window when refreshing*/
if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
  }