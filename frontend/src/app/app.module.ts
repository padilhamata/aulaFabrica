import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarEmpregadoComponent } from './criar-empregado/criar-empregado.component';
import { ComponeteDetalhesempregado } from './empregado-detalhes/empregado-detalhes.component';
import { EmpregadoListaComponente } from './empregado-lista/empregado-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { AtualizaEmpregadoComponente } from './atualiza-empregado/atualiza-empregado.component';
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
