import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {Vehicle} from "../models/vehicle";

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  constructor(
    private httpClient: HttpClient
  ) {
  }

  public getAll(): Observable<Vehicle[]> {
    return this.httpClient
      .get<Vehicle[]>(API_URL + '/vehicle', {responseType: 'json'});
  }

  public getById(id: string): Observable<Vehicle> {
    return this.httpClient
      .get<Vehicle>(API_URL + '/vehicle/' + id, {responseType: 'json'});
  }

  public new(newVehicle: Vehicle): Observable<Vehicle> {
    return this.httpClient
      .post<Vehicle>(API_URL + '/vehicle', newVehicle, {responseType: 'json'});
  }

  public update(vehicle: Vehicle): Observable<Vehicle> {
    return this.httpClient
      .put<Vehicle>(API_URL + '/vehicle/' + vehicle._id, vehicle, {responseType: 'json'});
  }

  public delete(vehicle: Vehicle): Observable<Vehicle> {
    return this.httpClient
      .put<Vehicle>(API_URL + '/vehicle/' + vehicle._id, {responseType: 'json'});
  }
}
