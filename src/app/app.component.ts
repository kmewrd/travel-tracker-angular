import { Component, OnInit } from '@angular/core';

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
  trips = [];
  spend = '$0.00';

  ngOnInit() {
    fetch('http://localhost:3001/api/v1/trips').then(response => response.json()).then(data => this.trips = data)
  }
}
