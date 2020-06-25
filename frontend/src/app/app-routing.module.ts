import { ComponeteDetalhesempregado} from './empregado-detalhes/empregado-detalhes.component';
import { CriarEmpregadoComponent } from './criar-empregado/criar-empregado.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpregadoListaComponente } from './empregado-lista/empregado-lista.component';
import { AtualizaEmpregadoComponente } from './atualiza-empregado/atualiza-empregado.component';
import { EmpresaListComponent } from './empresa-list/empresa-list.component';
import { CriarEmpresaComponent } from './criar-empresa/criar-empresa.component'
import { AtualizarEmpresaComponent } from './atualizar-empresa/atualizar-empresa.component'
import { EmpresaDetalhesComponent } from './empresa-detalhes/empresa-detalhes.component'


const routes: Routes = [
  { path: '', redirectTo: 'empregados', pathMatch: 'full' },
  { path: 'empregados', component: EmpregadoListaComponente },
  { path: 'empresas', component: EmpresaListComponent},
  { path: 'add', component: CriarEmpregadoComponent },
  { path: 'addEmpresa', component: CriarEmpresaComponent},
  { path: 'update/:id', component: AtualizaEmpregadoComponente },
  { path: 'atualizar/:id', component: AtualizarEmpresaComponent},
  { path: 'details/:id', component: ComponeteDetalhesempregado },
  { path: 'detalhes/:id', component: EmpresaDetalhesComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
