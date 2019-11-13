import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Vehicle} from "../../models/vehicle.model";
import {FuelUp} from "../../models/fuel-up.model";
import {FuelUpService} from "../../services/fuel-up.service";

@Component({
  selector: 'app-vehicle-fuel-up',
  templateUrl: './vehicle-fuel-up.component.html',
  styleUrls: ['./vehicle-fuel-up.component.scss']
})
export class VehicleFuelUpComponent {
  @ViewChild('vehicleSearchForm', {static: false}) vehicleSearchForm;
  @ViewChild('form', {static: false}) form: NgForm;
  selectedVehicle: Vehicle = {} as Vehicle;

  constructor(
    private fuelUpService: FuelUpService
  ) {
  }

  resetForm() {
    this.form.resetForm('');
    this.selectedVehicle = {} as Vehicle;

    // Reset the search form
    this.vehicleSearchForm.clearSearch();
  }

  onSubmit() {
    if (this.form.valid) {
      const saveFuelUp: FuelUp = {
        userId: "1", // TODO: retrieve userId (required length > 0)
        vehicleId: this.selectedVehicle._id,
        fuelUpDate: new Date(this.form.value.fuelUpDate),
        miles: Number(this.form.value.miles),
        gallons: Number(this.form.value.gallons),
        totalCost: Number(this.form.value.totalCost)
      };

      this.fuelUpService.new(saveFuelUp).subscribe((result) => {
        console.log('Fuel-up added!');
      });

      this.resetForm();
    }
  }
}
