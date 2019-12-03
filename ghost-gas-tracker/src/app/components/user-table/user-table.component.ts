import { Component, OnInit, ViewChild } from '@angular/core';
import {UserService} from "../../services/user.service";
import {NgForm} from "@angular/forms";
import {User} from "../../models/user.model";
import {Organization} from "../../models/organization.model";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  @ViewChild('userSearchForm', {static: false}) userSearchForm;
  @ViewChild('organizationSearchForm', {static: false}) organizationSearchForm;
  @ViewChild('form', {static: false}) form: NgForm;
  selectedUser: User = {} as User;
  selectedOrganization: Organization = {} as Organization;

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit() {
  }

  resetForm() {
    this.form.resetForm('');
    this.selectedUser = {} as User;
    this.form.resetForm('');
    this.selectedOrganization = {} as Organization;

    // Reset the search form
    this.userSearchForm.clearSearch();
    this.organizationSearchForm.clearSearch();
  }

  onSubmit() {
    if (this.form.valid) {
      const saveUser: User = {
        organizationId: this.form.value.organizationId,
        role: this.form.value.role,
        name: this.form.value.name,
        emails: this.form.value.emails,
        picture: this.form.value.picture,
        };

      if (this.selectedUser._id) {
        // Editing
        saveUser._id = this.selectedUser._id;

        this.userService.update(saveUser).subscribe((result) => {
          console.log('User updated!');
        });

      } else {
        // New
        // We must call subscribe() for new() to be executed
        this.userService.new(saveUser).subscribe((result) => {
          console.log('User created!');
        });
      }

      this.resetForm();
    }
  }
}
