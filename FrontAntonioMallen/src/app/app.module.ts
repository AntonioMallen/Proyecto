import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import {ReservasComponent} from "./reservas/reservas.component"
import {NavbarComponent} from "./navbar/navbar.component"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';
import { InformacionComponent } from './informacion/informacion.component';
import { CartaComponent } from './carta/carta.component';
import { HorariosComponent } from './horarios/horarios.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ReservasPersonalComponent } from './reservas-personal/reservas-personal.component';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import { DialogoMenuComponent } from './dialogo-menu/dialogo-menu.component';
import { DialogoPlatosComponent } from './dialogo-platos/dialogo-platos.component';


@NgModule({
  declarations: [
    AppComponent,
    ReservasComponent,
    NavbarComponent,
    InformacionComponent,
    CartaComponent,
    HorariosComponent,
    LoginComponent,
    InicioComponent,
    ReservasPersonalComponent,
    DialogoMenuComponent,
    DialogoPlatosComponent
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
    HttpClientModule,
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatTableModule,
    MatDialogModule,
    MatListModule
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'es-ES'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
