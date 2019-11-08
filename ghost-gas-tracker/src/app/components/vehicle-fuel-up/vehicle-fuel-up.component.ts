import { Component} from '@angular/core';

@Component({
  selector: 'app-vehicle-fuel-up',
  templateUrl: './vehicle-fuel-up.component.html',
  styleUrls: ['./vehicle-fuel-up.component.scss']
})
export class VehicleFuelUpComponent {
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
}
