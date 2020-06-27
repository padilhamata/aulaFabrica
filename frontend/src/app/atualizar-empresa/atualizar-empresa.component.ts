import { Component, OnInit } from '@angular/core';
import { Empresa } from '../empresa';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-atualizar-empresa',
  templateUrl: './atualizar-empresa.component.html',
  styleUrls: ['./atualizar-empresa.component.css']
})
export class AtualizarEmpresaComponent implements OnInit {

  id: number;
  empresa: Empresa;

  constructor(private route: ActivatedRoute, private router: Router,
    private empresaService: EmpresaService) { }

  ngOnInit() {
    this.empresa = new Empresa();

    this.id = this.route.snapshot.params['id'];

    this.empresaService.getEmpresa(this.id)
    .subscribe(data => {
      console.log(data)
      this.empresa = data;
    }, error => console.log(error))
  }

  atualizarEmpresa(){
    this.empresaService.atualizarEmpresa(this.id,this.empresa)
    .subscribe(data => console.log(data), error=> console.log(error))
    this.empresa = new Empresa();
    this.voltarLista();
  }

  onSubmit(){
    this.atualizarEmpresa()
  }

  voltarLista(){
    this.router.navigate(['/empresas'])
  }

}
