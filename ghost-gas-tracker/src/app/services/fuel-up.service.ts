import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';
import {FuelUp} from "../models/fuel-up.model";

const API_URL = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
};

@Injectable({
  providedIn: 'root'
})
export class FuelUpService {
  constructor(
    private httpClient: HttpClient
  ) {
  }

  public getAll(): Observable<FuelUp[]> {
    return this.httpClient
      .get<FuelUp[]>(API_URL + '/fuelup', httpOptions);
  }

  public getById(id: string): Observable<FuelUp> {
    return this.httpClient
      .get<FuelUp>(API_URL + '/fuelup/' + id, httpOptions);
  }

  public new(newFuelUp: FuelUp): Observable<FuelUp> {
    return this.httpClient
      .post<FuelUp>(API_URL + '/fuelup', newFuelUp, httpOptions);
  }

  public update(fuelUp: FuelUp): Observable<FuelUp> {
    return this.httpClient
      .put<FuelUp>(API_URL + '/fuelup/' + fuelUp._id, fuelUp, httpOptions);
  }

  public delete(fuelUp: FuelUp): Observable<FuelUp> {
    return this.httpClient
      .delete<FuelUp>(API_URL + '/fuelup/' + fuelUp._id, httpOptions);
  }
}
