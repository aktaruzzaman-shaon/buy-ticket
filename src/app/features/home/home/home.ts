import { Component, effect, inject, OnInit } from '@angular/core';
import { SingleSelect } from '../../../shared/components/micro/selectOption/single-select/single-select';
import { Calendar } from "../../../shared/components/micro/calendar/calendar/calendar";
import { LocationFacade } from './services/location.facade';
import { RouteFacade } from './services/trip.facade';

@Component({
  selector: 'app-home',
  imports: [SingleSelect, Calendar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home implements OnInit {

  locationFacade = inject(LocationFacade);
  routeFacade = inject(RouteFacade);
  searchQuery:any = {};

  constructor() {
    effect(() => {
      console.log(this.searchQuery);
    });
  }

  ngOnInit(): void {
    this.locationFacade.fetchLocations();
    
  }

  loadTrips() {
    console.log('Initiating trip search with query:',this.searchQuery.from.value, this.searchQuery.to.value, this.searchQuery.departureDate);
    this.routeFacade.searchRoutes(this.searchQuery.from.value, this.searchQuery.to.value, this.searchQuery.departureDate );
  }

  updateSearchQuery(key: string, value: any) {
    this.searchQuery = { ...this.searchQuery, [key]: value };
  }

}
