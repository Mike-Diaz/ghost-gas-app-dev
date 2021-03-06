import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ghost-gas-tracker';
  show: boolean = false;
  step = 0;
  loggedIn = false;

  loginFunc(){
    this.show = true;
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  ngOnInit() {
    
  }

  receiveLoggedIn($event) {
    this.loggedIn = $event;
  }
}
