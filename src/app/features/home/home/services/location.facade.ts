import { inject, Injectable, signal } from "@angular/core";
import { LocationApi } from "./location.api";
import { tap } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class LocationFacade{
    private locationApi = inject(LocationApi);
    locations = signal([]);
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

   private mapLocations(dto:any):any{
    return dto.map((item:any)=>({
        id: item.id,
        label: item.name
    }));
   }
}