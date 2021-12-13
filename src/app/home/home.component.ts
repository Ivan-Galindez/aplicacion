import { Component, OnInit } from '@angular/core';
import { HomeService} from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  disponible:any
  Num=1;
  val:any;
  barrios:any
  
  constructor(private service: HomeService) { }

  ngOnInit(): void {
    this.service.getConsulta().subscribe( data=>{
      this.disponible=data;      
    });

    this.service.getConsultaBarrio().subscribe( data=>{
      this.barrios=data;
      console.log(this.barrios)      
    });
  }

  consultaInmueble(){
    let tipo = (document.getElementById("consulTipo") as HTMLInputElement).value;
    let transaccion = (document.getElementById("consulTransaccion") as HTMLInputElement).value;
    let habitaciones = (document.getElementById("consulHabitaciones") as HTMLInputElement).value;
    let barrio = (document.getElementById("consulbarrio") as HTMLInputElement).value;
    let hab = String(habitaciones);
    console.log(tipo+" "+transaccion+" "+hab+" "+barrio);
    
    var inmueble={
      tipo:tipo,
      transaccion:transaccion,
      habitaciones:hab,
      barrio:barrio
    }

    this.service.getConsulInmu(inmueble).subscribe(data => {
      console.log(data);
      this.disponible=data;
    });

    // (document.getElementById("consulHabitaciones") as HTMLInputElement).value="";
    // (document.getElementById("consulbarrio") as HTMLInputElement).value="";
    // (document.getElementById("consulTipo") as HTMLInputElement).value = "selec";
    // (document.getElementById("consulTransaccion") as HTMLInputElement).value = "selec";
  }

  cambi(){
    this.val = (document.getElementById("consulHabitaciones") as HTMLInputElement).value;
  }

}
