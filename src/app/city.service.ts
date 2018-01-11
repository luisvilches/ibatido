import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CityService {

  constructor(public http:HttpClient) {}

   getRegions(){
     return this.http.get("/assets/regiones.json")
   }

}
