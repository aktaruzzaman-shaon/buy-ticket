import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../../../../environments/environment";

@Injectable({
    providedIn: 'root'
})

export class TripApi {
    
    private http = inject(HttpClient);
    private baseUrl = environment.apiUrl;

    getTrips(payload: any) {
        console.log('API call with payload:', payload);
        return this.http.get(`${this.baseUrl}/api/trips/search?originLocation=${payload.origin}&destination=${payload.destination}&doj=${payload.date}&dor=${payload.returnDate }`);
    }
}