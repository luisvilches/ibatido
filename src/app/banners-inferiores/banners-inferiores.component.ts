import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banners-inferiores',
  templateUrl: './banners-inferiores.component.html',
  styleUrls: ['./banners-inferiores.component.css']
})
export class BannersInferioresComponent implements OnInit {

  public Altura:any;
  public Peso:any;
  public PesoTotal:number;
  public IMC:number;
  constructor() { }

  ngOnInit() {

  }

  calcularIMC(){
    this.Altura = <HTMLElement>document.getElementById("estatura");
    var result = this.Altura.value.charAt(0) + "." + this.Altura.value.charAt(1) + this.Altura.value.charAt(2)
    this.Peso = <HTMLElement>document.getElementById("peso");
    this.PesoTotal = parseFloat(result) * parseFloat(result);
    this.IMC = Number(this.Peso.value) / this.PesoTotal;

    console.log(this.IMC,this.Altura.value,this.PesoTotal);
  }


}
