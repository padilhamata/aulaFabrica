import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpregadoServico {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/employees';

  constructor(private http: HttpClient) { }

  getEmpregado(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  criarEmpregado(empregado: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, empregado);
  }

  atualizaEmpregado(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmpregado(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmpregadoLista(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
