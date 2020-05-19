import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ListagemCursoComponent } from './listagem-curso/listagem-curso.component';
import { CursosRoutingComponent } from './cursos-routing.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ListagemCursoComponent,
    CursosRoutingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CursosModule { }
