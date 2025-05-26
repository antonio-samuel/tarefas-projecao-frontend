
# Tarefas Projeção - Frontend

Este projeto é o **frontend** da aplicação de gestão de tarefas da UniProjeção, desenvolvido em **Angular**.

## 🎯 Objetivo

Permitir que estudantes da UniProjeção organizem suas tarefas acadêmicas, visualizem disciplinas, cursos e gerenciem prazos.

dempendências e versôes:
@angular/cli                    19.2.9
typescript                      5.7.3
Node.js                         22.9.0

## ▶️ Como rodar o projeto

1. Clone este repositório:  git clone https://github.com/antonio-samuel/tarefas-projecao-frontend.git

2.  Acesse a pasta do projeto: cd tarefas-projecao-frontend

3. Instale as dependências(se necessário): npm install

4. Inicie o servidor de desenvolvimento: ng serve

5.   Acesse a aplicação em: http://localhost:4200 

  navbar não está funcionando, para navegar entre as páginas use: 
  localhost:4200/usuario;
  localhost:4200/tarefas;
  localhost:4200/disciplinas;
  localhost:4200/curso.

  projeto está na branch Master

  Figma link: https://www.figma.com/design/8jDHj08t21vDlIUZuFGC0d/Sistema-de-tarefas?m=auto&t=QfWaFCaME78C0nAW-6
  
  Casos de Uso:

🧑‍🎓 Perfil: Aluno

Visualizar Tarefas

O aluno acessa sua lista de tarefas por disciplina.

Marcar Tarefa como Concluída

O aluno marca uma tarefa como feita para acompanhamento.

Visualizar Disciplinas

O aluno pode ver a lista das disciplinas em que está matriculado.

Visualizar Curso

O aluno pode consultar informações básicas do seu curso.

🧑‍🏫 Perfil: Professor
Criar/Editar/Excluir Tarefa

Pode cadastrar, alterar ou remover tarefas para as disciplinas que leciona.

Gerenciar Disciplinas

Pode criar/editar/excluir disciplinas e vincular alunos.

Visualizar Alunos por Disciplina

Pode consultar quem está matriculado em cada disciplina.

Gerenciar Curso (caso tenha permissão extra)

Em alguns contextos, pode cadastrar cursos e disciplinas.

👨‍💼 Perfil: Administrador
Cadastrar/Editar/Excluir Usuário

Pode gerenciar alunos, professores e administradores.

Gerenciar Cursos

Criar, editar ou excluir cursos do sistema.

Gerenciar Disciplinas

Atribuir professores a disciplinas, criar ou remover.

Visualizar Relatórios

Acessar estatísticas gerais de uso e progresso.
  
