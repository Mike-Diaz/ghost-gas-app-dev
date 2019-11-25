import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleAddComponent } from './vehicle-add.component';
import { VehicleSearchFormComponent } from '../vehicle-search-form/vehicle-search-form.component';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HttpClientModule } from "@angular/common/http";
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";


describe('VehicleAddComponent', () => {
  let component: VehicleAddComponent;
  let fixture: ComponentFixture<VehicleAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VehicleAddComponent,
        VehicleSearchFormComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatDividerModule,
        MatIconModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        HttpClientModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatDatepickerModule,
        MatNativeDateModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
