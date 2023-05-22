import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  users: User[]=[];
  mensaje: String="";

  constructor(private router: Router, private http:HttpClient,private _snackBar: MatSnackBar) {
    const req=this.http.get<User[]>('http://localhost:8080/usuarios/all')
    req.subscribe(res=>{
      this.users=res;
    })
  }

  onLogin(email:string,password:string){
    if(email!="" && password !=""){
      let aux: string=''
    this.users.forEach((value: User) =>{
      if(value.correo==email && aux!='ok' && aux!='cn'){
        if(value.password==password){
          aux='ok';
        }else{
          aux='cn';
          
        }
      }else{
        aux='co';
      }
      if(aux=='ok'){
        (<HTMLInputElement>document.getElementById("userName")).value="";
        (<HTMLInputElement>document.getElementById("password")).value="";

        //pasar a la pestaña de login con la info
      }else if(aux=='cn'){
        this._snackBar.open("Contraseña incorrecta", "Cerrar");
      }else{
        this._snackBar.open("Correo no encontrado", "Cerrar");
      }
    });

    }else{
      this._snackBar.open("Todos los campos deben ser rellenados", "Cerrar");
    }
    
    
  }
  onRegister(email:string, username:string, password:string){
    let guardado:boolean=false;
    this.users.forEach((value: User) =>{
      if(value.correo==email){
        guardado=true
      }
    });
    if(guardado==false){
      if(email!="" && username !="" && password !=""){
        let body={
          "nombre": username,
          "correo": email,
          "password": password,
          "reservas": [],
          "rol": "user",
          }
        const req=this.http.post('http://localhost:8080/usuarios/add',body,{}).pipe()
          req.subscribe();
  
          (<HTMLInputElement>document.getElementById("emailRegister")).value="";
          (<HTMLInputElement>document.getElementById("usernameRegister")).value="";
          (<HTMLInputElement>document.getElementById("passwordRegister")).value="";
          this._snackBar.open("Cuenta creada correctamente", "Cerrar");
      }else{
        this._snackBar.open("Todos los campos deben ser rellenados", "Cerrar");
      }
      
    }else{
      this._snackBar.open("Correo ya registrado", "Cerrar");
    }
  }
}
