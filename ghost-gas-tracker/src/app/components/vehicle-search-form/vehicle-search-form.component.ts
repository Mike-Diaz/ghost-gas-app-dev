import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import {Vehicle} from "../../models/vehicle";
import {VehicleService} from "../../services/vehicle.service";

@Component({
  selector: 'app-vehicle-search-form',
  templateUrl: './vehicle-search-form.component.html',
  styleUrls: ['./vehicle-search-form.component.scss']
})
export class VehicleSearchFormComponent implements OnInit {
  @Input() selectedVehicle: Vehicle = null;
  @Output() selectedVehicleChange = new EventEmitter<Vehicle>();
  searchOptions: Vehicle[] = [];
  filteredSearchOptions: Observable<Vehicle[]>;
  searchControl = new FormControl('');

  constructor(
    private vehicleService: VehicleService
  ) {
    vehicleService.getAll().subscribe(vehicles => this.searchOptions = vehicles);
  }

  ngOnInit() {
    this.filteredSearchOptions = this.searchControl.valueChanges
      .pipe(
        startWith(''),
        map(vehicle => this._filterSearch(vehicle))
      );
  }

  private _filterSearch(vehicle: Vehicle) {
    const filterValue = vehicle.vehicleNum ? vehicle.vehicleNum.toString() : '';

    return this.searchOptions.filter(option => option.vehicleNum.toString().includes(filterValue));
  }

  searchDisplay(option: Vehicle) {
    return option.vehicleNum;
  }

  selectVehicle(event: MatAutocompleteSelectedEvent) {
    this.selectedVehicle = event.option.value;
    this.selectedVehicleChange.emit(this.selectedVehicle);
  }
}
