import { Component, OnInit } from '@angular/core';
import { Trip } from '../trip';

@Component({
  selector: 'app-add-trip-form',
  templateUrl: './add-trip-form.component.html',
  styleUrls: ['./add-trip-form.component.scss']
})
export class AddTripFormComponent implements OnInit {

  vehicles = ['Vehicle 1', 'Vehicle 2', 'Vehicle 3'];

  submitted = false;

  onSubmit() {this.submitted = true; }

  constructor() { }

  ngOnInit() {
  }

}
