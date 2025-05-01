
  
  import { Component } from '@angular/core';
  import { CommonModule } from '@angular/common';
  
  @Component({
    selector: 'app-tarefas',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './tarefas.component.html',
    styleUrls: ['./tarefas.component.css']
  })
  export class TarefasComponent {
    tarefas = [
      { titulo: 'Estudar Angular', descricao: 'Fazer aula do capítulo 1', prazo: '2025-05-06' },
      { titulo: 'Entregar projeto', descricao: 'Subir repositório no GitHub', prazo: '2025-06-30' }
    ];
  }

