import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleSearchFormComponent } from './vehicle-search-form.component';

describe('VehicleSearchFormComponent', () => {
  let component: VehicleSearchFormComponent;
  let fixture: ComponentFixture<VehicleSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
