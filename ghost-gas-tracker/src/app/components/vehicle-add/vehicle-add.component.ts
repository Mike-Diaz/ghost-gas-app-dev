import {Component, OnInit, ViewChild} from '@angular/core';
import {VehicleService} from "../../services/vehicle.service";
import {NgForm} from "@angular/forms";
import {Vehicle} from "../../models/vehicle.model";

@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.component.html',
  styleUrls: ['./vehicle-add.component.scss']
})
export class VehicleAddComponent implements OnInit {
  @ViewChild('vehicleSearchForm', {static: false}) vehicleSearchForm;
  @ViewChild('form', {static: false}) form: NgForm;
  selectedVehicle: Vehicle = {} as Vehicle;
  lastSavedId: string = null; // store last added/updated for testing

  constructor(
    private vehicleService: VehicleService
  ) {
  }

  ngOnInit() {
  }

  resetForm() {
    this.form.resetForm('');
    this.selectedVehicle = {} as Vehicle;

    // Reset the search form
    this.vehicleSearchForm.clearSearch();
  }

  onSubmit() {
    if (this.form.valid) {
      const saveVehicle: Vehicle = {
        vehicleNum: this.form.value.vehicleNum,
        make: this.form.value.make,
        model: this.form.value.model,
        year: this.form.value.year,
        vin: this.form.value.vin,
        userId: "1" // TODO: retrieve userId (required length > 0)
      };

      if (this.selectedVehicle._id) {
        // Editing
        saveVehicle._id = this.selectedVehicle._id;

        this.vehicleService.update(saveVehicle).subscribe((result) => {
          this.lastSavedId = result._id;
          console.log('Vehicle updated! Id: ' + this.lastSavedId);
        });
      } else {
        // New
        // We must call subscribe() for new() to be executed
        this.vehicleService.new(saveVehicle).subscribe((result) => {
          this.lastSavedId = result._id;
          console.log('Vehicle created! Id: ' + this.lastSavedId);
        });
      }

      this.resetForm();
    }
  }
}
