import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { userService } from '../userService';
import { lastValueFrom } from 'rxjs';


@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit{

  menus: any[]=[];

  constructor(private http:HttpClient,private userService: userService,){

  }

  async ngOnInit() {
    const req=this.http.get('http://localhost:8080/menus/all');
    let aux:any= await lastValueFrom(req)
    this.menus=aux
  }

}
