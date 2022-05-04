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
/* harmony export */   "modal": () => (/* binding */ modal)
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

            obj.setAttribute('data-obj-index',i); // kato ne e ednakuv data attr ne mi overwritva a mi pishe vste.
        }
         /*clearModal(); */ // creates empty obj's but you are not using them anyway, dom is good.
    
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
    
        /*function clearModal(){ // clear radio butt too
            let title = document.getElementById('title').value = '';
            let description = document.getElementById('description').value = ''; 
            let date = document.getElementById('date').value = ''; // clears forms
    
        }*/
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
            actualProject.setAttribute('data-pj-index',i);
        }
        
        projectLocalStorage();
        function projectLocalStorage(){
            let key;
         
            let title_serialized = JSON.stringify(title);
    
            for ( let i = 0 ; i < listProjects.children.length ; i++){
                key = 'project_'+i;
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
(0,_inbox_js__WEBPACK_IMPORTED_MODULE_1__.inbox)();                // dom stuff for tasks 
(0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.modal)();                // functionality/arrangement of tasks 
(0,_side_bar_js__WEBPACK_IMPORTED_MODULE_3__.sidebar)();

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

const main = document.querySelector('.inbox'); // the element changed based on whats clicked 

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
        key = 'task_'+i;
    }

    localStorage.setItem(key,todo_serialized);
    //let todo_deserialized = JSON.parse(localStorage.getItem(num));
}


function removeObj(event){ 
    if (event.target.className === "rmvObj"){ // removes todo's
        const index = event.target.parentElement.getAttribute('data-obj-index'); // index of data attr corresponds to localstorage key
        event.target.parentElement.remove(); 
        localStorage.removeItem('task_'+index); 
    }

    if (event.target.className === "rmvProject"){ // removes projects

        const index = event.target.parentElement.getAttribute('data-pj-index'); 
        event.target.parentElement.remove();
        localStorage.removeItem('project_'+index); 
    }
}
document.addEventListener('click', (event) => { 
    removeObj(event);
});

/*function clearForm(){
    let title = document.getElementById('title').value = '';
    let author = document.getElementById('author').value = '';
    let pages = document.getElementById('pages').value = '';
}*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL2luYm94LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvcGFnZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvc2lkZS1iYXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGluYm94IC0gbWFpbi9taWRkbGUgY29udGVudFxuXG5mdW5jdGlvbiBpbmJveCgpe1xuICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94Jyk7Ly8gZnJvbSBwYWdlLmpzXG5cbiAgICBjb25zdCBpbmJveFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5ib3hUaXRsZS50ZXh0Q29udGVudCA9ICdJbmJveCc7XG4gICAgaW5ib3guYXBwZW5kQ2hpbGQoaW5ib3hUaXRsZSkuY2xhc3NOYW1lID0gJ2luYm94VGl0bGUnO1xuXG4gICAgY29uc3QgbGlzdE9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluYm94LmFwcGVuZENoaWxkKGxpc3RPYmopLmNsYXNzTmFtZSA9ICdsaXN0T2JqJztcblxuICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgXG4gICAgYWRkVGFzay50ZXh0Q29udGVudCA9ICcrIEFkZCBUYXNrJztcbiAgICBhZGRUYXNrLnNldEF0dHJpYnV0ZSgnZGF0YS1tb2RhbC10YXJnZXQnLCcjbW9kYWwnKTsgXG4gICAgaW5ib3guYXBwZW5kQ2hpbGQoYWRkVGFzaykuY2xhc3NOYW1lID0gJ2FkZFRhc2snO1xufVxuXG5mdW5jdGlvbiB0b2RheVRvZG8oKXtcbiAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveCcpO1xuXG4gICAgY29uc3QgdG9kYXlUb2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RheVRvZG9UaXRsZS50ZXh0Q29udGVudCA9ICdUb2RheSc7XG4gICAgaW5ib3guYXBwZW5kQ2hpbGQodG9kYXlUb2RvVGl0bGUpLmNsYXNzTmFtZSA9ICd0b2RheVRvZG9UaXRsZSc7XG5cbiAgICBjb25zdCBsaXN0T2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5ib3guYXBwZW5kQ2hpbGQobGlzdE9iaikuY2xhc3NOYW1lID0gJ2xpc3RPYmonO1xuXG59XG5cbmZ1bmN0aW9uIHdlZWtUb2RvKCl7XG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gnKTtcblxuICAgIGNvbnN0IHdlZWtUb2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3ZWVrVG9kb1RpdGxlLnRleHRDb250ZW50ID0gJ1RoaXMgd2Vlayc7XG4gICAgaW5ib3guYXBwZW5kQ2hpbGQod2Vla1RvZG9UaXRsZSkuY2xhc3NOYW1lID0gJ3dlZWtUb2RvVGl0bGUnO1xuXG4gICAgY29uc3QgbGlzdE9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluYm94LmFwcGVuZENoaWxkKGxpc3RPYmopLmNsYXNzTmFtZSA9ICdsaXN0T2JqJztcbn1cblxuZXhwb3J0IHsgaW5ib3ggLCB0b2RheVRvZG8gLCB3ZWVrVG9kbyB9O1xuIiwiZnVuY3Rpb24gbW9kYWwoKXtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFyZW50Jyk7IFxuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcInBvc3RcIik7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiwgXCJcIik7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwibW9kYWxcIik7IFxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGl0bGVcIik7XG4gICAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiVGl0bGVcIik7XG4gICAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsXCJ0aXRsZVwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XG5cbiAgICBjb25zdCB0b2RvRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0Rlc2Muc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgdG9kb0Rlc2Muc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICAgIHRvZG9EZXNjLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRGVzY3JpcHRpb25cIik7XG4gICAgdG9kb0Rlc2Muc2V0QXR0cmlidXRlKFwiaWRcIixcImRlc2NyaXB0aW9uXCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodG9kb0Rlc2MpO1xuXG4gICAgY29uc3QgdG9kb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9EYXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICAgIHRvZG9EYXRlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkYXRlXCIpO1xuICAgIHRvZG9EYXRlLnNldEF0dHJpYnV0ZShcImlkXCIsXCJkYXRlXCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodG9kb0RhdGUpO1xuXG4gICAgY29uc3QgdG9kb0ltcG9ydGFuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9JbXBvcnRhbmNlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcbiAgICB0b2RvSW1wb3J0YW5jZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGlja2V0X3R5cGVcIik7XG4gICAgdG9kb0ltcG9ydGFuY2Uuc2V0QXR0cmlidXRlKFwiaWRcIixcImltcG9ydGFudFwiKTtcbiAgICB0b2RvSW1wb3J0YW5jZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnSW1wb3J0YW50Jyk7XG4gICAgXG4gICAgY29uc3QgaW1wb3J0YW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBpbXBvcnRhbnQudGV4dENvbnRlbnQgPSAnSW1wb3J0YW50JztcbiAgICBpbXBvcnRhbnQuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJpbXBvcnRhbnRcIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0b2RvSW1wb3J0YW5jZSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbXBvcnRhbnQpO1xuXG4gICAgY29uc3QgdG9kb0ltcG9ydGFuY2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvSW1wb3J0YW5jZTIuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuICAgIHRvZG9JbXBvcnRhbmNlMi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGlja2V0X3R5cGVcIik7XG4gICAgdG9kb0ltcG9ydGFuY2UyLnNldEF0dHJpYnV0ZShcImlkXCIsXCJsZXNzSW1wb3J0YW50XCIpXG4gICAgdG9kb0ltcG9ydGFuY2UyLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsJ3RydWUnKTtcbiAgICB0b2RvSW1wb3J0YW5jZTIuc2V0QXR0cmlidXRlKCd2YWx1ZScsJ05vdCBpbXBvcnRhbnQnKTtcblxuICAgIGNvbnN0IGxlc3NJbXBvcmFudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGVzc0ltcG9yYW50LnRleHRDb250ZW50ID0gJ05vdCBpbXBvcnRhbnQnO1xuICAgIGxlc3NJbXBvcmFudC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcImxlc3NJbXBvcnRhbnRcIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0b2RvSW1wb3J0YW5jZTIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobGVzc0ltcG9yYW50KTtcblxuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcbiAgICBhZGRCdG4udGV4dENvbnRlbnQgPSAnQWRkJztcbiAgICBmb3JtLmFwcGVuZENoaWxkKGFkZEJ0bikuY2xhc3NOYW1lID0gJ2FkZEJ0bic7XG5cbiAgICBjb25zdCBybXZCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBybXZCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWNsb3NlLWJ1dHRvbicsJyNtb2RhbCcpOyBcbiAgICBybXZCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG4gICAgcm12QnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChybXZCdG4pLmNsYXNzTmFtZSA9ICdybXZCdG4nO1xuXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG92ZXJsYXkuc2V0QXR0cmlidXRlKCdpZCcsJ292ZXJsYXknKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG5cbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgICAgbWFrZU9iakRPTSgpO1xuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBtYWtlT2JqRE9NKCl7ICBcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWU7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlOyBcbiAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlO1xuXG4gICAgICAgIGNvbnN0IGxpc3RPYmogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdE9iaicpOyBcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAgIFxuICAgICAgICBsaXN0T2JqLmFwcGVuZENoaWxkKG9iaikuY2xhc3NOYW1lID0gJ29iaic7IFxuICAgICAgICBcbiAgICAgICAgY29uc3Qgb2JqVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG9ialRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgIG9iai5hcHBlbmRDaGlsZChvYmpUaXRsZSkuY2xhc3NOYW1lID0gJ29ialRpdGxlJztcbiAgICBcbiAgICAgICAgY29uc3Qgb2JqRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgb2JqRGVzYy50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICAgICAgICBvYmouYXBwZW5kQ2hpbGQob2JqRGVzYykuY2xhc3NOYW1lID0gJ29iakRlc2MnO1xuICAgIFxuICAgICAgICBjb25zdCBvYmpEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG9iakRhdGUudGV4dENvbnRlbnQgPSBkYXRlO1xuICAgICAgICBvYmouYXBwZW5kQ2hpbGQob2JqRGF0ZSkuY2xhc3NOYW1lID0gJ29iakRhdGUnO1xuICAgIFxuICAgICAgICBjb25zdCBybXZPYmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcm12T2JqLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuICAgICAgICBybXZPYmoudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgIG9iai5hcHBlbmRDaGlsZChybXZPYmopLmNsYXNzTmFtZSA9ICdybXZPYmonOyBcbiAgICBcbiAgICAgICAgaWYgKGRpc3BsYXlSYWRpb1ZhbHVlKCkgPT09ICdJbXBvcnRhbnQnKXtcbiAgICAgICAgICAgIGNvbnN0IGltcG9ydGFuY2VPYmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGltcG9ydGFuY2VPYmoudGV4dENvbnRlbnQgPSBkaXNwbGF5UmFkaW9WYWx1ZSgpO1xuICAgICAgICAgICAgb2JqLmFwcGVuZENoaWxkKGltcG9ydGFuY2VPYmopLmNsYXNzTmFtZSA9ICdpbXBvcnRhbmNlT2JqJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGRpc3BsYXlSYWRpb1ZhbHVlKCkgPT09ICdOb3QgaW1wb3J0YW50Jyl7XG4gICAgICAgICAgICBjb25zdCBsZXNzSW1wb3JhbnRPYmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxlc3NJbXBvcmFudE9iai50ZXh0Q29udGVudCA9IGRpc3BsYXlSYWRpb1ZhbHVlKCk7XG4gICAgICAgICAgICBvYmouYXBwZW5kQ2hpbGQobGVzc0ltcG9yYW50T2JqKS5jbGFzc05hbWUgPSAnbGVzc0ltcG9ydGFudE9iaic7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICBcbiAgICAgICAgZm9yICggbGV0IGkgPSAwIDsgaSA8IGxpc3RPYmouY2hpbGRyZW4ubGVuZ3RoIDsgaSsrKXsgXG5cbiAgICAgICAgICAgIG9iai5zZXRBdHRyaWJ1dGUoJ2RhdGEtb2JqLWluZGV4JyxpKTsgLy8ga2F0byBuZSBlIGVkbmFrdXYgZGF0YSBhdHRyIG5lIG1pIG92ZXJ3cml0dmEgYSBtaSBwaXNoZSB2c3RlLlxuICAgICAgICB9XG4gICAgICAgICAvKmNsZWFyTW9kYWwoKTsgKi8gLy8gY3JlYXRlcyBlbXB0eSBvYmoncyBidXQgeW91IGFyZSBub3QgdXNpbmcgdGhlbSBhbnl3YXksIGRvbSBpcyBnb29kLlxuICAgIFxuICAgICAgICBmdW5jdGlvbiBkaXNwbGF5UmFkaW9WYWx1ZSgpe1xuICAgICAgICAgICAgY29uc3QgZWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3RpY2tldF90eXBlJyk7XG4gICAgICAgICAgICBsZXQgcHJpb3JpdHk7XG4gICAgICAgIFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGUubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGlmIChlbGVbaV0uY2hlY2tlZCl7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHkgPSBlbGVbaV0udmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHByaW9yaXR5O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC8qZnVuY3Rpb24gY2xlYXJNb2RhbCgpeyAvLyBjbGVhciByYWRpbyBidXR0IHRvb1xuICAgICAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWUgPSAnJztcbiAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlID0gJyc7IFxuICAgICAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlID0gJyc7IC8vIGNsZWFycyBmb3Jtc1xuICAgIFxuICAgICAgICB9Ki9cbiAgICB9XG59XG5cblxuXG5leHBvcnQgeyBtb2RhbCB9OyIsIi8vIGluaXRpYWwgcGFnZSBsYXlvdXQgXG5cbmZ1bmN0aW9uIHBhZ2VMYXlvdXQoKXtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFyZW50Jyk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnVG8tZG8gTGlzdCc7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGhlYWRlcikuY2xhc3NOYW1lID0gJ2hlYWRlcic7XG5cbiAgICBjb25zdCB0aWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdGljay5zcmMgPSAncGljdHVyZXMvY2hlY2sucG5nJztcbiAgICB0aWNrLmFsdCA9ICdjaGVjay1waWMnO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aWNrKTtcblxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoc2lkZWJhcikuY2xhc3NOYW1lID0gJ3NpZGViYXInO1xuXG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaW5ib3gpLmNsYXNzTmFtZSA9ICdpbmJveCc7XG5cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKS5jbGFzc05hbWUgPSAnZm9vdGVyJztcbn1cblxuZXhwb3J0IHsgcGFnZUxheW91dCB9OyAiLCJmdW5jdGlvbiBzaWRlYmFyKCl7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7IC8vIGZyb20gcGFnZS5qc1xuXG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBpbmJveC50ZXh0Q29udGVudCA9IFwiSW5ib3hcIjtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGluYm94KS5jbGFzc05hbWUgPSAnaW5ib3hCdG4nO1xuXG4gICAgY29uc3QgdG9kYXlUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdG9kYXlUb2RvLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQodG9kYXlUb2RvKS5jbGFzc05hbWUgPSAndG9kYXlUb2RvJztcblxuICAgIGNvbnN0IHdlZWtUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgd2Vla1RvZG8udGV4dENvbnRlbnQgPSAnVGhpcyBXZWVrJztcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHdlZWtUb2RvKS5jbGFzc05hbWUgPSAnd2Vla1RvZG8nO1xuXG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0cy50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0cykuY2xhc3NOYW1lID0gJ3Byb2plY3RzJztcblxuICAgIGNvbnN0IGxpc3RQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQobGlzdFByb2plY3RzKS5jbGFzc05hbWUgPSAnbGlzdFByb2plY3RzJztcblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgXG4gICAgYWRkUHJvamVjdC50ZXh0Q29udGVudCA9ICcrIEFkZCBQcm9qZWN0JztcbiAgICBhZGRQcm9qZWN0LnNldEF0dHJpYnV0ZSgnZGF0YS1tb2RhbC10YXJnZXQtcHJvamVjdCcsJyNzaWRlYmFyTW9kYWwnKTsgXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KS5jbGFzc05hbWUgPSAnYWRkUHJvamVjdCc7XG5cbiAgICBzaWRlYmFyTW9kYWwoKTsgXG4gICAgZnVuY3Rpb24gc2lkZWJhck1vZGFsKCl7XG4gICAgICAgIGNvbnN0IHNpZGViYXJNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgc2lkZWJhck1vZGFsLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcInBvc3RcIik7XG4gICAgICAgIHNpZGViYXJNb2RhbC5zZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiwgXCJcIik7XG4gICAgICAgIHNpZGViYXJNb2RhbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwic2lkZWJhck1vZGFsXCIpOyBcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyTW9kYWwpO1xuXG4gICAgICAgIGNvbnN0IHBqVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBwalRpdGxlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgICAgICBwalRpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZVwiKTtcbiAgICAgICAgcGpUaXRsZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRpdGxlXCIpO1xuICAgICAgICBwalRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsXCJwalRpdGxlXCIpO1xuICAgICAgICBzaWRlYmFyTW9kYWwuYXBwZW5kQ2hpbGQocGpUaXRsZSk7XG5cbiAgICAgICAgY29uc3QgYWRkQnRuU2lkZWJhck1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IFxuICAgICAgICBhZGRCdG5TaWRlYmFyTW9kYWwuc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG4gICAgICAgIGFkZEJ0blNpZGViYXJNb2RhbC50ZXh0Q29udGVudCA9ICdBZGQnO1xuICAgICAgICBzaWRlYmFyTW9kYWwuYXBwZW5kQ2hpbGQoYWRkQnRuU2lkZWJhck1vZGFsKS5jbGFzc05hbWUgPSAnYWRkQnRuU2lkZWJhck1vZGFsJztcblxuICAgICAgICBjb25zdCBjYW5jZWxQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNhbmNlbFByb2plY3Quc2V0QXR0cmlidXRlKCdkYXRhLWNsb3NlLWJ1dHRvbi1wcm9qZWN0JywnI3NpZGViYXJNb2RhbCcpOyBcbiAgICAgICAgY2FuY2VsUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcbiAgICAgICAgY2FuY2VsUHJvamVjdC50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgICAgICBzaWRlYmFyTW9kYWwuYXBwZW5kQ2hpbGQoY2FuY2VsUHJvamVjdCkuY2xhc3NOYW1lID0gJ2NhbmNlbFByb2plY3QnO1xuXG4gICAgICAgIGFkZEJ0blNpZGViYXJNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICAgICAgbWFrZVByb2plY3QoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlUHJvamVjdCgpe1xuICAgICAgICBjb25zdCBsaXN0UHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdFByb2plY3RzJylcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BqVGl0bGUnKS52YWx1ZTtcbiAgICAgICAgXG4gICAgICAgXG4gICAgICAgIFxuICAgICAgICBjb25zdCBhY3R1YWxQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGxpc3RQcm9qZWN0cy5hcHBlbmRDaGlsZChhY3R1YWxQcm9qZWN0KS5jbGFzc05hbWUgPSAnYWN0dWFsUHJvamVjdCc7XG4gICAgXG4gICAgICAgIGNvbnN0IHRpdGxlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZVByb2plY3QudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgYWN0dWFsUHJvamVjdC5hcHBlbmRDaGlsZCh0aXRsZVByb2plY3QpO1xuICAgIFxuICAgICAgICBjb25zdCBybXZQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHJtdlByb2plY3QudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgIGFjdHVhbFByb2plY3QuYXBwZW5kQ2hpbGQocm12UHJvamVjdCkuY2xhc3NOYW1lID0gJ3JtdlByb2plY3QnO1xuICAgIFxuICAgICAgICBmb3IgKCBsZXQgaSA9IDAgOyBpIDwgbGlzdFByb2plY3RzLmNoaWxkcmVuLmxlbmd0aCA7IGkrKyl7XG4gICAgICAgICAgICBhY3R1YWxQcm9qZWN0LnNldEF0dHJpYnV0ZSgnZGF0YS1wai1pbmRleCcsaSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHByb2plY3RMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgZnVuY3Rpb24gcHJvamVjdExvY2FsU3RvcmFnZSgpe1xuICAgICAgICAgICAgbGV0IGtleTtcbiAgICAgICAgIFxuICAgICAgICAgICAgbGV0IHRpdGxlX3NlcmlhbGl6ZWQgPSBKU09OLnN0cmluZ2lmeSh0aXRsZSk7XG4gICAgXG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDAgOyBpIDwgbGlzdFByb2plY3RzLmNoaWxkcmVuLmxlbmd0aCA7IGkrKyl7XG4gICAgICAgICAgICAgICAga2V5ID0gJ3Byb2plY3RfJytpO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LHRpdGxlX3NlcmlhbGl6ZWQpOyBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbmZ1bmN0aW9uIHBqUmVuZGVyKHByb2plY3RUaXRsZSl7XG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gnKTtcblxuICAgIGNvbnN0IHBqVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwalRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdFRpdGxlO1xuICAgIGluYm94LmFwcGVuZENoaWxkKHBqVGl0bGUpLmNsYXNzTmFtZSA9ICdwalRpdGxlJztcblxuICAgIC8qY29uc3QgbGlzdE9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluYm94LmFwcGVuZENoaWxkKGxpc3RPYmopLmNsYXNzTmFtZSA9ICdsaXN0T2JqJzsqL1xufVxuXG5cbmV4cG9ydCB7IHNpZGViYXIgLCBwalJlbmRlciB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgcGFnZUxheW91dCB9IGZyb20gJy4vcGFnZS5qcyc7XG5pbXBvcnQgeyBpbmJveCAsIHRvZGF5VG9kbyAsIHdlZWtUb2RvfSBmcm9tICcuL2luYm94LmpzJztcbmltcG9ydCB7IG1vZGFsIH0gZnJvbSAnLi9tb2RhbC5qcyc7ICBcbmltcG9ydCB7IHNpZGViYXIgLCBwalJlbmRlciB9IGZyb20gJy4vc2lkZS1iYXIuanMnOyAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5wYWdlTGF5b3V0KCk7ICAgICAgICAgICBcbmluYm94KCk7ICAgICAgICAgICAgICAgIC8vIGRvbSBzdHVmZiBmb3IgdGFza3MgXG5tb2RhbCgpOyAgICAgICAgICAgICAgICAvLyBmdW5jdGlvbmFsaXR5L2FycmFuZ2VtZW50IG9mIHRhc2tzIFxuc2lkZWJhcigpO1xuXG4vLyBXZWJwYWNrIC8gcGFnZSBjaGFuZ2luZyBsb2dpYyBcblxuY29uc3QgaW5ib3hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3hCdG4nKTsgXG5pbmJveEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBlbXB0eU1haW4obWFpbik7XG4gICAgaW5ib3goKTtcbiAgICBpbmJveE1vZGFsKCk7IFxufSlcblxuY29uc3QgdG9kYXlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXlUb2RvJyk7XG50b2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBlbXB0eU1haW4obWFpbik7XG4gICAgdG9kYXlUb2RvKCk7XG59KVxuXG5jb25zdCB3ZWVrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlZWtUb2RvJyk7XG53ZWVrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGVtcHR5TWFpbihtYWluKTtcbiAgICB3ZWVrVG9kbygpO1xufSlcblxuZnVuY3Rpb24gcHJvamVjdHNSZW5kZXIoZXZlbnQpe1xuICAgIGlmICggZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJhY3R1YWxQcm9qZWN0XCIpe1xuICAgICAgICBlbXB0eU1haW4obWFpbik7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wai1pbmRleCcpO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcGotaW5kZXhdJylbaW5kZXhdO1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBwcm9qZWN0LnRleHRDb250ZW50LnNsaWNlKDAsLTEpOyAgXG4gICAgICAgIFxuICAgICAgICBwalJlbmRlcihwcm9qZWN0VGl0bGUpO1xuICAgIH1cbn1cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgcHJvamVjdHNSZW5kZXIoZXZlbnQpO1xufSk7XG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gnKTsgLy8gdGhlIGVsZW1lbnQgY2hhbmdlZCBiYXNlZCBvbiB3aGF0cyBjbGlja2VkIFxuXG5mdW5jdGlvbiBlbXB0eU1haW4oZWxlbWVudCkge1xuICAgIHdoaWxlKGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpe1xuICAgICAgIGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQucmVtb3ZlKCk7IFxuICAgIH1cbn1cblxuLy8gIE9iamVjdHMgZnVuY3Rpb25hbGxpdHkgXG5cbmNsYXNzIFRvZG97XG4gICAgY29uc3RydWN0b3IodGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSl7ICAgXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxufVxuXG5jb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkQnRuJyk7IFxuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTsgXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZTsgICAgICAgICAgICAgXG4gICBcbiAgICBjb25zdCB0b2RvID0gbmV3IFRvZG8odGl0bGUsZGVzY3JpcHRpb24sZGF0ZSxkaXNwbGF5UmFkaW9WYWx1ZSgpKTtcbiAgICB0b2RvTG9jYWxTdG9yYWdlKHRvZG8pO1xufSlcblxuZnVuY3Rpb24gZGlzcGxheVJhZGlvVmFsdWUoKSB7XG4gICAgY29uc3QgZWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3RpY2tldF90eXBlJyk7XG4gICAgbGV0IHByaW9yaXR5O1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGVsZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihlbGVbaV0uY2hlY2tlZCl7XG4gICAgICAgIHByaW9yaXR5ID0gZWxlW2ldLnZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcmlvcml0eTtcbn1cblxuZnVuY3Rpb24gdG9kb0xvY2FsU3RvcmFnZSh0b2RvKXsgXG4gICAgY29uc3QgbnVtT2JqID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RPYmonKTtcbiAgICBsZXQga2V5O1xuICAgIGxldCB0b2RvX3NlcmlhbGl6ZWQgPSBKU09OLnN0cmluZ2lmeSh0b2RvKTsgXG4gXG4gICAgZm9yICggbGV0IGkgPSAwIDsgaSA8IG51bU9iai5jaGlsZHJlbi5sZW5ndGggOyBpKyspe1xuICAgICAgICBrZXkgPSAndGFza18nK2k7XG4gICAgfVxuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LHRvZG9fc2VyaWFsaXplZCk7XG4gICAgLy9sZXQgdG9kb19kZXNlcmlhbGl6ZWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKG51bSkpO1xufVxuXG5cbmZ1bmN0aW9uIHJlbW92ZU9iaihldmVudCl7IFxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSBcInJtdk9ialwiKXsgLy8gcmVtb3ZlcyB0b2RvJ3NcbiAgICAgICAgY29uc3QgaW5kZXggPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb2JqLWluZGV4Jyk7IC8vIGluZGV4IG9mIGRhdGEgYXR0ciBjb3JyZXNwb25kcyB0byBsb2NhbHN0b3JhZ2Uga2V5XG4gICAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpOyBcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rhc2tfJytpbmRleCk7IFxuICAgIH1cblxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSBcInJtdlByb2plY3RcIil7IC8vIHJlbW92ZXMgcHJvamVjdHNcblxuICAgICAgICBjb25zdCBpbmRleCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wai1pbmRleCcpOyBcbiAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcm9qZWN0XycraW5kZXgpOyBcbiAgICB9XG59XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4geyBcbiAgICByZW1vdmVPYmooZXZlbnQpO1xufSk7XG5cbi8qZnVuY3Rpb24gY2xlYXJGb3JtKCl7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWUgPSAnJztcbiAgICBsZXQgYXV0aG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dGhvcicpLnZhbHVlID0gJyc7XG4gICAgbGV0IHBhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2VzJykudmFsdWUgPSAnJztcbn0qL1xuXG4vLyBNb2RhbCAtIGZ1bmN0aW9uYWxpdHkgIFxuXG5jb25zdCBjbG9zZU1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNsb3NlLWJ1dHRvbl0nKTtcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpO1xuXG5pbmJveE1vZGFsKCk7XG5mdW5jdGlvbiBpbmJveE1vZGFsKCl7XG4gICAgY29uc3Qgb3Blbk1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZGFsLXRhcmdldF0nKTtcbiAgICBcbiAgICBvcGVuTW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbi5kYXRhc2V0Lm1vZGFsVGFyZ2V0KTtcbiAgICAgICAgICAgIG9wZW5Nb2RhbChtb2RhbCk7XG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCl7XG4gICAgICAgIGlmICggbW9kYWwgPT0gbnVsbCApIHJldHVyblxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9ICAgXG59XG5cbmNsb3NlTW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXR0b24uZGF0YXNldC5jbG9zZUJ1dHRvbik7XG4gICAgICAgIGNsb3NlTW9kYWwobW9kYWwpO1xuICAgIH0pXG59KVxuXG5mdW5jdGlvbiBjbG9zZU1vZGFsKG1vZGFsKXtcbiAgICBpZiAoIG1vZGFsID09IG51bGwgKSByZXR1cm5cbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xufVxuXG5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XG4gICAgY29uc3QgbW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybS5hY3RpdmUnKTtcbiAgICBtb2RhbHMuZm9yRWFjaChtb2RhbCA9PiB7XG4gICAgICBjbG9zZU1vZGFsKG1vZGFsKTtcbiAgICB9KVxufSlcblxuLy8gU2lkZWJhciBtb2RhbCAtIGZ1bmN0aW9uYWxpdHkgXG5jb25zdCBvcGVuU2lkZWJhckJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RhbC10YXJnZXQtcHJvamVjdF0nKTtcbmNvbnN0IGNsb3NlU2lkZWJhckJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jbG9zZS1idXR0b24tcHJvamVjdF0nKTtcblxub3BlblNpZGViYXJCdG5zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNpZGViYXJNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnV0dG9uLmRhdGFzZXQubW9kYWxUYXJnZXRQcm9qZWN0KTtcbiAgICAgICAgb3BlblNpZGViYXJNb2RhbChzaWRlYmFyTW9kYWwpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH0pXG59KVxuXG5mdW5jdGlvbiBvcGVuU2lkZWJhck1vZGFsKHNpZGViYXJNb2RhbCl7XG4gICAgaWYgKCBzaWRlYmFyTW9kYWwgPT0gbnVsbCApIHJldHVyblxuICAgIHNpZGViYXJNb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn0gICBcblxuY2xvc2VTaWRlYmFyQnRucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzaWRlYmFyTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbi5kYXRhc2V0LmNsb3NlQnV0dG9uUHJvamVjdCk7XG4gICAgICAgIGNsb3NlU2lkZWJhck1vZGFsKHNpZGViYXJNb2RhbCk7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSlcbn0pXG5cbmZ1bmN0aW9uICBjbG9zZVNpZGViYXJNb2RhbChzaWRlYmFyTW9kYWwpe1xuICAgIGlmICggc2lkZWJhck1vZGFsID09IG51bGwgKSByZXR1cm5cbiAgICBzaWRlYmFyTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59XG5cblxuXG4vKipQcmV2ZW50cyBjaHJvbWUgcG9wIHVwIHdpbmRvdyB3aGVuIHJlZnJlc2hpbmcqL1xuaWYgKCB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgKSB7XG4gICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKCBudWxsLCBudWxsLCB3aW5kb3cubG9jYXRpb24uaHJlZiApO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==