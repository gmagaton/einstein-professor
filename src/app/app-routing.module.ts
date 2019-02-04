import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  { path: 'locais', loadChildren: './locais/locais.module#LocaisPageModule' },
  { path: 'dashboard-professor', loadChildren: './dashboard-professor/dashboard-professor.module#DashboardProfessorPageModule' },
  { path: 'dashboard-coordenador', loadChildren: './dashboard-coordenador/dashboard-coordenador.module#DashboardCoordenadorPageModule' },
  { path: 'aula-lista', loadChildren: './aula-lista/aula-lista.module#AulaListaPageModule' },
  { path: 'aula', loadChildren: './aula/aula.module#AulaPageModule' },
  { path: 'pagamento', loadChildren: './pagamento/pagamento.module#PagamentoPageModule' },
  { path: 'pagamento-lista', loadChildren: './pagamento-lista/pagamento-lista.module#PagamentoListaPageModule' },
  { path: 'lembrete', loadChildren: './lembrete/lembrete.module#LembretePageModule' },
  { path: 'lembrete-lista', loadChildren: './lembrete-lista/lembrete-lista.module#LembreteListaPageModule' },
  { path: 'professor', loadChildren: './professor/professor.module#ProfessorPageModule' },
  { path: 'professor-lista', loadChildren: './professor-lista/professor-lista.module#ProfessorListaPageModule' },
  { path: 'esqueci-senha', loadChildren: './esqueci-senha/esqueci-senha.module#EsqueciSenhaPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
