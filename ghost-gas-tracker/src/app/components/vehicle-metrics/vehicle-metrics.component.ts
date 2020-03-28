import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FuelUpService } from "../../services/fuel-up.service";
import { Vehicle } from "../../models/vehicle.model";
import { FuelUp } from "../../models/fuel-up.model";
import { map } from "rxjs/operators";
import { SelectionModel } from "@angular/cdk/collections";
import { VehicleService } from "../../services/vehicle.service";
import { MatTableDataSource } from '@angular/material/table';
import { ExporterService } from '../../services/exporter.service';

@Component({
  selector: 'app-vehicle-metrics',
  templateUrl: './vehicle-metrics.component.html',
  styleUrls: ['./vehicle-metrics.component.scss']
})
export class VehicleMetricsComponent implements OnInit {
  @Input() selectedVehicle: Vehicle = {} as Vehicle;
  fuelUps: FuelUp[] = null;
  displayedFuelUpCols: string[] = ['select', 'fuelUpDate', 'mileStart', 'mileEnd', 'miles', 'gallons', 'calc_mpg', 'totalCost'];
  selection: SelectionModel<FuelUp> = new SelectionModel<FuelUp>(true);
  
  constructor(
    private fuelUpService: FuelUpService,
    private vehicleService: VehicleService,
    private excelService: ExporterService
  ) {
  }

  ngOnInit() {
  }

  private getFuelUps(vehicle: Vehicle) {
    // The fuel-ups are sorted by fuelUpDate ascending in the backend server.
    this.fuelUpService.getAll().pipe(
      map(items => items.filter(item => item.vehicleId === vehicle._id))
    ).subscribe(result => this.fuelUps = result);
  }

  private exportAsXLSX(): void {
    let dataSource = new MatTableDataSource(this.fuelUps);
    this.excelService.exportToExcel(dataSource.data, 'vehicle_metrics_');
  }

  // dataSource = new MatTableDataSource((vehicle) => {this.getFuelUps(vehicle: Vehicle)});
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  private getTotalFuelUpMileage(): number {
    if (this.fuelUps !== null) {
      return this.fuelUps.reduce((sum, fuelUp) => sum += fuelUp.miles, 0);
    }
  }

  private getTotalFuelUpCpst(): number {
    if (this.fuelUps !== null) {
      return this.fuelUps.reduce((sumCost, fuelUp) => sumCost += fuelUp.totalCost, 0);
    }
  }

  private getAverageFuelUpMpg(): number {
    if (this.fuelUps !== null) {
      return this.fuelUps.length > 0
      ? this.fuelUps.reduce((sumMpg, fuelUp) => sumMpg += fuelUp.miles / fuelUp.gallons, 0) / this.fuelUps.length
      : 0;
    }
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
      if (this.selectedVehicle !== null) {
        this.vehicleService.getById(this.selectedVehicle._id).subscribe(result => this.selectedVehicle = result);
      }
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
