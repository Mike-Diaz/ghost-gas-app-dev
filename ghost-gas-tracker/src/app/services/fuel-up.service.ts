import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {FuelUp} from "../models/fuel-up";

const API_URL = environment.apiUrl;

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
      .get<FuelUp[]>(API_URL + '/fuelup', {responseType: 'json'});
  }

  public getById(id: string): Observable<FuelUp> {
    return this.httpClient
      .get<FuelUp>(API_URL + '/fuelup/' + id, {responseType: 'json'});
  }

  public new(newFuelUp: FuelUp): Observable<FuelUp> {
    return this.httpClient
      .post<FuelUp>(API_URL + '/fuelup', newFuelUp, {responseType: 'json'});
  }

  public update(fuelUp: FuelUp): Observable<FuelUp> {
    return this.httpClient
      .put<FuelUp>(API_URL + '/fuelup/' + fuelUp._id, fuelUp, {responseType: 'json'});
  }

  public delete(fuelUp: FuelUp): Observable<FuelUp> {
    return this.httpClient
      .put<FuelUp>(API_URL + '/fuelup/' + fuelUp._id, {responseType: 'json'});
  }
}
