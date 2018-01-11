import { Component, OnInit, ViewChild} from '@angular/core'; 
import { CityService } from '../city.service';


@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css'],
  providers: [CityService]
})
export class SigupComponent implements OnInit {
  @ViewChild("select") selectId;
  public Regiones:any;
  public Response:any;
  public Select:any;
  public Comunas:any;

  constructor(private city:CityService) {}

  ngOnInit() {
    this.city.getRegions().subscribe(data => {
      this.Response = data;
      this.Regiones = this.Response.regiones; 
    })
  }


  changeRegions(value){
    this.Select = document.getElementById("select");
    var data = this.Regiones.filter(result => {return result.region === this.Select.value});
    this.Comunas = data[0].comunas;
  }

}
