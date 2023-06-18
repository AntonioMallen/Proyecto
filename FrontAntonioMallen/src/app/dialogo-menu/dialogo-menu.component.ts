import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogoPlatosComponent } from '../dialogo-platos/dialogo-platos.component';


@Component({
  selector: 'app-dialogo-menu',
  templateUrl: './dialogo-menu.component.html',
  styleUrls: ['./dialogo-menu.component.css']
})
export class DialogoMenuComponent implements OnInit{
  
  menus:any[]=[];
  
  constructor(private matDialog: MatDialog,private _snackBar: MatSnackBar, private http:HttpClient){
    
  }
  
  async ngOnInit() {
    const req=this.http.get('http://localhost:8080/menus/all');
    let aux:any =await firstValueFrom(req);
    this.menus=aux;
    
  }
  closeDialog(){
    this.matDialog.closeAll()
  }


  async deleteMenu(nombre:String){
    if(parseFloat("asf"))
      console.log(parseFloat("asg"))
    const req=this.http.post('http://localhost:8080/menus/delete',nombre);
    await firstValueFrom(req);
    this._snackBar.open("Se ha eliminado el menu", "Cerrar",{duration:3000});
    this.matDialog.closeAll()
    this.matDialog.open(DialogoMenuComponent,{
      width:'50%',
    })
  }


  async createMenu(menu:string,precio:any){
    var num=parseFloat(precio)

    if(!isNaN(precio) ){//&& precio.toString().indexOf('.') != -1 (saber si es un float)

      /*if(!(precio.toString().indexOf('.') != -1)){
        let aux =precio
        console.log(aux)
        precio=parseFloat(aux+".00")
        console.log(precio)

      }*/

      if(menu){ 
        let body={
          "nombre":menu,
          "precio":precio
        }
        const req=this.http.post('http://localhost:8080/menus/add',body);
        let salida=await firstValueFrom(req);
        if(salida){
          this._snackBar.open("Introduce un nombre de menu", "Cerrar",{duration:3000});
          this.matDialog.closeAll()
          this.matDialog.open(DialogoMenuComponent,{
            width:'50%',
          })
        }
      }else {
        this._snackBar.open("Introduce un nombre de menu", "Cerrar",{duration:3000});
      }
    }else{
      this._snackBar.open("El precio debe ser un numero", "Cerrar",{duration:3000});
    }
  }


  openPlatos(menuElegido:string){
    this.matDialog.open(DialogoPlatosComponent,{
      width:'50%',
      data: {
        menu: menuElegido
      }
    })
  }
}