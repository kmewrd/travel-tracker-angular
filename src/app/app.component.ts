import { Component, OnInit } from '@angular/core';

export interface ITrip {
  date: string,
  destinationId: number,
  duration: number,
  id: number,
  status: string,
  travelers: number,
  userID: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Travel Tracker';
  traveler = {
    id: 44,
    name: 'Marijo MacNeilley',
    travelerType: 'photographer'
  };
  trips: ITrip[] = [];
  spend = '$0.00';

  ngOnInit() {
    fetch('http://localhost:3001/api/v1/trips').then(response => response.json()).then(data => this.trips = data.trips).then(() => this.getMyTrips(this.trips))
  }

  getMyTrips(trips: ITrip[]) {
    const myTrips = trips.filter(trip => this.traveler.id === trip.userID)
    this.trips = myTrips

    console.log(myTrips)
  }
}
