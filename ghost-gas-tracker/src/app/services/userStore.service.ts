import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from "../models/user.model";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private _searchOptions: BehaviorSubject<User[]> = new BehaviorSubject([]);
  public readonly searchOptions: Observable<User[]> = this._searchOptions.asObservable();

  constructor(
    private userService: UserService
  ) {
    this.fetchUserSearchOptions();
  }

  fetchUserSearchOptions() {
    this.userService.getAll().subscribe(users => this._searchOptions.next(users));
  }
}
