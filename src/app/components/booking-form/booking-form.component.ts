import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface DestinationInterface {
  id: number,
  destination: string,
  estimatedLodgingCostPerDay: number,
  estimatedFlightCostPerPerson: number,
  image: string,
  alt: string
}

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }

  destinations: DestinationInterface[] = [];
  bookingForm: FormGroup = this.formBuilder.group({
    startDate: [''],
    duration: [null],
    num_guests: [null],
    destination: ['']
  });

  ngOnInit() {
    fetch('http://localhost:3001/api/v1/destinations').then(response => response.json()).then(data => this.destinations = data.destinations)
  }

  onSubmit() {
    console.log(this.bookingForm.value)
  }
}
