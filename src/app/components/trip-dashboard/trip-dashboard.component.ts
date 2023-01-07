import { Component, Input, OnInit } from '@angular/core';
import { ITrip } from '../../app.component';

@Component({
  selector: 'trip-dashboard',
  templateUrl: './trip-dashboard.component.html',
  styleUrls: ['./trip-dashboard.component.scss']
})
export class TripDashboardComponent implements OnInit {
  constructor() { }

  @Input() trips: ITrip[] = [];

  ngOnInit(): void {}

}
