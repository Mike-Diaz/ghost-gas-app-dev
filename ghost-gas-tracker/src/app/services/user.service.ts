import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';
import {User} from "../models/user.model";

const API_URL = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private httpClient: HttpClient
  ) {
  }

  public getAll(): Observable<User[]> {
    return this.httpClient
      .get<User[]>(API_URL + '/User', httpOptions);
  }

  public getById(id: string): Observable<User> {
    return this.httpClient
      .get<User>(API_URL + '/User/' + id, httpOptions);
  }

  public new(newUser: User): Observable<User> {
    return this.httpClient
      .post<User>(API_URL + '/User', newUser, httpOptions);
  }

  public update(User: User): Observable<User> {
    return this.httpClient
      .put<User>(API_URL + '/User/' + User._id, User, httpOptions);
  }

  public delete(User: User): Observable<User> {
    return this.httpClient
      .delete<User>(API_URL + '/User/' + User._id, httpOptions);
  }
}
