import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Organization} from "../models/organization.model";
import {OrganizationService} from "./organization.service";

@Injectable({
  providedIn: 'root'
})
export class OrgStoreService {
  private _searchOptions: BehaviorSubject<Organization[]> = new BehaviorSubject([]);
  public readonly searchOptions: Observable<Organization[]> = this._searchOptions.asObservable();

  constructor(
    private organizationService: OrganizationService
  ) {
    this.fetchOrganizationSearchOptions();
  }

  fetchOrganizationSearchOptions() {
    this.organizationService.getAll().subscribe(organizations => this._searchOptions.next(organizations));
  }
}
