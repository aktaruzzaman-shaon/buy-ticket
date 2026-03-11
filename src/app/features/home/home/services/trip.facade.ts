import { Injectable, signal } from '@angular/core';
import { TripApi } from './trip.api';

interface TripSchedule {
  id: string;
  departureTime: string;
  arrivalTime: string;
  price: string;
  routeId: string;
  vehicleId: string;
  providerId: string;
  status: string;
  totalSeats: number;
  availableSeats: number;
  createdAt: string;
  updatedAt: string;
  route: {
    id: string;
    originId: number;
    destinationId: number;
  };
  vehicle: {
    id: string;
    type: string;
    capacity: number;
    providerId: string;
  };
  provider: {
    id: string;
    name: string;
  };
}
export interface SearchPayload {
  origin: string;
  destination: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})

export class RouteFacade {

  routes = signal<TripSchedule | null>(null);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);

  constructor(private tripApi: TripApi) {}

  searchRoutes(origin: string, destination: string, departureDate: string, returnDate?: string) {

    this.loading.set(true);
    this.error.set(null);

    this.tripApi.getTrips({ origin, destination, date: departureDate }).subscribe({
      next: (data) => {
        console.log('Received trip data:', data);
        this.routes.set(data as TripSchedule);
        this.loading.set(false);
      },

      error: (err) => {
        this.error.set(err.message || 'Failed to load routes');
        this.loading.set(false);
      }
    });
  }
}