// separate the application logic from the DOM stuff, do it in different modules
// Single Responsibility - a class should have one responsibility
import { pageLayout } from './page.js';
import { inbox } from './inbox.js';
import { modal } from './modal.js';

pageLayout();
inbox();
modal();


class Todo{
    constructor(title,description,dueDate,priority/*,checkList*/){   
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
       /* this.checkList = checkList;*/
    }
}


const addTaskBtn = document.querySelector('.addTask'); 
addTaskBtn.addEventListener('click', () => {

    const makeTodo = document.querySelector('.addBtn'); 
    makeTodo.addEventListener('click', () => {
    
        const title = document.getElementById('title').value; // 1. instead of taking the values like this, you might take em from the actual object
        const description = document.getElementById('description').value; // to use these here only for the creation of the obj
        const date = document.getElementById('date').value;             // and then just have a function in inbox.js which creates dom but gets the values
        const priority = document.getElementById('lessImportant').value; // from here? idk. , the actual methods need to be the removing/changig status etc
        makeTodoo(title,description,date,priority); // the things that the todos are going to do NEED TO BE HERE
    })
})

function  makeTodoo(title,description,date,priority){
    const todo = new Todo(title,description,date,priority);
    console.log(todo); 
}


// Modal
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

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