import { ComponeteDetalhesempregado} from './employee-details/employee-details.component';
import { CriarEmpregadoComponent } from './create-employee/create-employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpregadoListaComponente } from './empregado-list/employee-list.component';
import { AtualizaEmpregadoComponente } from './update-employee/update-employee.component';

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
