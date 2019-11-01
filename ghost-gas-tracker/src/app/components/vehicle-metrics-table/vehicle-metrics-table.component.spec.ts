import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleMetricsTableComponent } from './vehicle-metrics-table.component';

describe('VehicleMetricsTableComponent', () => {
  let component: VehicleMetricsTableComponent;
  let fixture: ComponentFixture<VehicleMetricsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleMetricsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleMetricsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
