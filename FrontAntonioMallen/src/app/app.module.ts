import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatNativeDateModule } from '@angular/material/core';
import {ReservasComponent} from "./reservas/reservas.component"
import {NavbarComponent} from "./navbar/navbar.component"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import { HttpClientModule } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';
import { InformacionComponent } from './informacion/informacion.component';
import { CartaComponent } from './carta/carta.component';
import { HorariosComponent } from './horarios/horarios.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    ReservasComponent,
    NavbarComponent,
    InformacionComponent,
    CartaComponent,
    HorariosComponent,
    LoginComponent,
    InicioComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatSnackBarModule,
    BrowserModule,
    AppRoutingModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    NgOptimizedImage,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
