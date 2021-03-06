import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';

import { HeaderComponent } from './layout/header/header.component';
import { VehicleFuelUpComponent } from './components/vehicle-fuel-up/vehicle-fuel-up.component';
import { VehicleViewComponent } from './components/vehicle-view/vehicle-view.component';
import { VehicleAddComponent } from './components/vehicle-add/vehicle-add.component';
import { FooterComponent } from './layout/footer/footer.component';
import { VehicleSearchFormComponent } from './components/vehicle-search-form/vehicle-search-form.component';
import { VehicleMetricsComponent } from './components/vehicle-metrics/vehicle-metrics.component';
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './components/home/home.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { OrganizationTableComponent } from './components/organization-table/organization-table.component';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatCheckbox, MatCheckboxModule } from "@angular/material/checkbox";
import { OrganizationSearchFormComponent } from './components/organization-search-form/organization-search-form.component';
import { UserSearchFormComponent } from './components/user-search-form/user-search-form.component';

import { Injectable } from '@angular/core';
// import { NgModule } from '@angular/core';
import { DataService } from '../app/services/data.service';
import {APP_BASE_HREF} from "@angular/common";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatSliderModule,
        MatToolbarModule,
        MatInputModule,
        MatIconModule,
        MatTableModule,
        MatButtonModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatCheckboxModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        VehicleViewComponent,
        VehicleFuelUpComponent,
        VehicleAddComponent,
        FooterComponent,
        VehicleSearchFormComponent,
        VehicleMetricsComponent,
        HomeComponent,
        UserTableComponent,
        OrganizationTableComponent,
        OrganizationSearchFormComponent,
        UserSearchFormComponent
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        DataService,
        Injectable,
        NgModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ghost-gas-tracker'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ghost-gas-tracker');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('ghost-gas-tracker app is running!');
  // });
});
