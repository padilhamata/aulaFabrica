import { Component, OnInit } from '@angular/core';
import { Empregado } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpregadoServico } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
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

  updateEmployee() {
    this.empregadoServico.atualizaEmpregado(this.id, this.empregado)
      .subscribe(data => console.log(data), error => console.log(error));
    this.empregado = new Empregado();
    this.gotoList();
  }

  onSubmit() {
    this.updateEmployee();    
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }
}
