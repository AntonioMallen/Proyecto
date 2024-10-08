import { Component} from '@angular/core';

import { Router } from '@angular/router'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  ruta:string=""
  horarios:boolean=false;

  constructor(private router: Router ){
    router.events.subscribe((val) => {
      if(this.ruta!=router.url){
    this.horarios=false;

        let aux =router.url
        this.ruta=aux.at(1)?.toUpperCase()+ aux.substring(2)
        if(this.ruta=="Home"){
          this.ruta="Información"
        }else if(this.ruta=="MisReservas"){
          this.ruta="Mis reservas";
        }else if(this.ruta=="Horarios"){
          this.horarios=true;
          this.ruta="Contacto y Horarios";
        }
      }
  });
  }
  
}
