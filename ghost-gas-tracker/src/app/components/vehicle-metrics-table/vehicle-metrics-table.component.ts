import {Component, OnInit, Input, SimpleChanges} from '@angular/core';
import {FuelUpService} from "../../services/fuel-up.service";
import {Vehicle} from "../../models/vehicle.model";
import {FuelUp} from "../../models/fuel-up.model";
import {filter, map} from "rxjs/operators";

@Component({
  selector: 'app-vehicle-metrics-table',
  templateUrl: './vehicle-metrics-table.component.html',
  styleUrls: ['./vehicle-metrics-table.component.scss']
})
export class VehicleMetricsTableComponent implements OnInit {
  @Input() selectedVehicle: Vehicle = {} as Vehicle;
  fuelUps: FuelUp[];
  displayedFuelUpCols: string[] = ['fuelUpDate', 'miles', 'gallons', 'totalCost'];

  constructor(
    private fuelUpService: FuelUpService
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedVehicle.currentValue._id) {
      this.fuelUpService.getAll().pipe(
        map(items => items.filter(item => item.vehicleId === changes.selectedVehicle.currentValue._id))
      ).subscribe(result => this.fuelUps = result);

      console.log(this.fuelUps);
    } else {
      this.fuelUps = null;
    }
  }
}
