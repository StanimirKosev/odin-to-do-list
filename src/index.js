// separate the application logic from the DOM stuff, do it in different modules
// Single Responsibility - a class should have one responsibility
import { pageLayout } from './page.js';
import { inbox } from './inbox.js';

pageLayout();
inbox();


class todos{
    constructor(title,description,dueDate,priority,checkList){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checkList = checkList;
    }
}


/**Prevents chrome pop up window when refreshing*/
if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
  }