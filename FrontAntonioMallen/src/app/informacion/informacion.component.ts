import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent {

  users: User[]=[];

constructor( private http:HttpClient){
  const req=http.get<User[]>('http://localhost:8080/usuarios/all')
  req.subscribe(res=>{
    this.users=res;
  }) 

//console.log(localStorage.getItem("role"))
}
}
