/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/inbox.js":
/*!**********************!*\
  !*** ./src/inbox.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inbox": () => (/* binding */ inbox),
/* harmony export */   "todayTodo": () => (/* binding */ todayTodo),
/* harmony export */   "weekTodo": () => (/* binding */ weekTodo)
/* harmony export */ });
// inbox - main/middle content

function inbox(){
    const inbox = document.querySelector('.inbox');// from page.js

    const inboxTitle = document.createElement('div');
    inboxTitle.textContent = 'Inbox';
    inbox.appendChild(inboxTitle).className = 'inboxTitle';

    const listObj = document.createElement('div');
    inbox.appendChild(listObj).className = 'listObj';

    const addTask = document.createElement('button'); 
    addTask.textContent = '+ Add Task';
    addTask.setAttribute('data-modal-target','#modal'); // 1st button targeting modal ( the form element )
    inbox.appendChild(addTask).className = 'addTask';
}

function todayTodo(){
    const inbox = document.querySelector('.inbox');// from page.js

    const todayTodoTitle = document.createElement('div');
    todayTodoTitle.textContent = 'Today';
    inbox.appendChild(todayTodoTitle).className = 'todayTodoTitle';

    const listObj = document.createElement('div');
    inbox.appendChild(listObj).className = 'listObj';

}

function weekTodo(){
    const inbox = document.querySelector('.inbox');// from page.js

    const weekTodoTitle = document.createElement('div');
    weekTodoTitle.textContent = 'This week';
    inbox.appendChild(weekTodoTitle).className = 'weekTodoTitle';

    const listObj = document.createElement('div');
    inbox.appendChild(listObj).className = 'listObj';
}



/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeObjDOM": () => (/* binding */ makeObjDOM),
/* harmony export */   "modal": () => (/* binding */ modal)
/* harmony export */ });
function modal(){
    const parent = document.getElementById('parent'); // change parent

    const form = document.createElement('form');
    form.setAttribute("method", "post");
    form.setAttribute("action", "");
    form.setAttribute("id","modal"); // data attribute of the buttons will target this id
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
    rmvBtn.setAttribute('data-close-button','#modal'); // targets the modal ( form el )
    rmvBtn.setAttribute('type','button');
    rmvBtn.textContent = 'Cancel';
    form.appendChild(rmvBtn).className = 'rmvBtn';

    const overlay = document.createElement('div');
    overlay.setAttribute('id','overlay');
    parent.appendChild(overlay);

    /*addBtn.addEventListener('click',() => {
        makeObjDOM();
    })*/
}

function makeObjDOM(){  
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value; 
    let date = document.getElementById('date').value;
   

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
     clearModal(); // creates empty obj's but you are not using them anyway, dom is good.

     function displayRadioValue() {
        const ele = document.getElementsByName('ticket_type');
        let priority;
    
        for (let i = 0; i < ele.length; i++){
            if (ele[i].checked){
            priority = ele[i].value;
            }
        }
        return priority;
    }

    function clearModal(){ // clear radio butt too
        let title = document.getElementById('title').value = '';
        let description = document.getElementById('description').value = ''; 
        let date = document.getElementById('date').value = ''; // clears forms

    }

    }



/***/ }),

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageLayout": () => (/* binding */ pageLayout)
/* harmony export */ });
// initial page layout 

function pageLayout(){
    const parent = document.getElementById('parent');

    const header = document.createElement('div');
    header.textContent = 'To-do List';
    parent.appendChild(header).className = 'header';

    const tick = document.createElement('img');
    tick.src = 'pictures/check.png';
    tick.alt = 'check-pic';
    header.appendChild(tick);

    const sidebar = document.createElement('div');
    parent.appendChild(sidebar).className = 'sidebar';

    const inbox = document.createElement('div');
    parent.appendChild(inbox).className = 'inbox';

    const footer = document.createElement('div');
    parent.appendChild(footer).className = 'footer';
}

 

/***/ }),

/***/ "./src/side-bar.js":
/*!*************************!*\
  !*** ./src/side-bar.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeProject": () => (/* binding */ makeProject),
/* harmony export */   "sidebar": () => (/* binding */ sidebar)
/* harmony export */ });
// start with the inbox button

function sidebar(){
    const sidebar = document.querySelector('.sidebar');

    const inbox = document.createElement('button');
    inbox.textContent = "Inbox";
    sidebar.appendChild(inbox).className = 'inboxBtn';

    const todayTodo = document.createElement('button');
    todayTodo.textContent = "Today";
    sidebar.appendChild(todayTodo).className = 'todayTodo';

    const weekTodo = document.createElement('button');
    weekTodo.textContent = 'This Week';
    sidebar.appendChild(weekTodo).className = 'weekTodo';

    const projects = document.createElement('div');
    projects.textContent = 'Projects';
    sidebar.appendChild(projects).className = 'projects';

    const listProjects = document.createElement('div');
    sidebar.appendChild(listProjects).className = 'listProjects';

    const addProject = document.createElement('button'); 
    addProject.textContent = '+ Add Project';
    addProject.setAttribute('data-modal-target','#modal'); // 2nd button targeting modal ( the form element )
    sidebar.appendChild(addProject).className = 'addProject';
 
}
function makeProject(){
    const listProjects = document.querySelector('.listProjects')
    let title = document.getElementById('title').value;
    
    const actualProject = document.createElement('button');
    listProjects.appendChild(actualProject).className = 'actualProject';

    const titleProject = document.createElement('div');
    titleProject.textContent = title;
    actualProject.appendChild(titleProject);

    const rmvProject = document.createElement('button');
    rmvProject.textContent = 'X';
    actualProject.appendChild(rmvProject).className = 'rmvProject';

    for ( let i = 0 ; i < listProjects.children.length ; i++){
        actualProject.setAttribute('data-pj-index',i);
    }
    
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page.js */ "./src/page.js");
/* harmony import */ var _inbox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inbox.js */ "./src/inbox.js");
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.js */ "./src/modal.js");
/* harmony import */ var _side_bar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./side-bar.js */ "./src/side-bar.js");
// separate the application logic from the DOM stuff, do it in different modules
// Single Responsibility - a class should have one responsibility


  


                                    
(0,_page_js__WEBPACK_IMPORTED_MODULE_0__.pageLayout)(); //  side bar - wiring up everything - localstorage 
(0,_inbox_js__WEBPACK_IMPORTED_MODULE_1__.inbox)();    // might need to write the form in html if i want validations
(0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.modal)();
(0,_side_bar_js__WEBPACK_IMPORTED_MODULE_3__.sidebar)();

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
    (0,_inbox_js__WEBPACK_IMPORTED_MODULE_1__.inbox)();
})

const todayBtn = document.querySelector('.todayTodo');
todayBtn.addEventListener('click', () => {
    emptyMain(main);
    (0,_inbox_js__WEBPACK_IMPORTED_MODULE_1__.todayTodo)();
})

const weekBtn = document.querySelector('.weekTodo');
weekBtn.addEventListener('click', () => {
    emptyMain(main);
    (0,_inbox_js__WEBPACK_IMPORTED_MODULE_1__.weekTodo)();
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
            (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.makeObjDOM)();
        }
        else if (whichBtn === 'Project'){
            (0,_side_bar_js__WEBPACK_IMPORTED_MODULE_3__.makeProject)();
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvaW5ib3guanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL21vZGFsLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9wYWdlLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9zaWRlLWJhci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW5ib3ggLSBtYWluL21pZGRsZSBjb250ZW50XG5cbmZ1bmN0aW9uIGluYm94KCl7XG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gnKTsvLyBmcm9tIHBhZ2UuanNcblxuICAgIGNvbnN0IGluYm94VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmJveFRpdGxlLnRleHRDb250ZW50ID0gJ0luYm94JztcbiAgICBpbmJveC5hcHBlbmRDaGlsZChpbmJveFRpdGxlKS5jbGFzc05hbWUgPSAnaW5ib3hUaXRsZSc7XG5cbiAgICBjb25zdCBsaXN0T2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5ib3guYXBwZW5kQ2hpbGQobGlzdE9iaikuY2xhc3NOYW1lID0gJ2xpc3RPYmonO1xuXG4gICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyBcbiAgICBhZGRUYXNrLnRleHRDb250ZW50ID0gJysgQWRkIFRhc2snO1xuICAgIGFkZFRhc2suc2V0QXR0cmlidXRlKCdkYXRhLW1vZGFsLXRhcmdldCcsJyNtb2RhbCcpOyAvLyAxc3QgYnV0dG9uIHRhcmdldGluZyBtb2RhbCAoIHRoZSBmb3JtIGVsZW1lbnQgKVxuICAgIGluYm94LmFwcGVuZENoaWxkKGFkZFRhc2spLmNsYXNzTmFtZSA9ICdhZGRUYXNrJztcbn1cblxuZnVuY3Rpb24gdG9kYXlUb2RvKCl7XG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gnKTsvLyBmcm9tIHBhZ2UuanNcblxuICAgIGNvbnN0IHRvZGF5VG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kYXlUb2RvVGl0bGUudGV4dENvbnRlbnQgPSAnVG9kYXknO1xuICAgIGluYm94LmFwcGVuZENoaWxkKHRvZGF5VG9kb1RpdGxlKS5jbGFzc05hbWUgPSAndG9kYXlUb2RvVGl0bGUnO1xuXG4gICAgY29uc3QgbGlzdE9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluYm94LmFwcGVuZENoaWxkKGxpc3RPYmopLmNsYXNzTmFtZSA9ICdsaXN0T2JqJztcblxufVxuXG5mdW5jdGlvbiB3ZWVrVG9kbygpe1xuICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94Jyk7Ly8gZnJvbSBwYWdlLmpzXG5cbiAgICBjb25zdCB3ZWVrVG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2Vla1RvZG9UaXRsZS50ZXh0Q29udGVudCA9ICdUaGlzIHdlZWsnO1xuICAgIGluYm94LmFwcGVuZENoaWxkKHdlZWtUb2RvVGl0bGUpLmNsYXNzTmFtZSA9ICd3ZWVrVG9kb1RpdGxlJztcblxuICAgIGNvbnN0IGxpc3RPYmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmJveC5hcHBlbmRDaGlsZChsaXN0T2JqKS5jbGFzc05hbWUgPSAnbGlzdE9iaic7XG59XG5cbmV4cG9ydCB7IGluYm94ICwgdG9kYXlUb2RvICwgd2Vla1RvZG8gfTsiLCJmdW5jdGlvbiBtb2RhbCgpe1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXJlbnQnKTsgLy8gY2hhbmdlIHBhcmVudFxuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcInBvc3RcIik7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiwgXCJcIik7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwibW9kYWxcIik7IC8vIGRhdGEgYXR0cmlidXRlIG9mIHRoZSBidXR0b25zIHdpbGwgdGFyZ2V0IHRoaXMgaWRcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRpdGxlXCIpO1xuICAgIHRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRpdGxlXCIpO1xuICAgIHRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwidGl0bGVcIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuXG4gICAgY29uc3QgdG9kb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9EZXNjLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHRvZG9EZXNjLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgICB0b2RvRGVzYy5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkRlc2NyaXB0aW9uXCIpO1xuICAgIHRvZG9EZXNjLnNldEF0dHJpYnV0ZShcImlkXCIsXCJkZXNjcmlwdGlvblwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRvZG9EZXNjKTtcblxuICAgIGNvbnN0IHRvZG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvRGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgICB0b2RvRGF0ZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGF0ZVwiKTtcbiAgICB0b2RvRGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiZGF0ZVwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRvZG9EYXRlKTtcblxuICAgIGNvbnN0IHRvZG9JbXBvcnRhbmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvSW1wb3J0YW5jZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG4gICAgdG9kb0ltcG9ydGFuY2Uuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRpY2tldF90eXBlXCIpO1xuICAgIHRvZG9JbXBvcnRhbmNlLnNldEF0dHJpYnV0ZShcImlkXCIsXCJpbXBvcnRhbnRcIik7XG4gICAgdG9kb0ltcG9ydGFuY2Uuc2V0QXR0cmlidXRlKCd2YWx1ZScsJ0ltcG9ydGFudCcpO1xuICAgIFxuICAgIGNvbnN0IGltcG9ydGFudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgaW1wb3J0YW50LnRleHRDb250ZW50ID0gJ0ltcG9ydGFudCc7XG4gICAgaW1wb3J0YW50LnNldEF0dHJpYnV0ZShcImZvclwiLFwiaW1wb3J0YW50XCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodG9kb0ltcG9ydGFuY2UpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW1wb3J0YW50KTtcblxuICAgIGNvbnN0IHRvZG9JbXBvcnRhbmNlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0ltcG9ydGFuY2UyLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcbiAgICB0b2RvSW1wb3J0YW5jZTIuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRpY2tldF90eXBlXCIpO1xuICAgIHRvZG9JbXBvcnRhbmNlMi5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwibGVzc0ltcG9ydGFudFwiKVxuICAgIHRvZG9JbXBvcnRhbmNlMi5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCd0cnVlJyk7XG4gICAgdG9kb0ltcG9ydGFuY2UyLnNldEF0dHJpYnV0ZSgndmFsdWUnLCdOb3QgaW1wb3J0YW50Jyk7XG5cbiAgICBjb25zdCBsZXNzSW1wb3JhbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxlc3NJbXBvcmFudC50ZXh0Q29udGVudCA9ICdOb3QgaW1wb3J0YW50JztcbiAgICBsZXNzSW1wb3JhbnQuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJsZXNzSW1wb3J0YW50XCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodG9kb0ltcG9ydGFuY2UyKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxlc3NJbXBvcmFudCk7XG5cbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG4gICAgYWRkQnRuLnRleHRDb250ZW50ID0gJ0FkZCc7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChhZGRCdG4pLmNsYXNzTmFtZSA9ICdhZGRCdG4nO1xuXG4gICAgY29uc3Qgcm12QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcm12QnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1jbG9zZS1idXR0b24nLCcjbW9kYWwnKTsgLy8gdGFyZ2V0cyB0aGUgbW9kYWwgKCBmb3JtIGVsIClcbiAgICBybXZCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG4gICAgcm12QnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChybXZCdG4pLmNsYXNzTmFtZSA9ICdybXZCdG4nO1xuXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG92ZXJsYXkuc2V0QXR0cmlidXRlKCdpZCcsJ292ZXJsYXknKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG5cbiAgICAvKmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgICAgICBtYWtlT2JqRE9NKCk7XG4gICAgfSkqL1xufVxuXG5mdW5jdGlvbiBtYWtlT2JqRE9NKCl7ICBcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTsgXG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlO1xuICAgXG5cbiAgICBjb25zdCBsaXN0T2JqID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RPYmonKTsgLy8gcGxhY2UgYWxsIHRvZG9zIGluIG9uZSBlbGVtZW50LCBtb3JlIGNvbWZ5IGZvciBjc3NcbiAgICBcbiAgICBjb25zdCBvYmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgICBcbiAgICBsaXN0T2JqLmFwcGVuZENoaWxkKG9iaikuY2xhc3NOYW1lID0gJ29iaic7IFxuICAgIFxuICAgIGNvbnN0IG9ialRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG9ialRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgb2JqLmFwcGVuZENoaWxkKG9ialRpdGxlKS5jbGFzc05hbWUgPSAnb2JqVGl0bGUnO1xuXG4gICAgY29uc3Qgb2JqRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBvYmpEZXNjLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gICAgb2JqLmFwcGVuZENoaWxkKG9iakRlc2MpLmNsYXNzTmFtZSA9ICdvYmpEZXNjJztcblxuICAgIGNvbnN0IG9iakRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvYmpEYXRlLnRleHRDb250ZW50ID0gZGF0ZTtcbiAgICBvYmouYXBwZW5kQ2hpbGQob2JqRGF0ZSkuY2xhc3NOYW1lID0gJ29iakRhdGUnO1xuXG4gICAgY29uc3Qgcm12T2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcm12T2JqLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuICAgIHJtdk9iai50ZXh0Q29udGVudCA9ICdYJztcbiAgICBvYmouYXBwZW5kQ2hpbGQocm12T2JqKS5jbGFzc05hbWUgPSAncm12T2JqJzsgXG5cbiAgICBpZiAoZGlzcGxheVJhZGlvVmFsdWUoKSA9PT0gJ0ltcG9ydGFudCcpe1xuICAgICAgICBjb25zdCBpbXBvcnRhbmNlT2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGltcG9ydGFuY2VPYmoudGV4dENvbnRlbnQgPSBkaXNwbGF5UmFkaW9WYWx1ZSgpO1xuICAgICAgICBvYmouYXBwZW5kQ2hpbGQoaW1wb3J0YW5jZU9iaikuY2xhc3NOYW1lID0gJ2ltcG9ydGFuY2VPYmonO1xuICAgIH1cbiAgICBlbHNlIGlmKGRpc3BsYXlSYWRpb1ZhbHVlKCkgPT09ICdOb3QgaW1wb3J0YW50Jyl7XG4gICAgICAgIGNvbnN0IGxlc3NJbXBvcmFudE9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXNzSW1wb3JhbnRPYmoudGV4dENvbnRlbnQgPSBkaXNwbGF5UmFkaW9WYWx1ZSgpO1xuICAgICAgICBvYmouYXBwZW5kQ2hpbGQobGVzc0ltcG9yYW50T2JqKS5jbGFzc05hbWUgPSAnbGVzc0ltcG9ydGFudE9iaic7XG4gICAgfVxuXG4gICAgZm9yICggbGV0IGkgPSAwIDsgaSA8IGxpc3RPYmouY2hpbGRyZW4ubGVuZ3RoIDsgaSsrKXtcbiAgICAgICAgb2JqLnNldEF0dHJpYnV0ZSgnZGF0YS1vYmotaW5kZXgnLGkpO1xuICAgIH1cbiAgICAgY2xlYXJNb2RhbCgpOyAvLyBjcmVhdGVzIGVtcHR5IG9iaidzIGJ1dCB5b3UgYXJlIG5vdCB1c2luZyB0aGVtIGFueXdheSwgZG9tIGlzIGdvb2QuXG5cbiAgICAgZnVuY3Rpb24gZGlzcGxheVJhZGlvVmFsdWUoKSB7XG4gICAgICAgIGNvbnN0IGVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCd0aWNrZXRfdHlwZScpO1xuICAgICAgICBsZXQgcHJpb3JpdHk7XG4gICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmIChlbGVbaV0uY2hlY2tlZCl7XG4gICAgICAgICAgICBwcmlvcml0eSA9IGVsZVtpXS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJNb2RhbCgpeyAvLyBjbGVhciByYWRpbyBidXR0IHRvb1xuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZSA9ICcnO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZSA9ICcnOyBcbiAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlID0gJyc7IC8vIGNsZWFycyBmb3Jtc1xuXG4gICAgfVxuXG4gICAgfVxuXG5leHBvcnQgeyBtb2RhbCAsIG1ha2VPYmpET00gfTsiLCIvLyBpbml0aWFsIHBhZ2UgbGF5b3V0IFxuXG5mdW5jdGlvbiBwYWdlTGF5b3V0KCl7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcmVudCcpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ1RvLWRvIExpc3QnO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChoZWFkZXIpLmNsYXNzTmFtZSA9ICdoZWFkZXInO1xuXG4gICAgY29uc3QgdGljayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHRpY2suc3JjID0gJ3BpY3R1cmVzL2NoZWNrLnBuZyc7XG4gICAgdGljay5hbHQgPSAnY2hlY2stcGljJztcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGljayk7XG5cbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHNpZGViYXIpLmNsYXNzTmFtZSA9ICdzaWRlYmFyJztcblxuICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGluYm94KS5jbGFzc05hbWUgPSAnaW5ib3gnO1xuXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGZvb3RlcikuY2xhc3NOYW1lID0gJ2Zvb3Rlcic7XG59XG5cbmV4cG9ydCB7IHBhZ2VMYXlvdXQgfTsgIiwiLy8gc3RhcnQgd2l0aCB0aGUgaW5ib3ggYnV0dG9uXG5cbmZ1bmN0aW9uIHNpZGViYXIoKXtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcblxuICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaW5ib3gudGV4dENvbnRlbnQgPSBcIkluYm94XCI7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChpbmJveCkuY2xhc3NOYW1lID0gJ2luYm94QnRuJztcblxuICAgIGNvbnN0IHRvZGF5VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRvZGF5VG9kby50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHRvZGF5VG9kbykuY2xhc3NOYW1lID0gJ3RvZGF5VG9kbyc7XG5cbiAgICBjb25zdCB3ZWVrVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHdlZWtUb2RvLnRleHRDb250ZW50ID0gJ1RoaXMgV2Vlayc7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZCh3ZWVrVG9kbykuY2xhc3NOYW1lID0gJ3dlZWtUb2RvJztcblxuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdHMudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHMpLmNsYXNzTmFtZSA9ICdwcm9qZWN0cyc7XG5cbiAgICBjb25zdCBsaXN0UHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGxpc3RQcm9qZWN0cykuY2xhc3NOYW1lID0gJ2xpc3RQcm9qZWN0cyc7XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IFxuICAgIGFkZFByb2plY3QudGV4dENvbnRlbnQgPSAnKyBBZGQgUHJvamVjdCc7XG4gICAgYWRkUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kYWwtdGFyZ2V0JywnI21vZGFsJyk7IC8vIDJuZCBidXR0b24gdGFyZ2V0aW5nIG1vZGFsICggdGhlIGZvcm0gZWxlbWVudCApXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KS5jbGFzc05hbWUgPSAnYWRkUHJvamVjdCc7XG4gXG59XG5mdW5jdGlvbiBtYWtlUHJvamVjdCgpe1xuICAgIGNvbnN0IGxpc3RQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0UHJvamVjdHMnKVxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuICAgIFxuICAgIGNvbnN0IGFjdHVhbFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsaXN0UHJvamVjdHMuYXBwZW5kQ2hpbGQoYWN0dWFsUHJvamVjdCkuY2xhc3NOYW1lID0gJ2FjdHVhbFByb2plY3QnO1xuXG4gICAgY29uc3QgdGl0bGVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVQcm9qZWN0LnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgYWN0dWFsUHJvamVjdC5hcHBlbmRDaGlsZCh0aXRsZVByb2plY3QpO1xuXG4gICAgY29uc3Qgcm12UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJtdlByb2plY3QudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgYWN0dWFsUHJvamVjdC5hcHBlbmRDaGlsZChybXZQcm9qZWN0KS5jbGFzc05hbWUgPSAncm12UHJvamVjdCc7XG5cbiAgICBmb3IgKCBsZXQgaSA9IDAgOyBpIDwgbGlzdFByb2plY3RzLmNoaWxkcmVuLmxlbmd0aCA7IGkrKyl7XG4gICAgICAgIGFjdHVhbFByb2plY3Quc2V0QXR0cmlidXRlKCdkYXRhLXBqLWluZGV4JyxpKTtcbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCB7IHNpZGViYXIgLCBtYWtlUHJvamVjdCB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc2VwYXJhdGUgdGhlIGFwcGxpY2F0aW9uIGxvZ2ljIGZyb20gdGhlIERPTSBzdHVmZiwgZG8gaXQgaW4gZGlmZmVyZW50IG1vZHVsZXNcbi8vIFNpbmdsZSBSZXNwb25zaWJpbGl0eSAtIGEgY2xhc3Mgc2hvdWxkIGhhdmUgb25lIHJlc3BvbnNpYmlsaXR5XG5pbXBvcnQgeyBwYWdlTGF5b3V0IH0gZnJvbSAnLi9wYWdlLmpzJztcbmltcG9ydCB7IGluYm94ICwgdG9kYXlUb2RvICwgd2Vla1RvZG99IGZyb20gJy4vaW5ib3guanMnO1xuaW1wb3J0IHsgbW9kYWwgLCBtYWtlT2JqRE9NIH0gZnJvbSAnLi9tb2RhbC5qcyc7ICBcbmltcG9ydCB7IHNpZGViYXIgLCBtYWtlUHJvamVjdCB9IGZyb20gJy4vc2lkZS1iYXIuanMnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbnBhZ2VMYXlvdXQoKTsgLy8gIHNpZGUgYmFyIC0gd2lyaW5nIHVwIGV2ZXJ5dGhpbmcgLSBsb2NhbHN0b3JhZ2UgXG5pbmJveCgpOyAgICAvLyBtaWdodCBuZWVkIHRvIHdyaXRlIHRoZSBmb3JtIGluIGh0bWwgaWYgaSB3YW50IHZhbGlkYXRpb25zXG5tb2RhbCgpO1xuc2lkZWJhcigpO1xuXG4vKmNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRCdG4nKTtcbmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGQoKTtcbn0pXG5cbmZ1bmN0aW9uIGFkZCgpe1xuICAgIGlmICh3aGljaEJ0biA9PT0gJ1Rhc2snKXtcbiAgICAgICAgbWFrZU9iakRPTSgpO1xuICAgIH1cbiAgICBlbHNlIGlmICh3aGljaEJ0biA9PT0gJ1Byb2plY3QnKXtcbiAgICAgICAgbWFrZVByb2plY3QoKTtcbiAgICB9XG59Ki9cblxuXG5mdW5jdGlvbiBlbXB0eU1haW4oZWxlbWVudCkge1xuICAgIHdoaWxlKGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICBlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveCcpO1xuXG4vLyBkaWZmIHBhZ2VzIGxvZ2ljXG5jb25zdCBpbmJveEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveEJ0bicpO1xuaW5ib3hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZW1wdHlNYWluKG1haW4pO1xuICAgIGluYm94KCk7XG59KVxuXG5jb25zdCB0b2RheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheVRvZG8nKTtcbnRvZGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGVtcHR5TWFpbihtYWluKTtcbiAgICB0b2RheVRvZG8oKTtcbn0pXG5cbmNvbnN0IHdlZWtCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2Vla1RvZG8nKTtcbndlZWtCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZW1wdHlNYWluKG1haW4pO1xuICAgIHdlZWtUb2RvKCk7XG59KVxuXG5cbi8qY2xhc3MgVG9kb3tcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5KXsgICBcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG5cbn1cblxuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUYXNrJyk7IFxuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgIGNvbnN0IG1ha2VUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZEJ0bicpOyBcbiAgICBtYWtlVG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBcbiAgICBcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTsgXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlOyAgICAgICAgICAgICBcbiAgICAgICBcbiAgICAgICAgbWFrZVRvZG9vKHRpdGxlLGRlc2NyaXB0aW9uLGRhdGUsZGlzcGxheVJhZGlvVmFsdWUoKSk7IFxuICAgIH0pXG59KVxuXG5mdW5jdGlvbiAgbWFrZVRvZG9vKHRpdGxlLGRlc2NyaXB0aW9uLGRhdGUscHJpb3JpdHkpe1xuICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyh0aXRsZSxkZXNjcmlwdGlvbixkYXRlLHByaW9yaXR5KTtcbiAgICBjb25zb2xlLmxvZyh0b2RvKTtcblxufSovXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICByZW1vdmVUb2RvKGV2ZW50KTtcbn0pXG5cbmZ1bmN0aW9uIHJlbW92ZVRvZG8oZXZlbnQpe1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSBcInJtdk9ialwiKXtcbiAgICAgICAgY29uc3QgaW5kZXggPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb2JqLWluZGV4Jyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtb2JqLWluZGV4XScpW2luZGV4XS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJybXZQcm9qZWN0XCIpe1xuICAgICAgICBjb25zdCBpbmRleCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wai1pbmRleCcpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wai1pbmRleF0nKVtpbmRleF0ucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgbnVtT2JqID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RPYmonKTtcbiAgICBjb25zdCBudW1QaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0UHJvamVjdHMnKTtcbiAgICBcbiAgICBmb3IgKCBsZXQgaSA9IDAgOyBpIDwgbnVtT2JqLmNoaWxkcmVuLmxlbmd0aCA7IGkrKyl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW9iai1pbmRleF0nKVtpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtb2JqLWluZGV4JywgaSApOyAvL3VwZGF0ZSBkYXRhIGF0dHJcbiAgICB9XG4gICAgZm9yICggbGV0IGkgPSAwIDsgaSA8IG51bVBqLmNoaWxkcmVuLmxlbmd0aCA7IGkrKyl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXBqLWluZGV4XScpW2ldLnNldEF0dHJpYnV0ZSgnZGF0YS1wai1pbmRleCcsIGkgKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlSYWRpb1ZhbHVlKCkge1xuICAgIGNvbnN0IGVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCd0aWNrZXRfdHlwZScpO1xuICAgIGxldCBwcmlvcml0eTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBlbGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYoZWxlW2ldLmNoZWNrZWQpe1xuICAgICAgICBwcmlvcml0eSA9IGVsZVtpXS52YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJpb3JpdHk7XG59XG5cbi8qZnVuY3Rpb24gY2xlYXJGb3JtKCl7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWUgPSAnJztcbiAgICBsZXQgYXV0aG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dGhvcicpLnZhbHVlID0gJyc7XG4gICAgbGV0IHBhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2VzJykudmFsdWUgPSAnJztcbn0qL1xub3Blbk1vZGFsKCk7XG4vLyBNb2RhbFxuY29uc3Qgb3Blbk1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZGFsLXRhcmdldF0nKTtcbmNvbnN0IGNsb3NlTW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY2xvc2UtYnV0dG9uXScpO1xuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5Jyk7XG5cblxuXG5mdW5jdGlvbiBvcGVuTW9kYWwoKXsgLy8gY2hhbmdlIHRoZSBuYW1lIGw4XG4gICAgY29uc3Qgb3Blbk1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZGFsLXRhcmdldF0nKTtcbiAgICBsZXQgd2hpY2hCdG47XG4gICAgY29uc29sZS5sb2cob3Blbk1vZGFsQnV0dG9ucyk7XG5cbiAgICBvcGVuTW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGJ1dHRvbi5jbGFzc05hbWUgPT09ICdhZGRUYXNrJyApe1xuICAgICAgICAgICAgICAgIHdoaWNoQnRuID0gJ1Rhc2snO1xuICAgICAgICAgICAgICAgLyogY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbi5kYXRhc2V0Lm1vZGFsVGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBvcGVuTW9kYWwobW9kYWwpOyovXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsc2UgaWYgKGJ1dHRvbi5jbGFzc05hbWUgPT09ICdhZGRQcm9qZWN0Jyl7XG4gICAgICAgICAgICAgICAgd2hpY2hCdG4gPSAnUHJvamVjdCc7XG4gICAgICAgICAgICAgICAgLypjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnV0dG9uLmRhdGFzZXQubW9kYWxUYXJnZXRQcm9qZWN0KTtcbiAgICAgICAgICAgICAgICBvcGVuTW9kYWwobW9kYWwpOyovXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXR0b24uZGF0YXNldC5tb2RhbFRhcmdldCk7XG4gICAgICAgICAgICAgICAgb3Blbk1vZGFsKG1vZGFsKTtcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsKXtcbiAgICAgICAgaWYgKCBtb2RhbCA9PSBudWxsICkgcmV0dXJuXG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cblxuXG5cbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkQnRuJyk7XG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBhZGQoKTtcbiAgICB9KVxuICAgIFxuICAgIGZ1bmN0aW9uIGFkZCgpe1xuICAgICAgICBjb25zb2xlLmxvZyh3aGljaEJ0bik7XG4gICAgICAgIGlmICh3aGljaEJ0biA9PT0gJ1Rhc2snKXtcbiAgICAgICAgICAgIG1ha2VPYmpET00oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh3aGljaEJ0biA9PT0gJ1Byb2plY3QnKXtcbiAgICAgICAgICAgIG1ha2VQcm9qZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vKm9wZW5Nb2RhbEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbi5kYXRhc2V0Lm1vZGFsVGFyZ2V0KTtcbiAgICAgICAgb3Blbk1vZGFsKG1vZGFsKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3VscWxxJyk7XG4gICAgfSlcbn0pXG5cbmZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCl7XG4gICAgaWYgKCBtb2RhbCA9PSBudWxsICkgcmV0dXJuXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn0qL1xuXG5jbG9zZU1vZGFsQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnV0dG9uLmRhdGFzZXQuY2xvc2VCdXR0b24pO1xuICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKTtcbiAgICB9KVxufSlcblxuZnVuY3Rpb24gY2xvc2VNb2RhbChtb2RhbCl7XG4gICAgaWYgKCBtb2RhbCA9PSBudWxsICkgcmV0dXJuXG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbn1cblxub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgIGNvbnN0IG1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0uYWN0aXZlJyk7XG4gICAgbW9kYWxzLmZvckVhY2gobW9kYWwgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhtb2RhbHMpO1xuICAgICAgY2xvc2VNb2RhbChtb2RhbCk7XG4gICAgfSlcbn0pXG5cblxuLyoqUHJldmVudHMgY2hyb21lIHBvcCB1cCB3aW5kb3cgd2hlbiByZWZyZXNoaW5nKi9cbmlmICggd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlICkge1xuICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSggbnVsbCwgbnVsbCwgd2luZG93LmxvY2F0aW9uLmhyZWYgKTtcbiAgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==