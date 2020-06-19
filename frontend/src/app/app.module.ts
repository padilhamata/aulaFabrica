import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarEmpregadoComponent } from './create-employee/create-employee.component';
import { ComponeteDetalhesempregado } from './employee-details/employee-details.component';
import { EmpregadoListaComponente } from './empregado-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AtualizaEmpregadoComponente } from './update-employee/update-employee.component';
@NgModule({
  declarations: [
    AppComponent,
    CriarEmpregadoComponent,
    ComponeteDetalhesempregado,
    EmpregadoListaComponente,
    AtualizaEmpregadoComponente
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
