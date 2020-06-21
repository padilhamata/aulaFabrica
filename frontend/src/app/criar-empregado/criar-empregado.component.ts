import { EmpregadoServico } from '../empregado.service';
import { Empregado } from '../empregado';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-empregado',
  templateUrl: './criar-empregado.component.html',
  styleUrls: ['./criar-empregado.component.css']
})
export class CriarEmpregadoComponent implements OnInit {

  empregado: Empregado = new Empregado();
  submitted = false;

  constructor(private employeeService: EmpregadoServico,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.empregado = new Empregado();
  }

  save() {
    this.employeeService.criarEmpregado(this.empregado)
      .subscribe(data => console.log(data), error => console.log(error));
    this.empregado = new Empregado();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }
}
