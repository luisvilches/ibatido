import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-desctacados-home',
  templateUrl: './desctacados-home.component.html',
  styleUrls: ['./desctacados-home.component.css'],
  providers:[ProductsService]
})
export class DesctacadosHomeComponent implements OnInit {
  public Productos:any;
  public result:any;
  public Cache:any;
  constructor(private product:ProductsService) { }

  ngOnInit() {
    this.product.getDestacados().subscribe(data => {
    this.Cache = data;
    this.Productos = this.Cache.productos;
  })

  }
}