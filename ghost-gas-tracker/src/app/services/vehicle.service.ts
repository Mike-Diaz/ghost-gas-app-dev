import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';
import {Vehicle} from "../models/vehicle.model";

const API_URL = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
};

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
      .get<Vehicle[]>(API_URL + '/vehicle', httpOptions);
  }

  public getById(id: string): Observable<Vehicle> {
    return this.httpClient
      .get<Vehicle>(API_URL + '/vehicle/' + id, httpOptions);
  }

  public new(newVehicle: Vehicle): Observable<Vehicle> {
    return this.httpClient
      .post<Vehicle>(API_URL + '/vehicle', newVehicle, httpOptions);
  }

  public update(vehicle: Vehicle): Observable<Vehicle> {
    return this.httpClient
      .put<Vehicle>(API_URL + '/vehicle/' + vehicle._id, vehicle, httpOptions);
  }

  public delete(vehicle: Vehicle): Observable<Vehicle> {
    return this.httpClient
      .put<Vehicle>(API_URL + '/vehicle/' + vehicle._id, httpOptions);
  }
}
