import { Component, Input, OnInit } from '@angular/core';
import { ITrip } from '../../app.component';

@Component({
  selector: 'trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.scss']
})
export class TripCardComponent implements OnInit {
  constructor() {}
  
  @Input() trip: ITrip;

  ngOnInit(): void {}

}
