import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class PaginaPrincipalService {
  url = environment.apiUrl;

  private readonly endpointContasEntradas: string = 'contasEntradas';
  private readonly endpointContasSaidas: string = 'contasSaidas';
  token = localStorage.getItem('authToken');
  obj = {
    access_token: this.token,
  };
  httpOptions = {
    headers: {  'Authorization': 'Bearer ' + this.token},
  };
  idUsuario = localStorage.getItem('id');

  constructor(private http: HttpClient) {}

  salvarContaEntrada(body: any) {
    return this.http.post(`${this.url}${this.endpointContasEntradas}`, body, this.httpOptions);
  }

  salvarContaSaida(body: any) {
    return this.http.post(`${this.url}${this.endpointContasSaidas}`, body, this.httpOptions);
  }

  listarContaEntrada(page: number, limit: number, mes: string, ano: number) {
    return this.http.get(`${this.url}${this.endpointContasEntradas}?page=${page}&limit=${limit}&mes=${mes}&ano=${ano}&user=${this.idUsuario}`, this.httpOptions);
  }

  listarContaSaida(page: number, limit: number, mes: string, ano: number) {
    return this.http.get(`${this.url}${this.endpointContasSaidas}?page=${page}&limit=${limit}&mes=${mes}&ano=${ano}&user=${this.idUsuario}`, this.httpOptions);
  }

  excluirEntrada(id: any) {
    return this.http.delete(`${this.url}${this.endpointContasEntradas}/${id}`, this.httpOptions);
  }

  excluirSaida(id: any) {
    return this.http.delete(`${this.url}${this.endpointContasSaidas}/${id}`, this.httpOptions);
  }

  editarContaEntrada(id: any, body: any) {
    return this.http.put(`${this.url}${this.endpointContasEntradas}/${id}`, this.httpOptions);
  }

  editarContaSaida(id: any, body: any) {
    return this.http.put(`${this.url}${this.endpointContasSaidas}/${id}`, this.httpOptions);
  }
}
