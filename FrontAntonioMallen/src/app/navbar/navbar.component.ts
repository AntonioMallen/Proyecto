import { Component} from '@angular/core';
import { userService } from '../userService';
import { User } from '../model/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  
})

export class NavbarComponent {

  logueado:boolean=false;
  nombre:string="Test";

  constructor(private userService: userService,private router: Router){

  }
  ngDoCheck() {
    var user:User = this.userService.getUser();
    if(user){
      this.logueado=true;
      this.nombre=user.nombre
    }else{
      this.logueado=false;

    }
  }

  cerrarCuenta(){
    this.userService.exit()
    this.router.navigate(['/home'])
  }
  
}
