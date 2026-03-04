import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class LocationApi{
    private http = inject(HttpClient);
    private baseUrl = environment.apiUrl;

    getLocations(){
        return this.http.get(`${this.baseUrl}/api/locations/getAll`);
    }
}