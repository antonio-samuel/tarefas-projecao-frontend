import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { UsuarioComponent } from './pages/usuario/usuario.component';
import { TarefasComponent } from './pages/tarefas/tarefas.component';
import { DisciplinaComponent } from './pages/disciplina/disciplina.component';
import { CursoComponent } from './pages/curso/curso.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    TarefasComponent,
    DisciplinaComponent,
    CursoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

