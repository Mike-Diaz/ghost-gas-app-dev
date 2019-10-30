import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { Vehicle, MOCK_VEHICLES } from 'src/data/mock-vehicles';

@Component({
  selector: 'app-vehicle-search-form',
  templateUrl: './vehicle-search-form.component.html',
  styleUrls: ['./vehicle-search-form.component.scss']
})
export class VehicleSearchFormComponent implements OnInit {
  @Input() selectedVehicle: Vehicle = null;
  @Output() selectedVehicleChange = new EventEmitter<Vehicle>();
  searchOptions: Vehicle[] = MOCK_VEHICLES; // Mock searchOptions for dev. This later can be passed from the parent components if necessary.
  filteredSearchOptions: Observable<Vehicle[]>;
  searchControl = new FormControl('');

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
    this.selectedVehicleChange.emit(this.selectedVehicle);
  }
}
