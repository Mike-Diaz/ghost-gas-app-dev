import {Component, OnInit, Input, SimpleChanges} from '@angular/core';
import {FuelUpService} from "../../services/fuel-up.service";
import {Vehicle} from "../../models/vehicle.model";
import {FuelUp} from "../../models/fuel-up.model";
import {filter, map} from "rxjs/operators";
import {SelectionModel} from "@angular/cdk/collections";

@Component({
  selector: 'app-vehicle-metrics-table',
  templateUrl: './vehicle-metrics-table.component.html',
  styleUrls: ['./vehicle-metrics-table.component.scss']
})
export class VehicleMetricsTableComponent implements OnInit {
  @Input() selectedVehicle: Vehicle = {} as Vehicle;
  fuelUps: FuelUp[];
  displayedFuelUpCols: string[] = ['select', 'fuelUpDate', 'miles', 'gallons', 'totalCost'];
  selection: SelectionModel<FuelUp> = new SelectionModel<FuelUp>(true);

  constructor(
    private fuelUpService: FuelUpService
  ) {}

  ngOnInit() {
  }

  private getFuelUps(vehicle: Vehicle) {
    this.fuelUpService.getAll().pipe(
      map(items => items.filter(item => item.vehicleId === vehicle._id))
    ).subscribe(result => this.fuelUps = result);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.fuelUps.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.fuelUps.forEach(row => this.selection.select(row));
  }

  deleteSelectedFuelUps() {
    if (this.selection.selected.length > 0) {
      this.selection.selected.forEach(fuelUp => {
        this.fuelUpService.delete(fuelUp).subscribe(result => console.log(result));
      });

      this.selection.clear();
      this.getFuelUps(this.selectedVehicle);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedVehicle.currentValue._id) {
      this.getFuelUps(changes.selectedVehicle.currentValue);

      console.log(this.fuelUps);
    } else {
      this.fuelUps = null;
    }
  }
}
