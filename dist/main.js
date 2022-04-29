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
    todoImportance.setAttribute("id","important")
    
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

    const lessImporant = document.createElement('label');
    lessImporant.textContent = 'Less important';
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
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value; 
        const date = document.getElementById('date').value;
       /* const priority = document.getElementById('lessImportant').value;*/

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
        rmvObj.setAttribute('data-close-button','#modal'); 
        rmvObj.setAttribute('type','button');
        rmvObj.textContent = 'X';
        obj.appendChild(rmvObj).className = 'rmvObj'; 
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
// separate the application logic from the DOM stuff, do it in different modules
// Single Responsibility - a class should have one responsibility


  // 1. priority and checklist on todos 

                                    // 2. functionality on todos - evertyhing
(0,_page_js__WEBPACK_IMPORTED_MODULE_0__.pageLayout)();
(0,_inbox_js__WEBPACK_IMPORTED_MODULE_1__.inbox)();
(0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.modal)();


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
    
        const title = document.getElementById('title').value; 
        const description = document.getElementById('description').value;
        const date = document.getElementById('date').value;             
        const priority = document.getElementById('lessImportant').value; 
        makeTodoo(title,description,date,priority); 
    })
})

function  makeTodoo(title,description,date,priority){
    const todo = new Todo(title,description,date,priority);

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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0Esb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQSwwRUFBMEU7O0FBRTFFLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVzQjs7Ozs7O1VDeEJ0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ3VDO0FBQ0o7QUFDQSxFQUFFO0FBQ047QUFDL0I7QUFDQSxvREFBVTtBQUNWLGdEQUFLO0FBQ0wsZ0RBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQzs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvaW5ib3guanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL21vZGFsLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9wYWdlLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmJveCAtIG1haW4vbWlkZGxlIGNvbnRlbnRcblxuZnVuY3Rpb24gaW5ib3goKXtcbiAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveCcpOyAvLyBmcm9tIHBhZ2UuanNcblxuICAgIGNvbnN0IGluYm94VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmJveFRpdGxlLnRleHRDb250ZW50ID0gJ0luYm94JztcbiAgICBpbmJveC5hcHBlbmRDaGlsZChpbmJveFRpdGxlKS5jbGFzc05hbWUgPSAnaW5ib3hUaXRsZSc7XG5cbiAgICBjb25zdCBsaXN0T2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5ib3guYXBwZW5kQ2hpbGQobGlzdE9iaikuY2xhc3NOYW1lID0gJ2xpc3RPYmonO1xuXG4gICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyBcbiAgICBhZGRUYXNrLnRleHRDb250ZW50ID0gJysgQWRkIFRhc2snO1xuICAgIGFkZFRhc2suc2V0QXR0cmlidXRlKCdkYXRhLW1vZGFsLXRhcmdldCcsJyNtb2RhbCcpOyAvLyAxc3QgYnV0dG9uIHRhcmdldGluZyBtb2RhbCAoIHRoZSBmb3JtIGVsZW1lbnQgKVxuICAgIGluYm94LmFwcGVuZENoaWxkKGFkZFRhc2spLmNsYXNzTmFtZSA9ICdhZGRUYXNrJztcblxufVxuXG5cblxuZXhwb3J0IHsgaW5ib3ggfTsiLCJmdW5jdGlvbiBtb2RhbCgpe1xuICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94Jyk7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIFwicG9zdFwiKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZShcImFjdGlvblwiLCBcIlwiKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsXCJtb2RhbFwiKTsgLy8gZGF0YSBhdHRyaWJ1dGUgb2YgdGhlIGJ1dHRvbnMgd2lsbCB0YXJnZXQgdGhpcyBpZFxuICAgIGluYm94LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZVwiKTtcbiAgICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUaXRsZVwiKTtcbiAgICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIixcInRpdGxlXCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcblxuICAgIGNvbnN0IHRvZG9EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvRGVzYy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICB0b2RvRGVzYy5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gICAgdG9kb0Rlc2Muc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJEZXNjcmlwdGlvblwiKTtcbiAgICB0b2RvRGVzYy5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiZGVzY3JpcHRpb25cIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0b2RvRGVzYyk7XG5cbiAgICBjb25zdCB0b2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0RhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gICAgdG9kb0RhdGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRhdGVcIik7XG4gICAgdG9kb0RhdGUuc2V0QXR0cmlidXRlKFwiaWRcIixcImRhdGVcIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0b2RvRGF0ZSk7XG5cbiAgICBjb25zdCB0b2RvSW1wb3J0YW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0ltcG9ydGFuY2Uuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuICAgIHRvZG9JbXBvcnRhbmNlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aWNrZXRfdHlwZVwiKTtcbiAgICB0b2RvSW1wb3J0YW5jZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiaW1wb3J0YW50XCIpXG4gICAgXG4gICAgY29uc3QgaW1wb3J0YW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBpbXBvcnRhbnQudGV4dENvbnRlbnQgPSAnSW1wb3J0YW50JztcbiAgICBpbXBvcnRhbnQuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJpbXBvcnRhbnRcIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0b2RvSW1wb3J0YW5jZSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbXBvcnRhbnQpO1xuXG4gICAgY29uc3QgdG9kb0ltcG9ydGFuY2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvSW1wb3J0YW5jZTIuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuICAgIHRvZG9JbXBvcnRhbmNlMi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGlja2V0X3R5cGVcIik7XG4gICAgdG9kb0ltcG9ydGFuY2UyLnNldEF0dHJpYnV0ZShcImlkXCIsXCJsZXNzSW1wb3J0YW50XCIpXG4gICAgdG9kb0ltcG9ydGFuY2UyLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsJ3RydWUnKTtcblxuICAgIGNvbnN0IGxlc3NJbXBvcmFudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGVzc0ltcG9yYW50LnRleHRDb250ZW50ID0gJ0xlc3MgaW1wb3J0YW50JztcbiAgICBsZXNzSW1wb3JhbnQuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJsZXNzSW1wb3J0YW50XCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodG9kb0ltcG9ydGFuY2UyKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxlc3NJbXBvcmFudCk7XG5cbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG4gICAgYWRkQnRuLnRleHRDb250ZW50ID0gJ0FkZCc7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChhZGRCdG4pLmNsYXNzTmFtZSA9ICdhZGRCdG4nO1xuXG4gICAgY29uc3Qgcm12QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcm12QnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1jbG9zZS1idXR0b24nLCcjbW9kYWwnKTsgLy8gdGFyZ2V0cyB0aGUgbW9kYWwgKCBmb3JtIGVsIClcbiAgICBybXZCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG4gICAgcm12QnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChybXZCdG4pLmNsYXNzTmFtZSA9ICdybXZCdG4nO1xuXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG92ZXJsYXkuc2V0QXR0cmlidXRlKCdpZCcsJ292ZXJsYXknKTtcbiAgICBpbmJveC5hcHBlbmRDaGlsZChvdmVybGF5KTtcblxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgICAgICBtYWtlT2JqRE9NKCk7XG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIG1ha2VPYmpET00oKXsgIC8vIHRpdGxlLGRlc2NyaXB0aW9uLGRhdGUscHJpb3JpdHlcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTsgXG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlO1xuICAgICAgIC8qIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlc3NJbXBvcnRhbnQnKS52YWx1ZTsqL1xuXG4gICAgICAgIGNvbnN0IGxpc3RPYmogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdE9iaicpOyAvLyBwbGFjZSBhbGwgdG9kb3MgaW4gb25lIGVsZW1lbnQsIG1vcmUgY29tZnkgZm9yIGNzc1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgb2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7ICAgXG4gICAgICAgIGxpc3RPYmouYXBwZW5kQ2hpbGQob2JqKS5jbGFzc05hbWUgPSAnb2JqJzsgXG4gICAgICAgIFxuICAgICAgICBjb25zdCBvYmpUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgb2JqVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgb2JqLmFwcGVuZENoaWxkKG9ialRpdGxlKS5jbGFzc05hbWUgPSAnb2JqVGl0bGUnO1xuXG4gICAgICAgIGNvbnN0IG9iakRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG9iakRlc2MudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgb2JqLmFwcGVuZENoaWxkKG9iakRlc2MpLmNsYXNzTmFtZSA9ICdvYmpEZXNjJztcblxuICAgICAgICBjb25zdCBvYmpEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG9iakRhdGUudGV4dENvbnRlbnQgPSBkYXRlO1xuICAgICAgICBvYmouYXBwZW5kQ2hpbGQob2JqRGF0ZSkuY2xhc3NOYW1lID0gJ29iakRhdGUnO1xuXG4gICAgICAgIGNvbnN0IHJtdk9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBybXZPYmouc2V0QXR0cmlidXRlKCdkYXRhLWNsb3NlLWJ1dHRvbicsJyNtb2RhbCcpOyBcbiAgICAgICAgcm12T2JqLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuICAgICAgICBybXZPYmoudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgIG9iai5hcHBlbmRDaGlsZChybXZPYmopLmNsYXNzTmFtZSA9ICdybXZPYmonOyBcbiAgICB9XG5cbn1cblxuZXhwb3J0IHsgbW9kYWwgfTsiLCIvLyBpbml0aWFsIHBhZ2UgbGF5b3V0IFxuXG5mdW5jdGlvbiBwYWdlTGF5b3V0KCl7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcmVudCcpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ1RvLWRvIExpc3QnO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChoZWFkZXIpLmNsYXNzTmFtZSA9ICdoZWFkZXInO1xuXG4gICAgY29uc3QgdGljayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHRpY2suc3JjID0gJ3BpY3R1cmVzL2NoZWNrLnBuZyc7XG4gICAgdGljay5hbHQgPSAnY2hlY2stcGljJztcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGljayk7XG5cbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHNpZGViYXIpLmNsYXNzTmFtZSA9ICdzaWRlYmFyJztcblxuICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGluYm94KS5jbGFzc05hbWUgPSAnaW5ib3gnO1xuXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGZvb3RlcikuY2xhc3NOYW1lID0gJ2Zvb3Rlcic7XG59XG5cbmV4cG9ydCB7IHBhZ2VMYXlvdXQgfTsgIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzZXBhcmF0ZSB0aGUgYXBwbGljYXRpb24gbG9naWMgZnJvbSB0aGUgRE9NIHN0dWZmLCBkbyBpdCBpbiBkaWZmZXJlbnQgbW9kdWxlc1xuLy8gU2luZ2xlIFJlc3BvbnNpYmlsaXR5IC0gYSBjbGFzcyBzaG91bGQgaGF2ZSBvbmUgcmVzcG9uc2liaWxpdHlcbmltcG9ydCB7IHBhZ2VMYXlvdXQgfSBmcm9tICcuL3BhZ2UuanMnO1xuaW1wb3J0IHsgaW5ib3ggfSBmcm9tICcuL2luYm94LmpzJztcbmltcG9ydCB7IG1vZGFsIH0gZnJvbSAnLi9tb2RhbC5qcyc7ICAvLyAxLiBwcmlvcml0eSBhbmQgY2hlY2tsaXN0IG9uIHRvZG9zIFxuaW1wb3J0IHsgc2V0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMi4gZnVuY3Rpb25hbGl0eSBvbiB0b2RvcyAtIGV2ZXJ0eWhpbmdcbnBhZ2VMYXlvdXQoKTtcbmluYm94KCk7XG5tb2RhbCgpO1xuXG5cbmNsYXNzIFRvZG97XG4gICAgY29uc3RydWN0b3IodGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eS8qLGNoZWNrTGlzdCovKXsgICBcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAvKiB0aGlzLmNoZWNrTGlzdCA9IGNoZWNrTGlzdDsqL1xuICAgIH1cblxufVxuXG5cbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkVGFzaycpOyBcbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICBjb25zdCBtYWtlVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRCdG4nKTsgXG4gICAgbWFrZVRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWU7IFxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZTsgICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlc3NJbXBvcnRhbnQnKS52YWx1ZTsgXG4gICAgICAgIG1ha2VUb2Rvbyh0aXRsZSxkZXNjcmlwdGlvbixkYXRlLHByaW9yaXR5KTsgXG4gICAgfSlcbn0pXG5cbmZ1bmN0aW9uICBtYWtlVG9kb28odGl0bGUsZGVzY3JpcHRpb24sZGF0ZSxwcmlvcml0eSl7XG4gICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKHRpdGxlLGRlc2NyaXB0aW9uLGRhdGUscHJpb3JpdHkpO1xuXG59XG5cblxuLy8gTW9kYWxcbmNvbnN0IG9wZW5Nb2RhbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RhbC10YXJnZXRdJyk7XG5jb25zdCBjbG9zZU1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNsb3NlLWJ1dHRvbl0nKTtcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpO1xuXG5vcGVuTW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXR0b24uZGF0YXNldC5tb2RhbFRhcmdldCk7XG4gICAgICAgIG9wZW5Nb2RhbChtb2RhbCk7XG4gICAgfSlcbn0pXG5cbmZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCl7XG4gICAgaWYgKCBtb2RhbCA9PSBudWxsICkgcmV0dXJuXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn1cblxuY2xvc2VNb2RhbEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbi5kYXRhc2V0LmNsb3NlQnV0dG9uKTtcbiAgICAgICAgY2xvc2VNb2RhbChtb2RhbCk7XG4gICAgfSlcbn0pXG5cbmZ1bmN0aW9uIGNsb3NlTW9kYWwobW9kYWwpe1xuICAgIGlmICggbW9kYWwgPT0gbnVsbCApIHJldHVyblxuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59XG5cbm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICBjb25zdCBtb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtLmFjdGl2ZScpO1xuICAgIG1vZGFscy5mb3JFYWNoKG1vZGFsID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cobW9kYWxzKTtcbiAgICAgIGNsb3NlTW9kYWwobW9kYWwpO1xuICAgIH0pXG59KVxuXG5cbi8qKlByZXZlbnRzIGNocm9tZSBwb3AgdXAgd2luZG93IHdoZW4gcmVmcmVzaGluZyovXG5pZiAoIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSApIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoIG51bGwsIG51bGwsIHdpbmRvdy5sb2NhdGlvbi5ocmVmICk7XG4gIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=