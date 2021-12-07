import { Component, OnInit } from '@angular/core';
import { HomeService} from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  edificio:any
  Num=1;
  
  constructor(private service: HomeService) { }

  ngOnInit(): void {
    this.service.getConsulta().subscribe( data=>{
      this.edificio=data;      
    });
  }

}
