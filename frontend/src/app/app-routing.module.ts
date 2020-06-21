import { ComponeteDetalhesempregado} from './empregado-detalhes/empregado-detalhes.component';
import { CriarEmpregadoComponent } from './criar-empregado/criar-empregado.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpregadoListaComponente } from './empregado-lista/empregado-lista.component';
import { AtualizaEmpregadoComponente } from './atualiza-empregado/atualiza-empregado.component';

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'employees', component: EmpregadoListaComponente },
  { path: 'add', component: CriarEmpregadoComponent },
  { path: 'update/:id', component: AtualizaEmpregadoComponente },
  { path: 'details/:id', component: ComponeteDetalhesempregado },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
