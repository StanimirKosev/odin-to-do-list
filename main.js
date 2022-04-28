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

    const addTask = document.createElement('button');
    addTask.textContent = '+ Add Task';
    inbox.appendChild(addTask).className = 'addTask';
    addTask.addEventListener('click', () => {
        modal();  
        addTask.disabled = true; 
    })

    function modal(){
        const form = document.createElement('form');
        form.setAttribute("method", "post");
        form.setAttribute("action", "");
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
        rmvBtn.setAttribute('type','button');
        rmvBtn.textContent = 'Remove';
        form.appendChild(rmvBtn).className = 'rmvBtn';

        addBtn.addEventListener('click', () => { 
            makeObjDOM()
        })
    }

    function makeObjDOM(){  // title,description,date,priority
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value; 
        const date = document.getElementById('date').value;
       /* const priority = document.getElementById('lessImportant').value;*/
        
        const obj = document.createElement('div');    
        inbox.appendChild(obj).className = 'obj';
        
        const objTitle = document.createElement('p');
        objTitle.textContent = title;
        obj.appendChild(objTitle).className = 'objTitle';

        const objDesc = document.createElement('p');
        objDesc.textContent = description;
        obj.appendChild(objDesc).className = 'objDesc';

        const objDate = document.createElement('div');
        objDate.textContent = date;
        obj.appendChild(objDate).className = 'objDate';
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
// separate the application logic from the DOM stuff, do it in different modules
// Single Responsibility - a class should have one responsibility



(0,_page_js__WEBPACK_IMPORTED_MODULE_0__.pageLayout)();
(0,_inbox_js__WEBPACK_IMPORTED_MODULE_1__.inbox)();


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
    console.log(todo); 
}











/**Prevents chrome pop up window when refreshing*/
if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
  }
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0Esb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVzQjs7Ozs7O1VDeEJ0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDdUM7QUFDSjs7QUFFbkMsb0RBQVU7QUFDVixnREFBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOzs7OztBQUtEO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7QUFDQSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL2luYm94LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9wYWdlLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmJveCAtIG1haW4vbWlkZGxlIGNvbnRlbnRcblxuZnVuY3Rpb24gaW5ib3goKXtcbiAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveCcpOyAvLyBmcm9tIHBhZ2UuanNcblxuICAgIGNvbnN0IGluYm94VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmJveFRpdGxlLnRleHRDb250ZW50ID0gJ0luYm94JztcbiAgICBpbmJveC5hcHBlbmRDaGlsZChpbmJveFRpdGxlKS5jbGFzc05hbWUgPSAnaW5ib3hUaXRsZSc7XG5cbiAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkVGFzay50ZXh0Q29udGVudCA9ICcrIEFkZCBUYXNrJztcbiAgICBpbmJveC5hcHBlbmRDaGlsZChhZGRUYXNrKS5jbGFzc05hbWUgPSAnYWRkVGFzayc7XG4gICAgYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbW9kYWwoKTsgIFxuICAgICAgICBhZGRUYXNrLmRpc2FibGVkID0gdHJ1ZTsgXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIG1vZGFsKCl7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIFwicG9zdFwiKTtcbiAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiwgXCJcIik7XG4gICAgICAgIGluYm94LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICAgICAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZVwiKTtcbiAgICAgICAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiVGl0bGVcIik7XG4gICAgICAgIHRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwidGl0bGVcIik7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcblxuICAgICAgICBjb25zdCB0b2RvRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRvZG9EZXNjLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgICAgICB0b2RvRGVzYy5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gICAgICAgIHRvZG9EZXNjLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRGVzY3JpcHRpb25cIik7XG4gICAgICAgIHRvZG9EZXNjLnNldEF0dHJpYnV0ZShcImlkXCIsXCJkZXNjcmlwdGlvblwiKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0b2RvRGVzYyk7XG5cbiAgICAgICAgY29uc3QgdG9kb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0b2RvRGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgICAgICAgdG9kb0RhdGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRhdGVcIik7XG4gICAgICAgIHRvZG9EYXRlLnNldEF0dHJpYnV0ZShcImlkXCIsXCJkYXRlXCIpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRvZG9EYXRlKTtcblxuICAgICAgICBjb25zdCB0b2RvSW1wb3J0YW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRvZG9JbXBvcnRhbmNlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcbiAgICAgICAgdG9kb0ltcG9ydGFuY2Uuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRpY2tldF90eXBlXCIpO1xuICAgICAgICB0b2RvSW1wb3J0YW5jZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiaW1wb3J0YW50XCIpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBpbXBvcnRhbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBpbXBvcnRhbnQudGV4dENvbnRlbnQgPSAnSW1wb3J0YW50JztcbiAgICAgICAgaW1wb3J0YW50LnNldEF0dHJpYnV0ZShcImZvclwiLFwiaW1wb3J0YW50XCIpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRvZG9JbXBvcnRhbmNlKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbXBvcnRhbnQpO1xuXG4gICAgICAgIGNvbnN0IHRvZG9JbXBvcnRhbmNlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRvZG9JbXBvcnRhbmNlMi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG4gICAgICAgIHRvZG9JbXBvcnRhbmNlMi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGlja2V0X3R5cGVcIik7XG4gICAgICAgIHRvZG9JbXBvcnRhbmNlMi5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwibGVzc0ltcG9ydGFudFwiKVxuICAgICAgICB0b2RvSW1wb3J0YW5jZTIuc2V0QXR0cmlidXRlKCdjaGVja2VkJywndHJ1ZScpO1xuXG4gICAgICAgIGNvbnN0IGxlc3NJbXBvcmFudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxlc3NJbXBvcmFudC50ZXh0Q29udGVudCA9ICdMZXNzIGltcG9ydGFudCc7XG4gICAgICAgIGxlc3NJbXBvcmFudC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcImxlc3NJbXBvcnRhbnRcIik7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodG9kb0ltcG9ydGFuY2UyKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChsZXNzSW1wb3JhbnQpO1xuXG4gICAgICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG4gICAgICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9ICdBZGQnO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGFkZEJ0bikuY2xhc3NOYW1lID0gJ2FkZEJ0bic7XG5cbiAgICAgICAgY29uc3Qgcm12QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHJtdkJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcbiAgICAgICAgcm12QnRuLnRleHRDb250ZW50ID0gJ1JlbW92ZSc7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQocm12QnRuKS5jbGFzc05hbWUgPSAncm12QnRuJztcblxuICAgICAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IFxuICAgICAgICAgICAgbWFrZU9iakRPTSgpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZU9iakRPTSgpeyAgLy8gdGl0bGUsZGVzY3JpcHRpb24sZGF0ZSxwcmlvcml0eVxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlOyBcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWU7XG4gICAgICAgLyogY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVzc0ltcG9ydGFudCcpLnZhbHVlOyovXG4gICAgICAgIFxuICAgICAgICBjb25zdCBvYmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgICAgXG4gICAgICAgIGluYm94LmFwcGVuZENoaWxkKG9iaikuY2xhc3NOYW1lID0gJ29iaic7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBvYmpUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgb2JqVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgb2JqLmFwcGVuZENoaWxkKG9ialRpdGxlKS5jbGFzc05hbWUgPSAnb2JqVGl0bGUnO1xuXG4gICAgICAgIGNvbnN0IG9iakRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG9iakRlc2MudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgb2JqLmFwcGVuZENoaWxkKG9iakRlc2MpLmNsYXNzTmFtZSA9ICdvYmpEZXNjJztcblxuICAgICAgICBjb25zdCBvYmpEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG9iakRhdGUudGV4dENvbnRlbnQgPSBkYXRlO1xuICAgICAgICBvYmouYXBwZW5kQ2hpbGQob2JqRGF0ZSkuY2xhc3NOYW1lID0gJ29iakRhdGUnO1xuICAgIH1cblxufVxuXG5leHBvcnQgeyBpbmJveCB9OyIsIi8vIGluaXRpYWwgcGFnZSBsYXlvdXQgXG5cbmZ1bmN0aW9uIHBhZ2VMYXlvdXQoKXtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFyZW50Jyk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnVG8tZG8gTGlzdCc7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGhlYWRlcikuY2xhc3NOYW1lID0gJ2hlYWRlcic7XG5cbiAgICBjb25zdCB0aWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdGljay5zcmMgPSAncGljdHVyZXMvY2hlY2sucG5nJztcbiAgICB0aWNrLmFsdCA9ICdjaGVjay1waWMnO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aWNrKTtcblxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoc2lkZWJhcikuY2xhc3NOYW1lID0gJ3NpZGViYXInO1xuXG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaW5ib3gpLmNsYXNzTmFtZSA9ICdpbmJveCc7XG5cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKS5jbGFzc05hbWUgPSAnZm9vdGVyJztcbn1cblxuZXhwb3J0IHsgcGFnZUxheW91dCB9OyAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHNlcGFyYXRlIHRoZSBhcHBsaWNhdGlvbiBsb2dpYyBmcm9tIHRoZSBET00gc3R1ZmYsIGRvIGl0IGluIGRpZmZlcmVudCBtb2R1bGVzXG4vLyBTaW5nbGUgUmVzcG9uc2liaWxpdHkgLSBhIGNsYXNzIHNob3VsZCBoYXZlIG9uZSByZXNwb25zaWJpbGl0eVxuaW1wb3J0IHsgcGFnZUxheW91dCB9IGZyb20gJy4vcGFnZS5qcyc7XG5pbXBvcnQgeyBpbmJveCB9IGZyb20gJy4vaW5ib3guanMnO1xuXG5wYWdlTGF5b3V0KCk7XG5pbmJveCgpO1xuXG5cbmNsYXNzIFRvZG97XG4gICAgY29uc3RydWN0b3IodGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eS8qLGNoZWNrTGlzdCovKXsgICBcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAvKiB0aGlzLmNoZWNrTGlzdCA9IGNoZWNrTGlzdDsqL1xuICAgIH1cbn1cblxuXG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFRhc2snKTsgXG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgY29uc3QgbWFrZVRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkQnRuJyk7IFxuICAgIG1ha2VUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIFxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVzc0ltcG9ydGFudCcpLnZhbHVlO1xuICAgICAgICBtYWtlVG9kb28odGl0bGUsZGVzY3JpcHRpb24sZGF0ZSxwcmlvcml0eSk7XG4gICAgfSlcbn0pXG5cblxuXG5cbmZ1bmN0aW9uICBtYWtlVG9kb28odGl0bGUsZGVzY3JpcHRpb24sZGF0ZSxwcmlvcml0eSl7XG4gICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKHRpdGxlLGRlc2NyaXB0aW9uLGRhdGUscHJpb3JpdHkpO1xuICAgIGNvbnNvbGUubG9nKHRvZG8pOyBcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG4vKipQcmV2ZW50cyBjaHJvbWUgcG9wIHVwIHdpbmRvdyB3aGVuIHJlZnJlc2hpbmcqL1xuaWYgKCB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgKSB7XG4gICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKCBudWxsLCBudWxsLCB3aW5kb3cubG9jYXRpb24uaHJlZiApO1xuICB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9