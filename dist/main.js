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
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value; 
        const date = document.getElementById('date').value;
       

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


  

                                    
(0,_page_js__WEBPACK_IMPORTED_MODULE_0__.pageLayout)(); // next is - side bar - wiring up everything - localstorage - lil validations mby
(0,_inbox_js__WEBPACK_IMPORTED_MODULE_1__.inbox)();
(0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.modal)();


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


function defaultTodos(){

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9pbmJveC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGluYm94IC0gbWFpbi9taWRkbGUgY29udGVudFxuXG5mdW5jdGlvbiBpbmJveCgpe1xuICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94Jyk7IC8vIGZyb20gcGFnZS5qc1xuXG4gICAgY29uc3QgaW5ib3hUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluYm94VGl0bGUudGV4dENvbnRlbnQgPSAnSW5ib3gnO1xuICAgIGluYm94LmFwcGVuZENoaWxkKGluYm94VGl0bGUpLmNsYXNzTmFtZSA9ICdpbmJveFRpdGxlJztcblxuICAgIGNvbnN0IGxpc3RPYmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmJveC5hcHBlbmRDaGlsZChsaXN0T2JqKS5jbGFzc05hbWUgPSAnbGlzdE9iaic7XG5cbiAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IFxuICAgIGFkZFRhc2sudGV4dENvbnRlbnQgPSAnKyBBZGQgVGFzayc7XG4gICAgYWRkVGFzay5zZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kYWwtdGFyZ2V0JywnI21vZGFsJyk7IC8vIDFzdCBidXR0b24gdGFyZ2V0aW5nIG1vZGFsICggdGhlIGZvcm0gZWxlbWVudCApXG4gICAgaW5ib3guYXBwZW5kQ2hpbGQoYWRkVGFzaykuY2xhc3NOYW1lID0gJ2FkZFRhc2snO1xuXG59XG5cblxuXG5leHBvcnQgeyBpbmJveCB9OyIsImZ1bmN0aW9uIG1vZGFsKCl7XG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gnKTtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgXCJwb3N0XCIpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwiXCIpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIixcIm1vZGFsXCIpOyAvLyBkYXRhIGF0dHJpYnV0ZSBvZiB0aGUgYnV0dG9ucyB3aWxsIHRhcmdldCB0aGlzIGlkXG4gICAgaW5ib3guYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRpdGxlXCIpO1xuICAgIHRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRpdGxlXCIpO1xuICAgIHRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwidGl0bGVcIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuXG4gICAgY29uc3QgdG9kb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9EZXNjLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHRvZG9EZXNjLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgICB0b2RvRGVzYy5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkRlc2NyaXB0aW9uXCIpO1xuICAgIHRvZG9EZXNjLnNldEF0dHJpYnV0ZShcImlkXCIsXCJkZXNjcmlwdGlvblwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRvZG9EZXNjKTtcblxuICAgIGNvbnN0IHRvZG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvRGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgICB0b2RvRGF0ZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGF0ZVwiKTtcbiAgICB0b2RvRGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiZGF0ZVwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRvZG9EYXRlKTtcblxuICAgIGNvbnN0IHRvZG9JbXBvcnRhbmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvSW1wb3J0YW5jZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG4gICAgdG9kb0ltcG9ydGFuY2Uuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRpY2tldF90eXBlXCIpO1xuICAgIHRvZG9JbXBvcnRhbmNlLnNldEF0dHJpYnV0ZShcImlkXCIsXCJpbXBvcnRhbnRcIik7XG4gICAgdG9kb0ltcG9ydGFuY2Uuc2V0QXR0cmlidXRlKCd2YWx1ZScsJ0ltcG9ydGFudCcpO1xuICAgIFxuICAgIGNvbnN0IGltcG9ydGFudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgaW1wb3J0YW50LnRleHRDb250ZW50ID0gJ0ltcG9ydGFudCc7XG4gICAgaW1wb3J0YW50LnNldEF0dHJpYnV0ZShcImZvclwiLFwiaW1wb3J0YW50XCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodG9kb0ltcG9ydGFuY2UpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW1wb3J0YW50KTtcblxuICAgIGNvbnN0IHRvZG9JbXBvcnRhbmNlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0ltcG9ydGFuY2UyLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcbiAgICB0b2RvSW1wb3J0YW5jZTIuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRpY2tldF90eXBlXCIpO1xuICAgIHRvZG9JbXBvcnRhbmNlMi5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwibGVzc0ltcG9ydGFudFwiKVxuICAgIHRvZG9JbXBvcnRhbmNlMi5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCd0cnVlJyk7XG4gICAgdG9kb0ltcG9ydGFuY2UyLnNldEF0dHJpYnV0ZSgndmFsdWUnLCdOb3QgaW1wb3J0YW50Jyk7XG5cbiAgICBjb25zdCBsZXNzSW1wb3JhbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxlc3NJbXBvcmFudC50ZXh0Q29udGVudCA9ICdOb3QgaW1wb3J0YW50JztcbiAgICBsZXNzSW1wb3JhbnQuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJsZXNzSW1wb3J0YW50XCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodG9kb0ltcG9ydGFuY2UyKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxlc3NJbXBvcmFudCk7XG5cbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG4gICAgYWRkQnRuLnRleHRDb250ZW50ID0gJ0FkZCc7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChhZGRCdG4pLmNsYXNzTmFtZSA9ICdhZGRCdG4nO1xuXG4gICAgY29uc3Qgcm12QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcm12QnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1jbG9zZS1idXR0b24nLCcjbW9kYWwnKTsgLy8gdGFyZ2V0cyB0aGUgbW9kYWwgKCBmb3JtIGVsIClcbiAgICBybXZCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG4gICAgcm12QnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChybXZCdG4pLmNsYXNzTmFtZSA9ICdybXZCdG4nO1xuXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG92ZXJsYXkuc2V0QXR0cmlidXRlKCdpZCcsJ292ZXJsYXknKTtcbiAgICBpbmJveC5hcHBlbmRDaGlsZChvdmVybGF5KTtcblxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgICAgICBtYWtlT2JqRE9NKCk7XG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIG1ha2VPYmpET00oKXsgIC8vIHRpdGxlLGRlc2NyaXB0aW9uLGRhdGUscHJpb3JpdHlcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTsgXG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlO1xuICAgICAgIFxuXG4gICAgICAgIGNvbnN0IGxpc3RPYmogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdE9iaicpOyAvLyBwbGFjZSBhbGwgdG9kb3MgaW4gb25lIGVsZW1lbnQsIG1vcmUgY29tZnkgZm9yIGNzc1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgb2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7ICAgXG4gICAgICAgIGxpc3RPYmouYXBwZW5kQ2hpbGQob2JqKS5jbGFzc05hbWUgPSAnb2JqJzsgXG4gICAgICAgIFxuICAgICAgICBjb25zdCBvYmpUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgb2JqVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgb2JqLmFwcGVuZENoaWxkKG9ialRpdGxlKS5jbGFzc05hbWUgPSAnb2JqVGl0bGUnO1xuXG4gICAgICAgIGNvbnN0IG9iakRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG9iakRlc2MudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgb2JqLmFwcGVuZENoaWxkKG9iakRlc2MpLmNsYXNzTmFtZSA9ICdvYmpEZXNjJztcblxuICAgICAgICBjb25zdCBvYmpEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG9iakRhdGUudGV4dENvbnRlbnQgPSBkYXRlO1xuICAgICAgICBvYmouYXBwZW5kQ2hpbGQob2JqRGF0ZSkuY2xhc3NOYW1lID0gJ29iakRhdGUnO1xuXG4gICAgICAgIGNvbnN0IHJtdk9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBybXZPYmouc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG4gICAgICAgIHJtdk9iai50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgb2JqLmFwcGVuZENoaWxkKHJtdk9iaikuY2xhc3NOYW1lID0gJ3Jtdk9iaic7IFxuXG4gICAgICAgIGlmIChkaXNwbGF5UmFkaW9WYWx1ZSgpID09PSAnSW1wb3J0YW50Jyl7XG4gICAgICAgICAgICBjb25zdCBpbXBvcnRhbmNlT2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBpbXBvcnRhbmNlT2JqLnRleHRDb250ZW50ID0gZGlzcGxheVJhZGlvVmFsdWUoKTtcbiAgICAgICAgICAgIG9iai5hcHBlbmRDaGlsZChpbXBvcnRhbmNlT2JqKS5jbGFzc05hbWUgPSAnaW1wb3J0YW5jZU9iaic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihkaXNwbGF5UmFkaW9WYWx1ZSgpID09PSAnTm90IGltcG9ydGFudCcpe1xuICAgICAgICAgICAgY29uc3QgbGVzc0ltcG9yYW50T2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZXNzSW1wb3JhbnRPYmoudGV4dENvbnRlbnQgPSBkaXNwbGF5UmFkaW9WYWx1ZSgpO1xuICAgICAgICAgICAgb2JqLmFwcGVuZENoaWxkKGxlc3NJbXBvcmFudE9iaikuY2xhc3NOYW1lID0gJ2xlc3NJbXBvcnRhbnRPYmonO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICggbGV0IGkgPSAwIDsgaSA8IGxpc3RPYmouY2hpbGRyZW4ubGVuZ3RoIDsgaSsrKXtcbiAgICAgICAgICAgIG9iai5zZXRBdHRyaWJ1dGUoJ2RhdGEtb2JqLWluZGV4JyxpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlSYWRpb1ZhbHVlKCkge1xuICAgICAgICBjb25zdCBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgndGlja2V0X3R5cGUnKTtcbiAgICAgICAgbGV0IHByaW9yaXR5O1xuICAgIFxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZWxlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihlbGVbaV0uY2hlY2tlZCl7XG4gICAgICAgICAgICBwcmlvcml0eSA9IGVsZVtpXS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJpb3JpdHk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBtb2RhbCB9OyIsIi8vIGluaXRpYWwgcGFnZSBsYXlvdXQgXG5cbmZ1bmN0aW9uIHBhZ2VMYXlvdXQoKXtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFyZW50Jyk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnVG8tZG8gTGlzdCc7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGhlYWRlcikuY2xhc3NOYW1lID0gJ2hlYWRlcic7XG5cbiAgICBjb25zdCB0aWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdGljay5zcmMgPSAncGljdHVyZXMvY2hlY2sucG5nJztcbiAgICB0aWNrLmFsdCA9ICdjaGVjay1waWMnO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aWNrKTtcblxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoc2lkZWJhcikuY2xhc3NOYW1lID0gJ3NpZGViYXInO1xuXG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaW5ib3gpLmNsYXNzTmFtZSA9ICdpbmJveCc7XG5cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKS5jbGFzc05hbWUgPSAnZm9vdGVyJztcbn1cblxuZXhwb3J0IHsgcGFnZUxheW91dCB9OyAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHNlcGFyYXRlIHRoZSBhcHBsaWNhdGlvbiBsb2dpYyBmcm9tIHRoZSBET00gc3R1ZmYsIGRvIGl0IGluIGRpZmZlcmVudCBtb2R1bGVzXG4vLyBTaW5nbGUgUmVzcG9uc2liaWxpdHkgLSBhIGNsYXNzIHNob3VsZCBoYXZlIG9uZSByZXNwb25zaWJpbGl0eVxuaW1wb3J0IHsgcGFnZUxheW91dCB9IGZyb20gJy4vcGFnZS5qcyc7XG5pbXBvcnQgeyBpbmJveCB9IGZyb20gJy4vaW5ib3guanMnO1xuaW1wb3J0IHsgbW9kYWwgfSBmcm9tICcuL21vZGFsLmpzJzsgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbnBhZ2VMYXlvdXQoKTsgLy8gbmV4dCBpcyAtIHNpZGUgYmFyIC0gd2lyaW5nIHVwIGV2ZXJ5dGhpbmcgLSBsb2NhbHN0b3JhZ2UgLSBsaWwgdmFsaWRhdGlvbnMgbWJ5XG5pbmJveCgpO1xubW9kYWwoKTtcblxuXG5jbGFzcyBUb2Rve1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHkpeyAgIFxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cblxufVxuXG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFRhc2snKTsgXG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgY29uc3QgbWFrZVRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkQnRuJyk7IFxuICAgIG1ha2VUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIFxuICAgIFxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlOyBcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWU7ICAgICAgICAgICAgIFxuICAgICAgIFxuICAgICAgICBtYWtlVG9kb28odGl0bGUsZGVzY3JpcHRpb24sZGF0ZSxkaXNwbGF5UmFkaW9WYWx1ZSgpKTsgXG4gICAgfSlcbn0pXG5cbmZ1bmN0aW9uICBtYWtlVG9kb28odGl0bGUsZGVzY3JpcHRpb24sZGF0ZSxwcmlvcml0eSl7XG4gICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKHRpdGxlLGRlc2NyaXB0aW9uLGRhdGUscHJpb3JpdHkpO1xuICAgIGNvbnNvbGUubG9nKHRvZG8pO1xufVxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgcmVtb3ZlVG9kbyhldmVudCk7XG59KVxuXG5mdW5jdGlvbiByZW1vdmVUb2RvKGV2ZW50KXtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJybXZPYmpcIil7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9iai1pbmRleCcpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1vYmotaW5kZXhdJylbaW5kZXhdLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IG51bU9iaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0T2JqJyk7XG4gICAgZm9yICggbGV0IGkgPSAwIDsgaSA8IG51bU9iai5jaGlsZHJlbi5sZW5ndGggOyBpKyspe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1vYmotaW5kZXhdJylbaV0uc2V0QXR0cmlidXRlKCdkYXRhLW9iai1pbmRleCcsIGkgKTsgLy91cGRhdGUgZGF0YSBhdHRyXG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlSYWRpb1ZhbHVlKCkge1xuICAgIGNvbnN0IGVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCd0aWNrZXRfdHlwZScpO1xuICAgIGxldCBwcmlvcml0eTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBlbGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYoZWxlW2ldLmNoZWNrZWQpe1xuICAgICAgICBwcmlvcml0eSA9IGVsZVtpXS52YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJpb3JpdHk7XG59XG5cblxuZnVuY3Rpb24gZGVmYXVsdFRvZG9zKCl7XG5cbn1cblxuLy8gTW9kYWxcbmNvbnN0IG9wZW5Nb2RhbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RhbC10YXJnZXRdJyk7XG5jb25zdCBjbG9zZU1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNsb3NlLWJ1dHRvbl0nKTtcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpO1xuXG5vcGVuTW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXR0b24uZGF0YXNldC5tb2RhbFRhcmdldCk7XG4gICAgICAgIG9wZW5Nb2RhbChtb2RhbCk7XG4gICAgfSlcbn0pXG5cbmZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCl7XG4gICAgaWYgKCBtb2RhbCA9PSBudWxsICkgcmV0dXJuXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn1cblxuY2xvc2VNb2RhbEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbi5kYXRhc2V0LmNsb3NlQnV0dG9uKTtcbiAgICAgICAgY2xvc2VNb2RhbChtb2RhbCk7XG4gICAgfSlcbn0pXG5cbmZ1bmN0aW9uIGNsb3NlTW9kYWwobW9kYWwpe1xuICAgIGlmICggbW9kYWwgPT0gbnVsbCApIHJldHVyblxuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59XG5cbm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICBjb25zdCBtb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtLmFjdGl2ZScpO1xuICAgIG1vZGFscy5mb3JFYWNoKG1vZGFsID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cobW9kYWxzKTtcbiAgICAgIGNsb3NlTW9kYWwobW9kYWwpO1xuICAgIH0pXG59KVxuXG5cbi8qKlByZXZlbnRzIGNocm9tZSBwb3AgdXAgd2luZG93IHdoZW4gcmVmcmVzaGluZyovXG5pZiAoIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSApIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoIG51bGwsIG51bGwsIHdpbmRvdy5sb2NhdGlvbi5ocmVmICk7XG4gIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=