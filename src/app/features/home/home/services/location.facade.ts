import { inject, Injectable, signal } from "@angular/core";
import { LocationApi } from "./location.api";
import { tap } from "rxjs";
import { Location } from "../models/location.model";

@Injectable({
    providedIn:'root'
})
export class LocationFacade{
    private locationApi = inject(LocationApi);
    locations = signal<Location[]>([]);
    loading  = signal(false);
    error = signal(null);
    constructor(){}
    // fetch locations from api
   fetchLocations(){
    this.loading.set(true);
    this.error.set(null);

    this.locationApi.getLocations().pipe(
        tap({
            next:(dto)=>{
                this.locations.set(this.mapLocations(dto));
                this.loading.set(false);
            },
            error:(err)=>{
                this.error.set(err);
                this.loading.set(false);
            }

        })
    ).subscribe();
   }

   private mapLocations(dto:any):Location[]{
    return dto.map((item:any)=>({
        id: item.id,
        label: item.name
    }));
   }

    //    fetchTrips
   fetchTrips(){
    this.loading.set(true);
    this.error.set(null);
    this.locationApi.getTrips().pipe(
        tap({
            next:(dto)=>{
                console.log('Trips data:', dto);
                this.loading.set(false);
            }
        })
    ).subscribe();
   }
}