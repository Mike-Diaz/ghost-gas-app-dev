// This async functionality uses an Angular HttpClint module to do the REST api to node
// for us. As we need calls to Node and over to mongo to be async, it uses the
// Observable  (called with a .subscribe modifier)
// each of the 5 methods return back the RESULT of executing the this.http.something call
// up to the node server
// all od this is provided to any component in the app as an Angular "Service"

import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';  // one article had it this way, didn't work
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Task } from './Task';
export interface Tasks {   // I have no idea what this does!!!
 name: string;
}
@Injectable({ providedIn: 'root' })  // this makes this service injectable, Angular's dependecy injection model
export class TaskService {
 constructor(private http: HttpClient) {}
 getAllTasks(): Observable<Task[]> {
   return  this.http.get<Task[]>('http://localhost:3000/tasks');
 }
 getTask(taskName: string): Observable<Task> {
   return this.http.get<Task>('http://localhost:3000/tasks/' + taskName);
 }
 insertTask(task: Task): Observable<Task> {
   return this.http.post<Task>('http://localhost:3000/tasks/', task);
 }
 updateTask(task: Task): Observable<void> {
   return this.http.put<void>('http://localhost:3000/tasks/' + task._id, task);
 }
 deleteTask(task: Task) {
   return this.http.delete('http://localhost:3000/tasks/' + task._id);
 }
}
