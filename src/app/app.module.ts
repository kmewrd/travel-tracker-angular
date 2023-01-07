import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { TripDashboardComponent } from './components/trip-dashboard/trip-dashboard.component';
import { TripCardComponent } from './components/trip-card/trip-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingFormComponent,
    TripDashboardComponent,
    TripCardComponent
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
