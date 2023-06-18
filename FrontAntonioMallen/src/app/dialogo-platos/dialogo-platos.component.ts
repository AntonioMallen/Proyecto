import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialogo-platos',
  templateUrl: './dialogo-platos.component.html',
  styleUrls: ['./dialogo-platos.component.css']
})
export class DialogoPlatosComponent  implements OnInit{
  
  menu:any;
  
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private matDialog: MatDialog,private _snackBar: MatSnackBar, private http:HttpClient){}
  
  
  async ngOnInit() {
    
    const req=this.http.post('http://localhost:8080/menus/getMenuNombre', this.data.menu);
    this.menu =await firstValueFrom(req);
    console.log(this.menu)
  }
  
  async guardarPlato(tipo: number, plato:String){ // Primero 0, Segundo 1, Postre 2
    if(plato){
      let body= this.menu.id_menu+","+plato+","+tipo
      const req=this.http.post('http://localhost:8080/menus/addPlato', body);
      let respuesta=await firstValueFrom(req);
      if(respuesta){
        this._snackBar.open("Se ha introducido el plato", "Cerrar",{duration:3000});
        this.matDialog.closeAll()
        this.matDialog.open(DialogoPlatosComponent,{
          width:'50%',
          data: {
            menu: this.menu.nombre
          }
        })
      }
    }else{
      this._snackBar.open("Debes añadir el nombre del plato", "Cerrar",{duration:3000});
    }
    
  }

  async eliminarPlato(tipo: number, plato:String){
    if(plato){
      let body= this.menu.id_menu+","+plato+","+tipo
      const req=this.http.post('http://localhost:8080/menus/deletePlato', body);
      let respuesta=await firstValueFrom(req);
      if(respuesta){
        this._snackBar.open("Se ha eliminado el plato", "Cerrar",{duration:3000});
        this.matDialog.closeAll()
        this.matDialog.open(DialogoPlatosComponent,{
          width:'50%',
          data: {
            menu: this.menu.nombre
          }
        })
      }
    }else{
      this._snackBar.open("Debes añadir el nombre del plato", "Cerrar",{duration:3000});
    }
  }
  
  closeDialog(){
    this.matDialog.closeAll()
  }
}
