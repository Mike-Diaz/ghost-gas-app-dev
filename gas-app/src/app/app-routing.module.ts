import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowTasksComponent }      from './show-tasks/show-tasks.component';
import { ToDoComponent }      from './to-do/to-do.component';

const myRoutes: Routes = [
  { path: 'tasks', component: ShowTasksComponent },
  { path: 'todo', component: ToDoComponent }
 ];
 


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(myRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
