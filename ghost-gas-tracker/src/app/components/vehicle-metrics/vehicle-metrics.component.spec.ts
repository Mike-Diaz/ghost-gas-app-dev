import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleMetricsComponent } from './vehicle-metrics.component';

describe('VehicleMetricsTableComponent', () => {
  let component: VehicleMetricsComponent;
  let fixture: ComponentFixture<VehicleMetricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleMetricsComponent ]
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
