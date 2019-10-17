import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../ToDoItem';
import { TODOS } from '../mock-ToDos';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  TheToDOs = TODOS;  // we give our array of ToDo items a name
 
  selectedToDoItem: ToDoItem;  // a property set by the <li> click event, defined next

  // when user clicks on any <li> in our list, this saves that name li in the above property
  // the HTML page in turn uses that property to set a conditional CSS for that selected line
  // and to display for information about that one object
 onSelect(PassedInToDoItem: ToDoItem): void {
   this.selectedToDoItem = PassedInToDoItem;
 }

 // not doing anything in the constructor or in ngOnInit
  constructor() { }

  ngOnInit() {
  }

}
