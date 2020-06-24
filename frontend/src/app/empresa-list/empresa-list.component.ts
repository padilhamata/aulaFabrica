import { Observable } from 'rxjs';
import { EmpresaService } from '../empresa.service';
import { Empresa } from '../empresa';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-empresa-list',
  templateUrl: './empresa-list.component.html',
  styleUrls: ['./empresa-list.component.css']
})
export class EmpresaListComponent implements OnInit {
empresas: Observable<Empresa[]>
  constructor(private empresaService: EmpresaService,
    private router: Router) {}

  ngOnInit() {
    this.carregarDados();
  }

  carregarDados() {
    this.empresas = this.empresaService.getEmpresaLista();
  }

  deleteEmpresa(id: number){
    this.empresaService.excluirEmpresa(id)
    .subscribe(
      data => {
        console.log(data);
        this.carregarDados();
      },
      error => console.log(error));
  }

  empresaDetalhes(id: number){
    this.router.navigate(['detalhes', id])
  }

  atualizaEmpresa(id: number){
    this.router.navigate(['atualizar',id])
  }
}
