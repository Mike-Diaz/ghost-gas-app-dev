import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from 'src/data/mock-vehicles';

@Component({
  selector: 'app-vehicle-metrics-table',
  templateUrl: './vehicle-metrics-table.component.html',
  styleUrls: ['./vehicle-metrics-table.component.scss']
})
export class VehicleMetricsTableComponent implements OnInit {
  @Input() selectedVehicle: Vehicle = null;
  displayedMileageLogColumns: string[] = ['mpg', 'distance', 'pricePerGallon'];

  constructor() { }

  ngOnInit() {
  }

}
