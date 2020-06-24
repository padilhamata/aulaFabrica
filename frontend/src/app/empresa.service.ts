import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private baseUrl= 'http://localhost:8080/springboot-crud-rest/api/v1/empresas';


  constructor(private http: HttpClient) { }

  getEmpresa(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  criarEmpresa(empresa: object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, empresa); 
  }

  atualizarEmpresa(id: number, value: any): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  excluirEmpresa(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text'})
  }

  getEmpresaLista(): Observable<any>{
    return this.http.get(`${this.baseUrl}`)
  }
}
