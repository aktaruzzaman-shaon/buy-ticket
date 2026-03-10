import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class TripApi {
    
    private http = inject(HttpClient);
    private baseUrl = environment.apiUrl;

    getTrips(){
        return this.http.get(`${this.baseUrl}/api/trips/search?originLocation=Dhaka&destination=Chittagong&doj=2026-03-05T02:00:00.000Z&dor=`);
    }
}