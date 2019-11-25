import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleMetricsComponent } from './vehicle-metrics.component';

import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { HttpClientModule } from "@angular/common/http";

describe('VehicleMetricsTableComponent', () => {
  let component: VehicleMetricsComponent;
  let fixture: ComponentFixture<VehicleMetricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VehicleMetricsComponent
      ],
      imports: [
        MatTableModule,
        MatCheckboxModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
