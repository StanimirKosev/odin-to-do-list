// separate the application logic from the DOM stuff, do it in different modules
// Single Responsibility - a class should have one responsibility
import { pageLayout } from './page.js';
pageLayout();


class todos{
    constructor(title,description,dueDate,priority,checkList){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checkList = checkList;
    }
}