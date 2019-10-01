import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpletextComponent } from './simpletext/simpletext.component';
import { CalculateComponent } from './calculate/calculate.component';
import { HeaderComponent } from './header/header.component';

import { FormsModule } from '@angular/forms';
import { GascalcComponent } from './gascalc/gascalc.component';
import { AddTripFormComponent } from './add-trip-form/add-trip-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpletextComponent,
    CalculateComponent,
    GascalcComponent,
    HeaderComponent
    HeaderComponent,
    AddTripFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
