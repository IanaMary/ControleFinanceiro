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
  private readonly endpointContasResumos: string = 'contasResumos';
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
    return this.http.put(`${this.url}${this.endpointContasEntradas}/${id}`, body, this.httpOptions);
  }

  editarContaSaida(id: any, body: any) {
    return this.http.put(`${this.url}${this.endpointContasSaidas}/${id}`, body, this.httpOptions);
  }

  totalResumo(mes : string, ano : number) {
    return this.http.get(`${this.url}${this.endpointContasSaidas}/totalResumo?mes=${mes}&ano=${ano}`, this.httpOptions);
  }

  totalResumoMensal(ano : number) {
    return this.http.get(`${this.url}${this.endpointContasSaidas}/totalResumoMensal?ano=${ano}`, this.httpOptions);
  }

  totalResumoAnual(pagina: number, limite: number) {
    return this.http.get(`${this.url}${this.endpointContasSaidas}/totalResumoAnual?page=${pagina}&limit=${limite}`, this.httpOptions);
  }
}
