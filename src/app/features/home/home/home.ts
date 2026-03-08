import { Component, effect, inject, OnInit } from '@angular/core';
import { SingleSelect } from '../../../shared/components/micro/selectOption/single-select/single-select';
import { Calendar } from "../../../shared/components/micro/calendar/calendar/calendar";
import { LocationFacade } from './services/location.facade';

@Component({
  selector: 'app-home',
  imports: [SingleSelect, Calendar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  locationFacade = inject(LocationFacade);
  searchQuery:any = {};

  constructor() {
    effect(() => {
      console.log(this.searchQuery);
    });
  }

  ngOnInit(): void {
    this.locationFacade.fetchLocations();
  }

  updateSearchQuery(key: string, value: any) {
    this.searchQuery = { ...this.searchQuery, [key]: value };
    console.log('Updated search query:', this.searchQuery);
  }
}
