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
    startDate: ['', Validators.required],
    duration: [null, Validators.required],
    num_guests: [null, Validators.required],
    destination: ['', Validators.required]
  });

  ngOnInit() {
    fetch('http://localhost:3001/api/v1/destinations').then(response => response.json()).then(data => this.destinations = data.destinations)
  }

  onSubmit(e: Event): void {
    e.preventDefault();
    console.log(this.bookingForm.value)
    this.clearForm();
  }

  clearForm(): void {
    this.bookingForm.reset();
  }
}
