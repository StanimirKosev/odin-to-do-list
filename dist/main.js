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
            let projectNum = 0; // different variable
            Object.keys(localStorage).forEach(function(key){
                projectNum++; // increments on each obj
            });

            let projecto = localStorage.setItem(projectNum,title);
            console.log(localStorage);
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


  

                                  
(0,_page_js__WEBPACK_IMPORTED_MODULE_0__.pageLayout)(); //   - function that saves the project and todos.   1. from dom or from class
(0,_inbox_js__WEBPACK_IMPORTED_MODULE_1__.inbox)();
(0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.modal)();     // local storage , "clean code" + 1000 more things... rest needed
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

function removeTodo(event){
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
         

       /* for (let i = 0 ; i < localStorage.length ; i++){
            let index = Object.keys(localStorage).sort()[i]; 
 
            
                let value = localStorage.getItem(index);
                
              
            
               localStorage.removeItem(index);
          
               /* console.log(delOldIndex);*/
               /* let updateKey = localStorage.setItem(i,value);
        }*/

    }

    if (event.target.className === "rmvProject"){
        const index = event.target.parentElement.getAttribute('data-pj-index'); 
        document.querySelectorAll('[data-pj-index]')[index].remove();
        
        const numPj = document.querySelector('.listProjects');

   
    for ( let i = 0 ; i < numPj.children.length ; i++){
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
    save(todo);
}

function save(todo){
    let num = 0;
    let todo_serialized = JSON.stringify(todo); // object
    let task_serialized = JSON.stringify({'task' : todo_serialized}); // task - static var
    
    Object.keys(localStorage).forEach(function(key){ // one static var for the pj/task and one incrementing for the index
        num++; // num - incrementing var ---- 
     });
     
    let setStorage = localStorage.setItem(num, task_serialized);
    /*console.log(Object.keys(localStorage));
    console.log(Object.keys(localStorage).sort());*/ // raoti 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQSxtREFBbUQ7O0FBRW5EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTs7QUFFQTtBQUNBLG1EQUFtRDs7QUFFbkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxtREFBbUQ7O0FBRW5EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDhCQUE4QjtBQUN4RDtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0JBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeklBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRXNCOzs7Ozs7Ozs7Ozs7Ozs7QUN4QnRCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBFQUEwRTtBQUMxRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZFQUE2RTtBQUM3RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQSw4QkFBOEI7QUFDOUIsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOzs7Ozs7Ozs7VUMxR0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ051QztBQUNrQjtBQUN0QjtBQUNnQjtBQUNuRDtBQUNBLG9EQUFVLElBQUk7QUFDZCxnREFBSztBQUNMLGdEQUFLLFFBQVE7QUFDYixxREFBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdEQUFLO0FBQ1Q7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQVM7QUFDYixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQVE7QUFDWixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sc0RBQVE7QUFDZDtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvREFBb0Q7QUFDcEQ7O0FBRUE7QUFDQSwwQkFBMEIsNkJBQTZCO0FBQ3ZEO0FBQ0EsNkRBQTZEO0FBQzdELHFEQUFxRDtBQUNyRCw0Q0FBNEM7QUFDNUMsMkRBQTJEO0FBQzNEOztBQUVBLGlHQUFpRztBQUNqRztBQUNBOztBQUVBLDJCQUEyQiwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLDRCQUE0QjtBQUNsRCwyRkFBMkY7QUFDM0Y7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRCwwQ0FBMEMseUJBQXlCLEdBQUc7QUFDdEU7QUFDQSxxREFBcUQ7QUFDckQsZUFBZTtBQUNmLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsZ0JBQWdCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL2luYm94LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvcGFnZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvc2lkZS1iYXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGluYm94IC0gbWFpbi9taWRkbGUgY29udGVudFxuXG5mdW5jdGlvbiBpbmJveCgpe1xuICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94Jyk7Ly8gZnJvbSBwYWdlLmpzXG5cbiAgICBjb25zdCBpbmJveFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5ib3hUaXRsZS50ZXh0Q29udGVudCA9ICdJbmJveCc7XG4gICAgaW5ib3guYXBwZW5kQ2hpbGQoaW5ib3hUaXRsZSkuY2xhc3NOYW1lID0gJ2luYm94VGl0bGUnO1xuXG4gICAgY29uc3QgbGlzdE9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluYm94LmFwcGVuZENoaWxkKGxpc3RPYmopLmNsYXNzTmFtZSA9ICdsaXN0T2JqJztcblxuICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgXG4gICAgYWRkVGFzay50ZXh0Q29udGVudCA9ICcrIEFkZCBUYXNrJztcbiAgICBhZGRUYXNrLnNldEF0dHJpYnV0ZSgnZGF0YS1tb2RhbC10YXJnZXQnLCcjbW9kYWwnKTsgLy8gMXN0IGJ1dHRvbiB0YXJnZXRpbmcgbW9kYWwgKCB0aGUgZm9ybSBlbGVtZW50IClcbiAgICBpbmJveC5hcHBlbmRDaGlsZChhZGRUYXNrKS5jbGFzc05hbWUgPSAnYWRkVGFzayc7XG59XG5cbmZ1bmN0aW9uIHRvZGF5VG9kbygpe1xuICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94Jyk7Ly8gZnJvbSBwYWdlLmpzXG5cbiAgICBjb25zdCB0b2RheVRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZGF5VG9kb1RpdGxlLnRleHRDb250ZW50ID0gJ1RvZGF5JztcbiAgICBpbmJveC5hcHBlbmRDaGlsZCh0b2RheVRvZG9UaXRsZSkuY2xhc3NOYW1lID0gJ3RvZGF5VG9kb1RpdGxlJztcblxuICAgIGNvbnN0IGxpc3RPYmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmJveC5hcHBlbmRDaGlsZChsaXN0T2JqKS5jbGFzc05hbWUgPSAnbGlzdE9iaic7XG5cbn1cblxuZnVuY3Rpb24gd2Vla1RvZG8oKXtcbiAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveCcpOy8vIGZyb20gcGFnZS5qc1xuXG4gICAgY29uc3Qgd2Vla1RvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdlZWtUb2RvVGl0bGUudGV4dENvbnRlbnQgPSAnVGhpcyB3ZWVrJztcbiAgICBpbmJveC5hcHBlbmRDaGlsZCh3ZWVrVG9kb1RpdGxlKS5jbGFzc05hbWUgPSAnd2Vla1RvZG9UaXRsZSc7XG5cbiAgICBjb25zdCBsaXN0T2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5ib3guYXBwZW5kQ2hpbGQobGlzdE9iaikuY2xhc3NOYW1lID0gJ2xpc3RPYmonO1xufVxuXG5leHBvcnQgeyBpbmJveCAsIHRvZGF5VG9kbyAsIHdlZWtUb2RvIH07IiwiZnVuY3Rpb24gbW9kYWwoKXtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFyZW50Jyk7IFxuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcInBvc3RcIik7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiwgXCJcIik7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwibW9kYWxcIik7IC8vIGRhdGEgYXR0cmlidXRlIG9mIHRoZSBidXR0b25zIHdpbGwgdGFyZ2V0IHRoaXMgaWRcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRpdGxlXCIpO1xuICAgIHRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRpdGxlXCIpO1xuICAgIHRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwidGl0bGVcIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuXG4gICAgY29uc3QgdG9kb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9EZXNjLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHRvZG9EZXNjLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgICB0b2RvRGVzYy5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkRlc2NyaXB0aW9uXCIpO1xuICAgIHRvZG9EZXNjLnNldEF0dHJpYnV0ZShcImlkXCIsXCJkZXNjcmlwdGlvblwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRvZG9EZXNjKTtcblxuICAgIGNvbnN0IHRvZG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvRGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgICB0b2RvRGF0ZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGF0ZVwiKTtcbiAgICB0b2RvRGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiZGF0ZVwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRvZG9EYXRlKTtcblxuICAgIGNvbnN0IHRvZG9JbXBvcnRhbmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvSW1wb3J0YW5jZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG4gICAgdG9kb0ltcG9ydGFuY2Uuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRpY2tldF90eXBlXCIpO1xuICAgIHRvZG9JbXBvcnRhbmNlLnNldEF0dHJpYnV0ZShcImlkXCIsXCJpbXBvcnRhbnRcIik7XG4gICAgdG9kb0ltcG9ydGFuY2Uuc2V0QXR0cmlidXRlKCd2YWx1ZScsJ0ltcG9ydGFudCcpO1xuICAgIFxuICAgIGNvbnN0IGltcG9ydGFudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgaW1wb3J0YW50LnRleHRDb250ZW50ID0gJ0ltcG9ydGFudCc7XG4gICAgaW1wb3J0YW50LnNldEF0dHJpYnV0ZShcImZvclwiLFwiaW1wb3J0YW50XCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodG9kb0ltcG9ydGFuY2UpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW1wb3J0YW50KTtcblxuICAgIGNvbnN0IHRvZG9JbXBvcnRhbmNlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0ltcG9ydGFuY2UyLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcbiAgICB0b2RvSW1wb3J0YW5jZTIuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRpY2tldF90eXBlXCIpO1xuICAgIHRvZG9JbXBvcnRhbmNlMi5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwibGVzc0ltcG9ydGFudFwiKVxuICAgIHRvZG9JbXBvcnRhbmNlMi5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCd0cnVlJyk7XG4gICAgdG9kb0ltcG9ydGFuY2UyLnNldEF0dHJpYnV0ZSgndmFsdWUnLCdOb3QgaW1wb3J0YW50Jyk7XG5cbiAgICBjb25zdCBsZXNzSW1wb3JhbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxlc3NJbXBvcmFudC50ZXh0Q29udGVudCA9ICdOb3QgaW1wb3J0YW50JztcbiAgICBsZXNzSW1wb3JhbnQuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJsZXNzSW1wb3J0YW50XCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodG9kb0ltcG9ydGFuY2UyKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxlc3NJbXBvcmFudCk7XG5cbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG4gICAgYWRkQnRuLnRleHRDb250ZW50ID0gJ0FkZCc7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChhZGRCdG4pLmNsYXNzTmFtZSA9ICdhZGRCdG4nO1xuXG4gICAgY29uc3Qgcm12QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcm12QnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1jbG9zZS1idXR0b24nLCcjbW9kYWwnKTsgLy8gdGFyZ2V0cyB0aGUgbW9kYWwgKCBmb3JtIGVsIClcbiAgICBybXZCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG4gICAgcm12QnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChybXZCdG4pLmNsYXNzTmFtZSA9ICdybXZCdG4nO1xuXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG92ZXJsYXkuc2V0QXR0cmlidXRlKCdpZCcsJ292ZXJsYXknKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG5cbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgICAgbWFrZU9iakRPTSgpO1xuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBtYWtlT2JqRE9NKCl7ICBcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWU7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlOyBcbiAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlO1xuXG4gICAgXG4gICAgICAgIGNvbnN0IGxpc3RPYmogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdE9iaicpOyAvLyBwbGFjZSBhbGwgdG9kb3MgaW4gb25lIGVsZW1lbnQsIG1vcmUgY29tZnkgZm9yIGNzc1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgb2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7ICAgXG4gICAgICAgIGxpc3RPYmouYXBwZW5kQ2hpbGQob2JqKS5jbGFzc05hbWUgPSAnb2JqJzsgXG4gICAgICAgIFxuICAgICAgICBjb25zdCBvYmpUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgb2JqVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgb2JqLmFwcGVuZENoaWxkKG9ialRpdGxlKS5jbGFzc05hbWUgPSAnb2JqVGl0bGUnO1xuICAgIFxuICAgICAgICBjb25zdCBvYmpEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBvYmpEZXNjLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gICAgICAgIG9iai5hcHBlbmRDaGlsZChvYmpEZXNjKS5jbGFzc05hbWUgPSAnb2JqRGVzYyc7XG4gICAgXG4gICAgICAgIGNvbnN0IG9iakRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgb2JqRGF0ZS50ZXh0Q29udGVudCA9IGRhdGU7XG4gICAgICAgIG9iai5hcHBlbmRDaGlsZChvYmpEYXRlKS5jbGFzc05hbWUgPSAnb2JqRGF0ZSc7XG4gICAgXG4gICAgICAgIGNvbnN0IHJtdk9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBybXZPYmouc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG4gICAgICAgIHJtdk9iai50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgb2JqLmFwcGVuZENoaWxkKHJtdk9iaikuY2xhc3NOYW1lID0gJ3Jtdk9iaic7IFxuICAgIFxuICAgICAgICBpZiAoZGlzcGxheVJhZGlvVmFsdWUoKSA9PT0gJ0ltcG9ydGFudCcpe1xuICAgICAgICAgICAgY29uc3QgaW1wb3J0YW5jZU9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaW1wb3J0YW5jZU9iai50ZXh0Q29udGVudCA9IGRpc3BsYXlSYWRpb1ZhbHVlKCk7XG4gICAgICAgICAgICBvYmouYXBwZW5kQ2hpbGQoaW1wb3J0YW5jZU9iaikuY2xhc3NOYW1lID0gJ2ltcG9ydGFuY2VPYmonO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZGlzcGxheVJhZGlvVmFsdWUoKSA9PT0gJ05vdCBpbXBvcnRhbnQnKXtcbiAgICAgICAgICAgIGNvbnN0IGxlc3NJbXBvcmFudE9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbGVzc0ltcG9yYW50T2JqLnRleHRDb250ZW50ID0gZGlzcGxheVJhZGlvVmFsdWUoKTtcbiAgICAgICAgICAgIG9iai5hcHBlbmRDaGlsZChsZXNzSW1wb3JhbnRPYmopLmNsYXNzTmFtZSA9ICdsZXNzSW1wb3J0YW50T2JqJztcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmb3IgKCBsZXQgaSA9IDAgOyBpIDwgbGlzdE9iai5jaGlsZHJlbi5sZW5ndGggOyBpKyspe1xuICAgICAgICAgICAgb2JqLnNldEF0dHJpYnV0ZSgnZGF0YS1vYmotaW5kZXgnLGkpO1xuICAgICAgICB9XG4gICAgICAgICAvKmNsZWFyTW9kYWwoKTsgKi8gLy8gY3JlYXRlcyBlbXB0eSBvYmoncyBidXQgeW91IGFyZSBub3QgdXNpbmcgdGhlbSBhbnl3YXksIGRvbSBpcyBnb29kLlxuICAgIFxuICAgICAgICAgZnVuY3Rpb24gZGlzcGxheVJhZGlvVmFsdWUoKSB7XG4gICAgICAgICAgICBjb25zdCBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgndGlja2V0X3R5cGUnKTtcbiAgICAgICAgICAgIGxldCBwcmlvcml0eTtcbiAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgaWYgKGVsZVtpXS5jaGVja2VkKXtcbiAgICAgICAgICAgICAgICBwcmlvcml0eSA9IGVsZVtpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHJpb3JpdHk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gY2xlYXJNb2RhbCgpeyAvLyBjbGVhciByYWRpbyBidXR0IHRvb1xuICAgICAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWUgPSAnJztcbiAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlID0gJyc7IFxuICAgICAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlID0gJyc7IC8vIGNsZWFycyBmb3Jtc1xuICAgIFxuICAgICAgICB9XG4gICAgXG4gICAgICAgIH1cbn1cblxuXG5cbmV4cG9ydCB7IG1vZGFsIH07IiwiLy8gaW5pdGlhbCBwYWdlIGxheW91dCBcblxuZnVuY3Rpb24gcGFnZUxheW91dCgpe1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXJlbnQnKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdUby1kbyBMaXN0JztcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKS5jbGFzc05hbWUgPSAnaGVhZGVyJztcblxuICAgIGNvbnN0IHRpY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB0aWNrLnNyYyA9ICdwaWN0dXJlcy9jaGVjay5wbmcnO1xuICAgIHRpY2suYWx0ID0gJ2NoZWNrLXBpYyc7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpY2spO1xuXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChzaWRlYmFyKS5jbGFzc05hbWUgPSAnc2lkZWJhcic7XG5cbiAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChpbmJveCkuY2xhc3NOYW1lID0gJ2luYm94JztcblxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChmb290ZXIpLmNsYXNzTmFtZSA9ICdmb290ZXInO1xufVxuXG5leHBvcnQgeyBwYWdlTGF5b3V0IH07ICIsIi8vIHN0YXJ0IHdpdGggdGhlIGluYm94IGJ1dHRvblxuXG5mdW5jdGlvbiBzaWRlYmFyKCl7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG5cbiAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGluYm94LnRleHRDb250ZW50ID0gXCJJbmJveFwiO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoaW5ib3gpLmNsYXNzTmFtZSA9ICdpbmJveEJ0bic7XG5cbiAgICBjb25zdCB0b2RheVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0b2RheVRvZG8udGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZCh0b2RheVRvZG8pLmNsYXNzTmFtZSA9ICd0b2RheVRvZG8nO1xuXG4gICAgY29uc3Qgd2Vla1RvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB3ZWVrVG9kby50ZXh0Q29udGVudCA9ICdUaGlzIFdlZWsnO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQod2Vla1RvZG8pLmNsYXNzTmFtZSA9ICd3ZWVrVG9kbyc7XG5cbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RzLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RzKS5jbGFzc05hbWUgPSAncHJvamVjdHMnO1xuXG4gICAgY29uc3QgbGlzdFByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChsaXN0UHJvamVjdHMpLmNsYXNzTmFtZSA9ICdsaXN0UHJvamVjdHMnO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyBcbiAgICBhZGRQcm9qZWN0LnRleHRDb250ZW50ID0gJysgQWRkIFByb2plY3QnO1xuICAgIGFkZFByb2plY3Quc2V0QXR0cmlidXRlKCdkYXRhLW1vZGFsLXRhcmdldC1wcm9qZWN0JywnI3NpZGViYXJNb2RhbCcpOyAvLyBidXR0b24gdGFyZ2V0aW5nIHRoZSBzaWRlYmFyIG1vZGFsXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KS5jbGFzc05hbWUgPSAnYWRkUHJvamVjdCc7XG5cbiAgICBzaWRlYmFyTW9kYWwoKTtcbiAgICBmdW5jdGlvbiBzaWRlYmFyTW9kYWwoKXtcbiAgICAgICAgY29uc3Qgc2lkZWJhck1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBzaWRlYmFyTW9kYWwuc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIFwicG9zdFwiKTtcbiAgICAgICAgc2lkZWJhck1vZGFsLnNldEF0dHJpYnV0ZShcImFjdGlvblwiLCBcIlwiKTtcbiAgICAgICAgc2lkZWJhck1vZGFsLnNldEF0dHJpYnV0ZShcImlkXCIsXCJzaWRlYmFyTW9kYWxcIik7IC8vIGRhdGEgYXR0cmlidXRlIG9mIHRoZSBidXR0b25zIHdpbGwgdGFyZ2V0IHRoaXMgaWRcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyTW9kYWwpO1xuXG4gICAgICAgIGNvbnN0IHBqVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBwalRpdGxlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgICAgICBwalRpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZVwiKTtcbiAgICAgICAgcGpUaXRsZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRpdGxlXCIpO1xuICAgICAgICBwalRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsXCJwalRpdGxlXCIpO1xuICAgICAgICBzaWRlYmFyTW9kYWwuYXBwZW5kQ2hpbGQocGpUaXRsZSk7XG5cbiAgICBjb25zdCBhZGRCdG5TaWRlYmFyTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgXG4gICAgYWRkQnRuU2lkZWJhck1vZGFsLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuICAgIGFkZEJ0blNpZGViYXJNb2RhbC50ZXh0Q29udGVudCA9ICdBZGQnO1xuICAgIHNpZGViYXJNb2RhbC5hcHBlbmRDaGlsZChhZGRCdG5TaWRlYmFyTW9kYWwpLmNsYXNzTmFtZSA9ICdhZGRCdG5TaWRlYmFyTW9kYWwnO1xuXG4gICAgY29uc3QgY2FuY2VsUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbFByb2plY3Quc2V0QXR0cmlidXRlKCdkYXRhLWNsb3NlLWJ1dHRvbi1wcm9qZWN0JywnI3NpZGViYXJNb2RhbCcpOyAvLyB0YXJnZXRzIHRoZSBtb2RhbCAoIGZvcm0gZWwgKVxuICAgIGNhbmNlbFByb2plY3Quc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG4gICAgY2FuY2VsUHJvamVjdC50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIHNpZGViYXJNb2RhbC5hcHBlbmRDaGlsZChjYW5jZWxQcm9qZWN0KS5jbGFzc05hbWUgPSAnY2FuY2VsUHJvamVjdCc7XG5cbiAgICBhZGRCdG5TaWRlYmFyTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgbWFrZVByb2plY3QoKTtcbiAgICB9KVxuXG4gICAgfVxuXG4gICAgXG4gXG4gICAgZnVuY3Rpb24gbWFrZVByb2plY3QoKXtcbiAgICAgICAgY29uc3QgbGlzdFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RQcm9qZWN0cycpXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwalRpdGxlJykudmFsdWU7XG4gICAgICAgIFxuICAgICAgICBzYXZlUHJvamVjdCgpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGFjdHVhbFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbGlzdFByb2plY3RzLmFwcGVuZENoaWxkKGFjdHVhbFByb2plY3QpLmNsYXNzTmFtZSA9ICdhY3R1YWxQcm9qZWN0JztcbiAgICBcbiAgICAgICAgY29uc3QgdGl0bGVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRpdGxlUHJvamVjdC50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICBhY3R1YWxQcm9qZWN0LmFwcGVuZENoaWxkKHRpdGxlUHJvamVjdCk7XG4gICAgXG4gICAgICAgIGNvbnN0IHJtdlByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcm12UHJvamVjdC50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgYWN0dWFsUHJvamVjdC5hcHBlbmRDaGlsZChybXZQcm9qZWN0KS5jbGFzc05hbWUgPSAncm12UHJvamVjdCc7XG4gICAgXG4gICAgICAgIGZvciAoIGxldCBpID0gMCA7IGkgPCBsaXN0UHJvamVjdHMuY2hpbGRyZW4ubGVuZ3RoIDsgaSsrKXtcbiAgICAgICAgICAgIGFjdHVhbFByb2plY3Quc2V0QXR0cmlidXRlKCdkYXRhLXBqLWluZGV4JyxpKTtcbiAgICAgICAgfVxuICAgICBcbiAgICAgICAgZnVuY3Rpb24gc2F2ZVByb2plY3QoKXtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0TnVtID0gMDsgLy8gZGlmZmVyZW50IHZhcmlhYmxlXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2goZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TnVtKys7IC8vIGluY3JlbWVudHMgb24gZWFjaCBvYmpcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsZXQgcHJvamVjdG8gPSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0TnVtLHRpdGxlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHBqUmVuZGVyKHByb2plY3RUaXRsZSl7XG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gnKTtcblxuICAgIGNvbnN0IHBqVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwalRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdFRpdGxlO1xuICAgIGluYm94LmFwcGVuZENoaWxkKHBqVGl0bGUpLmNsYXNzTmFtZSA9ICdwalRpdGxlJztcblxuICAgIC8qY29uc3QgbGlzdE9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluYm94LmFwcGVuZENoaWxkKGxpc3RPYmopLmNsYXNzTmFtZSA9ICdsaXN0T2JqJzsqL1xufVxuXG5cbmV4cG9ydCB7IHNpZGViYXIgLCBwalJlbmRlciB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgcGFnZUxheW91dCB9IGZyb20gJy4vcGFnZS5qcyc7XG5pbXBvcnQgeyBpbmJveCAsIHRvZGF5VG9kbyAsIHdlZWtUb2RvfSBmcm9tICcuL2luYm94LmpzJztcbmltcG9ydCB7IG1vZGFsIH0gZnJvbSAnLi9tb2RhbC5qcyc7ICBcbmltcG9ydCB7IHNpZGViYXIgLCBwalJlbmRlciB9IGZyb20gJy4vc2lkZS1iYXIuanMnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxucGFnZUxheW91dCgpOyAvLyAgIC0gZnVuY3Rpb24gdGhhdCBzYXZlcyB0aGUgcHJvamVjdCBhbmQgdG9kb3MuICAgMS4gZnJvbSBkb20gb3IgZnJvbSBjbGFzc1xuaW5ib3goKTtcbm1vZGFsKCk7ICAgICAvLyBsb2NhbCBzdG9yYWdlICwgXCJjbGVhbiBjb2RlXCIgKyAxMDAwIG1vcmUgdGhpbmdzLi4uIHJlc3QgbmVlZGVkXG5zaWRlYmFyKCk7XG5cbmNvbnN0IGluYm94QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94QnRuJyk7XG5pbmJveEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBlbXB0eU1haW4obWFpbik7XG4gICAgaW5ib3goKTtcbiAgICBpbmJveE1vZGFsKCk7IFxufSlcblxuY29uc3QgdG9kYXlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXlUb2RvJyk7XG50b2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBlbXB0eU1haW4obWFpbik7XG4gICAgdG9kYXlUb2RvKCk7XG59KVxuXG5jb25zdCB3ZWVrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlZWtUb2RvJyk7XG53ZWVrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGVtcHR5TWFpbihtYWluKTtcbiAgICB3ZWVrVG9kbygpO1xufSlcblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveCcpO1xuZnVuY3Rpb24gZW1wdHlNYWluKGVsZW1lbnQpIHtcbiAgICB3aGlsZShlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkKXtcbiAgICAgICBlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLnJlbW92ZSgpOyBcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHByb2plY3RzUmVuZGVyKGV2ZW50KXtcbiAgICBpZiAoIGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09IFwiYWN0dWFsUHJvamVjdFwiKXtcbiAgICAgICBlbXB0eU1haW4obWFpbik7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wai1pbmRleCcpO1xuICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXBqLWluZGV4XScpW2luZGV4XTtcbiAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3QudGV4dENvbnRlbnQuc2xpY2UoMCwtMSk7ICBcbiAgICBcbiAgICAgIHBqUmVuZGVyKHByb2plY3RUaXRsZSk7XG4gICAgfVxufVxuXG5cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIHByb2plY3RzUmVuZGVyKGV2ZW50KTtcbn0pO1xuXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICByZW1vdmVUb2RvKGV2ZW50KTtcbn0pO1xuXG5mdW5jdGlvbiByZW1vdmVUb2RvKGV2ZW50KXtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJybXZPYmpcIil7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9iai1pbmRleCcpOyBcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtb2JqLWluZGV4XScpW2luZGV4XS5yZW1vdmUoKTtcblxuICAgICAgICAgbGV0IGluZGV4TG9jYWxTdG9yYWdlID0gT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5zb3J0KClbaW5kZXhdO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShpbmRleExvY2FsU3RvcmFnZSk7IC8vIG1haGEgaXpicmFuIGVsZW1lbnQsIG5lIGdsZWRhIGRhbGkgZSB0YXNrIGlsaSBwaiAuLiB0cnFidmEgZGEgdXBkYXRldHZhbSBrZXktYVxuICAgICAgICBcblxuICAgICAgICBjb25zdCBudW1PYmogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdE9iaicpO1xuICAgICAgICBmb3IgKCBsZXQgaSA9IDAgOyBpIDwgbnVtT2JqLmNoaWxkcmVuLmxlbmd0aCA7IGkrKyl7IFxuICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGluZGV4ID0gT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5zb3J0KClbaV07IC8vIHZzaWNoa2l0ZSAsIHNvcnRuYXRpICwgemEga29sa290byBkZWNhIGltYSwgb3QgbmFpIG1hbGtpcSBpbmRleC5cbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGluZGV4KTsgLy8gdnplbWkgc3RvaW5vc3RhIG5hIGl6YnJhbmlxIGVsZW1lbnRcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGluZGV4KTsgLy8gcHJlbWFobmkgaXpicmFuaXEgZWxlbWVudFxuICAgICAgICAgICAgbGV0IHVwZGF0ZUtleSA9IGxvY2FsU3RvcmFnZS5zZXRJdGVtKGksdmFsdWUpOyAvLyBuYXByYXZpIG5vdiBlbGVtZW50IHN1cyBzdXNodGF0YSBzdG9pbm9zdCBpIHVwZGF0ZW5hdCBrZXkgXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtb2JqLWluZGV4XScpW2ldLnNldEF0dHJpYnV0ZSgnZGF0YS1vYmotaW5kZXgnLCBpICk7IC8vIGluZGV4XG4gICAgICAgIH1cbiAgICAgICAgIFxuXG4gICAgICAgLyogZm9yIChsZXQgaSA9IDAgOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aCA7IGkrKyl7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLnNvcnQoKVtpXTsgXG4gXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpbmRleCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShpbmRleCk7XG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAvKiBjb25zb2xlLmxvZyhkZWxPbGRJbmRleCk7Ki9cbiAgICAgICAgICAgICAgIC8qIGxldCB1cGRhdGVLZXkgPSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpLHZhbHVlKTtcbiAgICAgICAgfSovXG5cbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJybXZQcm9qZWN0XCIpe1xuICAgICAgICBjb25zdCBpbmRleCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wai1pbmRleCcpOyBcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcGotaW5kZXhdJylbaW5kZXhdLnJlbW92ZSgpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbnVtUGogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdFByb2plY3RzJyk7XG5cbiAgIFxuICAgIGZvciAoIGxldCBpID0gMCA7IGkgPCBudW1Qai5jaGlsZHJlbi5sZW5ndGggOyBpKyspe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wai1pbmRleF0nKVtpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGotaW5kZXgnLCBpICk7IC8vaW5kZXhcbiAgICB9XG4gICAgfVxufVxuXG4vLyBNb2RhbFxuXG5jb25zdCBjbG9zZU1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNsb3NlLWJ1dHRvbl0nKTtcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpO1xuXG5pbmJveE1vZGFsKCk7XG5mdW5jdGlvbiBpbmJveE1vZGFsKCl7XG4gICAgY29uc3Qgb3Blbk1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZGFsLXRhcmdldF0nKTtcbiAgICBcbiAgICBvcGVuTW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbi5kYXRhc2V0Lm1vZGFsVGFyZ2V0KTtcbiAgICAgICAgICAgIG9wZW5Nb2RhbChtb2RhbCk7XG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCl7XG4gICAgICAgIGlmICggbW9kYWwgPT0gbnVsbCApIHJldHVyblxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9ICAgXG59XG5cbmNsb3NlTW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXR0b24uZGF0YXNldC5jbG9zZUJ1dHRvbik7XG4gICAgICAgIGNsb3NlTW9kYWwobW9kYWwpO1xuICAgIH0pXG59KVxuXG5mdW5jdGlvbiBjbG9zZU1vZGFsKG1vZGFsKXtcbiAgICBpZiAoIG1vZGFsID09IG51bGwgKSByZXR1cm5cbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xufVxuXG5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XG4gICAgY29uc3QgbW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybS5hY3RpdmUnKTtcbiAgICBtb2RhbHMuZm9yRWFjaChtb2RhbCA9PiB7XG4gICAgICBjbG9zZU1vZGFsKG1vZGFsKTtcbiAgICB9KVxufSlcbi8vIFNpZGViYXIgbW9kYWxcbmNvbnN0IG9wZW5TaWRlYmFyQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZGFsLXRhcmdldC1wcm9qZWN0XScpO1xuY29uc3QgY2xvc2VTaWRlYmFyQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNsb3NlLWJ1dHRvbi1wcm9qZWN0XScpO1xuXG5vcGVuU2lkZWJhckJ0bnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2lkZWJhck1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXR0b24uZGF0YXNldC5tb2RhbFRhcmdldFByb2plY3QpO1xuICAgICAgICBvcGVuU2lkZWJhck1vZGFsKHNpZGViYXJNb2RhbCk7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfSlcbn0pXG5cbmZ1bmN0aW9uIG9wZW5TaWRlYmFyTW9kYWwoc2lkZWJhck1vZGFsKXtcbiAgICBpZiAoIHNpZGViYXJNb2RhbCA9PSBudWxsICkgcmV0dXJuXG4gICAgc2lkZWJhck1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufSAgIFxuXG5jbG9zZVNpZGViYXJCdG5zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNpZGViYXJNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnV0dG9uLmRhdGFzZXQuY2xvc2VCdXR0b25Qcm9qZWN0KTtcbiAgICAgICAgY2xvc2VTaWRlYmFyTW9kYWwoc2lkZWJhck1vZGFsKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9KVxufSlcblxuZnVuY3Rpb24gIGNsb3NlU2lkZWJhck1vZGFsKHNpZGViYXJNb2RhbCl7XG4gICAgaWYgKCBzaWRlYmFyTW9kYWwgPT0gbnVsbCApIHJldHVyblxuICAgIHNpZGViYXJNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbn1cblxuXG5cbi8qKlByZXZlbnRzIGNocm9tZSBwb3AgdXAgd2luZG93IHdoZW4gcmVmcmVzaGluZyovXG5pZiAoIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSApIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoIG51bGwsIG51bGwsIHdpbmRvdy5sb2NhdGlvbi5ocmVmICk7XG4gIH1cblxuY2xhc3MgVG9kb3tcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5KXsgICBcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG59XG5cbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkVGFzaycpOyBcbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICBjb25zdCBtYWtlVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRCdG4nKTsgXG4gICAgbWFrZVRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgXG4gICAgXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWU7IFxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZTsgICAgICAgICAgICAgXG4gICAgICAgXG4gICAgICAgIG1ha2VUb2Rvbyh0aXRsZSxkZXNjcmlwdGlvbixkYXRlLGRpc3BsYXlSYWRpb1ZhbHVlKCkpOyBcbiAgICBcbiAgICB9KVxufSlcblxuZnVuY3Rpb24gIG1ha2VUb2Rvbyh0aXRsZSxkZXNjcmlwdGlvbixkYXRlLHByaW9yaXR5KXtcbiAgICBjb25zdCB0b2RvID0gbmV3IFRvZG8odGl0bGUsZGVzY3JpcHRpb24sZGF0ZSxwcmlvcml0eSk7XG4gICAgc2F2ZSh0b2RvKTtcbn1cblxuZnVuY3Rpb24gc2F2ZSh0b2RvKXtcbiAgICBsZXQgbnVtID0gMDtcbiAgICBsZXQgdG9kb19zZXJpYWxpemVkID0gSlNPTi5zdHJpbmdpZnkodG9kbyk7IC8vIG9iamVjdFxuICAgIGxldCB0YXNrX3NlcmlhbGl6ZWQgPSBKU09OLnN0cmluZ2lmeSh7J3Rhc2snIDogdG9kb19zZXJpYWxpemVkfSk7IC8vIHRhc2sgLSBzdGF0aWMgdmFyXG4gICAgXG4gICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7IC8vIG9uZSBzdGF0aWMgdmFyIGZvciB0aGUgcGovdGFzayBhbmQgb25lIGluY3JlbWVudGluZyBmb3IgdGhlIGluZGV4XG4gICAgICAgIG51bSsrOyAvLyBudW0gLSBpbmNyZW1lbnRpbmcgdmFyIC0tLS0gXG4gICAgIH0pO1xuICAgICBcbiAgICBsZXQgc2V0U3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5zZXRJdGVtKG51bSwgdGFza19zZXJpYWxpemVkKTtcbiAgICAvKmNvbnNvbGUubG9nKE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkpO1xuICAgIGNvbnNvbGUubG9nKE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuc29ydCgpKTsqLyAvLyByYW90aSBcbiAgICBsZXQgdG9kb19kZXNlcmlhbGl6ZWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKG51bSkpO1xufVxuXG5cblxuZnVuY3Rpb24gZ2V0KCl7XG5cbiAgICBcbn1cblxuLypmdW5jdGlvbiBjbGVhckZvcm0oKXtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZSA9ICcnO1xuICAgIGxldCBhdXRob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0aG9yJykudmFsdWUgPSAnJztcbiAgICBsZXQgcGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZXMnKS52YWx1ZSA9ICcnO1xufSovXG5cbmZ1bmN0aW9uIGRpc3BsYXlSYWRpb1ZhbHVlKCkge1xuICAgIGNvbnN0IGVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCd0aWNrZXRfdHlwZScpO1xuICAgIGxldCBwcmlvcml0eTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBlbGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYoZWxlW2ldLmNoZWNrZWQpe1xuICAgICAgICBwcmlvcml0eSA9IGVsZVtpXS52YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJpb3JpdHk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9