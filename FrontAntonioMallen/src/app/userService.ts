import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './model/user';

@Injectable({
    providedIn: 'root',
  })
export class userService {

  public user:any=null;
  
  setUser(user: User){
    this.user=user;
  }

  exit(){
    this.user=null;
  }
  
  getUser(): User{
    return this.user;
  }

}