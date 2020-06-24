import { Component, OnInit } from '@angular/core';
import { Empresa } from '../empresa';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-empresa-detalhes',
  templateUrl: './empresa-detalhes.component.html',
  styleUrls: ['./empresa-detalhes.component.css']
})
export class EmpresaDetalhesComponent implements OnInit {

  id: number;
  empresa: Empresa;

  constructor(private route: ActivatedRoute, private router: Router,
    private empresaService: EmpresaService) { }

  ngOnInit() {
    this.empresa = new Empresa();

    this.id = this.route.snapshot.params['id']

    this.empresaService.getEmpresa(this.id)
    .subscribe(data => {
      console.log(data)
      this.empresa = data;
    }, error => console.log(error));
  }

  listar(){
    this.router.navigate(['empresas'])
  }

}
