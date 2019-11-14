import { Component, OnInit } from '@angular/core';
import {Vehicle} from "../../models/vehicle.model";

@Component({
  selector: 'app-vehicle-view',
  templateUrl: './vehicle-view.component.html',
  styleUrls: ['./vehicle-view.component.scss']
})
export class VehicleViewComponent implements OnInit {
  selectedVehicle: Vehicle = null;

  constructor() { }

  ngOnInit() {
  }
}
