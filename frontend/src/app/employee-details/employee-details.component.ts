import { Empregado } from '../employee';
import { Component, OnInit, Input } from '@angular/core';
import { EmpregadoServico } from '../employee.service';
import { EmpregadoListaComponente } from '../empregado-list/employee-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class ComponeteDetalhesempregado implements OnInit {

  id: number;
  employee: Empregado;

  constructor(private route: ActivatedRoute,private router: Router,
    private empregadoServico: EmpregadoServico) { }

  ngOnInit() {
    this.employee = new Empregado();

    this.id = this.route.snapshot.params['id'];
    
    this.empregadoServico.getEmpregado(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['employees']);
  }
}
