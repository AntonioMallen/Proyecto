import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InformacionComponent} from "./informacion/informacion.component"
import {ReservasComponent} from "./reservas/reservas.component"
import {LoginComponent} from "./login/login.component"
import {HorariosComponent} from "./horarios/horarios.component"
import {CartaComponent} from "./carta/carta.component"
import {ReservasPersonalComponent} from "./reservas-personal/reservas-personal.component"

const routes: Routes = [
  {path:'home', component: InformacionComponent},
  {path:'carta', component: CartaComponent},
  {path:'login', component: LoginComponent},
  {path:'horarios', component: HorariosComponent},
  {path:'reservas', component: ReservasComponent},
  {path:'misReservas', component: ReservasPersonalComponent},
  {path: '',   redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
