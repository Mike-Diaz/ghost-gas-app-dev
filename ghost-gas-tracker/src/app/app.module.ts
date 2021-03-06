import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { MatCardModule } from '@angular/material/card';
import { OrganizationSearchFormComponent } from './components/organization-search-form/organization-search-form.component';
import { UserSearchFormComponent } from './components/user-search-form/user-search-form.component';
import {ToastrModule} from "ngx-toastr";
import { APP_BASE_HREF } from '@angular/common';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angular4-social-login';
import { ExporterService } from '../app/services/exporter.service';

const google_oauth_client_id:string = '930349649326-jpku7csmlrjf4j25raoglmha67s5ii2r.apps.googleusercontent.com';
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(google_oauth_client_id)
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
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
  imports: [
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
    MatCheckboxModule,
    MatCardModule,
    ToastrModule.forRoot(),
    SocialLoginModule //.initialize(config)
  ],
  providers: [ExporterService, {provide: APP_BASE_HREF, useValue: '/'}, {provide: AuthServiceConfig, useFactory: provideConfig}],
  bootstrap: [AppComponent]
})
export class AppModule { }
