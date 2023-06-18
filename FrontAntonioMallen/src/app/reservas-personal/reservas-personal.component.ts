import { Component, Inject, OnInit } from '@angular/core';
import { userService } from '../userService';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router, UrlSerializer } from '@angular/router';
import { Menu } from '../model/menu';
import { DialogoMenuComponent } from '../dialogo-menu/dialogo-menu.component';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-reservas-personal',
  templateUrl: './reservas-personal.component.html',
  styleUrls: ['./reservas-personal.component.css']
})
export class ReservasPersonalComponent implements OnInit{
  
  displayedColumns: string[] = ['usuario','fechaReserva', 'comensales', 'menus', 'precio'];
  displayedColumnsUsers: string[] = ['fechaReserva', 'comensales', 'menus', 'precio'];
  dataSource :any;
  menus:string="";
  precio:number=0;
  admin:boolean=false;
  
  constructor(private http:HttpClient,private userService: userService,private router: Router, private matDialog: MatDialog){
    
  }
  async ngOnInit() {
    if(this.userService.getUser()==null){
      this.router.navigate(['/home'])
    }else{
      
      
      if(this.userService.getUser().rol=="admin"){
        const req=this.http.get('http://localhost:8080/reservas/all');
        req.subscribe(aux =>{
          this.dataSource=aux;

          this.cargarDatos()
        }) 
        this.admin=true;
      }else{
        const req=this.http.post('http://localhost:8080/reservas/getReservasID',""+this.userService.getUser().id);
        req.subscribe(aux =>{
          this.dataSource=aux;
          this.cargarDatos()
        }) 
      }
      
  }
}

  openMenu(){
    this.matDialog.open(DialogoMenuComponent,{
      width:'50%',
    })
  }


  cargarDatos(){
    const req=this.http.get('http://localhost:8080/menus/all');
    req.subscribe((salida:any) =>{
    this.dataSource.forEach((reserva:any) => {
      for (let i = 0; i < salida.length; i++) {
        var element=salida.at(i);
        if(element.id_menu==reserva.id_menu.at(i)){
          this.precio+=(parseFloat(element.precio)*parseFloat(reserva.cantMenu.at(i)))
          if(i!=0){
            this.menus+="  |  "+element.nombre+": "+reserva.cantMenu.at(i);
          }else{
            this.menus+=element.nombre+": "+reserva.cantMenu.at(i);
          }
        }
      }
      let aux = this.precio+" €"

      reserva.menu=this.menus
      reserva.precio=aux
      this.menus=""
      this.precio=0
      console.log(this.dataSource)
    });
    
    });
    //var salida:any=await lastValueFrom(req)

  }
}
