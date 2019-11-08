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

// Components
import { HeaderComponent } from './layout/header/header.component';
import { VehicleFuelUpComponent } from './components/vehicle-fuel-up/vehicle-fuel-up.component';
import { VehicleViewComponent } from './components/vehicle-view/vehicle-view.component';
import { VehicleAddComponent } from  './components/vehicle-add/vehicle-add.component';
import { FooterComponent } from './layout/footer/footer.component';
import { VehicleSearchFormComponent } from './components/vehicle-search-form/vehicle-search-form.component';
import { VehicleMetricsTableComponent } from './components/vehicle-metrics-table/vehicle-metrics-table.component';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VehicleViewComponent,
    VehicleFuelUpComponent,
    VehicleAddComponent,
    FooterComponent,
    VehicleSearchFormComponent,
    VehicleMetricsTableComponent,
    HomeComponent
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
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
