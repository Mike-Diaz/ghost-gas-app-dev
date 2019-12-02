import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleViewComponent } from './vehicle-view.component';
import { VehicleSearchFormComponent } from '../vehicle-search-form/vehicle-search-form.component';
import { VehicleMetricsComponent } from '../vehicle-metrics/vehicle-metrics.component';

import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { HttpClientModule } from "@angular/common/http";
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('VehicleViewComponent', () => {
  let component: VehicleViewComponent;
  let fixture: ComponentFixture<VehicleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VehicleViewComponent,
        VehicleSearchFormComponent,
        VehicleMetricsComponent,
      ],
      imports: [
        MatDividerModule,
        FormsModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatIconModule,
        MatFormFieldModule,
        MatTableModule,
        MatCheckboxModule,
        HttpClientModule,
        MatInputModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
