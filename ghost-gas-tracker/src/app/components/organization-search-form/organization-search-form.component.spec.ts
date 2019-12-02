import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationSearchFormComponent } from './organization-search-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from "@angular/common/http";
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DataService } from '../../services/data.service';

describe('OrganizationSearchFormComponent', () => {
  let component: OrganizationSearchFormComponent;
  let fixture: ComponentFixture<OrganizationSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OrganizationSearchFormComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatIconModule,
        MatFormFieldModule,
        HttpClientModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      providers: [
        DataService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
