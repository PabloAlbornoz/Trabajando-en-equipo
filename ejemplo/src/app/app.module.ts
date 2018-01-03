import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LogRegComponent } from './log-reg/log-reg.component';
import { AppRoutingModule } from './/app-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { CanchasComponent } from './canchas/canchas.component';
import { EquiposComponent } from './equipos/equipos.component';


@NgModule({
  declarations: [
    AppComponent,
    LogRegComponent,
    RegistroComponent,
    IniciarSesionComponent,
    MenuComponent,
    InicioComponent,
    CanchasComponent,
    EquiposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
