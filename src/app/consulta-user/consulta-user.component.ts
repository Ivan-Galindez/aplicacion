import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service'

@Component({
  selector: 'app-consulta-user',
  templateUrl: './consulta-user.component.html',
  styleUrls: ['./consulta-user.component.css']
})
export class ConsultaUserComponent implements OnInit {

  aconsultar:any;
  resConsulta:any;

  constructor(private service: UserService) { }

  ngOnInit(): void {
  }

  consultaUsu(){
    let tip = (document.getElementById("consul") as HTMLInputElement).value;
    let val = (document.getElementById("consulta") as HTMLInputElement).value;

    this.aconsultar=tip+": "+val;

    this.service.getConsulta(tip, val).subscribe( data => {
      this.resConsulta=data;
    })

  }

}
