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
    addTask.setAttribute('data-modal-target','#modal'); 
    inbox.appendChild(addTask).className = 'addTask';
}

function todayTodo(){
    const inbox = document.querySelector('.inbox');

    const todayTodoTitle = document.createElement('div');
    todayTodoTitle.textContent = 'Today';
    inbox.appendChild(todayTodoTitle).className = 'todayTodoTitle';

    const listObj = document.createElement('div');
    inbox.appendChild(listObj).className = 'listObj';

}

function weekTodo(){
    const inbox = document.querySelector('.inbox');

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
/* harmony export */   "modal": () => (/* binding */ modal),
/* harmony export */   "renderLocalStorage": () => (/* binding */ renderLocalStorage)
/* harmony export */ });
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
/* harmony export */   "pjRender": () => (/* binding */ pjRender),
/* harmony export */   "sidebar": () => (/* binding */ sidebar)
/* harmony export */ });
function sidebar(){
    const sidebar = document.querySelector('.sidebar'); // from page.js

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
    addProject.setAttribute('data-modal-target-project','#sidebarModal'); 
    sidebar.appendChild(addProject).className = 'addProject';

    sidebarModal(); 
    function sidebarModal(){
        const sidebarModal = document.createElement('form');
        sidebarModal.setAttribute("method", "post");
        sidebarModal.setAttribute("action", "");
        sidebarModal.setAttribute("id","sidebarModal"); 
        sidebar.appendChild(sidebarModal);

        const pjTitle = document.createElement('input');
        pjTitle.setAttribute("type", "text");
        pjTitle.setAttribute("name", "title");
        pjTitle.setAttribute("placeholder", "Title");
        pjTitle.setAttribute("id","pjTitle");
        sidebarModal.appendChild(pjTitle);

        const addBtnSidebarModal = document.createElement('button'); 
        addBtnSidebarModal.setAttribute('type','button');
        addBtnSidebarModal.textContent = 'Add';
        sidebarModal.appendChild(addBtnSidebarModal).className = 'addBtnSidebarModal';

        const cancelProject = document.createElement('button');
        cancelProject.setAttribute('data-close-button-project','#sidebarModal'); 
        cancelProject.setAttribute('type','button');
        cancelProject.textContent = 'Cancel';
        sidebarModal.appendChild(cancelProject).className = 'cancelProject';

        addBtnSidebarModal.addEventListener('click', () =>{
            makeProject();
        })
    }

    function makeProject(){
        const listProjects = document.querySelector('.listProjects')
        let title = document.getElementById('pjTitle').value;
        
        const actualProject = document.createElement('button');
        listProjects.appendChild(actualProject).className = 'actualProject';
    
        const titleProject = document.createElement('div');
        titleProject.textContent = title;
        actualProject.appendChild(titleProject);
    
        const rmvProject = document.createElement('button');
        rmvProject.textContent = 'X';
        actualProject.appendChild(rmvProject).className = 'rmvProject';
    
        for ( let i = 0 ; i < listProjects.children.length ; i++){
            actualProject.setAttribute('data-pj-index','project_'+i); // vulnerability- might overwrite existing localstorage items 
        }
        
        projectLocalStorage();
        function projectLocalStorage(){
            let key;
         
            let title_serialized = JSON.stringify(title);
    
            for ( let i = 0 ; i < listProjects.children.length ; i++){
                key = 'project_'+i; // vulnerability 
            }
    
            localStorage.setItem(key,title_serialized); 
        }
    }
}

function pjRender(projectTitle){
    const inbox = document.querySelector('.inbox');

    const pjTitle = document.createElement('div');
    pjTitle.textContent = projectTitle;
    inbox.appendChild(pjTitle).className = 'pjTitle';

    /*const listObj = document.createElement('div');
    inbox.appendChild(listObj).className = 'listObj';*/
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


  
  
                               
(0,_page_js__WEBPACK_IMPORTED_MODULE_0__.pageLayout)();           
(0,_inbox_js__WEBPACK_IMPORTED_MODULE_1__.inbox)();                
(0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.modal)();                // functionality/arrangement of tasks 
(0,_side_bar_js__WEBPACK_IMPORTED_MODULE_3__.sidebar)();
(0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.renderLocalStorage)();

// Webpack / page changing logic 

const inboxBtn = document.querySelector('.inboxBtn'); 
inboxBtn.addEventListener('click', () => {
    emptyMain(main);
    (0,_inbox_js__WEBPACK_IMPORTED_MODULE_1__.inbox)();
    inboxModal(); 
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

function projectsRender(event){
    if ( event.target.className === "actualProject"){
        emptyMain(main);
        const index = event.target.getAttribute('data-pj-index');
        const project = document.querySelectorAll('[data-pj-index]')[index];
        const projectTitle = project.textContent.slice(0,-1);  
        
        (0,_side_bar_js__WEBPACK_IMPORTED_MODULE_3__.pjRender)(projectTitle);
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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQSxtREFBbUQ7O0FBRW5EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRXdDOzs7Ozs7Ozs7Ozs7Ozs7O0FDekN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw4QkFBOEI7QUFDcEQ7QUFDQSxzREFBc0Q7QUFDdEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0JBQWdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLDJCQUEyQjtBQUNqRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5TEE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFc0I7Ozs7Ozs7Ozs7Ozs7OztBQ3hCdEI7QUFDQSx3REFBd0Q7O0FBRXhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RCxzRUFBc0U7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixtQ0FBbUM7QUFDakUsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7Ozs7Ozs7O1VDckdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOdUM7QUFDa0I7QUFDRDtBQUNMO0FBQ25EO0FBQ0Esb0RBQVU7QUFDVixnREFBSztBQUNMLGdEQUFLLG1CQUFtQjtBQUN4QixxREFBTztBQUNQLDZEQUFrQjs7QUFFbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnREFBSztBQUNUO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFTO0FBQ2IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1EQUFRO0FBQ1osQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQVE7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNkJBQTZCO0FBQ25ELHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtEQUFrRDs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvaW5ib3guanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL21vZGFsLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9wYWdlLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9zaWRlLWJhci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW5ib3ggLSBtYWluL21pZGRsZSBjb250ZW50XG5cbmZ1bmN0aW9uIGluYm94KCl7XG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gnKTsvLyBmcm9tIHBhZ2UuanNcblxuICAgIGNvbnN0IGluYm94VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmJveFRpdGxlLnRleHRDb250ZW50ID0gJ0luYm94JztcbiAgICBpbmJveC5hcHBlbmRDaGlsZChpbmJveFRpdGxlKS5jbGFzc05hbWUgPSAnaW5ib3hUaXRsZSc7XG5cbiAgICBjb25zdCBsaXN0T2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5ib3guYXBwZW5kQ2hpbGQobGlzdE9iaikuY2xhc3NOYW1lID0gJ2xpc3RPYmonO1xuXG4gICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyBcbiAgICBhZGRUYXNrLnRleHRDb250ZW50ID0gJysgQWRkIFRhc2snO1xuICAgIGFkZFRhc2suc2V0QXR0cmlidXRlKCdkYXRhLW1vZGFsLXRhcmdldCcsJyNtb2RhbCcpOyBcbiAgICBpbmJveC5hcHBlbmRDaGlsZChhZGRUYXNrKS5jbGFzc05hbWUgPSAnYWRkVGFzayc7XG59XG5cbmZ1bmN0aW9uIHRvZGF5VG9kbygpe1xuICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94Jyk7XG5cbiAgICBjb25zdCB0b2RheVRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZGF5VG9kb1RpdGxlLnRleHRDb250ZW50ID0gJ1RvZGF5JztcbiAgICBpbmJveC5hcHBlbmRDaGlsZCh0b2RheVRvZG9UaXRsZSkuY2xhc3NOYW1lID0gJ3RvZGF5VG9kb1RpdGxlJztcblxuICAgIGNvbnN0IGxpc3RPYmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmJveC5hcHBlbmRDaGlsZChsaXN0T2JqKS5jbGFzc05hbWUgPSAnbGlzdE9iaic7XG5cbn1cblxuZnVuY3Rpb24gd2Vla1RvZG8oKXtcbiAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveCcpO1xuXG4gICAgY29uc3Qgd2Vla1RvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdlZWtUb2RvVGl0bGUudGV4dENvbnRlbnQgPSAnVGhpcyB3ZWVrJztcbiAgICBpbmJveC5hcHBlbmRDaGlsZCh3ZWVrVG9kb1RpdGxlKS5jbGFzc05hbWUgPSAnd2Vla1RvZG9UaXRsZSc7XG5cbiAgICBjb25zdCBsaXN0T2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5ib3guYXBwZW5kQ2hpbGQobGlzdE9iaikuY2xhc3NOYW1lID0gJ2xpc3RPYmonO1xufVxuXG5leHBvcnQgeyBpbmJveCAsIHRvZGF5VG9kbyAsIHdlZWtUb2RvIH07XG4iLCJmdW5jdGlvbiBtb2RhbCgpe1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXJlbnQnKTsgXG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIFwicG9zdFwiKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZShcImFjdGlvblwiLCBcIlwiKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsXCJtb2RhbFwiKTsgXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZVwiKTtcbiAgICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUaXRsZVwiKTtcbiAgICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIixcInRpdGxlXCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcblxuICAgIGNvbnN0IHRvZG9EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvRGVzYy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICB0b2RvRGVzYy5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gICAgdG9kb0Rlc2Muc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJEZXNjcmlwdGlvblwiKTtcbiAgICB0b2RvRGVzYy5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiZGVzY3JpcHRpb25cIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0b2RvRGVzYyk7XG5cbiAgICBjb25zdCB0b2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0RhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gICAgdG9kb0RhdGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRhdGVcIik7XG4gICAgdG9kb0RhdGUuc2V0QXR0cmlidXRlKFwiaWRcIixcImRhdGVcIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0b2RvRGF0ZSk7XG5cbiAgICBjb25zdCB0b2RvSW1wb3J0YW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0ltcG9ydGFuY2Uuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuICAgIHRvZG9JbXBvcnRhbmNlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aWNrZXRfdHlwZVwiKTtcbiAgICB0b2RvSW1wb3J0YW5jZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiaW1wb3J0YW50XCIpO1xuICAgIHRvZG9JbXBvcnRhbmNlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCdJbXBvcnRhbnQnKTtcbiAgICBcbiAgICBjb25zdCBpbXBvcnRhbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGltcG9ydGFudC50ZXh0Q29udGVudCA9ICdJbXBvcnRhbnQnO1xuICAgIGltcG9ydGFudC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcImltcG9ydGFudFwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRvZG9JbXBvcnRhbmNlKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGltcG9ydGFudCk7XG5cbiAgICBjb25zdCB0b2RvSW1wb3J0YW5jZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9JbXBvcnRhbmNlMi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG4gICAgdG9kb0ltcG9ydGFuY2UyLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aWNrZXRfdHlwZVwiKTtcbiAgICB0b2RvSW1wb3J0YW5jZTIuc2V0QXR0cmlidXRlKFwiaWRcIixcImxlc3NJbXBvcnRhbnRcIilcbiAgICB0b2RvSW1wb3J0YW5jZTIuc2V0QXR0cmlidXRlKCdjaGVja2VkJywndHJ1ZScpO1xuICAgIHRvZG9JbXBvcnRhbmNlMi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnTm90IGltcG9ydGFudCcpO1xuXG4gICAgY29uc3QgbGVzc0ltcG9yYW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsZXNzSW1wb3JhbnQudGV4dENvbnRlbnQgPSAnTm90IGltcG9ydGFudCc7XG4gICAgbGVzc0ltcG9yYW50LnNldEF0dHJpYnV0ZShcImZvclwiLFwibGVzc0ltcG9ydGFudFwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRvZG9JbXBvcnRhbmNlMik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChsZXNzSW1wb3JhbnQpO1xuXG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9ICdBZGQnO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYWRkQnRuKS5jbGFzc05hbWUgPSAnYWRkQnRuJztcblxuICAgIGNvbnN0IHJtdkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJtdkJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xvc2UtYnV0dG9uJywnI21vZGFsJyk7IFxuICAgIHJtdkJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcbiAgICBybXZCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICBmb3JtLmFwcGVuZENoaWxkKHJtdkJ0bikuY2xhc3NOYW1lID0gJ3JtdkJ0bic7XG5cbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3ZlcmxheS5zZXRBdHRyaWJ1dGUoJ2lkJywnb3ZlcmxheScpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChvdmVybGF5KTtcblxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgICAgICBtYWtlT2JqRE9NKCk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gbWFrZU9iakRPTSgpeyAgXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWU7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7IFxuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZTtcblxuICAgIGNvbnN0IGxpc3RPYmogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdE9iaicpOyBcbiAgICBcbiAgICBjb25zdCBvYmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgICBcbiAgICBsaXN0T2JqLmFwcGVuZENoaWxkKG9iaikuY2xhc3NOYW1lID0gJ29iaic7IFxuICAgIFxuICAgIGNvbnN0IG9ialRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG9ialRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgb2JqLmFwcGVuZENoaWxkKG9ialRpdGxlKS5jbGFzc05hbWUgPSAnb2JqVGl0bGUnO1xuXG4gICAgY29uc3Qgb2JqRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBvYmpEZXNjLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gICAgb2JqLmFwcGVuZENoaWxkKG9iakRlc2MpLmNsYXNzTmFtZSA9ICdvYmpEZXNjJztcblxuICAgIGNvbnN0IG9iakRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvYmpEYXRlLnRleHRDb250ZW50ID0gZGF0ZTtcbiAgICBvYmouYXBwZW5kQ2hpbGQob2JqRGF0ZSkuY2xhc3NOYW1lID0gJ29iakRhdGUnO1xuXG4gICAgY29uc3Qgcm12T2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcm12T2JqLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuICAgIHJtdk9iai50ZXh0Q29udGVudCA9ICdYJztcbiAgICBvYmouYXBwZW5kQ2hpbGQocm12T2JqKS5jbGFzc05hbWUgPSAncm12T2JqJzsgXG5cbiAgICBpZiAoZGlzcGxheVJhZGlvVmFsdWUoKSA9PT0gJ0ltcG9ydGFudCcpe1xuICAgICAgICBjb25zdCBpbXBvcnRhbmNlT2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGltcG9ydGFuY2VPYmoudGV4dENvbnRlbnQgPSBkaXNwbGF5UmFkaW9WYWx1ZSgpO1xuICAgICAgICBvYmouYXBwZW5kQ2hpbGQoaW1wb3J0YW5jZU9iaikuY2xhc3NOYW1lID0gJ2ltcG9ydGFuY2VPYmonO1xuICAgIH1cbiAgICBlbHNlIGlmKGRpc3BsYXlSYWRpb1ZhbHVlKCkgPT09ICdOb3QgaW1wb3J0YW50Jyl7XG4gICAgICAgIGNvbnN0IGxlc3NJbXBvcmFudE9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXNzSW1wb3JhbnRPYmoudGV4dENvbnRlbnQgPSBkaXNwbGF5UmFkaW9WYWx1ZSgpO1xuICAgICAgICBvYmouYXBwZW5kQ2hpbGQobGVzc0ltcG9yYW50T2JqKS5jbGFzc05hbWUgPSAnbGVzc0ltcG9ydGFudE9iaic7XG4gICAgfVxuICAgIFxuICAgIGZvciAoIGxldCBpID0gMCA7IGkgPCBsaXN0T2JqLmNoaWxkcmVuLmxlbmd0aCA7IGkrKyl7IFxuICAgICAgIFxuICAgICAgICBvYmouc2V0QXR0cmlidXRlKCdkYXRhLW9iai1pbmRleCcsJ3Rhc2tfJytpKTsgLy8gdnVsbmVyYWJpbGl0eS0gbWlnaHQgb3ZlcndyaXRlIGV4aXN0aW5nIGxvY2Fsc3RvcmFnZSBpdGVtcyBcbiAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVJhZGlvVmFsdWUoKXtcbiAgICAgICAgY29uc3QgZWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3RpY2tldF90eXBlJyk7XG4gICAgICAgIGxldCBwcmlvcml0eTtcbiAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGUubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYgKGVsZVtpXS5jaGVja2VkKXtcbiAgICAgICAgICAgIHByaW9yaXR5ID0gZWxlW2ldLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcmlvcml0eTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckxvY2FsU3RvcmFnZSgpe1xuICAgIGZvciAoIGxldCBpID0gMCA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoICA7IGkrKyApe1xuICAgICAgICBsZXQga2V5ID0gIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuc29ydCgpW2ldO1xuXG4gICAgICAgIGlmIChrZXkuaW5jbHVkZXMoJ3Rhc2snKSl7XG4gICAgICAgICAgICBsZXQgdG9kb19kZXNlcmlhbGl6ZWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGxpc3RPYmogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdE9iaicpOyBcblxuICAgICAgICAgICAgY29uc3Qgb2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7ICAgXG4gICAgICAgICAgICBvYmouc2V0QXR0cmlidXRlKCdkYXRhLW9iai1pbmRleCcsa2V5KTsgICAgXG4gICAgICAgICAgICBsaXN0T2JqLmFwcGVuZENoaWxkKG9iaikuY2xhc3NOYW1lID0gJ29iaic7XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3Qgb2JqVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBvYmpUaXRsZS50ZXh0Q29udGVudCA9IHRvZG9fZGVzZXJpYWxpemVkLnRpdGxlO1xuICAgICAgICAgICAgb2JqLmFwcGVuZENoaWxkKG9ialRpdGxlKS5jbGFzc05hbWUgPSAnb2JqVGl0bGUnO1xuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IG9iakRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBvYmpEZXNjLnRleHRDb250ZW50ID0gdG9kb19kZXNlcmlhbGl6ZWQuZGVzY3JpcHRpb247XG4gICAgICAgICAgICBvYmouYXBwZW5kQ2hpbGQob2JqRGVzYykuY2xhc3NOYW1lID0gJ29iakRlc2MnO1xuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IG9iakRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG9iakRhdGUudGV4dENvbnRlbnQgPSB0b2RvX2Rlc2VyaWFsaXplZC5kYXRlO1xuICAgICAgICAgICAgb2JqLmFwcGVuZENoaWxkKG9iakRhdGUpLmNsYXNzTmFtZSA9ICdvYmpEYXRlJztcbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBybXZPYmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHJtdk9iai5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcbiAgICAgICAgICAgIHJtdk9iai50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgIG9iai5hcHBlbmRDaGlsZChybXZPYmopLmNsYXNzTmFtZSA9ICdybXZPYmonOyBcbiAgICAgICAgXG4gICAgICAgICAgICBpZiAodG9kb19kZXNlcmlhbGl6ZWQucHJpb3JpdHkgPT09ICdJbXBvcnRhbnQnKXtcbiAgICAgICAgICAgICAgICBjb25zdCBpbXBvcnRhbmNlT2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgaW1wb3J0YW5jZU9iai50ZXh0Q29udGVudCA9IHRvZG9fZGVzZXJpYWxpemVkLnByaW9yaXR5O1xuICAgICAgICAgICAgICAgIG9iai5hcHBlbmRDaGlsZChpbXBvcnRhbmNlT2JqKS5jbGFzc05hbWUgPSAnaW1wb3J0YW5jZU9iaic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHRvZG9fZGVzZXJpYWxpemVkLnByaW9yaXR5ID09PSAnTm90IGltcG9ydGFudCcpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGxlc3NJbXBvcmFudE9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGxlc3NJbXBvcmFudE9iai50ZXh0Q29udGVudCA9IHRvZG9fZGVzZXJpYWxpemVkLnByaW9yaXR5O1xuICAgICAgICAgICAgICAgIG9iai5hcHBlbmRDaGlsZChsZXNzSW1wb3JhbnRPYmopLmNsYXNzTmFtZSA9ICdsZXNzSW1wb3J0YW50T2JqJztcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBpZiAoa2V5LmluY2x1ZGVzKCdwcm9qZWN0Jykpe1xuICAgICAgICAgICAgbGV0IHByb2plY3RfZGVzZXJpYWxpemVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcblxuICAgICAgICAgICAgY29uc3QgbGlzdFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RQcm9qZWN0cycpXG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgYWN0dWFsUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgYWN0dWFsUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGotaW5kZXgnLGtleSk7XG4gICAgICAgICAgICBsaXN0UHJvamVjdHMuYXBwZW5kQ2hpbGQoYWN0dWFsUHJvamVjdCkuY2xhc3NOYW1lID0gJ2FjdHVhbFByb2plY3QnO1xuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGl0bGVQcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdF9kZXNlcmlhbGl6ZWQ7XG4gICAgICAgICAgICBhY3R1YWxQcm9qZWN0LmFwcGVuZENoaWxkKHRpdGxlUHJvamVjdCk7XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3Qgcm12UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgcm12UHJvamVjdC50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgIGFjdHVhbFByb2plY3QuYXBwZW5kQ2hpbGQocm12UHJvamVjdCkuY2xhc3NOYW1lID0gJ3JtdlByb2plY3QnOyAgXG4gICAgICAgIH1cbiAgICB9ICBcbn1cblxuXG5cbmV4cG9ydCB7IG1vZGFsICwgcmVuZGVyTG9jYWxTdG9yYWdlfTsiLCIvLyBpbml0aWFsIHBhZ2UgbGF5b3V0IFxuXG5mdW5jdGlvbiBwYWdlTGF5b3V0KCl7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcmVudCcpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ1RvLWRvIExpc3QnO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChoZWFkZXIpLmNsYXNzTmFtZSA9ICdoZWFkZXInO1xuXG4gICAgY29uc3QgdGljayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHRpY2suc3JjID0gJ3BpY3R1cmVzL2NoZWNrLnBuZyc7XG4gICAgdGljay5hbHQgPSAnY2hlY2stcGljJztcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGljayk7XG5cbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHNpZGViYXIpLmNsYXNzTmFtZSA9ICdzaWRlYmFyJztcblxuICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGluYm94KS5jbGFzc05hbWUgPSAnaW5ib3gnO1xuXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGZvb3RlcikuY2xhc3NOYW1lID0gJ2Zvb3Rlcic7XG59XG5cbmV4cG9ydCB7IHBhZ2VMYXlvdXQgfTsgIiwiZnVuY3Rpb24gc2lkZWJhcigpe1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpOyAvLyBmcm9tIHBhZ2UuanNcblxuICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaW5ib3gudGV4dENvbnRlbnQgPSBcIkluYm94XCI7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChpbmJveCkuY2xhc3NOYW1lID0gJ2luYm94QnRuJztcblxuICAgIGNvbnN0IHRvZGF5VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRvZGF5VG9kby50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHRvZGF5VG9kbykuY2xhc3NOYW1lID0gJ3RvZGF5VG9kbyc7XG5cbiAgICBjb25zdCB3ZWVrVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHdlZWtUb2RvLnRleHRDb250ZW50ID0gJ1RoaXMgV2Vlayc7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZCh3ZWVrVG9kbykuY2xhc3NOYW1lID0gJ3dlZWtUb2RvJztcblxuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdHMudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHMpLmNsYXNzTmFtZSA9ICdwcm9qZWN0cyc7XG5cbiAgICBjb25zdCBsaXN0UHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGxpc3RQcm9qZWN0cykuY2xhc3NOYW1lID0gJ2xpc3RQcm9qZWN0cyc7XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IFxuICAgIGFkZFByb2plY3QudGV4dENvbnRlbnQgPSAnKyBBZGQgUHJvamVjdCc7XG4gICAgYWRkUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kYWwtdGFyZ2V0LXByb2plY3QnLCcjc2lkZWJhck1vZGFsJyk7IFxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCkuY2xhc3NOYW1lID0gJ2FkZFByb2plY3QnO1xuXG4gICAgc2lkZWJhck1vZGFsKCk7IFxuICAgIGZ1bmN0aW9uIHNpZGViYXJNb2RhbCgpe1xuICAgICAgICBjb25zdCBzaWRlYmFyTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIHNpZGViYXJNb2RhbC5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgXCJwb3N0XCIpO1xuICAgICAgICBzaWRlYmFyTW9kYWwuc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwiXCIpO1xuICAgICAgICBzaWRlYmFyTW9kYWwuc2V0QXR0cmlidXRlKFwiaWRcIixcInNpZGViYXJNb2RhbFwiKTsgXG4gICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoc2lkZWJhck1vZGFsKTtcblxuICAgICAgICBjb25zdCBwalRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgcGpUaXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICAgICAgcGpUaXRsZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGl0bGVcIik7XG4gICAgICAgIHBqVGl0bGUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUaXRsZVwiKTtcbiAgICAgICAgcGpUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwicGpUaXRsZVwiKTtcbiAgICAgICAgc2lkZWJhck1vZGFsLmFwcGVuZENoaWxkKHBqVGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IGFkZEJ0blNpZGViYXJNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyBcbiAgICAgICAgYWRkQnRuU2lkZWJhck1vZGFsLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuICAgICAgICBhZGRCdG5TaWRlYmFyTW9kYWwudGV4dENvbnRlbnQgPSAnQWRkJztcbiAgICAgICAgc2lkZWJhck1vZGFsLmFwcGVuZENoaWxkKGFkZEJ0blNpZGViYXJNb2RhbCkuY2xhc3NOYW1lID0gJ2FkZEJ0blNpZGViYXJNb2RhbCc7XG5cbiAgICAgICAgY29uc3QgY2FuY2VsUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYW5jZWxQcm9qZWN0LnNldEF0dHJpYnV0ZSgnZGF0YS1jbG9zZS1idXR0b24tcHJvamVjdCcsJyNzaWRlYmFyTW9kYWwnKTsgXG4gICAgICAgIGNhbmNlbFByb2plY3Quc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG4gICAgICAgIGNhbmNlbFByb2plY3QudGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICAgICAgc2lkZWJhck1vZGFsLmFwcGVuZENoaWxkKGNhbmNlbFByb2plY3QpLmNsYXNzTmFtZSA9ICdjYW5jZWxQcm9qZWN0JztcblxuICAgICAgICBhZGRCdG5TaWRlYmFyTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgICAgIG1ha2VQcm9qZWN0KCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZVByb2plY3QoKXtcbiAgICAgICAgY29uc3QgbGlzdFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RQcm9qZWN0cycpXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwalRpdGxlJykudmFsdWU7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBhY3R1YWxQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGxpc3RQcm9qZWN0cy5hcHBlbmRDaGlsZChhY3R1YWxQcm9qZWN0KS5jbGFzc05hbWUgPSAnYWN0dWFsUHJvamVjdCc7XG4gICAgXG4gICAgICAgIGNvbnN0IHRpdGxlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZVByb2plY3QudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgYWN0dWFsUHJvamVjdC5hcHBlbmRDaGlsZCh0aXRsZVByb2plY3QpO1xuICAgIFxuICAgICAgICBjb25zdCBybXZQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHJtdlByb2plY3QudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgIGFjdHVhbFByb2plY3QuYXBwZW5kQ2hpbGQocm12UHJvamVjdCkuY2xhc3NOYW1lID0gJ3JtdlByb2plY3QnO1xuICAgIFxuICAgICAgICBmb3IgKCBsZXQgaSA9IDAgOyBpIDwgbGlzdFByb2plY3RzLmNoaWxkcmVuLmxlbmd0aCA7IGkrKyl7XG4gICAgICAgICAgICBhY3R1YWxQcm9qZWN0LnNldEF0dHJpYnV0ZSgnZGF0YS1wai1pbmRleCcsJ3Byb2plY3RfJytpKTsgLy8gdnVsbmVyYWJpbGl0eS0gbWlnaHQgb3ZlcndyaXRlIGV4aXN0aW5nIGxvY2Fsc3RvcmFnZSBpdGVtcyBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcHJvamVjdExvY2FsU3RvcmFnZSgpO1xuICAgICAgICBmdW5jdGlvbiBwcm9qZWN0TG9jYWxTdG9yYWdlKCl7XG4gICAgICAgICAgICBsZXQga2V5O1xuICAgICAgICAgXG4gICAgICAgICAgICBsZXQgdGl0bGVfc2VyaWFsaXplZCA9IEpTT04uc3RyaW5naWZ5KHRpdGxlKTtcbiAgICBcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMCA7IGkgPCBsaXN0UHJvamVjdHMuY2hpbGRyZW4ubGVuZ3RoIDsgaSsrKXtcbiAgICAgICAgICAgICAgICBrZXkgPSAncHJvamVjdF8nK2k7IC8vIHZ1bG5lcmFiaWxpdHkgXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksdGl0bGVfc2VyaWFsaXplZCk7IFxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwalJlbmRlcihwcm9qZWN0VGl0bGUpe1xuICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94Jyk7XG5cbiAgICBjb25zdCBwalRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGpUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RUaXRsZTtcbiAgICBpbmJveC5hcHBlbmRDaGlsZChwalRpdGxlKS5jbGFzc05hbWUgPSAncGpUaXRsZSc7XG5cbiAgICAvKmNvbnN0IGxpc3RPYmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmJveC5hcHBlbmRDaGlsZChsaXN0T2JqKS5jbGFzc05hbWUgPSAnbGlzdE9iaic7Ki9cbn1cblxuXG5leHBvcnQgeyBzaWRlYmFyICwgcGpSZW5kZXIgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHBhZ2VMYXlvdXQgfSBmcm9tICcuL3BhZ2UuanMnO1xuaW1wb3J0IHsgaW5ib3ggLCB0b2RheVRvZG8gLCB3ZWVrVG9kb30gZnJvbSAnLi9pbmJveC5qcyc7XG5pbXBvcnQgeyBtb2RhbCAsIHJlbmRlckxvY2FsU3RvcmFnZSB9IGZyb20gJy4vbW9kYWwuanMnOyAgXG5pbXBvcnQgeyBzaWRlYmFyICwgcGpSZW5kZXIgfSBmcm9tICcuL3NpZGUtYmFyLmpzJzsgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxucGFnZUxheW91dCgpOyAgICAgICAgICAgXG5pbmJveCgpOyAgICAgICAgICAgICAgICBcbm1vZGFsKCk7ICAgICAgICAgICAgICAgIC8vIGZ1bmN0aW9uYWxpdHkvYXJyYW5nZW1lbnQgb2YgdGFza3MgXG5zaWRlYmFyKCk7XG5yZW5kZXJMb2NhbFN0b3JhZ2UoKTtcblxuLy8gV2VicGFjayAvIHBhZ2UgY2hhbmdpbmcgbG9naWMgXG5cbmNvbnN0IGluYm94QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94QnRuJyk7IFxuaW5ib3hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZW1wdHlNYWluKG1haW4pO1xuICAgIGluYm94KCk7XG4gICAgaW5ib3hNb2RhbCgpOyBcbn0pXG5cbmNvbnN0IHRvZGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5VG9kbycpO1xudG9kYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZW1wdHlNYWluKG1haW4pO1xuICAgIHRvZGF5VG9kbygpO1xufSlcblxuY29uc3Qgd2Vla0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWVrVG9kbycpO1xud2Vla0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBlbXB0eU1haW4obWFpbik7XG4gICAgd2Vla1RvZG8oKTtcbn0pXG5cbmZ1bmN0aW9uIHByb2plY3RzUmVuZGVyKGV2ZW50KXtcbiAgICBpZiAoIGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09IFwiYWN0dWFsUHJvamVjdFwiKXtcbiAgICAgICAgZW1wdHlNYWluKG1haW4pO1xuICAgICAgICBjb25zdCBpbmRleCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGotaW5kZXgnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXBqLWluZGV4XScpW2luZGV4XTtcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvamVjdC50ZXh0Q29udGVudC5zbGljZSgwLC0xKTsgIFxuICAgICAgICBcbiAgICAgICAgcGpSZW5kZXIocHJvamVjdFRpdGxlKTtcbiAgICB9XG59XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIHByb2plY3RzUmVuZGVyKGV2ZW50KTtcbn0pO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94Jyk7IFxuXG5mdW5jdGlvbiBlbXB0eU1haW4oZWxlbWVudCkge1xuICAgIHdoaWxlKGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpe1xuICAgICAgIGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQucmVtb3ZlKCk7IFxuICAgIH1cbn1cblxuLy8gIE9iamVjdHMgZnVuY3Rpb25hbGxpdHkgXG5cbmNsYXNzIFRvZG97XG4gICAgY29uc3RydWN0b3IodGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSl7ICAgXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxufVxuXG5jb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkQnRuJyk7IFxuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTsgXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZTsgICAgICAgICAgICAgXG4gICBcbiAgICBjb25zdCB0b2RvID0gbmV3IFRvZG8odGl0bGUsZGVzY3JpcHRpb24sZGF0ZSxkaXNwbGF5UmFkaW9WYWx1ZSgpKTtcbiAgICB0b2RvTG9jYWxTdG9yYWdlKHRvZG8pO1xufSlcblxuZnVuY3Rpb24gZGlzcGxheVJhZGlvVmFsdWUoKSB7XG4gICAgY29uc3QgZWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3RpY2tldF90eXBlJyk7XG4gICAgbGV0IHByaW9yaXR5O1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGVsZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihlbGVbaV0uY2hlY2tlZCl7XG4gICAgICAgIHByaW9yaXR5ID0gZWxlW2ldLnZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcmlvcml0eTtcbn1cblxuZnVuY3Rpb24gdG9kb0xvY2FsU3RvcmFnZSh0b2RvKXsgXG4gICAgY29uc3QgbnVtT2JqID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RPYmonKTtcbiAgICBsZXQga2V5O1xuICAgIGxldCB0b2RvX3NlcmlhbGl6ZWQgPSBKU09OLnN0cmluZ2lmeSh0b2RvKTsgXG4gXG4gICAgZm9yICggbGV0IGkgPSAwIDsgaSA8IG51bU9iai5jaGlsZHJlbi5sZW5ndGggOyBpKyspe1xuICAgICAgICBrZXkgPSAndGFza18nK2k7IC8vIHZ1bG5lcmFiaWxpdHktIG1pZ2h0IG92ZXJ3cml0ZSBleGlzdGluZyBsb2NhbHN0b3JhZ2UgaXRlbXMgXG4gICAgfVxuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LHRvZG9fc2VyaWFsaXplZCk7XG4gICAgY2xlYXJGb3JtKCk7XG59XG5cblxuZnVuY3Rpb24gcmVtb3ZlT2JqKGV2ZW50KXsgXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09IFwicm12T2JqXCIpeyAvLyByZW1vdmVzIHRvZG8nc1xuICAgICAgICBjb25zdCBrZXkgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb2JqLWluZGV4Jyk7IFxuICAgICAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTsgXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7IFxuICAgIH1cblxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSBcInJtdlByb2plY3RcIil7IC8vIHJlbW92ZXMgcHJvamVjdHNcblxuICAgICAgICBjb25zdCBrZXkgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGotaW5kZXgnKTsgXG4gICAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpOyBcbiAgICB9XG59XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4geyBcbiAgICByZW1vdmVPYmooZXZlbnQpO1xufSk7XG5cbmZ1bmN0aW9uIGNsZWFyRm9ybSgpe1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlID0gJyc7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWUgPSAnJzsgXG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlID0gJyc7IFxufVxuXG4vLyBNb2RhbCAtIGZ1bmN0aW9uYWxpdHkgIFxuXG5jb25zdCBjbG9zZU1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNsb3NlLWJ1dHRvbl0nKTtcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpO1xuXG5pbmJveE1vZGFsKCk7XG5mdW5jdGlvbiBpbmJveE1vZGFsKCl7XG4gICAgY29uc3Qgb3Blbk1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZGFsLXRhcmdldF0nKTtcbiAgICBcbiAgICBvcGVuTW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbi5kYXRhc2V0Lm1vZGFsVGFyZ2V0KTtcbiAgICAgICAgICAgIG9wZW5Nb2RhbChtb2RhbCk7XG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCl7XG4gICAgICAgIGlmICggbW9kYWwgPT0gbnVsbCApIHJldHVyblxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9ICAgXG59XG5cbmNsb3NlTW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXR0b24uZGF0YXNldC5jbG9zZUJ1dHRvbik7XG4gICAgICAgIGNsb3NlTW9kYWwobW9kYWwpO1xuICAgIH0pXG59KVxuXG5mdW5jdGlvbiBjbG9zZU1vZGFsKG1vZGFsKXtcbiAgICBpZiAoIG1vZGFsID09IG51bGwgKSByZXR1cm5cbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xufVxuXG5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XG4gICAgY29uc3QgbW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybS5hY3RpdmUnKTtcbiAgICBtb2RhbHMuZm9yRWFjaChtb2RhbCA9PiB7XG4gICAgICBjbG9zZU1vZGFsKG1vZGFsKTtcbiAgICB9KVxufSlcblxuLy8gU2lkZWJhciBtb2RhbCAtIGZ1bmN0aW9uYWxpdHkgXG5jb25zdCBvcGVuU2lkZWJhckJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RhbC10YXJnZXQtcHJvamVjdF0nKTtcbmNvbnN0IGNsb3NlU2lkZWJhckJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jbG9zZS1idXR0b24tcHJvamVjdF0nKTtcblxub3BlblNpZGViYXJCdG5zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNpZGViYXJNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnV0dG9uLmRhdGFzZXQubW9kYWxUYXJnZXRQcm9qZWN0KTtcbiAgICAgICAgb3BlblNpZGViYXJNb2RhbChzaWRlYmFyTW9kYWwpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH0pXG59KVxuXG5mdW5jdGlvbiBvcGVuU2lkZWJhck1vZGFsKHNpZGViYXJNb2RhbCl7XG4gICAgaWYgKCBzaWRlYmFyTW9kYWwgPT0gbnVsbCApIHJldHVyblxuICAgIHNpZGViYXJNb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn0gICBcblxuY2xvc2VTaWRlYmFyQnRucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzaWRlYmFyTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbi5kYXRhc2V0LmNsb3NlQnV0dG9uUHJvamVjdCk7XG4gICAgICAgIGNsb3NlU2lkZWJhck1vZGFsKHNpZGViYXJNb2RhbCk7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSlcbn0pXG5cbmZ1bmN0aW9uICBjbG9zZVNpZGViYXJNb2RhbChzaWRlYmFyTW9kYWwpe1xuICAgIGlmICggc2lkZWJhck1vZGFsID09IG51bGwgKSByZXR1cm5cbiAgICBzaWRlYmFyTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59XG5cblxuXG4vKipQcmV2ZW50cyBjaHJvbWUgcG9wIHVwIHdpbmRvdyB3aGVuIHJlZnJlc2hpbmcqL1xuaWYgKCB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgKSB7XG4gICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKCBudWxsLCBudWxsLCB3aW5kb3cubG9jYXRpb24uaHJlZiApO1xufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=