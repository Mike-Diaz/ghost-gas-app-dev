import {Component, OnInit} from '@angular/core';
import {VehicleService} from "../../services/vehicle.service";
import {NgForm} from "@angular/forms";
import {Vehicle} from "../../models/vehicle";

@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.component.html',
  styleUrls: ['./vehicle-add.component.scss']
})
export class VehicleAddComponent implements OnInit {
  selectedVehicle: Vehicle = null;
  inputVehicleNum = null;
  inputMake = null;
  inputModel = null;
  inputYear = null;
  inputVin = null;

  constructor(
    private vehicleService: VehicleService
  ) {
  }

  ngOnInit() {
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const newVehicle: Vehicle = {
        vehicleNum: form.value.vehicleNum,
        make: form.value.make,
        model: form.value.model,
        year: form.value.year,
        vin: form.value.vin,
        employeeId: "1" // TODO: retrieve employeeId (required length > 0)
      };

      // We must call subscribe() for new() to be executed
      this.vehicleService.new(newVehicle).subscribe((result) => {
        console.log('Vehicle created!');
        form.resetForm('');
      });
    }
  }
}
