import { Component } from '@angular/core';
import { User } from './model/user';
import { userService } from './userService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuario: User | null=null;

  constructor(){

  }
  /*getUser(e: any){
    console.log("test"+e)
    if(e){
      this.usuario=e;
      console.log(this.usuario?.correo);
    }
  }*/
}
