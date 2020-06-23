import { Empregado } from '../empregado';
import { Component, OnInit, Input } from '@angular/core';
import { EmpregadoServico } from '../empregado.service';
import { EmpregadoListaComponente } from '../empregado-lista/empregado-lista.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empregado-detalhes',
  templateUrl: './empregado-detalhes.component.html',
  styleUrls: ['./empregado-detalhes.component.css']
})
export class ComponeteDetalhesempregado implements OnInit {

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

  list(){
    this.router.navigate(['empregados']);
  }
}
