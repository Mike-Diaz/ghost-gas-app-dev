import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {MatAutocompleteSelectedEvent} from '@angular/material';
import {User} from "../../models/user.model";
import {UserStoreService} from "../../services/userStore.service";

@Component({
  selector: 'app-user-search-form',
  templateUrl: './user-search-form.component.html',
  styleUrls: ['./user-search-form.component.scss']
})
export class UserSearchFormComponent implements OnInit {
  @Input() selectedUser: User = {} as User;
  @Output() selectedUserChange = new EventEmitter<User>();
  searchOptions: User[] = [];
  filteredSearchOptions: Observable<User[]>;
  searchControl = new FormControl('');

  constructor(
    private userStoreService: UserStoreService
  ) {
  }

  ngOnInit() {
    this.userStoreService.searchOptions.subscribe(options => this.searchOptions = options);

    this.filteredSearchOptions = this.searchControl.valueChanges
      .pipe(
        startWith(''),
        map(searchInput => this._filterSearch(searchInput))
      );
  }

  private _filterSearch(searchInput: string) {
    const filterValue = searchInput.length ? searchInput : '';

    return this.searchOptions.filter(option => option.userId ? option.userId.toString().includes(filterValue) : '');
  }

  searchDisplay(option: User) {
    return option.userId;
  }

  selectUser(event: MatAutocompleteSelectedEvent) {
    this.selectedUser = event.option.value;
    this.selectedUserChange.emit(this.selectedUser);
  }

  clearSearch() {
    // Reset search form
    this.searchControl.setValue('');
    this.selectedUser = {} as User;

    // Retrieve users again
    this.userStoreService.fetchUserSearchOptions();
  }
}
