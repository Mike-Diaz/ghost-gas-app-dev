import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {MatAutocompleteSelectedEvent} from '@angular/material';
import {Organization} from "../../models/organization.model";
import {OrgStoreService} from "../../services/orgStore.service";

@Component({
  selector: 'app-organization-search-form',
  templateUrl: './organization-search-form.component.html',
  styleUrls: ['./organization-search-form.component.scss']
})
export class OrganizationSearchFormComponent implements OnInit {
  @Input() selectedOrganization: Organization = {} as Organization;
  @Output() selectedOrganizationChange = new EventEmitter<Organization>();
  searchOptions: Organization[] = [];
  filteredSearchOptions: Observable<Organization[]>;
  searchControl = new FormControl('');

  constructor(
    private orgStoreService: OrgStoreService
  ) {
  }

  ngOnInit() {
    this.orgStoreService.searchOptions.subscribe(options => this.searchOptions = options);

    this.filteredSearchOptions = this.searchControl.valueChanges
      .pipe(
        startWith(''),
        map(searchInput => this._filterSearch(searchInput))
      );
  }

  private _filterSearch(searchInput: string) {
    const filterValue = searchInput.length ? searchInput : '';

    return this.searchOptions.filter(option => option.organizationId ? option.organizationId.toString().includes(filterValue) : '');
  }

  searchDisplay(option: Organization) {
    return option.organizationId;
  }

  selectVehicle(event: MatAutocompleteSelectedEvent) {
    this.selectedOrganization = event.option.value;
    this.selectedOrganizationChange.emit(this.selectedOrganization);
  }

  clearSearch() {
    // Reset search form
    this.searchControl.setValue('');
    this.selectedOrganization = {} as Organization;

    // Retrieve vehicles again
    this.orgStoreService.fetchVehicleSearchOptions();
  }
}
