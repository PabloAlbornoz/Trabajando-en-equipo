import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { InicioComponent } from './inicio/inicio.component';
import { CanchasComponent } from './canchas/canchas.component';
import { EquiposComponent } from './equipos/equipos.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes =[
  { path:'registro' , component:RegistroComponent },
  { path:'iniciar_sesion', component:IniciarSesionComponent },
  { path:'inicio', component:InicioComponent },
  { path:'canchas', component:CanchasComponent },
  { path:'equipos', component:EquiposComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
