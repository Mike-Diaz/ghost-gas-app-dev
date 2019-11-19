import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';
import {Organization} from "../models/organization.model";

const API_URL = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
};

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  constructor(
    private httpClient: HttpClient
  ) {
  }

  public getAll(): Observable<Organization[]> {
    return this.httpClient
      .get<Organization[]>(API_URL + '/Organization', httpOptions);
  }

  public getById(id: string): Observable<Organization> {
    return this.httpClient
      .get<Organization>(API_URL + '/Organization/' + id, httpOptions);
  }

  public new(newOrganization: Organization): Observable<Organization> {
    return this.httpClient
      .post<Organization>(API_URL + '/Organization', newOrganization, httpOptions);
  }

  public update(Organization: Organization): Observable<Organization> {
    return this.httpClient
      .put<Organization>(API_URL + '/Organization/' + Organization._id, Organization, httpOptions);
  }

  public delete(Organization: Organization): Observable<Organization> {
    return this.httpClient
      .delete<Organization>(API_URL + '/Organization/' + Organization._id, httpOptions);
  }
}
