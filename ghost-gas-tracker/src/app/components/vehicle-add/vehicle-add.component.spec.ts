import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {VehicleAddComponent} from './vehicle-add.component';
import {VehicleSearchFormComponent} from '../vehicle-search-form/vehicle-search-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {HttpClientModule} from "@angular/common/http";
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {Vehicle} from "../../models/vehicle.model";
import {VehicleService} from "../../services/vehicle.service";

describe('VehicleAddComponent', () => {
  let component: VehicleAddComponent;
  let fixture: ComponentFixture<VehicleAddComponent>;
  let vehicleService: VehicleService;

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

  it('should be created', () => {
    fixture = TestBed.createComponent(VehicleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  describe('add record', function () {
    beforeEach(function (done) {
      fixture = TestBed.createComponent(VehicleAddComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      vehicleService = TestBed.get(VehicleService);

      component.selectedVehicle = {} as Vehicle; // Not editing

      // Do setTimeout to allow time for the form to initialize
      setTimeout(() => {
        // No ID is set for new creation
        component.form.controls['vehicleNum'].setValue('9999');
        component.form.controls['make'].setValue('Test');
        component.form.controls['model'].setValue('Test');
        component.form.controls['year'].setValue('9999');
        component.form.controls['vin'].setValue('9999ABC');

        component.onSubmit();

        // setTimeout before done to give onSubmit() time to finish
        setTimeout(() => {
          done();
        }, 1000);
      }, 1200);
    });

    it('should find new record', function () {
      return vehicleService.getById(component.lastSavedId).toPromise().then((result) => {
        expect(result._id).toBe(component.lastSavedId);
      });
    });
  });

  describe('edit record', function () {
    beforeEach(function (done) {
      fixture = TestBed.createComponent(VehicleAddComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      vehicleService = TestBed.get(VehicleService);

      // FIRST WE CREATE A NEW VEHICLE THAT WE CAN EDIT
      component.selectedVehicle = {} as Vehicle;
      // Do setTimeout to allow time for the form to initialize
      setTimeout(() => {
        // No ID is set for new creation
        component.form.controls['vehicleNum'].setValue('9999');
        component.form.controls['make'].setValue('Test');
        component.form.controls['model'].setValue('Test');
        component.form.controls['year'].setValue('9999');
        component.form.controls['vin'].setValue('9999ABC');

        component.onSubmit();

        // setTimeout before done to give onSubmit() time to finish
        setTimeout(() => {
          return vehicleService.getById(component.lastSavedId).toPromise().then((result) => {
            component.selectedVehicle = result; // Select the newly added vehicle to edit
            done();
          });
        }, 1000);
      }, 1200);
    });

    describe('edit added Record', function () {
      const editedMake = 'TestEdited';

      beforeEach(function (done) {
        // Do setTimeout to allow time for the form to initialize
        setTimeout(() => {
          component.form.controls['vehicleNum'].setValue(component.selectedVehicle.vehicleNum);
          component.form.controls['make'].setValue(editedMake);
          component.form.controls['model'].setValue(component.selectedVehicle.model);
          component.form.controls['year'].setValue(component.selectedVehicle.year);
          component.form.controls['vin'].setValue(component.selectedVehicle.vin);
          component.onSubmit();
          done();
        }, 1200);
      });

      it('record should be edited', function () {
        // Instead of subscribing, we return promise with expectation to workaround async/sync
        return vehicleService.getById(component.lastSavedId).toPromise().then((result) => {
          expect(result.make).toBe(editedMake);
        });
      });
    });
  });

});
