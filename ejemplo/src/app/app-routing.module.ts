import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogRegComponent } from './log-reg/log-reg.component';
import { RegistroComponent } from './registro/registro.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes =[
  { path:'registro' , component:RegistroComponent },
  { path:'iniciar_sesion', component:IniciarSesionComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
