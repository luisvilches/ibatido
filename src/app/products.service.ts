import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsService {

  constructor(public http:HttpClient) { }

  getDestacados(){
    return this.http.get("/assets/home_products.json")
  }
}
