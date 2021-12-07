import { Component, OnInit } from '@angular/core';
import { ConsultaEdificioService } from '../consulta-edificio.service';

@Component({
  selector: 'app-consulta-edificio',
  templateUrl: './consulta-edificio.component.html',
  styleUrls: ['./consulta-edificio.component.css']
})
export class ConsultaEdificioComponent implements OnInit {

  edificio:any
  Num=1;

  constructor(private service: ConsultaEdificioService) { }

  ngOnInit(): void {
    this.service.getEdificio().subscribe( data=>{
      this.edificio=data;      
    });
  }

}
