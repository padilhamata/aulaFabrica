import { Component, OnInit } from '@angular/core';
import { Empregado } from '../empregado';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpregadoServico } from '../empregado.service';

@Component({
  selector: 'app-atualiza-empregado',
  templateUrl: './atualiza-empregado.component.html',
  styleUrls: ['./atualiza-empregado.component.css']
})
export class AtualizaEmpregadoComponente implements OnInit {

  id: number;
  empregado: Empregado;

  constructor(private route: ActivatedRoute,private router: Router,
    private empregadoServico: EmpregadoServico) { }

  ngOnInit() {
    this.empregado = new Empregado();

    this.id = this.route.snapshot.params['id'];
    
    this.empregadoServico.getEmpregado(this.id)
      .subscribe(data => {
        console.log(data)
        this.empregado = data;
      }, error => console.log(error));
  }

  atualizaEmpregado() {
    this.empregadoServico.atualizaEmpregado(this.id, this.empregado)
      .subscribe(data => console.log(data), error => console.log(error));
    this.empregado = new Empregado();
    this.gotoList();
  }

  onSubmit() {
    this.atualizaEmpregado();    
  }

  gotoList() {
    this.router.navigate(['/empregado']);
  }
}
