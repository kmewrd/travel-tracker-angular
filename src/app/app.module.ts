import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { TripDashboardComponent } from './trip-dashboard/trip-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingFormComponent,
    TripDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
