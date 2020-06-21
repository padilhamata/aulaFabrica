import { ComponeteDetalhesempregado } from '../empregado-detalhes/empregado-detalhes.component';
import { Observable } from "rxjs";
import { EmpregadoServico } from "../empregado.service";
import { Empregado } from "../empregado";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-empregado-lista",
  templateUrl: "./empregado-lista.component.html",
  styleUrls: ["./empregado-lista.component.css"]
})
export class EmpregadoListaComponente implements OnInit {
  empregados: Observable<Empregado[]>;

  constructor(private empregadoServico: EmpregadoServico,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.empregados = this.empregadoServico.getEmpregadoLista();
  }

  deleteEmployee(id: number) {
    this.empregadoServico.deleteEmpregado(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  empregadoDetalhes(id: number){
    this.router.navigate(['details', id]);
  }

  atualizaEmpregado(id: number){
    this.router.navigate(['update', id]);
  }
}
