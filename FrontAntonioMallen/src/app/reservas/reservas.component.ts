import { Component } from '@angular/core';
import { userService } from '../userService';
import {FormControl, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent {
  selected: Date | null | undefined;

  email = new FormControl('', [Validators.required, Validators.email]);
  horaSeleccionada?: string;

  horarioControl = new FormControl('');
  horarioComida:string[]=["13:00","13:30","14:00","14:30","15:00"]
  horarioCena:string[]=["20:30","21:00","21:30","22:00","22:30"]
  horarioReal:string[]=this.horarioComida;


  constructor(private userService: userService,private _snackBar: MatSnackBar){
    
  }
  
  anadirMenu(menu:string){
    if(menu=="Menu1"){
      console.log()
    }else if (menu=="Menu2"){

    }else{

    }
    console.log()
  }
  quitarMenu(menu:string){
    if(menu=="Menu1"){

    }else if (menu=="Menu2"){

    }else{

    }
  }

  elegirHorario(){
    var horario=this.horarioControl.value
    if(horario == "Comida"){
      console.log("Comida")
      this.horarioReal=this.horarioComida;
    }else{
      console.log("Cena")
      this.horarioReal=this.horarioCena;
      
    }
  }

  elegirHora(){
    console.log(this.horaSeleccionada)
    if(this.selected)
      console.log(this.selected.getDate() +"/"+(this.selected.getMonth()+1)+"/"+this.selected.getFullYear())
  }

  reservar(){
    if(this.userService.getUser()!=null){
      console.log(this.userService.getUser().nombre)
    }else{
      this._snackBar.open("Debe estar logueado para reservar", "Cerrar");
    }
  }

}
