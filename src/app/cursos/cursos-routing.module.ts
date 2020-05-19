import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CursosRoutingComponent } from './cursos-routing.component';
import { ListagemCursoComponent } from './listagem-curso/listagem-curso.component';

export const cursosRoutes: Routes = [
    {
        path: 'cursos',
        component: CursosRoutingComponent,
        children: [
            {
                path: '',
                component: ListagemCursoComponent
            }
        ]
    }
]


@NgModule({
    imports: [RouterModule.forChild(cursosRoutes)],
    exports: [RouterModule]
})

export class CursosRoutingModule {}