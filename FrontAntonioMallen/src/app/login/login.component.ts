import { Component/*, Output, EventEmitter */} from '@angular/core';
import { Router, UrlSerializer } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import {MatSnackBar} from '@angular/material/snack-bar';
import * as shajs from 'sha.js';
import { userService } from '../userService';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  //users: User[]=[];
  mensaje: String="";
  email = new FormControl('', [Validators.required, Validators.email]);
  pulsadoLogin=false
  pulsadoRegister=false
  
  
  
  constructor(private router: Router, private http:HttpClient,private _snackBar: MatSnackBar, private userService: userService) {
    /*const req=this.http.get<User[]>('http://localhost:8080/usuarios/all')
    req.subscribe(res=>{
      this.users=res;
    })*/
  }
  onLogin(email:string,password:string){
    var user:User| null =this.getUser(email)
    this.pulsadoLogin=true;
    let mensaje=this.getErrorMessage();
    if(mensaje==''){
      this.encryptar(password);
      if(email!="" && password !=""){
        let aux: string=''
        if(user){
          if(user.correo==email && aux!='ok' && aux!='cn'){
            var passwordEncrypted=this.encryptar(password);
            
            if(user.password==passwordEncrypted){
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
            
            //this.eventoUsuario.emit(value)
            this.userService.setUser(user)
            this.router.navigate(['/home'])
          }else if(aux=='cn'){
            this._snackBar.open("Contraseña incorrecta", "Cerrar");
          }else{
            this._snackBar.open("Correo no encontrado", "Cerrar");
          }
        }
        
      }else{
        this._snackBar.open("Todos los campos deben ser rellenados", "Cerrar");
      }
      
    }
  }
  onRegister(email:string, username:string, password:string){
    var user:User| null =this.getUser(email)
    this.pulsadoRegister=true;
    let mensaje=this.getErrorMessage();
    if(mensaje==''){
      let guardado:boolean=false;
      if(user){
        if(user.correo!=null){
          guardado=true
        }
      }
      if(guardado==false){
        if(email!="" && username !="" && password !=""){
          
          var passwordEncrypted=this.encryptar(password);
          /*let body={
            "nombre": username,
            "correo": email,
            "password": passwordEncrypted,
            "reservas": [],
            "rol": "user",
          }
          const req=this.http.post('http://localhost:8080/usuarios/add',body,{}).pipe()
          req.subscribe();*/
          
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
  
  getUser(email:string):any{
    const req=this.http.post('http://localhost:8080/usuarios/getEmail',email,{}).pipe()
    req.subscribe(res=>{
      return res;
    })
  }
  
  encryptar(palabra:string): string{
    var hex= shajs('sha256').update(palabra).digest('hex')
    return hex;
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Tienes que insertar un correo';
    }
    
    return this.email.hasError('email') ? 'No es un email valido' : '';
  }
}
