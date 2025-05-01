import { Routes } from '@angular/router';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { TarefasComponent } from './pages/tarefas/tarefas.component';
import { DisciplinaComponent } from './pages/disciplina/disciplina.component';
import { CursoComponent } from './pages/curso/curso.component';

export const routes: Routes = [
  { path: '', redirectTo: '/usuario', pathMatch: 'full' },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'tarefas', component: TarefasComponent },
  { path: 'disciplina', component: DisciplinaComponent },
  { path: 'curso', component: CursoComponent }
];

