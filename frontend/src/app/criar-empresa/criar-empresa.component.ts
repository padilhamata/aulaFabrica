import { Component, OnInit } from '@angular/core';
import { Empresa } from '../empresa';
import { EmpresaService } from '../empresa.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-criar-empresa',
  templateUrl: './criar-empresa.component.html',
  styleUrls: ['./criar-empresa.component.css']
})
export class CriarEmpresaComponent implements OnInit {

empresa: Empresa = new Empresa();
submitted = false;

  constructor(private empresaService: EmpresaService,
    private router: Router) { }

  ngOnInit() {
  }

  novaEmpresa(): void {
    this.submitted = false;
    this.empresa = new Empresa();
  }

  salvar(){
    this.empresaService.criarEmpresa(this.empresa)
    .subscribe(data => console.log(data),error => console.log(error))
    this.empresa = new Empresa();
    this.voltarLista();
  }

  onSubmit(){
    this.submitted = true;
    this.salvar();
  }

  voltarLista(){
    this.router.navigate(['/empresa'])
  }
}
