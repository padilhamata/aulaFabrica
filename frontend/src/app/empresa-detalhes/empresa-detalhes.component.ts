import { Component, OnInit } from '@angular/core';
import { Empresa } from '../empresa';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaService } from '../empresa.service';
import { Empregado } from "../empregado";
import { Observable } from "rxjs";
import { EmpregadoServico } from "../empregado.service";

@Component({
  selector: 'app-empresa-detalhes',
  templateUrl: './empresa-detalhes.component.html',
  styleUrls: ['./empresa-detalhes.component.css']
})
export class EmpresaDetalhesComponent implements OnInit {

  empregados: Observable<Empregado[]>;
  id: number;
  empresa: Empresa;
  empregadosEmpresa: Observable<Empresa[]>

  constructor(private route: ActivatedRoute, private router: Router,
    private empresaService: EmpresaService,
    private empregadoServico: EmpregadoServico) { }

  ngOnInit() {
    this.empresa = new Empresa();

    this.id = this.route.snapshot.params['id']

    this.empregados = this.empregadoServico.getEmpregadoLista();
    console.log(this.empregados)
    this.empresaService.getEmpresa(this.id)
    .subscribe(data => {
      console.log(data)
      this.empresa = data;
    }, error => console.log(error));


  }

  listar(){
    this.router.navigate(['empresas'])
  }

  adicionaEmpregado(id: number){

    this.empregadosEmpresa= this.empresaService.adicionaEmpregado(id,this.empresa.id);
  }
}