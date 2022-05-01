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
/* harmony export */   "pjRender": () => (/* binding */ pjRender),
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


  

                                  
(0,_page_js__WEBPACK_IMPORTED_MODULE_0__.pageLayout)(); //   - localstorage 
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
    
      (0,_side_bar_js__WEBPACK_IMPORTED_MODULE_3__.pjRender)(projectTitle);
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9pbmJveC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL3NpZGUtYmFyLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmJveCAtIG1haW4vbWlkZGxlIGNvbnRlbnRcblxuZnVuY3Rpb24gaW5ib3goKXtcbiAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveCcpOy8vIGZyb20gcGFnZS5qc1xuXG4gICAgY29uc3QgaW5ib3hUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluYm94VGl0bGUudGV4dENvbnRlbnQgPSAnSW5ib3gnO1xuICAgIGluYm94LmFwcGVuZENoaWxkKGluYm94VGl0bGUpLmNsYXNzTmFtZSA9ICdpbmJveFRpdGxlJztcblxuICAgIGNvbnN0IGxpc3RPYmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmJveC5hcHBlbmRDaGlsZChsaXN0T2JqKS5jbGFzc05hbWUgPSAnbGlzdE9iaic7XG5cbiAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IFxuICAgIGFkZFRhc2sudGV4dENvbnRlbnQgPSAnKyBBZGQgVGFzayc7XG4gICAgYWRkVGFzay5zZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kYWwtdGFyZ2V0JywnI21vZGFsJyk7IC8vIDFzdCBidXR0b24gdGFyZ2V0aW5nIG1vZGFsICggdGhlIGZvcm0gZWxlbWVudCApXG4gICAgaW5ib3guYXBwZW5kQ2hpbGQoYWRkVGFzaykuY2xhc3NOYW1lID0gJ2FkZFRhc2snO1xufVxuXG5mdW5jdGlvbiB0b2RheVRvZG8oKXtcbiAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveCcpOy8vIGZyb20gcGFnZS5qc1xuXG4gICAgY29uc3QgdG9kYXlUb2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RheVRvZG9UaXRsZS50ZXh0Q29udGVudCA9ICdUb2RheSc7XG4gICAgaW5ib3guYXBwZW5kQ2hpbGQodG9kYXlUb2RvVGl0bGUpLmNsYXNzTmFtZSA9ICd0b2RheVRvZG9UaXRsZSc7XG5cbiAgICBjb25zdCBsaXN0T2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5ib3guYXBwZW5kQ2hpbGQobGlzdE9iaikuY2xhc3NOYW1lID0gJ2xpc3RPYmonO1xuXG59XG5cbmZ1bmN0aW9uIHdlZWtUb2RvKCl7XG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gnKTsvLyBmcm9tIHBhZ2UuanNcblxuICAgIGNvbnN0IHdlZWtUb2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3ZWVrVG9kb1RpdGxlLnRleHRDb250ZW50ID0gJ1RoaXMgd2Vlayc7XG4gICAgaW5ib3guYXBwZW5kQ2hpbGQod2Vla1RvZG9UaXRsZSkuY2xhc3NOYW1lID0gJ3dlZWtUb2RvVGl0bGUnO1xuXG4gICAgY29uc3QgbGlzdE9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluYm94LmFwcGVuZENoaWxkKGxpc3RPYmopLmNsYXNzTmFtZSA9ICdsaXN0T2JqJztcbn1cblxuZXhwb3J0IHsgaW5ib3ggLCB0b2RheVRvZG8gLCB3ZWVrVG9kbyB9OyIsImZ1bmN0aW9uIG1vZGFsKCl7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcmVudCcpOyBcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgXCJwb3N0XCIpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwiXCIpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIixcIm1vZGFsXCIpOyAvLyBkYXRhIGF0dHJpYnV0ZSBvZiB0aGUgYnV0dG9ucyB3aWxsIHRhcmdldCB0aGlzIGlkXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZVwiKTtcbiAgICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUaXRsZVwiKTtcbiAgICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIixcInRpdGxlXCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcblxuICAgIGNvbnN0IHRvZG9EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvRGVzYy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICB0b2RvRGVzYy5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gICAgdG9kb0Rlc2Muc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJEZXNjcmlwdGlvblwiKTtcbiAgICB0b2RvRGVzYy5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiZGVzY3JpcHRpb25cIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0b2RvRGVzYyk7XG5cbiAgICBjb25zdCB0b2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0RhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gICAgdG9kb0RhdGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRhdGVcIik7XG4gICAgdG9kb0RhdGUuc2V0QXR0cmlidXRlKFwiaWRcIixcImRhdGVcIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0b2RvRGF0ZSk7XG5cbiAgICBjb25zdCB0b2RvSW1wb3J0YW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0ltcG9ydGFuY2Uuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuICAgIHRvZG9JbXBvcnRhbmNlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aWNrZXRfdHlwZVwiKTtcbiAgICB0b2RvSW1wb3J0YW5jZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiaW1wb3J0YW50XCIpO1xuICAgIHRvZG9JbXBvcnRhbmNlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCdJbXBvcnRhbnQnKTtcbiAgICBcbiAgICBjb25zdCBpbXBvcnRhbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGltcG9ydGFudC50ZXh0Q29udGVudCA9ICdJbXBvcnRhbnQnO1xuICAgIGltcG9ydGFudC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcImltcG9ydGFudFwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRvZG9JbXBvcnRhbmNlKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGltcG9ydGFudCk7XG5cbiAgICBjb25zdCB0b2RvSW1wb3J0YW5jZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9JbXBvcnRhbmNlMi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG4gICAgdG9kb0ltcG9ydGFuY2UyLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aWNrZXRfdHlwZVwiKTtcbiAgICB0b2RvSW1wb3J0YW5jZTIuc2V0QXR0cmlidXRlKFwiaWRcIixcImxlc3NJbXBvcnRhbnRcIilcbiAgICB0b2RvSW1wb3J0YW5jZTIuc2V0QXR0cmlidXRlKCdjaGVja2VkJywndHJ1ZScpO1xuICAgIHRvZG9JbXBvcnRhbmNlMi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnTm90IGltcG9ydGFudCcpO1xuXG4gICAgY29uc3QgbGVzc0ltcG9yYW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsZXNzSW1wb3JhbnQudGV4dENvbnRlbnQgPSAnTm90IGltcG9ydGFudCc7XG4gICAgbGVzc0ltcG9yYW50LnNldEF0dHJpYnV0ZShcImZvclwiLFwibGVzc0ltcG9ydGFudFwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRvZG9JbXBvcnRhbmNlMik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChsZXNzSW1wb3JhbnQpO1xuXG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9ICdBZGQnO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYWRkQnRuKS5jbGFzc05hbWUgPSAnYWRkQnRuJztcblxuICAgIGNvbnN0IHJtdkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJtdkJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xvc2UtYnV0dG9uJywnI21vZGFsJyk7IC8vIHRhcmdldHMgdGhlIG1vZGFsICggZm9ybSBlbCApXG4gICAgcm12QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuICAgIHJtdkJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocm12QnRuKS5jbGFzc05hbWUgPSAncm12QnRuJztcblxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvdmVybGF5LnNldEF0dHJpYnV0ZSgnaWQnLCdvdmVybGF5Jyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XG4gICAgICAgIG1ha2VPYmpET00oKTtcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gbWFrZU9iakRPTSgpeyAgXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTsgXG4gICAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZTtcbiAgICAgICBcbiAgICBcbiAgICAgICAgY29uc3QgbGlzdE9iaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0T2JqJyk7IC8vIHBsYWNlIGFsbCB0b2RvcyBpbiBvbmUgZWxlbWVudCwgbW9yZSBjb21meSBmb3IgY3NzXG4gICAgICAgIFxuICAgICAgICBjb25zdCBvYmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgICBcbiAgICAgICAgbGlzdE9iai5hcHBlbmRDaGlsZChvYmopLmNsYXNzTmFtZSA9ICdvYmonOyBcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG9ialRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBvYmpUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICBvYmouYXBwZW5kQ2hpbGQob2JqVGl0bGUpLmNsYXNzTmFtZSA9ICdvYmpUaXRsZSc7XG4gICAgXG4gICAgICAgIGNvbnN0IG9iakRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG9iakRlc2MudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgb2JqLmFwcGVuZENoaWxkKG9iakRlc2MpLmNsYXNzTmFtZSA9ICdvYmpEZXNjJztcbiAgICBcbiAgICAgICAgY29uc3Qgb2JqRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBvYmpEYXRlLnRleHRDb250ZW50ID0gZGF0ZTtcbiAgICAgICAgb2JqLmFwcGVuZENoaWxkKG9iakRhdGUpLmNsYXNzTmFtZSA9ICdvYmpEYXRlJztcbiAgICBcbiAgICAgICAgY29uc3Qgcm12T2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHJtdk9iai5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcbiAgICAgICAgcm12T2JqLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICBvYmouYXBwZW5kQ2hpbGQocm12T2JqKS5jbGFzc05hbWUgPSAncm12T2JqJzsgXG4gICAgXG4gICAgICAgIGlmIChkaXNwbGF5UmFkaW9WYWx1ZSgpID09PSAnSW1wb3J0YW50Jyl7XG4gICAgICAgICAgICBjb25zdCBpbXBvcnRhbmNlT2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBpbXBvcnRhbmNlT2JqLnRleHRDb250ZW50ID0gZGlzcGxheVJhZGlvVmFsdWUoKTtcbiAgICAgICAgICAgIG9iai5hcHBlbmRDaGlsZChpbXBvcnRhbmNlT2JqKS5jbGFzc05hbWUgPSAnaW1wb3J0YW5jZU9iaic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihkaXNwbGF5UmFkaW9WYWx1ZSgpID09PSAnTm90IGltcG9ydGFudCcpe1xuICAgICAgICAgICAgY29uc3QgbGVzc0ltcG9yYW50T2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZXNzSW1wb3JhbnRPYmoudGV4dENvbnRlbnQgPSBkaXNwbGF5UmFkaW9WYWx1ZSgpO1xuICAgICAgICAgICAgb2JqLmFwcGVuZENoaWxkKGxlc3NJbXBvcmFudE9iaikuY2xhc3NOYW1lID0gJ2xlc3NJbXBvcnRhbnRPYmonO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZvciAoIGxldCBpID0gMCA7IGkgPCBsaXN0T2JqLmNoaWxkcmVuLmxlbmd0aCA7IGkrKyl7XG4gICAgICAgICAgICBvYmouc2V0QXR0cmlidXRlKCdkYXRhLW9iai1pbmRleCcsaSk7XG4gICAgICAgIH1cbiAgICAgICAgIGNsZWFyTW9kYWwoKTsgLy8gY3JlYXRlcyBlbXB0eSBvYmoncyBidXQgeW91IGFyZSBub3QgdXNpbmcgdGhlbSBhbnl3YXksIGRvbSBpcyBnb29kLlxuICAgIFxuICAgICAgICAgZnVuY3Rpb24gZGlzcGxheVJhZGlvVmFsdWUoKSB7XG4gICAgICAgICAgICBjb25zdCBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgndGlja2V0X3R5cGUnKTtcbiAgICAgICAgICAgIGxldCBwcmlvcml0eTtcbiAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgaWYgKGVsZVtpXS5jaGVja2VkKXtcbiAgICAgICAgICAgICAgICBwcmlvcml0eSA9IGVsZVtpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHJpb3JpdHk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gY2xlYXJNb2RhbCgpeyAvLyBjbGVhciByYWRpbyBidXR0IHRvb1xuICAgICAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWUgPSAnJztcbiAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlID0gJyc7IFxuICAgICAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlID0gJyc7IC8vIGNsZWFycyBmb3Jtc1xuICAgIFxuICAgICAgICB9XG4gICAgXG4gICAgICAgIH1cbn1cblxuXG5cbmV4cG9ydCB7IG1vZGFsIH07IiwiLy8gaW5pdGlhbCBwYWdlIGxheW91dCBcblxuZnVuY3Rpb24gcGFnZUxheW91dCgpe1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXJlbnQnKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdUby1kbyBMaXN0JztcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKS5jbGFzc05hbWUgPSAnaGVhZGVyJztcblxuICAgIGNvbnN0IHRpY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB0aWNrLnNyYyA9ICdwaWN0dXJlcy9jaGVjay5wbmcnO1xuICAgIHRpY2suYWx0ID0gJ2NoZWNrLXBpYyc7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpY2spO1xuXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChzaWRlYmFyKS5jbGFzc05hbWUgPSAnc2lkZWJhcic7XG5cbiAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChpbmJveCkuY2xhc3NOYW1lID0gJ2luYm94JztcblxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChmb290ZXIpLmNsYXNzTmFtZSA9ICdmb290ZXInO1xufVxuXG5leHBvcnQgeyBwYWdlTGF5b3V0IH07ICIsIi8vIHN0YXJ0IHdpdGggdGhlIGluYm94IGJ1dHRvblxuXG5mdW5jdGlvbiBzaWRlYmFyKCl7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG5cbiAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGluYm94LnRleHRDb250ZW50ID0gXCJJbmJveFwiO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoaW5ib3gpLmNsYXNzTmFtZSA9ICdpbmJveEJ0bic7XG5cbiAgICBjb25zdCB0b2RheVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0b2RheVRvZG8udGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZCh0b2RheVRvZG8pLmNsYXNzTmFtZSA9ICd0b2RheVRvZG8nO1xuXG4gICAgY29uc3Qgd2Vla1RvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB3ZWVrVG9kby50ZXh0Q29udGVudCA9ICdUaGlzIFdlZWsnO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQod2Vla1RvZG8pLmNsYXNzTmFtZSA9ICd3ZWVrVG9kbyc7XG5cbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RzLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RzKS5jbGFzc05hbWUgPSAncHJvamVjdHMnO1xuXG4gICAgY29uc3QgbGlzdFByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChsaXN0UHJvamVjdHMpLmNsYXNzTmFtZSA9ICdsaXN0UHJvamVjdHMnO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyBcbiAgICBhZGRQcm9qZWN0LnRleHRDb250ZW50ID0gJysgQWRkIFByb2plY3QnO1xuICAgIGFkZFByb2plY3Quc2V0QXR0cmlidXRlKCdkYXRhLW1vZGFsLXRhcmdldC1wcm9qZWN0JywnI3NpZGViYXJNb2RhbCcpOyAvLyBidXR0b24gdGFyZ2V0aW5nIHRoZSBzaWRlYmFyIG1vZGFsXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KS5jbGFzc05hbWUgPSAnYWRkUHJvamVjdCc7XG5cbiAgICBzaWRlYmFyTW9kYWwoKTtcbiAgICBmdW5jdGlvbiBzaWRlYmFyTW9kYWwoKXtcbiAgICAgICAgY29uc3Qgc2lkZWJhck1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBzaWRlYmFyTW9kYWwuc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIFwicG9zdFwiKTtcbiAgICAgICAgc2lkZWJhck1vZGFsLnNldEF0dHJpYnV0ZShcImFjdGlvblwiLCBcIlwiKTtcbiAgICAgICAgc2lkZWJhck1vZGFsLnNldEF0dHJpYnV0ZShcImlkXCIsXCJzaWRlYmFyTW9kYWxcIik7IC8vIGRhdGEgYXR0cmlidXRlIG9mIHRoZSBidXR0b25zIHdpbGwgdGFyZ2V0IHRoaXMgaWRcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyTW9kYWwpO1xuXG4gICAgICAgIGNvbnN0IHBqVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBwalRpdGxlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgICAgICBwalRpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZVwiKTtcbiAgICAgICAgcGpUaXRsZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRpdGxlXCIpO1xuICAgICAgICBwalRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsXCJwalRpdGxlXCIpO1xuICAgICAgICBzaWRlYmFyTW9kYWwuYXBwZW5kQ2hpbGQocGpUaXRsZSk7XG5cbiAgICBjb25zdCBhZGRCdG5TaWRlYmFyTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgXG4gICAgYWRkQnRuU2lkZWJhck1vZGFsLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuICAgIGFkZEJ0blNpZGViYXJNb2RhbC50ZXh0Q29udGVudCA9ICdBZGQnO1xuICAgIHNpZGViYXJNb2RhbC5hcHBlbmRDaGlsZChhZGRCdG5TaWRlYmFyTW9kYWwpLmNsYXNzTmFtZSA9ICdhZGRCdG5TaWRlYmFyTW9kYWwnO1xuXG4gICAgY29uc3QgY2FuY2VsUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbFByb2plY3Quc2V0QXR0cmlidXRlKCdkYXRhLWNsb3NlLWJ1dHRvbi1wcm9qZWN0JywnI3NpZGViYXJNb2RhbCcpOyAvLyB0YXJnZXRzIHRoZSBtb2RhbCAoIGZvcm0gZWwgKVxuICAgIGNhbmNlbFByb2plY3Quc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG4gICAgY2FuY2VsUHJvamVjdC50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIHNpZGViYXJNb2RhbC5hcHBlbmRDaGlsZChjYW5jZWxQcm9qZWN0KS5jbGFzc05hbWUgPSAnY2FuY2VsUHJvamVjdCc7XG5cbiAgICBhZGRCdG5TaWRlYmFyTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgbWFrZVByb2plY3QoKTtcbiAgICB9KVxuXG4gICAgfVxuXG4gICAgXG4gXG4gICAgZnVuY3Rpb24gbWFrZVByb2plY3QoKXtcbiAgICAgICAgY29uc3QgbGlzdFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RQcm9qZWN0cycpXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwalRpdGxlJykudmFsdWU7IFxuICAgICAgICBcbiAgICAgICAgY29uc3QgYWN0dWFsUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBsaXN0UHJvamVjdHMuYXBwZW5kQ2hpbGQoYWN0dWFsUHJvamVjdCkuY2xhc3NOYW1lID0gJ2FjdHVhbFByb2plY3QnO1xuICAgIFxuICAgICAgICBjb25zdCB0aXRsZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGl0bGVQcm9qZWN0LnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgIGFjdHVhbFByb2plY3QuYXBwZW5kQ2hpbGQodGl0bGVQcm9qZWN0KTtcbiAgICBcbiAgICAgICAgY29uc3Qgcm12UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBybXZQcm9qZWN0LnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICBhY3R1YWxQcm9qZWN0LmFwcGVuZENoaWxkKHJtdlByb2plY3QpLmNsYXNzTmFtZSA9ICdybXZQcm9qZWN0JztcbiAgICBcbiAgICAgICAgZm9yICggbGV0IGkgPSAwIDsgaSA8IGxpc3RQcm9qZWN0cy5jaGlsZHJlbi5sZW5ndGggOyBpKyspe1xuICAgICAgICAgICAgYWN0dWFsUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGotaW5kZXgnLGkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn1cblxuZnVuY3Rpb24gcGpSZW5kZXIocHJvamVjdFRpdGxlKXtcbiAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveCcpO1xuXG4gICAgY29uc3QgcGpUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBqVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0VGl0bGU7XG4gICAgaW5ib3guYXBwZW5kQ2hpbGQocGpUaXRsZSkuY2xhc3NOYW1lID0gJ3BqVGl0bGUnO1xuXG4gICAgLypjb25zdCBsaXN0T2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5ib3guYXBwZW5kQ2hpbGQobGlzdE9iaikuY2xhc3NOYW1lID0gJ2xpc3RPYmonOyovXG59XG5cblxuZXhwb3J0IHsgc2lkZWJhciAsIHBqUmVuZGVyIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBwYWdlTGF5b3V0IH0gZnJvbSAnLi9wYWdlLmpzJztcbmltcG9ydCB7IGluYm94ICwgdG9kYXlUb2RvICwgd2Vla1RvZG99IGZyb20gJy4vaW5ib3guanMnO1xuaW1wb3J0IHsgbW9kYWwgfSBmcm9tICcuL21vZGFsLmpzJzsgIFxuaW1wb3J0IHsgc2lkZWJhciAsIHBqUmVuZGVyIH0gZnJvbSAnLi9zaWRlLWJhci5qcyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5wYWdlTGF5b3V0KCk7IC8vICAgLSBsb2NhbHN0b3JhZ2UgXG5pbmJveCgpO1xubW9kYWwoKTtcbnNpZGViYXIoKTtcblxuY29uc3QgaW5ib3hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3hCdG4nKTtcbmluYm94QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGVtcHR5TWFpbihtYWluKTtcbiAgICBpbmJveCgpO1xuICAgIGluYm94TW9kYWwoKTsgXG59KVxuXG5jb25zdCB0b2RheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheVRvZG8nKTtcbnRvZGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGVtcHR5TWFpbihtYWluKTtcbiAgICB0b2RheVRvZG8oKTtcbn0pXG5cbmNvbnN0IHdlZWtCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2Vla1RvZG8nKTtcbndlZWtCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZW1wdHlNYWluKG1haW4pO1xuICAgIHdlZWtUb2RvKCk7XG59KVxuXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94Jyk7XG5mdW5jdGlvbiBlbXB0eU1haW4oZWxlbWVudCkge1xuICAgIHdoaWxlKGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpe1xuICAgICAgIGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQucmVtb3ZlKCk7IFxuICAgIH1cbn1cblxuXG5cbi8qY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXBqLWluZGV4XScpOyovXG4vKnByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZW1wdHlNYWluKG1haW4pO1xufSkqL1xuZnVuY3Rpb24gcHJvamVjdHNSZW5kZXIoZXZlbnQpe1xuICAgIGlmICggZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJhY3R1YWxQcm9qZWN0XCIpe1xuICAgICAgIGVtcHR5TWFpbihtYWluKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXBqLWluZGV4Jyk7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcGotaW5kZXhdJylbaW5kZXhdO1xuICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvamVjdC50ZXh0Q29udGVudC5zbGljZSgwLC0xKTsgIC8vIGdldCB0aGUgdGl0bGUgb2YgdGhlIGVsXG4gICAgXG4gICAgICBwalJlbmRlcihwcm9qZWN0VGl0bGUpO1xuICAgIH1cbn1cblxuXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBwcm9qZWN0c1JlbmRlcihldmVudCk7XG59KTtcblxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgcmVtb3ZlVG9kbyhldmVudCk7XG59KTtcblxuZnVuY3Rpb24gcmVtb3ZlVG9kbyhldmVudCl7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09IFwicm12T2JqXCIpe1xuICAgICAgICBjb25zdCBpbmRleCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vYmotaW5kZXgnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtb2JqLWluZGV4XScpW2luZGV4XS5yZW1vdmUoKTtcblxuICAgICAgICBjb25zdCBudW1PYmogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdE9iaicpO1xuICAgICAgICBmb3IgKCBsZXQgaSA9IDAgOyBpIDwgbnVtT2JqLmNoaWxkcmVuLmxlbmd0aCA7IGkrKyl7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1vYmotaW5kZXhdJylbaV0uc2V0QXR0cmlidXRlKCdkYXRhLW9iai1pbmRleCcsIGkgKTsgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJybXZQcm9qZWN0XCIpe1xuICAgICAgICBjb25zdCBpbmRleCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wai1pbmRleCcpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wai1pbmRleF0nKVtpbmRleF0ucmVtb3ZlKCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBudW1QaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0UHJvamVjdHMnKTtcblxuICAgXG4gICAgZm9yICggbGV0IGkgPSAwIDsgaSA8IG51bVBqLmNoaWxkcmVuLmxlbmd0aCA7IGkrKyl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXBqLWluZGV4XScpW2ldLnNldEF0dHJpYnV0ZSgnZGF0YS1wai1pbmRleCcsIGkgKTtcbiAgICB9XG4gICAgfVxufVxuXG4vLyBNb2RhbFxuXG5jb25zdCBjbG9zZU1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNsb3NlLWJ1dHRvbl0nKTtcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpO1xuXG5pbmJveE1vZGFsKCk7XG5mdW5jdGlvbiBpbmJveE1vZGFsKCl7XG4gICAgY29uc3Qgb3Blbk1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZGFsLXRhcmdldF0nKTtcbiAgICBcbiAgICBvcGVuTW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbi5kYXRhc2V0Lm1vZGFsVGFyZ2V0KTtcbiAgICAgICAgICAgIG9wZW5Nb2RhbChtb2RhbCk7XG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCl7XG4gICAgICAgIGlmICggbW9kYWwgPT0gbnVsbCApIHJldHVyblxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9ICAgXG59XG5cbmNsb3NlTW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXR0b24uZGF0YXNldC5jbG9zZUJ1dHRvbik7XG4gICAgICAgIGNsb3NlTW9kYWwobW9kYWwpO1xuICAgIH0pXG59KVxuXG5mdW5jdGlvbiBjbG9zZU1vZGFsKG1vZGFsKXtcbiAgICBpZiAoIG1vZGFsID09IG51bGwgKSByZXR1cm5cbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xufVxuXG5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XG4gICAgY29uc3QgbW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybS5hY3RpdmUnKTtcbiAgICBtb2RhbHMuZm9yRWFjaChtb2RhbCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKG1vZGFscyk7XG4gICAgICBjbG9zZU1vZGFsKG1vZGFsKTtcbiAgICB9KVxufSlcbi8vIFNpZGViYXIgbW9kYWxcbmNvbnN0IG9wZW5TaWRlYmFyQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZGFsLXRhcmdldC1wcm9qZWN0XScpO1xuY29uc3QgY2xvc2VTaWRlYmFyQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNsb3NlLWJ1dHRvbi1wcm9qZWN0XScpO1xuXG5vcGVuU2lkZWJhckJ0bnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2lkZWJhck1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXR0b24uZGF0YXNldC5tb2RhbFRhcmdldFByb2plY3QpO1xuICAgICAgICBvcGVuU2lkZWJhck1vZGFsKHNpZGViYXJNb2RhbCk7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfSlcbn0pXG5cbmZ1bmN0aW9uIG9wZW5TaWRlYmFyTW9kYWwoc2lkZWJhck1vZGFsKXtcbiAgICBpZiAoIHNpZGViYXJNb2RhbCA9PSBudWxsICkgcmV0dXJuXG4gICAgc2lkZWJhck1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufSAgIFxuXG5jbG9zZVNpZGViYXJCdG5zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNpZGViYXJNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnV0dG9uLmRhdGFzZXQuY2xvc2VCdXR0b25Qcm9qZWN0KTtcbiAgICAgICAgY2xvc2VTaWRlYmFyTW9kYWwoc2lkZWJhck1vZGFsKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9KVxufSlcblxuZnVuY3Rpb24gIGNsb3NlU2lkZWJhck1vZGFsKHNpZGViYXJNb2RhbCl7XG4gICAgaWYgKCBzaWRlYmFyTW9kYWwgPT0gbnVsbCApIHJldHVyblxuICAgIHNpZGViYXJNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG4vKipQcmV2ZW50cyBjaHJvbWUgcG9wIHVwIHdpbmRvdyB3aGVuIHJlZnJlc2hpbmcqL1xuaWYgKCB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgKSB7XG4gICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKCBudWxsLCBudWxsLCB3aW5kb3cubG9jYXRpb24uaHJlZiApO1xuICB9XG5cbiAgLypjbGFzcyBUb2Rve1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHkpeyAgIFxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cblxufVxuXG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFRhc2snKTsgXG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgY29uc3QgbWFrZVRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkQnRuJyk7IFxuICAgIG1ha2VUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIFxuICAgIFxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlOyBcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWU7ICAgICAgICAgICAgIFxuICAgICAgIFxuICAgICAgICBtYWtlVG9kb28odGl0bGUsZGVzY3JpcHRpb24sZGF0ZSxkaXNwbGF5UmFkaW9WYWx1ZSgpKTsgXG4gICAgfSlcbn0pXG5cbmZ1bmN0aW9uICBtYWtlVG9kb28odGl0bGUsZGVzY3JpcHRpb24sZGF0ZSxwcmlvcml0eSl7XG4gICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKHRpdGxlLGRlc2NyaXB0aW9uLGRhdGUscHJpb3JpdHkpO1xuICAgIGNvbnNvbGUubG9nKHRvZG8pO1xuXG59Ki9cblxuLypmdW5jdGlvbiBjbGVhckZvcm0oKXtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZSA9ICcnO1xuICAgIGxldCBhdXRob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0aG9yJykudmFsdWUgPSAnJztcbiAgICBsZXQgcGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZXMnKS52YWx1ZSA9ICcnO1xufSovXG5cbi8qZnVuY3Rpb24gZGlzcGxheVJhZGlvVmFsdWUoKSB7XG4gICAgY29uc3QgZWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3RpY2tldF90eXBlJyk7XG4gICAgbGV0IHByaW9yaXR5O1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGVsZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihlbGVbaV0uY2hlY2tlZCl7XG4gICAgICAgIHByaW9yaXR5ID0gZWxlW2ldLnZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcmlvcml0eTtcbn0qLyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==