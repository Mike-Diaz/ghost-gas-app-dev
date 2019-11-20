import { Component, OnInit } from '@angular/core';
import {Vehicle} from "../../models/vehicle.model";
import {VehicleService} from "../../services/vehicle.service";

@Component({
  selector: 'app-vehicle-view',
  templateUrl: './vehicle-view.component.html',
  styleUrls: ['./vehicle-view.component.scss']
})
export class VehicleViewComponent implements OnInit {
  selectedVehicle: Vehicle = null;

  constructor(
    private vehicleService: VehicleService
  ) { }

  ngOnInit() {
  }

  refreshData() {
    if (this.selectedVehicle !== null) {
      this.vehicleService.getById(this.selectedVehicle._id).subscribe(result => this.selectedVehicle = result);
    }
  }
}
