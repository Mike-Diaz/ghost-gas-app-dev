import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material';

// Mock data for searchOptions of vehicles
// Define our mock objects
// This data will be replaced with actual data sources later.
export interface MileageLog {
  mpg: number;
  distance: number;
  pricePerGallon: number;
}

export interface Vehicle {
  id: number;
  name: string;
  fleetNum: number;
  vin: string;
  plate: string;
  mileageLog: MileageLog[];
}

const VEHICLES: Vehicle[] = [
  {
    id: 1,
    name: 'Vehicle 1',
    fleetNum: 123,
    vin: '1HG1234',
    plate: 'ABC123',
    mileageLog: [
      {mpg: 25, distance: 12, pricePerGallon: 3.12}
    ]
  },
  {
    id: 2,
    name: 'Vehicle 2',
    fleetNum: 456,
    vin: '1HG5678',
    plate: 'ABC456',
    mileageLog: [
      {mpg: 22, distance: 15, pricePerGallon: 3.22},
      {mpg: 21, distance: 16, pricePerGallon: 3.25}
    ]
  }
];

@Component({
  selector: 'app-vehicle-view',
  templateUrl: './vehicle-view.component.html',
  styleUrls: ['./vehicle-view.component.scss']
})
export class VehicleViewComponent implements OnInit {
  selectedVehicle: Vehicle = null;
  searchOptions: Vehicle[] = VEHICLES; // Mock searchOptions for dev
  filteredSearchOptions: Observable<Vehicle[]>;
  searchControl = new FormControl('');
  displayedMileageLogColumns: string[] = ['mpg', 'distance', 'pricePerGallon'];

  constructor() { }

  ngOnInit() {
    this.filteredSearchOptions = this.searchControl.valueChanges
      .pipe(
        startWith(''),
        map(vehicle => this._filterSearch(vehicle))
      );
  }

  private _filterSearch(vehicle: Vehicle) {
    const filterValue = vehicle.name ? vehicle.name.toLowerCase() : '';

    return this.searchOptions.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  searchDisplay(option: Vehicle) {
    return option.name;
  }

  selectVehicle(event: MatAutocompleteSelectedEvent) {
    this.selectedVehicle = event.option.value;
  }
}
