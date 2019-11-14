import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Vehicle} from "../models/vehicle.model";
import {VehicleService} from "./vehicle.service";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private _searchOptions: BehaviorSubject<Vehicle[]> = new BehaviorSubject([]);
  public readonly searchOptions: Observable<Vehicle[]> = this._searchOptions.asObservable();

  constructor(
    private vehicleService: VehicleService
  ) {
    this.fetchVehicleSearchOptions();
  }

  fetchVehicleSearchOptions() {
    this.vehicleService.getAll().subscribe(vehicles => this._searchOptions.next(vehicles));
  }
}
