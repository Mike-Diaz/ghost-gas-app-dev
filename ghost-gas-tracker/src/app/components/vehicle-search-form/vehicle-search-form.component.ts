import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {MatAutocompleteSelectedEvent} from '@angular/material';
import {Vehicle} from "../../models/vehicle.model";
import {StoreService} from "../../services/store.service";

@Component({
  selector: 'app-vehicle-search-form',
  templateUrl: './vehicle-search-form.component.html',
  styleUrls: ['./vehicle-search-form.component.scss']
})
export class VehicleSearchFormComponent implements OnInit {
  @Input() selectedVehicle: Vehicle = {} as Vehicle;
  @Output() selectedVehicleChange = new EventEmitter<Vehicle>();
  searchOptions: Vehicle[] = [];
  filteredSearchOptions: Observable<Vehicle[]>;
  searchControl = new FormControl('');

  constructor(
    private storeService: StoreService
  ) {
  }

  ngOnInit() {
    this.storeService.searchOptions.subscribe(options => this.searchOptions = options);

    this.filteredSearchOptions = this.searchControl.valueChanges
      .pipe(
        startWith(''),
        map(searchInput => this._filterSearch(searchInput))
      );
  }

  private _filterSearch(searchInput: string) {
    const filterValue = searchInput.length ? searchInput : '';

    return this.searchOptions.filter(option => option.vehicleNum ? option.vehicleNum.toString().includes(filterValue) : '');
  }

  searchDisplay(option: Vehicle) {
    return option.vehicleNum;
  }

  selectVehicle(event: MatAutocompleteSelectedEvent) {
    this.selectedVehicle = event.option.value;
    this.selectedVehicleChange.emit(this.selectedVehicle);
  }

  clearSearch() {
    // Reset search form
    this.searchControl.setValue('');
    this.selectedVehicle = {} as Vehicle;

    // Retrieve vehicles again
    this.storeService.fetchVehicleSearchOptions();
  }
}
