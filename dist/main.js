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
/* harmony export */   "modal": () => (/* binding */ modal)
/* harmony export */ });
function modal(){
    const parent = document.getElementById('parent'); 

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

    addBtn.addEventListener('click',() => {
        makeObjDOM();
    })

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
    addProject.setAttribute('data-modal-target-project','#sidebarModal'); // button targeting the sidebar modal
    sidebar.appendChild(addProject).className = 'addProject';

    sidebarModal();
    function sidebarModal(){
        const sidebarModal = document.createElement('form');
        sidebarModal.setAttribute("method", "post");
        sidebarModal.setAttribute("action", "");
        sidebarModal.setAttribute("id","sidebarModal"); // data attribute of the buttons will target this id
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
    cancelProject.setAttribute('data-close-button-project','#sidebarModal'); // targets the modal ( form el )
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


  

                                  
(0,_page_js__WEBPACK_IMPORTED_MODULE_0__.pageLayout)(); //   projects as webpack pages - localstorage 
(0,_inbox_js__WEBPACK_IMPORTED_MODULE_1__.inbox)();
(0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.modal)();
(0,_side_bar_js__WEBPACK_IMPORTED_MODULE_3__.sidebar)();

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

const main = document.querySelector('.inbox');
function emptyMain(element) {
    while(element.firstElementChild){
       element.firstElementChild.remove(); 
    }
}


document.addEventListener('click', (event) => {
    removeTodo(event);
});

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
        document.querySelectorAll('[data-obj-index]')[i].setAttribute('data-obj-index', i ); 
    }
    for ( let i = 0 ; i < numPj.children.length ; i++){
        document.querySelectorAll('[data-pj-index]')[i].setAttribute('data-pj-index', i );
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RDtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9pbmJveC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL3NpZGUtYmFyLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmJveCAtIG1haW4vbWlkZGxlIGNvbnRlbnRcblxuZnVuY3Rpb24gaW5ib3goKXtcbiAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveCcpOy8vIGZyb20gcGFnZS5qc1xuXG4gICAgY29uc3QgaW5ib3hUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluYm94VGl0bGUudGV4dENvbnRlbnQgPSAnSW5ib3gnO1xuICAgIGluYm94LmFwcGVuZENoaWxkKGluYm94VGl0bGUpLmNsYXNzTmFtZSA9ICdpbmJveFRpdGxlJztcblxuICAgIGNvbnN0IGxpc3RPYmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmJveC5hcHBlbmRDaGlsZChsaXN0T2JqKS5jbGFzc05hbWUgPSAnbGlzdE9iaic7XG5cbiAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IFxuICAgIGFkZFRhc2sudGV4dENvbnRlbnQgPSAnKyBBZGQgVGFzayc7XG4gICAgYWRkVGFzay5zZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kYWwtdGFyZ2V0JywnI21vZGFsJyk7IC8vIDFzdCBidXR0b24gdGFyZ2V0aW5nIG1vZGFsICggdGhlIGZvcm0gZWxlbWVudCApXG4gICAgaW5ib3guYXBwZW5kQ2hpbGQoYWRkVGFzaykuY2xhc3NOYW1lID0gJ2FkZFRhc2snO1xufVxuXG5mdW5jdGlvbiB0b2RheVRvZG8oKXtcbiAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveCcpOy8vIGZyb20gcGFnZS5qc1xuXG4gICAgY29uc3QgdG9kYXlUb2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RheVRvZG9UaXRsZS50ZXh0Q29udGVudCA9ICdUb2RheSc7XG4gICAgaW5ib3guYXBwZW5kQ2hpbGQodG9kYXlUb2RvVGl0bGUpLmNsYXNzTmFtZSA9ICd0b2RheVRvZG9UaXRsZSc7XG5cbiAgICBjb25zdCBsaXN0T2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5ib3guYXBwZW5kQ2hpbGQobGlzdE9iaikuY2xhc3NOYW1lID0gJ2xpc3RPYmonO1xuXG59XG5cbmZ1bmN0aW9uIHdlZWtUb2RvKCl7XG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gnKTsvLyBmcm9tIHBhZ2UuanNcblxuICAgIGNvbnN0IHdlZWtUb2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3ZWVrVG9kb1RpdGxlLnRleHRDb250ZW50ID0gJ1RoaXMgd2Vlayc7XG4gICAgaW5ib3guYXBwZW5kQ2hpbGQod2Vla1RvZG9UaXRsZSkuY2xhc3NOYW1lID0gJ3dlZWtUb2RvVGl0bGUnO1xuXG4gICAgY29uc3QgbGlzdE9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluYm94LmFwcGVuZENoaWxkKGxpc3RPYmopLmNsYXNzTmFtZSA9ICdsaXN0T2JqJztcbn1cblxuZXhwb3J0IHsgaW5ib3ggLCB0b2RheVRvZG8gLCB3ZWVrVG9kbyB9OyIsImZ1bmN0aW9uIG1vZGFsKCl7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcmVudCcpOyBcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgXCJwb3N0XCIpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwiXCIpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIixcIm1vZGFsXCIpOyAvLyBkYXRhIGF0dHJpYnV0ZSBvZiB0aGUgYnV0dG9ucyB3aWxsIHRhcmdldCB0aGlzIGlkXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZVwiKTtcbiAgICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUaXRsZVwiKTtcbiAgICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIixcInRpdGxlXCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcblxuICAgIGNvbnN0IHRvZG9EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvRGVzYy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICB0b2RvRGVzYy5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gICAgdG9kb0Rlc2Muc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJEZXNjcmlwdGlvblwiKTtcbiAgICB0b2RvRGVzYy5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiZGVzY3JpcHRpb25cIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0b2RvRGVzYyk7XG5cbiAgICBjb25zdCB0b2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0RhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gICAgdG9kb0RhdGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRhdGVcIik7XG4gICAgdG9kb0RhdGUuc2V0QXR0cmlidXRlKFwiaWRcIixcImRhdGVcIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0b2RvRGF0ZSk7XG5cbiAgICBjb25zdCB0b2RvSW1wb3J0YW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0ltcG9ydGFuY2Uuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuICAgIHRvZG9JbXBvcnRhbmNlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aWNrZXRfdHlwZVwiKTtcbiAgICB0b2RvSW1wb3J0YW5jZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiaW1wb3J0YW50XCIpO1xuICAgIHRvZG9JbXBvcnRhbmNlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCdJbXBvcnRhbnQnKTtcbiAgICBcbiAgICBjb25zdCBpbXBvcnRhbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGltcG9ydGFudC50ZXh0Q29udGVudCA9ICdJbXBvcnRhbnQnO1xuICAgIGltcG9ydGFudC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcImltcG9ydGFudFwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRvZG9JbXBvcnRhbmNlKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGltcG9ydGFudCk7XG5cbiAgICBjb25zdCB0b2RvSW1wb3J0YW5jZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9JbXBvcnRhbmNlMi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG4gICAgdG9kb0ltcG9ydGFuY2UyLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aWNrZXRfdHlwZVwiKTtcbiAgICB0b2RvSW1wb3J0YW5jZTIuc2V0QXR0cmlidXRlKFwiaWRcIixcImxlc3NJbXBvcnRhbnRcIilcbiAgICB0b2RvSW1wb3J0YW5jZTIuc2V0QXR0cmlidXRlKCdjaGVja2VkJywndHJ1ZScpO1xuICAgIHRvZG9JbXBvcnRhbmNlMi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnTm90IGltcG9ydGFudCcpO1xuXG4gICAgY29uc3QgbGVzc0ltcG9yYW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsZXNzSW1wb3JhbnQudGV4dENvbnRlbnQgPSAnTm90IGltcG9ydGFudCc7XG4gICAgbGVzc0ltcG9yYW50LnNldEF0dHJpYnV0ZShcImZvclwiLFwibGVzc0ltcG9ydGFudFwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRvZG9JbXBvcnRhbmNlMik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChsZXNzSW1wb3JhbnQpO1xuXG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9ICdBZGQnO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYWRkQnRuKS5jbGFzc05hbWUgPSAnYWRkQnRuJztcblxuICAgIGNvbnN0IHJtdkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJtdkJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xvc2UtYnV0dG9uJywnI21vZGFsJyk7IC8vIHRhcmdldHMgdGhlIG1vZGFsICggZm9ybSBlbCApXG4gICAgcm12QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuICAgIHJtdkJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocm12QnRuKS5jbGFzc05hbWUgPSAncm12QnRuJztcblxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvdmVybGF5LnNldEF0dHJpYnV0ZSgnaWQnLCdvdmVybGF5Jyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XG4gICAgICAgIG1ha2VPYmpET00oKTtcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gbWFrZU9iakRPTSgpeyAgXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTsgXG4gICAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZTtcbiAgICAgICBcbiAgICBcbiAgICAgICAgY29uc3QgbGlzdE9iaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0T2JqJyk7IC8vIHBsYWNlIGFsbCB0b2RvcyBpbiBvbmUgZWxlbWVudCwgbW9yZSBjb21meSBmb3IgY3NzXG4gICAgICAgIFxuICAgICAgICBjb25zdCBvYmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgICBcbiAgICAgICAgbGlzdE9iai5hcHBlbmRDaGlsZChvYmopLmNsYXNzTmFtZSA9ICdvYmonOyBcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG9ialRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBvYmpUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICBvYmouYXBwZW5kQ2hpbGQob2JqVGl0bGUpLmNsYXNzTmFtZSA9ICdvYmpUaXRsZSc7XG4gICAgXG4gICAgICAgIGNvbnN0IG9iakRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG9iakRlc2MudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgb2JqLmFwcGVuZENoaWxkKG9iakRlc2MpLmNsYXNzTmFtZSA9ICdvYmpEZXNjJztcbiAgICBcbiAgICAgICAgY29uc3Qgb2JqRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBvYmpEYXRlLnRleHRDb250ZW50ID0gZGF0ZTtcbiAgICAgICAgb2JqLmFwcGVuZENoaWxkKG9iakRhdGUpLmNsYXNzTmFtZSA9ICdvYmpEYXRlJztcbiAgICBcbiAgICAgICAgY29uc3Qgcm12T2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHJtdk9iai5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcbiAgICAgICAgcm12T2JqLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICBvYmouYXBwZW5kQ2hpbGQocm12T2JqKS5jbGFzc05hbWUgPSAncm12T2JqJzsgXG4gICAgXG4gICAgICAgIGlmIChkaXNwbGF5UmFkaW9WYWx1ZSgpID09PSAnSW1wb3J0YW50Jyl7XG4gICAgICAgICAgICBjb25zdCBpbXBvcnRhbmNlT2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBpbXBvcnRhbmNlT2JqLnRleHRDb250ZW50ID0gZGlzcGxheVJhZGlvVmFsdWUoKTtcbiAgICAgICAgICAgIG9iai5hcHBlbmRDaGlsZChpbXBvcnRhbmNlT2JqKS5jbGFzc05hbWUgPSAnaW1wb3J0YW5jZU9iaic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihkaXNwbGF5UmFkaW9WYWx1ZSgpID09PSAnTm90IGltcG9ydGFudCcpe1xuICAgICAgICAgICAgY29uc3QgbGVzc0ltcG9yYW50T2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZXNzSW1wb3JhbnRPYmoudGV4dENvbnRlbnQgPSBkaXNwbGF5UmFkaW9WYWx1ZSgpO1xuICAgICAgICAgICAgb2JqLmFwcGVuZENoaWxkKGxlc3NJbXBvcmFudE9iaikuY2xhc3NOYW1lID0gJ2xlc3NJbXBvcnRhbnRPYmonO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZvciAoIGxldCBpID0gMCA7IGkgPCBsaXN0T2JqLmNoaWxkcmVuLmxlbmd0aCA7IGkrKyl7XG4gICAgICAgICAgICBvYmouc2V0QXR0cmlidXRlKCdkYXRhLW9iai1pbmRleCcsaSk7XG4gICAgICAgIH1cbiAgICAgICAgIGNsZWFyTW9kYWwoKTsgLy8gY3JlYXRlcyBlbXB0eSBvYmoncyBidXQgeW91IGFyZSBub3QgdXNpbmcgdGhlbSBhbnl3YXksIGRvbSBpcyBnb29kLlxuICAgIFxuICAgICAgICAgZnVuY3Rpb24gZGlzcGxheVJhZGlvVmFsdWUoKSB7XG4gICAgICAgICAgICBjb25zdCBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgndGlja2V0X3R5cGUnKTtcbiAgICAgICAgICAgIGxldCBwcmlvcml0eTtcbiAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgaWYgKGVsZVtpXS5jaGVja2VkKXtcbiAgICAgICAgICAgICAgICBwcmlvcml0eSA9IGVsZVtpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHJpb3JpdHk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gY2xlYXJNb2RhbCgpeyAvLyBjbGVhciByYWRpbyBidXR0IHRvb1xuICAgICAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWUgPSAnJztcbiAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlID0gJyc7IFxuICAgICAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlID0gJyc7IC8vIGNsZWFycyBmb3Jtc1xuICAgIFxuICAgICAgICB9XG4gICAgXG4gICAgICAgIH1cbn1cblxuXG5cbmV4cG9ydCB7IG1vZGFsIH07IiwiLy8gaW5pdGlhbCBwYWdlIGxheW91dCBcblxuZnVuY3Rpb24gcGFnZUxheW91dCgpe1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXJlbnQnKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdUby1kbyBMaXN0JztcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKS5jbGFzc05hbWUgPSAnaGVhZGVyJztcblxuICAgIGNvbnN0IHRpY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB0aWNrLnNyYyA9ICdwaWN0dXJlcy9jaGVjay5wbmcnO1xuICAgIHRpY2suYWx0ID0gJ2NoZWNrLXBpYyc7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpY2spO1xuXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChzaWRlYmFyKS5jbGFzc05hbWUgPSAnc2lkZWJhcic7XG5cbiAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChpbmJveCkuY2xhc3NOYW1lID0gJ2luYm94JztcblxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChmb290ZXIpLmNsYXNzTmFtZSA9ICdmb290ZXInO1xufVxuXG5leHBvcnQgeyBwYWdlTGF5b3V0IH07ICIsIi8vIHN0YXJ0IHdpdGggdGhlIGluYm94IGJ1dHRvblxuXG5mdW5jdGlvbiBzaWRlYmFyKCl7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG5cbiAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGluYm94LnRleHRDb250ZW50ID0gXCJJbmJveFwiO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoaW5ib3gpLmNsYXNzTmFtZSA9ICdpbmJveEJ0bic7XG5cbiAgICBjb25zdCB0b2RheVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0b2RheVRvZG8udGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZCh0b2RheVRvZG8pLmNsYXNzTmFtZSA9ICd0b2RheVRvZG8nO1xuXG4gICAgY29uc3Qgd2Vla1RvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB3ZWVrVG9kby50ZXh0Q29udGVudCA9ICdUaGlzIFdlZWsnO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQod2Vla1RvZG8pLmNsYXNzTmFtZSA9ICd3ZWVrVG9kbyc7XG5cbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RzLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RzKS5jbGFzc05hbWUgPSAncHJvamVjdHMnO1xuXG4gICAgY29uc3QgbGlzdFByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChsaXN0UHJvamVjdHMpLmNsYXNzTmFtZSA9ICdsaXN0UHJvamVjdHMnO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyBcbiAgICBhZGRQcm9qZWN0LnRleHRDb250ZW50ID0gJysgQWRkIFByb2plY3QnO1xuICAgIGFkZFByb2plY3Quc2V0QXR0cmlidXRlKCdkYXRhLW1vZGFsLXRhcmdldC1wcm9qZWN0JywnI3NpZGViYXJNb2RhbCcpOyAvLyBidXR0b24gdGFyZ2V0aW5nIHRoZSBzaWRlYmFyIG1vZGFsXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KS5jbGFzc05hbWUgPSAnYWRkUHJvamVjdCc7XG5cbiAgICBzaWRlYmFyTW9kYWwoKTtcbiAgICBmdW5jdGlvbiBzaWRlYmFyTW9kYWwoKXtcbiAgICAgICAgY29uc3Qgc2lkZWJhck1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBzaWRlYmFyTW9kYWwuc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIFwicG9zdFwiKTtcbiAgICAgICAgc2lkZWJhck1vZGFsLnNldEF0dHJpYnV0ZShcImFjdGlvblwiLCBcIlwiKTtcbiAgICAgICAgc2lkZWJhck1vZGFsLnNldEF0dHJpYnV0ZShcImlkXCIsXCJzaWRlYmFyTW9kYWxcIik7IC8vIGRhdGEgYXR0cmlidXRlIG9mIHRoZSBidXR0b25zIHdpbGwgdGFyZ2V0IHRoaXMgaWRcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyTW9kYWwpO1xuXG4gICAgICAgIGNvbnN0IHBqVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBwalRpdGxlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgICAgICBwalRpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZVwiKTtcbiAgICAgICAgcGpUaXRsZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRpdGxlXCIpO1xuICAgICAgICBwalRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsXCJwalRpdGxlXCIpO1xuICAgICAgICBzaWRlYmFyTW9kYWwuYXBwZW5kQ2hpbGQocGpUaXRsZSk7XG5cbiAgICBjb25zdCBhZGRCdG5TaWRlYmFyTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgXG4gICAgYWRkQnRuU2lkZWJhck1vZGFsLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuICAgIGFkZEJ0blNpZGViYXJNb2RhbC50ZXh0Q29udGVudCA9ICdBZGQnO1xuICAgIHNpZGViYXJNb2RhbC5hcHBlbmRDaGlsZChhZGRCdG5TaWRlYmFyTW9kYWwpLmNsYXNzTmFtZSA9ICdhZGRCdG5TaWRlYmFyTW9kYWwnO1xuXG4gICAgY29uc3QgY2FuY2VsUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbFByb2plY3Quc2V0QXR0cmlidXRlKCdkYXRhLWNsb3NlLWJ1dHRvbi1wcm9qZWN0JywnI3NpZGViYXJNb2RhbCcpOyAvLyB0YXJnZXRzIHRoZSBtb2RhbCAoIGZvcm0gZWwgKVxuICAgIGNhbmNlbFByb2plY3Quc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG4gICAgY2FuY2VsUHJvamVjdC50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIHNpZGViYXJNb2RhbC5hcHBlbmRDaGlsZChjYW5jZWxQcm9qZWN0KS5jbGFzc05hbWUgPSAnY2FuY2VsUHJvamVjdCc7XG5cbiAgICBhZGRCdG5TaWRlYmFyTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgbWFrZVByb2plY3QoKTtcbiAgICB9KVxuXG4gICAgfVxuXG4gICAgXG4gXG4gICAgZnVuY3Rpb24gbWFrZVByb2plY3QoKXtcbiAgICAgICAgY29uc3QgbGlzdFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RQcm9qZWN0cycpXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwalRpdGxlJykudmFsdWU7IFxuICAgICAgICBcbiAgICAgICAgY29uc3QgYWN0dWFsUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBsaXN0UHJvamVjdHMuYXBwZW5kQ2hpbGQoYWN0dWFsUHJvamVjdCkuY2xhc3NOYW1lID0gJ2FjdHVhbFByb2plY3QnO1xuICAgIFxuICAgICAgICBjb25zdCB0aXRsZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGl0bGVQcm9qZWN0LnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgIGFjdHVhbFByb2plY3QuYXBwZW5kQ2hpbGQodGl0bGVQcm9qZWN0KTtcbiAgICBcbiAgICAgICAgY29uc3Qgcm12UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBybXZQcm9qZWN0LnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICBhY3R1YWxQcm9qZWN0LmFwcGVuZENoaWxkKHJtdlByb2plY3QpLmNsYXNzTmFtZSA9ICdybXZQcm9qZWN0JztcbiAgICBcbiAgICAgICAgZm9yICggbGV0IGkgPSAwIDsgaSA8IGxpc3RQcm9qZWN0cy5jaGlsZHJlbi5sZW5ndGggOyBpKyspe1xuICAgICAgICAgICAgYWN0dWFsUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGotaW5kZXgnLGkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn1cblxuXG5leHBvcnQgeyBzaWRlYmFyIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBwYWdlTGF5b3V0IH0gZnJvbSAnLi9wYWdlLmpzJztcbmltcG9ydCB7IGluYm94ICwgdG9kYXlUb2RvICwgd2Vla1RvZG99IGZyb20gJy4vaW5ib3guanMnO1xuaW1wb3J0IHsgbW9kYWwgfSBmcm9tICcuL21vZGFsLmpzJzsgIFxuaW1wb3J0IHsgc2lkZWJhciB9IGZyb20gJy4vc2lkZS1iYXIuanMnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxucGFnZUxheW91dCgpOyAvLyAgIHByb2plY3RzIGFzIHdlYnBhY2sgcGFnZXMgLSBsb2NhbHN0b3JhZ2UgXG5pbmJveCgpO1xubW9kYWwoKTtcbnNpZGViYXIoKTtcblxuY29uc3QgaW5ib3hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3hCdG4nKTtcbmluYm94QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGVtcHR5TWFpbihtYWluKTtcbiAgICBpbmJveCgpO1xuICAgIGluYm94TW9kYWwoKTtcbn0pXG5cbmNvbnN0IHRvZGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5VG9kbycpO1xudG9kYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZW1wdHlNYWluKG1haW4pO1xuICAgIHRvZGF5VG9kbygpO1xufSlcblxuY29uc3Qgd2Vla0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWVrVG9kbycpO1xud2Vla0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBlbXB0eU1haW4obWFpbik7XG4gICAgd2Vla1RvZG8oKTtcbn0pXG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gnKTtcbmZ1bmN0aW9uIGVtcHR5TWFpbihlbGVtZW50KSB7XG4gICAgd2hpbGUoZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCl7XG4gICAgICAgZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTsgXG4gICAgfVxufVxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgcmVtb3ZlVG9kbyhldmVudCk7XG59KTtcblxuZnVuY3Rpb24gcmVtb3ZlVG9kbyhldmVudCl7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09IFwicm12T2JqXCIpe1xuICAgICAgICBjb25zdCBpbmRleCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vYmotaW5kZXgnKTtcbiAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1vYmotaW5kZXhdJylbaW5kZXhdLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSBcInJtdlByb2plY3RcIil7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXBqLWluZGV4Jyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXBqLWluZGV4XScpW2luZGV4XS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBudW1PYmogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdE9iaicpO1xuICAgIGNvbnN0IG51bVBqID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RQcm9qZWN0cycpO1xuXG4gICAgZm9yICggbGV0IGkgPSAwIDsgaSA8IG51bU9iai5jaGlsZHJlbi5sZW5ndGggOyBpKyspe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1vYmotaW5kZXhdJylbaV0uc2V0QXR0cmlidXRlKCdkYXRhLW9iai1pbmRleCcsIGkgKTsgXG4gICAgfVxuICAgIGZvciAoIGxldCBpID0gMCA7IGkgPCBudW1Qai5jaGlsZHJlbi5sZW5ndGggOyBpKyspe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wai1pbmRleF0nKVtpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGotaW5kZXgnLCBpICk7XG4gICAgfVxufVxuXG4vLyBNb2RhbFxuXG5jb25zdCBjbG9zZU1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNsb3NlLWJ1dHRvbl0nKTtcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpO1xuXG5pbmJveE1vZGFsKCk7XG5mdW5jdGlvbiBpbmJveE1vZGFsKCl7XG4gICAgY29uc3Qgb3Blbk1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZGFsLXRhcmdldF0nKTtcblxuICAgIG9wZW5Nb2RhbEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnV0dG9uLmRhdGFzZXQubW9kYWxUYXJnZXQpO1xuICAgICAgICAgICAgb3Blbk1vZGFsKG1vZGFsKTtcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsKXtcbiAgICAgICAgaWYgKCBtb2RhbCA9PSBudWxsICkgcmV0dXJuXG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH0gICBcbn1cblxuY2xvc2VNb2RhbEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbi5kYXRhc2V0LmNsb3NlQnV0dG9uKTtcbiAgICAgICAgY2xvc2VNb2RhbChtb2RhbCk7XG4gICAgfSlcbn0pXG5cbmZ1bmN0aW9uIGNsb3NlTW9kYWwobW9kYWwpe1xuICAgIGlmICggbW9kYWwgPT0gbnVsbCApIHJldHVyblxuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59XG5cbm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICBjb25zdCBtb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtLmFjdGl2ZScpO1xuICAgIG1vZGFscy5mb3JFYWNoKG1vZGFsID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cobW9kYWxzKTtcbiAgICAgIGNsb3NlTW9kYWwobW9kYWwpO1xuICAgIH0pXG59KVxuLy8gU2lkZWJhciBtb2RhbFxuY29uc3Qgb3BlblNpZGViYXJCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kYWwtdGFyZ2V0LXByb2plY3RdJyk7XG5jb25zdCBjbG9zZVNpZGViYXJCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY2xvc2UtYnV0dG9uLXByb2plY3RdJyk7XG5cbm9wZW5TaWRlYmFyQnRucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzaWRlYmFyTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbi5kYXRhc2V0Lm1vZGFsVGFyZ2V0UHJvamVjdCk7XG4gICAgICAgIG9wZW5TaWRlYmFyTW9kYWwoc2lkZWJhck1vZGFsKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9KVxufSlcblxuZnVuY3Rpb24gb3BlblNpZGViYXJNb2RhbChzaWRlYmFyTW9kYWwpe1xuICAgIGlmICggc2lkZWJhck1vZGFsID09IG51bGwgKSByZXR1cm5cbiAgICBzaWRlYmFyTW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59ICAgXG5cbmNsb3NlU2lkZWJhckJ0bnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2lkZWJhck1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXR0b24uZGF0YXNldC5jbG9zZUJ1dHRvblByb2plY3QpO1xuICAgICAgICBjbG9zZVNpZGViYXJNb2RhbChzaWRlYmFyTW9kYWwpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pXG59KVxuXG5mdW5jdGlvbiAgY2xvc2VTaWRlYmFyTW9kYWwoc2lkZWJhck1vZGFsKXtcbiAgICBpZiAoIHNpZGViYXJNb2RhbCA9PSBudWxsICkgcmV0dXJuXG4gICAgc2lkZWJhck1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xufVxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8qKlByZXZlbnRzIGNocm9tZSBwb3AgdXAgd2luZG93IHdoZW4gcmVmcmVzaGluZyovXG5pZiAoIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSApIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoIG51bGwsIG51bGwsIHdpbmRvdy5sb2NhdGlvbi5ocmVmICk7XG4gIH1cblxuICAvKmNsYXNzIFRvZG97XG4gICAgY29uc3RydWN0b3IodGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSl7ICAgXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxuXG59XG5cbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkVGFzaycpOyBcbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICBjb25zdCBtYWtlVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRCdG4nKTsgXG4gICAgbWFrZVRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgXG4gICAgXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWU7IFxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZTsgICAgICAgICAgICAgXG4gICAgICAgXG4gICAgICAgIG1ha2VUb2Rvbyh0aXRsZSxkZXNjcmlwdGlvbixkYXRlLGRpc3BsYXlSYWRpb1ZhbHVlKCkpOyBcbiAgICB9KVxufSlcblxuZnVuY3Rpb24gIG1ha2VUb2Rvbyh0aXRsZSxkZXNjcmlwdGlvbixkYXRlLHByaW9yaXR5KXtcbiAgICBjb25zdCB0b2RvID0gbmV3IFRvZG8odGl0bGUsZGVzY3JpcHRpb24sZGF0ZSxwcmlvcml0eSk7XG4gICAgY29uc29sZS5sb2codG9kbyk7XG5cbn0qL1xuXG4vKmZ1bmN0aW9uIGNsZWFyRm9ybSgpe1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlID0gJyc7XG4gICAgbGV0IGF1dGhvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRob3InKS52YWx1ZSA9ICcnO1xuICAgIGxldCBwYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlcycpLnZhbHVlID0gJyc7XG59Ki9cblxuLypmdW5jdGlvbiBkaXNwbGF5UmFkaW9WYWx1ZSgpIHtcbiAgICBjb25zdCBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgndGlja2V0X3R5cGUnKTtcbiAgICBsZXQgcHJpb3JpdHk7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZWxlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKGVsZVtpXS5jaGVja2VkKXtcbiAgICAgICAgcHJpb3JpdHkgPSBlbGVbaV0udmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByaW9yaXR5O1xufSovIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9