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
         /*clearModal(); */ // creates empty obj's but you are not using them anyway, dom is good.
    
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
        
        saveProject();
        
        
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
     
        function saveProject(){

            let project_serialized = JSON.stringify({'project' : title}); // one changing var , one static ( project )

            let projectNum = 0; 

            Object.keys(localStorage).forEach(function(key){
                projectNum++; 
            });

            let projecto = localStorage.setItem(projectNum,project_serialized);
            
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
(0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.modal)();    
(0,_side_bar_js__WEBPACK_IMPORTED_MODULE_3__.sidebar)();

const inboxBtn = document.querySelector('.inboxBtn');
inboxBtn.addEventListener('click', () => {
    emptyMain(main);
    (0,_inbox_js__WEBPACK_IMPORTED_MODULE_1__.inbox)();
    inboxModal(); // might need to add something here again 
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



document.addEventListener('click', (event) => {
    removeTodo(event);
});

function removeTodo(event){ // razdeli funkciqta na 2 
    if (event.target.className === "rmvObj"){
        const index = event.target.parentElement.getAttribute('data-obj-index'); 
        document.querySelectorAll('[data-obj-index]')[index].remove();

        let indexLocalStorage = Object.keys(localStorage).sort()[index];
        localStorage.removeItem(indexLocalStorage); // maha izbran element, ne gleda dali e task ili pj .. trqbva da updatetvam key-a
        

        const numObj = document.querySelector('.listObj');
        for ( let i = 0 ; i < numObj.children.length ; i++){ 
          
            let index = Object.keys(localStorage).sort()[i]; // vsichkite , sortnati , za kolkoto deca ima, ot nai malkiq index.
            let value = localStorage.getItem(index); // vzemi stoinosta na izbraniq element
            localStorage.removeItem(index); // premahni izbraniq element
            let updateKey = localStorage.setItem(i,value); // napravi nov element sus sushtata stoinost i updatenat key 
            

            document.querySelectorAll('[data-obj-index]')[i].setAttribute('data-obj-index', i ); // index
        }
    }

    if (event.target.className === "rmvProject"){
        const index = event.target.parentElement.getAttribute('data-pj-index'); 
        document.querySelectorAll('[data-pj-index]')[index].remove();
        
        let indexLocalStorage = Object.keys(localStorage).sort()[index];
        localStorage.removeItem(indexLocalStorage); 

        const numPj = document.querySelector('.listProjects');

   
    for ( let i = 0 ; i < numPj.children.length ; i++){

        let index = Object.keys(localStorage).sort()[i]; 
            let value = localStorage.getItem(index); 
            localStorage.removeItem(index); 
            let updateKey = localStorage.setItem(i,value); 


        document.querySelectorAll('[data-pj-index]')[i].setAttribute('data-pj-index', i ); //index
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

class Todo{
    constructor(title,description,dueDate,priority){   
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

const makeTodo = document.querySelector('.addBtn'); 
makeTodo.addEventListener('click', () => {

    const title = document.getElementById('title').value; 
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;             
   
    makeTodoo(title,description,date,displayRadioValue()); 

})


function  makeTodoo(title,description,date,priority){
    const todo = new Todo(title,description,date,priority);
    save(todo);
    console.log('lqlq');
}

function save(todo){
    let num = 0;
    let todo_serialized = JSON.stringify(todo); 
    let task_serialized = JSON.stringify({'task' : todo_serialized}); 
    
    Object.keys(localStorage).forEach(function(key){ 
        num++; 
     });
     
    let setStorage = localStorage.setItem(num, task_serialized);

    let todo_deserialized = JSON.parse(localStorage.getItem(num));
}



function get(){

    
}

/*function clearForm(){
    let title = document.getElementById('title').value = '';
    let author = document.getElementById('author').value = '';
    let pages = document.getElementById('pages').value = '';
}*/

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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMseUJBQXlCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGdCQUFnQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9pbmJveC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL3NpZGUtYmFyLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmJveCAtIG1haW4vbWlkZGxlIGNvbnRlbnRcblxuZnVuY3Rpb24gaW5ib3goKXtcbiAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveCcpOy8vIGZyb20gcGFnZS5qc1xuXG4gICAgY29uc3QgaW5ib3hUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluYm94VGl0bGUudGV4dENvbnRlbnQgPSAnSW5ib3gnO1xuICAgIGluYm94LmFwcGVuZENoaWxkKGluYm94VGl0bGUpLmNsYXNzTmFtZSA9ICdpbmJveFRpdGxlJztcblxuICAgIGNvbnN0IGxpc3RPYmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmJveC5hcHBlbmRDaGlsZChsaXN0T2JqKS5jbGFzc05hbWUgPSAnbGlzdE9iaic7XG5cbiAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IFxuICAgIGFkZFRhc2sudGV4dENvbnRlbnQgPSAnKyBBZGQgVGFzayc7XG4gICAgYWRkVGFzay5zZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kYWwtdGFyZ2V0JywnI21vZGFsJyk7IC8vIDFzdCBidXR0b24gdGFyZ2V0aW5nIG1vZGFsICggdGhlIGZvcm0gZWxlbWVudCApXG4gICAgaW5ib3guYXBwZW5kQ2hpbGQoYWRkVGFzaykuY2xhc3NOYW1lID0gJ2FkZFRhc2snO1xufVxuXG5mdW5jdGlvbiB0b2RheVRvZG8oKXtcbiAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveCcpOy8vIGZyb20gcGFnZS5qc1xuXG4gICAgY29uc3QgdG9kYXlUb2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RheVRvZG9UaXRsZS50ZXh0Q29udGVudCA9ICdUb2RheSc7XG4gICAgaW5ib3guYXBwZW5kQ2hpbGQodG9kYXlUb2RvVGl0bGUpLmNsYXNzTmFtZSA9ICd0b2RheVRvZG9UaXRsZSc7XG5cbiAgICBjb25zdCBsaXN0T2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5ib3guYXBwZW5kQ2hpbGQobGlzdE9iaikuY2xhc3NOYW1lID0gJ2xpc3RPYmonO1xuXG59XG5cbmZ1bmN0aW9uIHdlZWtUb2RvKCl7XG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gnKTsvLyBmcm9tIHBhZ2UuanNcblxuICAgIGNvbnN0IHdlZWtUb2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3ZWVrVG9kb1RpdGxlLnRleHRDb250ZW50ID0gJ1RoaXMgd2Vlayc7XG4gICAgaW5ib3guYXBwZW5kQ2hpbGQod2Vla1RvZG9UaXRsZSkuY2xhc3NOYW1lID0gJ3dlZWtUb2RvVGl0bGUnO1xuXG4gICAgY29uc3QgbGlzdE9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluYm94LmFwcGVuZENoaWxkKGxpc3RPYmopLmNsYXNzTmFtZSA9ICdsaXN0T2JqJztcbn1cblxuZXhwb3J0IHsgaW5ib3ggLCB0b2RheVRvZG8gLCB3ZWVrVG9kbyB9OyIsImZ1bmN0aW9uIG1vZGFsKCl7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcmVudCcpOyBcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgXCJwb3N0XCIpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwiXCIpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIixcIm1vZGFsXCIpOyAvLyBkYXRhIGF0dHJpYnV0ZSBvZiB0aGUgYnV0dG9ucyB3aWxsIHRhcmdldCB0aGlzIGlkXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZVwiKTtcbiAgICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUaXRsZVwiKTtcbiAgICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIixcInRpdGxlXCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcblxuICAgIGNvbnN0IHRvZG9EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvRGVzYy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICB0b2RvRGVzYy5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gICAgdG9kb0Rlc2Muc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJEZXNjcmlwdGlvblwiKTtcbiAgICB0b2RvRGVzYy5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiZGVzY3JpcHRpb25cIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0b2RvRGVzYyk7XG5cbiAgICBjb25zdCB0b2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0RhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gICAgdG9kb0RhdGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRhdGVcIik7XG4gICAgdG9kb0RhdGUuc2V0QXR0cmlidXRlKFwiaWRcIixcImRhdGVcIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0b2RvRGF0ZSk7XG5cbiAgICBjb25zdCB0b2RvSW1wb3J0YW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0ltcG9ydGFuY2Uuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuICAgIHRvZG9JbXBvcnRhbmNlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aWNrZXRfdHlwZVwiKTtcbiAgICB0b2RvSW1wb3J0YW5jZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiaW1wb3J0YW50XCIpO1xuICAgIHRvZG9JbXBvcnRhbmNlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCdJbXBvcnRhbnQnKTtcbiAgICBcbiAgICBjb25zdCBpbXBvcnRhbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGltcG9ydGFudC50ZXh0Q29udGVudCA9ICdJbXBvcnRhbnQnO1xuICAgIGltcG9ydGFudC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcImltcG9ydGFudFwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRvZG9JbXBvcnRhbmNlKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGltcG9ydGFudCk7XG5cbiAgICBjb25zdCB0b2RvSW1wb3J0YW5jZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9JbXBvcnRhbmNlMi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG4gICAgdG9kb0ltcG9ydGFuY2UyLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aWNrZXRfdHlwZVwiKTtcbiAgICB0b2RvSW1wb3J0YW5jZTIuc2V0QXR0cmlidXRlKFwiaWRcIixcImxlc3NJbXBvcnRhbnRcIilcbiAgICB0b2RvSW1wb3J0YW5jZTIuc2V0QXR0cmlidXRlKCdjaGVja2VkJywndHJ1ZScpO1xuICAgIHRvZG9JbXBvcnRhbmNlMi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnTm90IGltcG9ydGFudCcpO1xuXG4gICAgY29uc3QgbGVzc0ltcG9yYW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsZXNzSW1wb3JhbnQudGV4dENvbnRlbnQgPSAnTm90IGltcG9ydGFudCc7XG4gICAgbGVzc0ltcG9yYW50LnNldEF0dHJpYnV0ZShcImZvclwiLFwibGVzc0ltcG9ydGFudFwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRvZG9JbXBvcnRhbmNlMik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChsZXNzSW1wb3JhbnQpO1xuXG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9ICdBZGQnO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYWRkQnRuKS5jbGFzc05hbWUgPSAnYWRkQnRuJztcblxuICAgIGNvbnN0IHJtdkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJtdkJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xvc2UtYnV0dG9uJywnI21vZGFsJyk7IC8vIHRhcmdldHMgdGhlIG1vZGFsICggZm9ybSBlbCApXG4gICAgcm12QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuICAgIHJtdkJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocm12QnRuKS5jbGFzc05hbWUgPSAncm12QnRuJztcblxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvdmVybGF5LnNldEF0dHJpYnV0ZSgnaWQnLCdvdmVybGF5Jyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XG4gICAgICAgIG1ha2VPYmpET00oKTtcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gbWFrZU9iakRPTSgpeyAgXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTsgXG4gICAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZTtcblxuICAgIFxuICAgICAgICBjb25zdCBsaXN0T2JqID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RPYmonKTsgLy8gcGxhY2UgYWxsIHRvZG9zIGluIG9uZSBlbGVtZW50LCBtb3JlIGNvbWZ5IGZvciBjc3NcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAgIFxuICAgICAgICBsaXN0T2JqLmFwcGVuZENoaWxkKG9iaikuY2xhc3NOYW1lID0gJ29iaic7IFxuICAgICAgICBcbiAgICAgICAgY29uc3Qgb2JqVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG9ialRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgIG9iai5hcHBlbmRDaGlsZChvYmpUaXRsZSkuY2xhc3NOYW1lID0gJ29ialRpdGxlJztcbiAgICBcbiAgICAgICAgY29uc3Qgb2JqRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgb2JqRGVzYy50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICAgICAgICBvYmouYXBwZW5kQ2hpbGQob2JqRGVzYykuY2xhc3NOYW1lID0gJ29iakRlc2MnO1xuICAgIFxuICAgICAgICBjb25zdCBvYmpEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG9iakRhdGUudGV4dENvbnRlbnQgPSBkYXRlO1xuICAgICAgICBvYmouYXBwZW5kQ2hpbGQob2JqRGF0ZSkuY2xhc3NOYW1lID0gJ29iakRhdGUnO1xuICAgIFxuICAgICAgICBjb25zdCBybXZPYmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcm12T2JqLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuICAgICAgICBybXZPYmoudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgIG9iai5hcHBlbmRDaGlsZChybXZPYmopLmNsYXNzTmFtZSA9ICdybXZPYmonOyBcbiAgICBcbiAgICAgICAgaWYgKGRpc3BsYXlSYWRpb1ZhbHVlKCkgPT09ICdJbXBvcnRhbnQnKXtcbiAgICAgICAgICAgIGNvbnN0IGltcG9ydGFuY2VPYmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGltcG9ydGFuY2VPYmoudGV4dENvbnRlbnQgPSBkaXNwbGF5UmFkaW9WYWx1ZSgpO1xuICAgICAgICAgICAgb2JqLmFwcGVuZENoaWxkKGltcG9ydGFuY2VPYmopLmNsYXNzTmFtZSA9ICdpbXBvcnRhbmNlT2JqJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGRpc3BsYXlSYWRpb1ZhbHVlKCkgPT09ICdOb3QgaW1wb3J0YW50Jyl7XG4gICAgICAgICAgICBjb25zdCBsZXNzSW1wb3JhbnRPYmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxlc3NJbXBvcmFudE9iai50ZXh0Q29udGVudCA9IGRpc3BsYXlSYWRpb1ZhbHVlKCk7XG4gICAgICAgICAgICBvYmouYXBwZW5kQ2hpbGQobGVzc0ltcG9yYW50T2JqKS5jbGFzc05hbWUgPSAnbGVzc0ltcG9ydGFudE9iaic7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZm9yICggbGV0IGkgPSAwIDsgaSA8IGxpc3RPYmouY2hpbGRyZW4ubGVuZ3RoIDsgaSsrKXtcbiAgICAgICAgICAgIG9iai5zZXRBdHRyaWJ1dGUoJ2RhdGEtb2JqLWluZGV4JyxpKTtcbiAgICAgICAgfVxuICAgICAgICAgLypjbGVhck1vZGFsKCk7ICovIC8vIGNyZWF0ZXMgZW1wdHkgb2JqJ3MgYnV0IHlvdSBhcmUgbm90IHVzaW5nIHRoZW0gYW55d2F5LCBkb20gaXMgZ29vZC5cbiAgICBcbiAgICAgICAgIGZ1bmN0aW9uIGRpc3BsYXlSYWRpb1ZhbHVlKCkge1xuICAgICAgICAgICAgY29uc3QgZWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3RpY2tldF90eXBlJyk7XG4gICAgICAgICAgICBsZXQgcHJpb3JpdHk7XG4gICAgICAgIFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGUubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGlmIChlbGVbaV0uY2hlY2tlZCl7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHkgPSBlbGVbaV0udmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHByaW9yaXR5O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGNsZWFyTW9kYWwoKXsgLy8gY2xlYXIgcmFkaW8gYnV0dCB0b29cbiAgICAgICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlID0gJyc7XG4gICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZSA9ICcnOyBcbiAgICAgICAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZSA9ICcnOyAvLyBjbGVhcnMgZm9ybXNcbiAgICBcbiAgICAgICAgfVxuICAgIFxuICAgICAgICB9XG59XG5cblxuXG5leHBvcnQgeyBtb2RhbCB9OyIsIi8vIGluaXRpYWwgcGFnZSBsYXlvdXQgXG5cbmZ1bmN0aW9uIHBhZ2VMYXlvdXQoKXtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFyZW50Jyk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnVG8tZG8gTGlzdCc7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGhlYWRlcikuY2xhc3NOYW1lID0gJ2hlYWRlcic7XG5cbiAgICBjb25zdCB0aWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdGljay5zcmMgPSAncGljdHVyZXMvY2hlY2sucG5nJztcbiAgICB0aWNrLmFsdCA9ICdjaGVjay1waWMnO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aWNrKTtcblxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoc2lkZWJhcikuY2xhc3NOYW1lID0gJ3NpZGViYXInO1xuXG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaW5ib3gpLmNsYXNzTmFtZSA9ICdpbmJveCc7XG5cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKS5jbGFzc05hbWUgPSAnZm9vdGVyJztcbn1cblxuZXhwb3J0IHsgcGFnZUxheW91dCB9OyAiLCIvLyBzdGFydCB3aXRoIHRoZSBpbmJveCBidXR0b25cblxuZnVuY3Rpb24gc2lkZWJhcigpe1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuXG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBpbmJveC50ZXh0Q29udGVudCA9IFwiSW5ib3hcIjtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGluYm94KS5jbGFzc05hbWUgPSAnaW5ib3hCdG4nO1xuXG4gICAgY29uc3QgdG9kYXlUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdG9kYXlUb2RvLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQodG9kYXlUb2RvKS5jbGFzc05hbWUgPSAndG9kYXlUb2RvJztcblxuICAgIGNvbnN0IHdlZWtUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgd2Vla1RvZG8udGV4dENvbnRlbnQgPSAnVGhpcyBXZWVrJztcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHdlZWtUb2RvKS5jbGFzc05hbWUgPSAnd2Vla1RvZG8nO1xuXG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0cy50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0cykuY2xhc3NOYW1lID0gJ3Byb2plY3RzJztcblxuICAgIGNvbnN0IGxpc3RQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQobGlzdFByb2plY3RzKS5jbGFzc05hbWUgPSAnbGlzdFByb2plY3RzJztcblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgXG4gICAgYWRkUHJvamVjdC50ZXh0Q29udGVudCA9ICcrIEFkZCBQcm9qZWN0JztcbiAgICBhZGRQcm9qZWN0LnNldEF0dHJpYnV0ZSgnZGF0YS1tb2RhbC10YXJnZXQtcHJvamVjdCcsJyNzaWRlYmFyTW9kYWwnKTsgLy8gYnV0dG9uIHRhcmdldGluZyB0aGUgc2lkZWJhciBtb2RhbFxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCkuY2xhc3NOYW1lID0gJ2FkZFByb2plY3QnO1xuXG4gICAgc2lkZWJhck1vZGFsKCk7XG4gICAgZnVuY3Rpb24gc2lkZWJhck1vZGFsKCl7XG4gICAgICAgIGNvbnN0IHNpZGViYXJNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgc2lkZWJhck1vZGFsLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcInBvc3RcIik7XG4gICAgICAgIHNpZGViYXJNb2RhbC5zZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiwgXCJcIik7XG4gICAgICAgIHNpZGViYXJNb2RhbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwic2lkZWJhck1vZGFsXCIpOyAvLyBkYXRhIGF0dHJpYnV0ZSBvZiB0aGUgYnV0dG9ucyB3aWxsIHRhcmdldCB0aGlzIGlkXG4gICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoc2lkZWJhck1vZGFsKTtcblxuICAgICAgICBjb25zdCBwalRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgcGpUaXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICAgICAgcGpUaXRsZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGl0bGVcIik7XG4gICAgICAgIHBqVGl0bGUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUaXRsZVwiKTtcbiAgICAgICAgcGpUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwicGpUaXRsZVwiKTtcbiAgICAgICAgc2lkZWJhck1vZGFsLmFwcGVuZENoaWxkKHBqVGl0bGUpO1xuXG4gICAgY29uc3QgYWRkQnRuU2lkZWJhck1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IFxuICAgIGFkZEJ0blNpZGViYXJNb2RhbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcbiAgICBhZGRCdG5TaWRlYmFyTW9kYWwudGV4dENvbnRlbnQgPSAnQWRkJztcbiAgICBzaWRlYmFyTW9kYWwuYXBwZW5kQ2hpbGQoYWRkQnRuU2lkZWJhck1vZGFsKS5jbGFzc05hbWUgPSAnYWRkQnRuU2lkZWJhck1vZGFsJztcblxuICAgIGNvbnN0IGNhbmNlbFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxQcm9qZWN0LnNldEF0dHJpYnV0ZSgnZGF0YS1jbG9zZS1idXR0b24tcHJvamVjdCcsJyNzaWRlYmFyTW9kYWwnKTsgLy8gdGFyZ2V0cyB0aGUgbW9kYWwgKCBmb3JtIGVsIClcbiAgICBjYW5jZWxQcm9qZWN0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuICAgIGNhbmNlbFByb2plY3QudGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICBzaWRlYmFyTW9kYWwuYXBwZW5kQ2hpbGQoY2FuY2VsUHJvamVjdCkuY2xhc3NOYW1lID0gJ2NhbmNlbFByb2plY3QnO1xuXG4gICAgYWRkQnRuU2lkZWJhck1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgIG1ha2VQcm9qZWN0KCk7XG4gICAgfSlcblxuICAgIH1cblxuICAgIFxuIFxuICAgIGZ1bmN0aW9uIG1ha2VQcm9qZWN0KCl7XG4gICAgICAgIGNvbnN0IGxpc3RQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0UHJvamVjdHMnKVxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGpUaXRsZScpLnZhbHVlO1xuICAgICAgICBcbiAgICAgICAgc2F2ZVByb2plY3QoKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBjb25zdCBhY3R1YWxQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGxpc3RQcm9qZWN0cy5hcHBlbmRDaGlsZChhY3R1YWxQcm9qZWN0KS5jbGFzc05hbWUgPSAnYWN0dWFsUHJvamVjdCc7XG4gICAgXG4gICAgICAgIGNvbnN0IHRpdGxlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZVByb2plY3QudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgYWN0dWFsUHJvamVjdC5hcHBlbmRDaGlsZCh0aXRsZVByb2plY3QpO1xuICAgIFxuICAgICAgICBjb25zdCBybXZQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHJtdlByb2plY3QudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgIGFjdHVhbFByb2plY3QuYXBwZW5kQ2hpbGQocm12UHJvamVjdCkuY2xhc3NOYW1lID0gJ3JtdlByb2plY3QnO1xuICAgIFxuICAgICAgICBmb3IgKCBsZXQgaSA9IDAgOyBpIDwgbGlzdFByb2plY3RzLmNoaWxkcmVuLmxlbmd0aCA7IGkrKyl7XG4gICAgICAgICAgICBhY3R1YWxQcm9qZWN0LnNldEF0dHJpYnV0ZSgnZGF0YS1wai1pbmRleCcsaSk7XG4gICAgICAgIH1cbiAgICAgXG4gICAgICAgIGZ1bmN0aW9uIHNhdmVQcm9qZWN0KCl7XG5cbiAgICAgICAgICAgIGxldCBwcm9qZWN0X3NlcmlhbGl6ZWQgPSBKU09OLnN0cmluZ2lmeSh7J3Byb2plY3QnIDogdGl0bGV9KTsgLy8gb25lIGNoYW5naW5nIHZhciAsIG9uZSBzdGF0aWMgKCBwcm9qZWN0IClcblxuICAgICAgICAgICAgbGV0IHByb2plY3ROdW0gPSAwOyBcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7XG4gICAgICAgICAgICAgICAgcHJvamVjdE51bSsrOyBcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsZXQgcHJvamVjdG8gPSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0TnVtLHByb2plY3Rfc2VyaWFsaXplZCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcGpSZW5kZXIocHJvamVjdFRpdGxlKXtcbiAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveCcpO1xuXG4gICAgY29uc3QgcGpUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBqVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0VGl0bGU7XG4gICAgaW5ib3guYXBwZW5kQ2hpbGQocGpUaXRsZSkuY2xhc3NOYW1lID0gJ3BqVGl0bGUnO1xuXG4gICAgLypjb25zdCBsaXN0T2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5ib3guYXBwZW5kQ2hpbGQobGlzdE9iaikuY2xhc3NOYW1lID0gJ2xpc3RPYmonOyovXG59XG5cblxuZXhwb3J0IHsgc2lkZWJhciAsIHBqUmVuZGVyIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBwYWdlTGF5b3V0IH0gZnJvbSAnLi9wYWdlLmpzJztcbmltcG9ydCB7IGluYm94ICwgdG9kYXlUb2RvICwgd2Vla1RvZG99IGZyb20gJy4vaW5ib3guanMnO1xuaW1wb3J0IHsgbW9kYWwgfSBmcm9tICcuL21vZGFsLmpzJzsgIFxuaW1wb3J0IHsgc2lkZWJhciAsIHBqUmVuZGVyIH0gZnJvbSAnLi9zaWRlLWJhci5qcyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5wYWdlTGF5b3V0KCk7IFxuaW5ib3goKTtcbm1vZGFsKCk7ICAgIFxuc2lkZWJhcigpO1xuXG5jb25zdCBpbmJveEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveEJ0bicpO1xuaW5ib3hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZW1wdHlNYWluKG1haW4pO1xuICAgIGluYm94KCk7XG4gICAgaW5ib3hNb2RhbCgpOyAvLyBtaWdodCBuZWVkIHRvIGFkZCBzb21ldGhpbmcgaGVyZSBhZ2FpbiBcbn0pXG5cbmNvbnN0IHRvZGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5VG9kbycpO1xudG9kYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZW1wdHlNYWluKG1haW4pO1xuICAgIHRvZGF5VG9kbygpO1xufSlcblxuY29uc3Qgd2Vla0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWVrVG9kbycpO1xud2Vla0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBlbXB0eU1haW4obWFpbik7XG4gICAgd2Vla1RvZG8oKTtcbn0pXG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gnKTtcbmZ1bmN0aW9uIGVtcHR5TWFpbihlbGVtZW50KSB7XG4gICAgd2hpbGUoZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCl7XG4gICAgICAgZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTsgXG4gICAgfVxufVxuXG5mdW5jdGlvbiBwcm9qZWN0c1JlbmRlcihldmVudCl7XG4gICAgaWYgKCBldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSBcImFjdHVhbFByb2plY3RcIil7XG4gICAgICAgZW1wdHlNYWluKG1haW4pO1xuICAgICAgICBjb25zdCBpbmRleCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGotaW5kZXgnKTtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wai1pbmRleF0nKVtpbmRleF07XG4gICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBwcm9qZWN0LnRleHRDb250ZW50LnNsaWNlKDAsLTEpOyAgXG4gICAgXG4gICAgICBwalJlbmRlcihwcm9qZWN0VGl0bGUpO1xuICAgIH1cbn1cblxuXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBwcm9qZWN0c1JlbmRlcihldmVudCk7XG59KTtcblxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgcmVtb3ZlVG9kbyhldmVudCk7XG59KTtcblxuZnVuY3Rpb24gcmVtb3ZlVG9kbyhldmVudCl7IC8vIHJhemRlbGkgZnVua2NpcXRhIG5hIDIgXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09IFwicm12T2JqXCIpe1xuICAgICAgICBjb25zdCBpbmRleCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vYmotaW5kZXgnKTsgXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW9iai1pbmRleF0nKVtpbmRleF0ucmVtb3ZlKCk7XG5cbiAgICAgICAgbGV0IGluZGV4TG9jYWxTdG9yYWdlID0gT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5zb3J0KClbaW5kZXhdO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShpbmRleExvY2FsU3RvcmFnZSk7IC8vIG1haGEgaXpicmFuIGVsZW1lbnQsIG5lIGdsZWRhIGRhbGkgZSB0YXNrIGlsaSBwaiAuLiB0cnFidmEgZGEgdXBkYXRldHZhbSBrZXktYVxuICAgICAgICBcblxuICAgICAgICBjb25zdCBudW1PYmogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdE9iaicpO1xuICAgICAgICBmb3IgKCBsZXQgaSA9IDAgOyBpIDwgbnVtT2JqLmNoaWxkcmVuLmxlbmd0aCA7IGkrKyl7IFxuICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGluZGV4ID0gT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5zb3J0KClbaV07IC8vIHZzaWNoa2l0ZSAsIHNvcnRuYXRpICwgemEga29sa290byBkZWNhIGltYSwgb3QgbmFpIG1hbGtpcSBpbmRleC5cbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGluZGV4KTsgLy8gdnplbWkgc3RvaW5vc3RhIG5hIGl6YnJhbmlxIGVsZW1lbnRcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGluZGV4KTsgLy8gcHJlbWFobmkgaXpicmFuaXEgZWxlbWVudFxuICAgICAgICAgICAgbGV0IHVwZGF0ZUtleSA9IGxvY2FsU3RvcmFnZS5zZXRJdGVtKGksdmFsdWUpOyAvLyBuYXByYXZpIG5vdiBlbGVtZW50IHN1cyBzdXNodGF0YSBzdG9pbm9zdCBpIHVwZGF0ZW5hdCBrZXkgXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtb2JqLWluZGV4XScpW2ldLnNldEF0dHJpYnV0ZSgnZGF0YS1vYmotaW5kZXgnLCBpICk7IC8vIGluZGV4XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJybXZQcm9qZWN0XCIpe1xuICAgICAgICBjb25zdCBpbmRleCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wai1pbmRleCcpOyBcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcGotaW5kZXhdJylbaW5kZXhdLnJlbW92ZSgpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGluZGV4TG9jYWxTdG9yYWdlID0gT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5zb3J0KClbaW5kZXhdO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShpbmRleExvY2FsU3RvcmFnZSk7IFxuXG4gICAgICAgIGNvbnN0IG51bVBqID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RQcm9qZWN0cycpO1xuXG4gICBcbiAgICBmb3IgKCBsZXQgaSA9IDAgOyBpIDwgbnVtUGouY2hpbGRyZW4ubGVuZ3RoIDsgaSsrKXtcblxuICAgICAgICBsZXQgaW5kZXggPSBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLnNvcnQoKVtpXTsgXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpbmRleCk7IFxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oaW5kZXgpOyBcbiAgICAgICAgICAgIGxldCB1cGRhdGVLZXkgPSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpLHZhbHVlKTsgXG5cblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wai1pbmRleF0nKVtpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGotaW5kZXgnLCBpICk7IC8vaW5kZXhcbiAgICB9XG4gICAgfVxufVxuXG4vLyBNb2RhbFxuXG5jb25zdCBjbG9zZU1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNsb3NlLWJ1dHRvbl0nKTtcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpO1xuXG5pbmJveE1vZGFsKCk7XG5mdW5jdGlvbiBpbmJveE1vZGFsKCl7XG4gICAgY29uc3Qgb3Blbk1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZGFsLXRhcmdldF0nKTtcbiAgICBcbiAgICBvcGVuTW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbi5kYXRhc2V0Lm1vZGFsVGFyZ2V0KTtcbiAgICAgICAgICAgIG9wZW5Nb2RhbChtb2RhbCk7XG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCl7XG4gICAgICAgIGlmICggbW9kYWwgPT0gbnVsbCApIHJldHVyblxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9ICAgXG59XG5cbmNsb3NlTW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXR0b24uZGF0YXNldC5jbG9zZUJ1dHRvbik7XG4gICAgICAgIGNsb3NlTW9kYWwobW9kYWwpO1xuICAgIH0pXG59KVxuXG5mdW5jdGlvbiBjbG9zZU1vZGFsKG1vZGFsKXtcbiAgICBpZiAoIG1vZGFsID09IG51bGwgKSByZXR1cm5cbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xufVxuXG5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XG4gICAgY29uc3QgbW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybS5hY3RpdmUnKTtcbiAgICBtb2RhbHMuZm9yRWFjaChtb2RhbCA9PiB7XG4gICAgICBjbG9zZU1vZGFsKG1vZGFsKTtcbiAgICB9KVxufSlcbi8vIFNpZGViYXIgbW9kYWxcbmNvbnN0IG9wZW5TaWRlYmFyQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZGFsLXRhcmdldC1wcm9qZWN0XScpO1xuY29uc3QgY2xvc2VTaWRlYmFyQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNsb3NlLWJ1dHRvbi1wcm9qZWN0XScpO1xuXG5vcGVuU2lkZWJhckJ0bnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2lkZWJhck1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXR0b24uZGF0YXNldC5tb2RhbFRhcmdldFByb2plY3QpO1xuICAgICAgICBvcGVuU2lkZWJhck1vZGFsKHNpZGViYXJNb2RhbCk7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfSlcbn0pXG5cbmZ1bmN0aW9uIG9wZW5TaWRlYmFyTW9kYWwoc2lkZWJhck1vZGFsKXtcbiAgICBpZiAoIHNpZGViYXJNb2RhbCA9PSBudWxsICkgcmV0dXJuXG4gICAgc2lkZWJhck1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufSAgIFxuXG5jbG9zZVNpZGViYXJCdG5zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNpZGViYXJNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnV0dG9uLmRhdGFzZXQuY2xvc2VCdXR0b25Qcm9qZWN0KTtcbiAgICAgICAgY2xvc2VTaWRlYmFyTW9kYWwoc2lkZWJhck1vZGFsKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9KVxufSlcblxuZnVuY3Rpb24gIGNsb3NlU2lkZWJhck1vZGFsKHNpZGViYXJNb2RhbCl7XG4gICAgaWYgKCBzaWRlYmFyTW9kYWwgPT0gbnVsbCApIHJldHVyblxuICAgIHNpZGViYXJNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbn1cblxuXG5cbi8qKlByZXZlbnRzIGNocm9tZSBwb3AgdXAgd2luZG93IHdoZW4gcmVmcmVzaGluZyovXG5pZiAoIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSApIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoIG51bGwsIG51bGwsIHdpbmRvdy5sb2NhdGlvbi5ocmVmICk7XG4gIH1cblxuY2xhc3MgVG9kb3tcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5KXsgICBcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG59XG5cbmNvbnN0IG1ha2VUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZEJ0bicpOyBcbm1ha2VUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTsgXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZTsgICAgICAgICAgICAgXG4gICBcbiAgICBtYWtlVG9kb28odGl0bGUsZGVzY3JpcHRpb24sZGF0ZSxkaXNwbGF5UmFkaW9WYWx1ZSgpKTsgXG5cbn0pXG5cblxuZnVuY3Rpb24gIG1ha2VUb2Rvbyh0aXRsZSxkZXNjcmlwdGlvbixkYXRlLHByaW9yaXR5KXtcbiAgICBjb25zdCB0b2RvID0gbmV3IFRvZG8odGl0bGUsZGVzY3JpcHRpb24sZGF0ZSxwcmlvcml0eSk7XG4gICAgc2F2ZSh0b2RvKTtcbiAgICBjb25zb2xlLmxvZygnbHFscScpO1xufVxuXG5mdW5jdGlvbiBzYXZlKHRvZG8pe1xuICAgIGxldCBudW0gPSAwO1xuICAgIGxldCB0b2RvX3NlcmlhbGl6ZWQgPSBKU09OLnN0cmluZ2lmeSh0b2RvKTsgXG4gICAgbGV0IHRhc2tfc2VyaWFsaXplZCA9IEpTT04uc3RyaW5naWZ5KHsndGFzaycgOiB0b2RvX3NlcmlhbGl6ZWR9KTsgXG4gICAgXG4gICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7IFxuICAgICAgICBudW0rKzsgXG4gICAgIH0pO1xuICAgICBcbiAgICBsZXQgc2V0U3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5zZXRJdGVtKG51bSwgdGFza19zZXJpYWxpemVkKTtcblxuICAgIGxldCB0b2RvX2Rlc2VyaWFsaXplZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obnVtKSk7XG59XG5cblxuXG5mdW5jdGlvbiBnZXQoKXtcblxuICAgIFxufVxuXG4vKmZ1bmN0aW9uIGNsZWFyRm9ybSgpe1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlID0gJyc7XG4gICAgbGV0IGF1dGhvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRob3InKS52YWx1ZSA9ICcnO1xuICAgIGxldCBwYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlcycpLnZhbHVlID0gJyc7XG59Ki9cblxuZnVuY3Rpb24gZGlzcGxheVJhZGlvVmFsdWUoKSB7XG4gICAgY29uc3QgZWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3RpY2tldF90eXBlJyk7XG4gICAgbGV0IHByaW9yaXR5O1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGVsZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihlbGVbaV0uY2hlY2tlZCl7XG4gICAgICAgIHByaW9yaXR5ID0gZWxlW2ldLnZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcmlvcml0eTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=