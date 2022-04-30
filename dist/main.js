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
/* harmony export */   "inbox": () => (/* binding */ inbox)
/* harmony export */ });
// inbox - main/middle content

function inbox(){
    const inbox = document.querySelector('.inbox'); // from page.js

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
    const inbox = document.querySelector('.inbox');

    const form = document.createElement('form');
    form.setAttribute("method", "post");
    form.setAttribute("action", "");
    form.setAttribute("id","modal"); // data attribute of the buttons will target this id
    inbox.appendChild(form);

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
    inbox.appendChild(overlay);

    addBtn.addEventListener('click',() => {
        makeObjDOM();
    })

    function makeObjDOM(){  // title,description,date,priority
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
    }


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
    sidebar.appendChild(listProjects);

    const addProject = document.createElement('button'); 
    addProject.textContent = '+ Add Project';
    addProject.setAttribute('data-modal-target','#modal'); // 2nd button targeting modal ( the form element )
    sidebar.appendChild(addProject).className = 'addProject';


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
    console.log(todo);

}


document.addEventListener('click', (event) => {
    removeTodo(event);
})

function removeTodo(event){
    if (event.target.className === "rmvObj"){
        const index = event.target.parentElement.getAttribute('data-obj-index');
        document.querySelectorAll('[data-obj-index]')[index].remove();
    }

    const numObj = document.querySelector('.listObj');
    for ( let i = 0 ; i < numObj.children.length ; i++){
        document.querySelectorAll('[data-obj-index]')[i].setAttribute('data-obj-index', i ); //update data attr
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvaW5ib3guanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL21vZGFsLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9wYWdlLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9zaWRlLWJhci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW5ib3ggLSBtYWluL21pZGRsZSBjb250ZW50XG5cbmZ1bmN0aW9uIGluYm94KCl7XG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gnKTsgLy8gZnJvbSBwYWdlLmpzXG5cbiAgICBjb25zdCBpbmJveFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5ib3hUaXRsZS50ZXh0Q29udGVudCA9ICdJbmJveCc7XG4gICAgaW5ib3guYXBwZW5kQ2hpbGQoaW5ib3hUaXRsZSkuY2xhc3NOYW1lID0gJ2luYm94VGl0bGUnO1xuXG4gICAgY29uc3QgbGlzdE9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluYm94LmFwcGVuZENoaWxkKGxpc3RPYmopLmNsYXNzTmFtZSA9ICdsaXN0T2JqJztcblxuICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgXG4gICAgYWRkVGFzay50ZXh0Q29udGVudCA9ICcrIEFkZCBUYXNrJztcbiAgICBhZGRUYXNrLnNldEF0dHJpYnV0ZSgnZGF0YS1tb2RhbC10YXJnZXQnLCcjbW9kYWwnKTsgLy8gMXN0IGJ1dHRvbiB0YXJnZXRpbmcgbW9kYWwgKCB0aGUgZm9ybSBlbGVtZW50IClcbiAgICBpbmJveC5hcHBlbmRDaGlsZChhZGRUYXNrKS5jbGFzc05hbWUgPSAnYWRkVGFzayc7XG5cbn1cblxuXG5cbmV4cG9ydCB7IGluYm94IH07IiwiZnVuY3Rpb24gbW9kYWwoKXtcbiAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveCcpO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcInBvc3RcIik7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiwgXCJcIik7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwibW9kYWxcIik7IC8vIGRhdGEgYXR0cmlidXRlIG9mIHRoZSBidXR0b25zIHdpbGwgdGFyZ2V0IHRoaXMgaWRcbiAgICBpbmJveC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGl0bGVcIik7XG4gICAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiVGl0bGVcIik7XG4gICAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsXCJ0aXRsZVwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XG5cbiAgICBjb25zdCB0b2RvRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0Rlc2Muc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgdG9kb0Rlc2Muc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICAgIHRvZG9EZXNjLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRGVzY3JpcHRpb25cIik7XG4gICAgdG9kb0Rlc2Muc2V0QXR0cmlidXRlKFwiaWRcIixcImRlc2NyaXB0aW9uXCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodG9kb0Rlc2MpO1xuXG4gICAgY29uc3QgdG9kb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9EYXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICAgIHRvZG9EYXRlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkYXRlXCIpO1xuICAgIHRvZG9EYXRlLnNldEF0dHJpYnV0ZShcImlkXCIsXCJkYXRlXCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodG9kb0RhdGUpO1xuXG4gICAgY29uc3QgdG9kb0ltcG9ydGFuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9JbXBvcnRhbmNlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcbiAgICB0b2RvSW1wb3J0YW5jZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGlja2V0X3R5cGVcIik7XG4gICAgdG9kb0ltcG9ydGFuY2Uuc2V0QXR0cmlidXRlKFwiaWRcIixcImltcG9ydGFudFwiKTtcbiAgICB0b2RvSW1wb3J0YW5jZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnSW1wb3J0YW50Jyk7XG4gICAgXG4gICAgY29uc3QgaW1wb3J0YW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBpbXBvcnRhbnQudGV4dENvbnRlbnQgPSAnSW1wb3J0YW50JztcbiAgICBpbXBvcnRhbnQuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJpbXBvcnRhbnRcIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0b2RvSW1wb3J0YW5jZSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbXBvcnRhbnQpO1xuXG4gICAgY29uc3QgdG9kb0ltcG9ydGFuY2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvSW1wb3J0YW5jZTIuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuICAgIHRvZG9JbXBvcnRhbmNlMi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGlja2V0X3R5cGVcIik7XG4gICAgdG9kb0ltcG9ydGFuY2UyLnNldEF0dHJpYnV0ZShcImlkXCIsXCJsZXNzSW1wb3J0YW50XCIpXG4gICAgdG9kb0ltcG9ydGFuY2UyLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsJ3RydWUnKTtcbiAgICB0b2RvSW1wb3J0YW5jZTIuc2V0QXR0cmlidXRlKCd2YWx1ZScsJ05vdCBpbXBvcnRhbnQnKTtcblxuICAgIGNvbnN0IGxlc3NJbXBvcmFudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGVzc0ltcG9yYW50LnRleHRDb250ZW50ID0gJ05vdCBpbXBvcnRhbnQnO1xuICAgIGxlc3NJbXBvcmFudC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcImxlc3NJbXBvcnRhbnRcIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0b2RvSW1wb3J0YW5jZTIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobGVzc0ltcG9yYW50KTtcblxuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcbiAgICBhZGRCdG4udGV4dENvbnRlbnQgPSAnQWRkJztcbiAgICBmb3JtLmFwcGVuZENoaWxkKGFkZEJ0bikuY2xhc3NOYW1lID0gJ2FkZEJ0bic7XG5cbiAgICBjb25zdCBybXZCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBybXZCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWNsb3NlLWJ1dHRvbicsJyNtb2RhbCcpOyAvLyB0YXJnZXRzIHRoZSBtb2RhbCAoIGZvcm0gZWwgKVxuICAgIHJtdkJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcbiAgICBybXZCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICBmb3JtLmFwcGVuZENoaWxkKHJtdkJ0bikuY2xhc3NOYW1lID0gJ3JtdkJ0bic7XG5cbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3ZlcmxheS5zZXRBdHRyaWJ1dGUoJ2lkJywnb3ZlcmxheScpO1xuICAgIGluYm94LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XG4gICAgICAgIG1ha2VPYmpET00oKTtcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gbWFrZU9iakRPTSgpeyAgLy8gdGl0bGUsZGVzY3JpcHRpb24sZGF0ZSxwcmlvcml0eVxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7IFxuICAgICAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWU7XG4gICAgICAgXG5cbiAgICAgICAgY29uc3QgbGlzdE9iaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0T2JqJyk7IC8vIHBsYWNlIGFsbCB0b2RvcyBpbiBvbmUgZWxlbWVudCwgbW9yZSBjb21meSBmb3IgY3NzXG4gICAgICAgIFxuICAgICAgICBjb25zdCBvYmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgICBcbiAgICAgICAgbGlzdE9iai5hcHBlbmRDaGlsZChvYmopLmNsYXNzTmFtZSA9ICdvYmonOyBcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG9ialRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBvYmpUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICBvYmouYXBwZW5kQ2hpbGQob2JqVGl0bGUpLmNsYXNzTmFtZSA9ICdvYmpUaXRsZSc7XG5cbiAgICAgICAgY29uc3Qgb2JqRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgb2JqRGVzYy50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICAgICAgICBvYmouYXBwZW5kQ2hpbGQob2JqRGVzYykuY2xhc3NOYW1lID0gJ29iakRlc2MnO1xuXG4gICAgICAgIGNvbnN0IG9iakRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgb2JqRGF0ZS50ZXh0Q29udGVudCA9IGRhdGU7XG4gICAgICAgIG9iai5hcHBlbmRDaGlsZChvYmpEYXRlKS5jbGFzc05hbWUgPSAnb2JqRGF0ZSc7XG5cbiAgICAgICAgY29uc3Qgcm12T2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHJtdk9iai5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcbiAgICAgICAgcm12T2JqLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICBvYmouYXBwZW5kQ2hpbGQocm12T2JqKS5jbGFzc05hbWUgPSAncm12T2JqJzsgXG5cbiAgICAgICAgaWYgKGRpc3BsYXlSYWRpb1ZhbHVlKCkgPT09ICdJbXBvcnRhbnQnKXtcbiAgICAgICAgICAgIGNvbnN0IGltcG9ydGFuY2VPYmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGltcG9ydGFuY2VPYmoudGV4dENvbnRlbnQgPSBkaXNwbGF5UmFkaW9WYWx1ZSgpO1xuICAgICAgICAgICAgb2JqLmFwcGVuZENoaWxkKGltcG9ydGFuY2VPYmopLmNsYXNzTmFtZSA9ICdpbXBvcnRhbmNlT2JqJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGRpc3BsYXlSYWRpb1ZhbHVlKCkgPT09ICdOb3QgaW1wb3J0YW50Jyl7XG4gICAgICAgICAgICBjb25zdCBsZXNzSW1wb3JhbnRPYmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxlc3NJbXBvcmFudE9iai50ZXh0Q29udGVudCA9IGRpc3BsYXlSYWRpb1ZhbHVlKCk7XG4gICAgICAgICAgICBvYmouYXBwZW5kQ2hpbGQobGVzc0ltcG9yYW50T2JqKS5jbGFzc05hbWUgPSAnbGVzc0ltcG9ydGFudE9iaic7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKCBsZXQgaSA9IDAgOyBpIDwgbGlzdE9iai5jaGlsZHJlbi5sZW5ndGggOyBpKyspe1xuICAgICAgICAgICAgb2JqLnNldEF0dHJpYnV0ZSgnZGF0YS1vYmotaW5kZXgnLGkpO1xuICAgICAgICB9XG4gICAgICAgICBjbGVhck1vZGFsKCk7IC8vIGNyZWF0ZXMgZW1wdHkgb2JqJ3MgYnV0IHlvdSBhcmUgbm90IHVzaW5nIHRoZW0gYW55d2F5LCBkb20gaXMgZ29vZC5cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlSYWRpb1ZhbHVlKCkge1xuICAgICAgICBjb25zdCBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgndGlja2V0X3R5cGUnKTtcbiAgICAgICAgbGV0IHByaW9yaXR5O1xuICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZiAoZWxlW2ldLmNoZWNrZWQpe1xuICAgICAgICAgICAgcHJpb3JpdHkgPSBlbGVbaV0udmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByaW9yaXR5O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyTW9kYWwoKXsgLy8gY2xlYXIgcmFkaW8gYnV0dCB0b29cbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWUgPSAnJztcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWUgPSAnJzsgXG4gICAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZSA9ICcnOyAvLyBjbGVhcnMgZm9ybXNcblxuICAgIH1cbn1cblxuZXhwb3J0IHsgbW9kYWwgfTsiLCIvLyBpbml0aWFsIHBhZ2UgbGF5b3V0IFxuXG5mdW5jdGlvbiBwYWdlTGF5b3V0KCl7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcmVudCcpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ1RvLWRvIExpc3QnO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChoZWFkZXIpLmNsYXNzTmFtZSA9ICdoZWFkZXInO1xuXG4gICAgY29uc3QgdGljayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHRpY2suc3JjID0gJ3BpY3R1cmVzL2NoZWNrLnBuZyc7XG4gICAgdGljay5hbHQgPSAnY2hlY2stcGljJztcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGljayk7XG5cbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHNpZGViYXIpLmNsYXNzTmFtZSA9ICdzaWRlYmFyJztcblxuICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGluYm94KS5jbGFzc05hbWUgPSAnaW5ib3gnO1xuXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGZvb3RlcikuY2xhc3NOYW1lID0gJ2Zvb3Rlcic7XG59XG5cbmV4cG9ydCB7IHBhZ2VMYXlvdXQgfTsgIiwiLy8gc3RhcnQgd2l0aCB0aGUgaW5ib3ggYnV0dG9uXG5cbmZ1bmN0aW9uIHNpZGViYXIoKXtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcblxuICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaW5ib3gudGV4dENvbnRlbnQgPSBcIkluYm94XCI7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChpbmJveCkuY2xhc3NOYW1lID0gJ2luYm94QnRuJztcblxuICAgIGNvbnN0IHRvZGF5VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRvZGF5VG9kby50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHRvZGF5VG9kbykuY2xhc3NOYW1lID0gJ3RvZGF5VG9kbyc7XG5cbiAgICBjb25zdCB3ZWVrVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHdlZWtUb2RvLnRleHRDb250ZW50ID0gJ1RoaXMgV2Vlayc7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZCh3ZWVrVG9kbykuY2xhc3NOYW1lID0gJ3dlZWtUb2RvJztcblxuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdHMudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHMpLmNsYXNzTmFtZSA9ICdwcm9qZWN0cyc7XG5cbiAgICBjb25zdCBsaXN0UHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGxpc3RQcm9qZWN0cyk7XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IFxuICAgIGFkZFByb2plY3QudGV4dENvbnRlbnQgPSAnKyBBZGQgUHJvamVjdCc7XG4gICAgYWRkUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kYWwtdGFyZ2V0JywnI21vZGFsJyk7IC8vIDJuZCBidXR0b24gdGFyZ2V0aW5nIG1vZGFsICggdGhlIGZvcm0gZWxlbWVudCApXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KS5jbGFzc05hbWUgPSAnYWRkUHJvamVjdCc7XG5cblxufVxuXG5leHBvcnQgeyBzaWRlYmFyIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzZXBhcmF0ZSB0aGUgYXBwbGljYXRpb24gbG9naWMgZnJvbSB0aGUgRE9NIHN0dWZmLCBkbyBpdCBpbiBkaWZmZXJlbnQgbW9kdWxlc1xuLy8gU2luZ2xlIFJlc3BvbnNpYmlsaXR5IC0gYSBjbGFzcyBzaG91bGQgaGF2ZSBvbmUgcmVzcG9uc2liaWxpdHlcbmltcG9ydCB7IHBhZ2VMYXlvdXQgfSBmcm9tICcuL3BhZ2UuanMnO1xuaW1wb3J0IHsgaW5ib3ggfSBmcm9tICcuL2luYm94LmpzJztcbmltcG9ydCB7IG1vZGFsIH0gZnJvbSAnLi9tb2RhbC5qcyc7ICBcbmltcG9ydCB7IHNpZGViYXIgfSBmcm9tICcuL3NpZGUtYmFyLmpzJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5wYWdlTGF5b3V0KCk7IC8vICBzaWRlIGJhciAtIHdpcmluZyB1cCBldmVyeXRoaW5nIC0gbG9jYWxzdG9yYWdlIFxuaW5ib3goKTsgICAgLy8gbWlnaHQgbmVlZCB0byB3cml0ZSB0aGUgZm9ybSBpbiBodG1sIGlmIGkgd2FudCB2YWxpZGF0aW9uc1xubW9kYWwoKTtcbnNpZGViYXIoKTtcblxuXG5jbGFzcyBUb2Rve1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHkpeyAgIFxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cblxufVxuXG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFRhc2snKTsgXG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgY29uc3QgbWFrZVRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkQnRuJyk7IFxuICAgIG1ha2VUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIFxuICAgIFxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlOyBcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWU7ICAgICAgICAgICAgIFxuICAgICAgIFxuICAgICAgICBtYWtlVG9kb28odGl0bGUsZGVzY3JpcHRpb24sZGF0ZSxkaXNwbGF5UmFkaW9WYWx1ZSgpKTsgXG4gICAgfSlcbn0pXG5cbmZ1bmN0aW9uICBtYWtlVG9kb28odGl0bGUsZGVzY3JpcHRpb24sZGF0ZSxwcmlvcml0eSl7XG4gICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKHRpdGxlLGRlc2NyaXB0aW9uLGRhdGUscHJpb3JpdHkpO1xuICAgIGNvbnNvbGUubG9nKHRvZG8pO1xuXG59XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICByZW1vdmVUb2RvKGV2ZW50KTtcbn0pXG5cbmZ1bmN0aW9uIHJlbW92ZVRvZG8oZXZlbnQpe1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSBcInJtdk9ialwiKXtcbiAgICAgICAgY29uc3QgaW5kZXggPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb2JqLWluZGV4Jyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW9iai1pbmRleF0nKVtpbmRleF0ucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgbnVtT2JqID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RPYmonKTtcbiAgICBmb3IgKCBsZXQgaSA9IDAgOyBpIDwgbnVtT2JqLmNoaWxkcmVuLmxlbmd0aCA7IGkrKyl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW9iai1pbmRleF0nKVtpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtb2JqLWluZGV4JywgaSApOyAvL3VwZGF0ZSBkYXRhIGF0dHJcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gZGlzcGxheVJhZGlvVmFsdWUoKSB7XG4gICAgY29uc3QgZWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3RpY2tldF90eXBlJyk7XG4gICAgbGV0IHByaW9yaXR5O1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGVsZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihlbGVbaV0uY2hlY2tlZCl7XG4gICAgICAgIHByaW9yaXR5ID0gZWxlW2ldLnZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcmlvcml0eTtcbn1cblxuLypmdW5jdGlvbiBjbGVhckZvcm0oKXtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZSA9ICcnO1xuICAgIGxldCBhdXRob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0aG9yJykudmFsdWUgPSAnJztcbiAgICBsZXQgcGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZXMnKS52YWx1ZSA9ICcnO1xufSovXG5cbi8vIE1vZGFsXG5jb25zdCBvcGVuTW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kYWwtdGFyZ2V0XScpO1xuY29uc3QgY2xvc2VNb2RhbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jbG9zZS1idXR0b25dJyk7XG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKTtcblxub3Blbk1vZGFsQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnV0dG9uLmRhdGFzZXQubW9kYWxUYXJnZXQpO1xuICAgICAgICBvcGVuTW9kYWwobW9kYWwpO1xuICAgIH0pXG59KVxuXG5mdW5jdGlvbiBvcGVuTW9kYWwobW9kYWwpe1xuICAgIGlmICggbW9kYWwgPT0gbnVsbCApIHJldHVyblxuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59XG5cbmNsb3NlTW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXR0b24uZGF0YXNldC5jbG9zZUJ1dHRvbik7XG4gICAgICAgIGNsb3NlTW9kYWwobW9kYWwpO1xuICAgIH0pXG59KVxuXG5mdW5jdGlvbiBjbG9zZU1vZGFsKG1vZGFsKXtcbiAgICBpZiAoIG1vZGFsID09IG51bGwgKSByZXR1cm5cbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xufVxuXG5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XG4gICAgY29uc3QgbW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybS5hY3RpdmUnKTtcbiAgICBtb2RhbHMuZm9yRWFjaChtb2RhbCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKG1vZGFscyk7XG4gICAgICBjbG9zZU1vZGFsKG1vZGFsKTtcbiAgICB9KVxufSlcblxuXG4vKipQcmV2ZW50cyBjaHJvbWUgcG9wIHVwIHdpbmRvdyB3aGVuIHJlZnJlc2hpbmcqL1xuaWYgKCB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgKSB7XG4gICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKCBudWxsLCBudWxsLCB3aW5kb3cubG9jYXRpb24uaHJlZiApO1xuICB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9