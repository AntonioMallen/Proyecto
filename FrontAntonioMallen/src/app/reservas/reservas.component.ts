import { Component, OnInit } from '@angular/core';
import { userService } from '../userService';
import {FormControl, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { DateAdapter } from '@angular/material/core';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Reserva} from '../model/Reserva'
import {Menu} from '../model/menu'

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {
  selected: Date | null =null;
  email = new FormControl('', [Validators.required, Validators.email]);
  horaSeleccionada?: string;

  horarioControl = new FormControl('');
  horarioComida:string[]=["13:00","13:30","14:00","14:30","15:00"]
  horarioCena:string[]=["20:30","21:00","21:30","22:00","22:30"]
  horarioReal:string[]=this.horarioComida;

  menus:any[]=[];
  comensalesMenu:any[]=[];
  sumarTodos:number=0;


  constructor(private userService: userService,private _snackBar: MatSnackBar,public date: DateAdapter<Date>,private http:HttpClient){
    date.getFirstDayOfWeek = () => 1;
  }


  ngOnInit(): void {
    
    const req=this.http.get('http://localhost:8080/menus/all');
    req.subscribe( (element:any) => {
    this.menus=element;
    
    for (let i = 0; i < this.menus.length; i++) {
      this.comensalesMenu.push(0)
    }

    });
  }
  
  anadirMenu(menu:string, aux:string){
    var comensales:number=parseInt(aux);
    
    
    
      
    if(comensales>this.sumarTodos){

      this.sumarTodos+=1
      
      this.menus.forEach(element=>{
        
        if(menu==element.nombre){
          let aux= (element.id_menu-1)
          
          this.comensalesMenu.splice(aux,1,(this.comensalesMenu.at(aux)+1));
          
        }
      })
    }else{
      this._snackBar.open("No hay tantos comensales", "Cerrar",{duration:3000});
    }
    console.log()
  }
  quitarMenu(menu:string, aux:string){
    
    var comensales:number=parseInt(aux);
    
    if(comensales>=this.sumarTodos){

      this.menus.forEach(element=>{

        if(menu==element.nombre){
          if(this.comensalesMenu.at((element.id_menu-1))>=1){

            this.sumarTodos-=1

            let aux= (element.id_menu-1)
            
            this.comensalesMenu.splice(aux,1,(this.comensalesMenu.at(aux)-1));
          }else{
            this._snackBar.open("No quedan mas "+element.nombre+" en la lista", "Cerrar",{duration:3000});
          }
        }
      })
      
    }else{
      this._snackBar.open("No hay mas menus en la lista", "Cerrar",{duration:3000});
    }
    
  }

  elegirHorario(){
    var horario=this.horarioControl.value
    if(horario == "Comida"){
      this.horarioReal=this.horarioComida;
    }else{
      this.horarioReal=this.horarioCena;
      
    }
  }
  


  async reservar(comensales:any){
    if(this.userService.getUser()!=null){
      if(comensales){
        if(this.horaSeleccionada){
          if(this.selected){
            if(comensales=this.sumarTodos){

              let horas:any=this.horaSeleccionada.split(":");
              this.selected.setHours(parseInt(horas.at(0)),parseInt(horas.at(1)))
              
              var aux: any[]=[]
              this.menus.forEach(element=>{
                aux.push(element.id_menu)
              })

              let body={
                "fechaReserva" : this.selected,
                "comensales" : comensales,
                "id_menu": aux,
                "cantMenu":this.comensalesMenu,
                "id_usuario": this.userService.getUser().id,
              }

              const req=await this.http.post('http://localhost:8080/reservas/add',body,{});
              let result:any= await lastValueFrom(req)
              console.log(result)
              this._snackBar.open("Se ha realizado la reserva", "Cerrar",{duration:3000});
              

            }
          }else{
            this._snackBar.open("Introduce el dia de la semana", "Cerrar",{duration:3000});
          }
        }else{
          this._snackBar.open("Introduce la hora de la reserva", "Cerrar",{duration:3000});
        }
      }else{
        this._snackBar.open("Introduce el numero de comensales", "Cerrar",{duration:3000});
      }
    }else{
      this._snackBar.open("Debe estar logueado para reservar", "Cerrar",{duration:3000});
    }
  }


}
