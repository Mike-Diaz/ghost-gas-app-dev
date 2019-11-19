import { Component, OnInit, ViewChild } from '@angular/core';
import {OrganizationService} from "../../services/organization.service";
import {NgForm} from "@angular/forms";
import {Organization} from "../../models/organization.model";

@Component({
  selector: 'app-organization-table',
  templateUrl: './organization-table.component.html',
  styleUrls: ['./organization-table.component.scss']
})
export class OrganizationTableComponent implements OnInit {
  @ViewChild('organizationSearchForm', {static: false}) organizationSearchForm;
  @ViewChild('form', {static: false}) form: NgForm;
  selectedOrganization: Organization = {} as Organization;

  constructor(
    private organizationService: OrganizationService
  ) {
  }

  ngOnInit() {
  }

  resetForm() {
    this.form.resetForm('');
    this.selectedOrganization = {} as Organization;

    // Reset the search form
    this.organizationSearchForm.clearSearch();
  }

  onSubmit() {
    if (this.form.valid) {
      const saveOrganization: Organization = {
        organizationId: this.form.value.organizationId,
        name: this.form.value.name,
        address: this.form.value.address,
        phone: this.form.value.phone
      };

      if (this.selectedOrganization._id) {
        // Editing
        saveOrganization._id = this.selectedOrganization._id;

        this.organizationService.update(saveOrganization).subscribe((result) => {
          console.log('Organization updated!');
        });
      } else {
        // New
        // We must call subscribe() for new() to be executed
        this.organizationService.new(saveOrganization).subscribe((result) => {
          console.log('Organization created!');
        });
      }

      this.resetForm();
    }
  }
}
