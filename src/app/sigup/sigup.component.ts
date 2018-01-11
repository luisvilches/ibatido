import { Component, OnInit} from '@angular/core'; 
import { CityService } from '../city.service';


@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css'],
  providers: [CityService]
})
export class SigupComponent implements OnInit {
  public Regiones:any;
  public Response:any;

  constructor(private city:CityService) {}

  ngOnInit() {
    this.city.getRegions().subscribe(data => {
      this.Response = data;
      this.Regiones = this.Response.regiones; 
    })
  }


  changeRegions(value){
    console.log(value);
  }

}
