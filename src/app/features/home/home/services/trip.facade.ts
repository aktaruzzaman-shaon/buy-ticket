import { Injectable, signal } from '@angular/core';
import { TripApi } from './trip.api';

export interface SearchPayload {
  origin: string;
  destination: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})

export class RouteFacade {

  // state signals
  routes = signal<any[]>([]);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);

  constructor(private tripApi: TripApi) {}

  searchRoutes(payload: SearchPayload) {

    this.loading.set(true);
    this.error.set(null);

    this.tripApi.getTrips(payload).subscribe({
      next: (data) => {
        this.routes.set(data);
        this.loading.set(false);
      },

      error: (err) => {
        this.error.set(err.message || 'Failed to load routes');
        this.loading.set(false);
      }
    });
  }
}