import { inject } from "@angular/core";
import { LocationApi } from "./location.api";

export class LocationFacade{
    private locationApi = inject(LocationApi);
    constructor(){}

    getLocations(){
        return this.locationApi.getLocations();
    }
}