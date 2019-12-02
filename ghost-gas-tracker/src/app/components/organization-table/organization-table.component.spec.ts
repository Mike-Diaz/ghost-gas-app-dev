import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationTableComponent } from './organization-table.component';
import { OrganizationSearchFormComponent } from '../organization-search-form/organization-search-form.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HttpClientModule } from "@angular/common/http";
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('OrganizationTableComponent', () => {
  let component: OrganizationTableComponent;
  let fixture: ComponentFixture<OrganizationTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        OrganizationTableComponent,
        OrganizationSearchFormComponent
      ],
      imports: [
        FormsModule,
        MatFormFieldModule,
        MatDividerModule,
        MatIconModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        HttpClientModule,
        MatInputModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
