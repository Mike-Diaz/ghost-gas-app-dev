// this is where it all starts, and all the components used are imported
// and the bootstrap property says which Component to draw first,
// which is why we modify that one to display other Components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import { HttpClientModule }    from '@angular/common/http';
import { ShowTasksComponent } from './show-tasks/show-tasks.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeDisplayComponent } from './home-display/home-display.component';    


@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    ShowTasksComponent,
    HomeDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
