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

  t = 'ia'
  token = localStorage.getItem('authToken');
  obj = {
    access_token: this.token,
  };
  headers = { 'access_token ': this.token ? this.token : '' };

  constructor(private http: HttpClient) {}

  salvarContaEntrada(dado: any) {
    const data = Object.assign({}, dado, this.obj)
    return this.http.post(`${this.url}${this.endpointContasEntradas}`, data);
  }


  salvarContaSaida(dado: any) {
    const data = Object.assign({}, dado, this.obj)
    return this.http.post(`${this.url}${this.endpointContasSaidas}`, data);
  }

  listarContaEntrada(page: number, limit: number, mes: string, ano: number) {
    const httpOptions = {
      headers: this.headers,
    };
    return this.http.get(`${this.url}${this.endpointContasEntradas}?page=${page}&limit=${limit}&mes=${mes}&ano=${ano}`);
  }


  listarContaSaida(page: number, limit: number, mes: string, ano: number) {
    const httpOptions = {
      headers: this.headers,
    };
    return this.http.get(`${this.url}${this.endpointContasSaidas}?page=${page}&limit=${limit}&mes=${mes}&ano=${ano}`);
  }

  // public listarSmuladoresPaginado(page, limit) {
  // return this.httpClient.get(this.url+"/general-data?page="+page+"&limit="+limit,  this.httpOptions);
  // }

  // public listarSmuladores() {
  // return this.httpClient.get(this.url+"/general-data",  this.httpOptions);
  // }

  // public salvarSimulador(dado) {
  // const data = Object.assign({}, dado, this.obj)
  // return this.httpClient.post(this.url+"/general-data", data);
  // }

  // public editarSimulador(id, dado) {
  // const data = Object.assign({}, dado, this.obj)
  // return this.httpClient.put(this.url+"/general-data/"+id, data);
  // }

  // public pegarSimulador(id) {
  // return this.httpClient.get(this.url+"/general-data/"+id,  this.httpOptions);
  // }

  // public excluirSimulador(id) {
  // return this.httpClient.delete(this.url+"/general-data/"+id,  this.httpOptions);
  // }

  // public salvarSimuladorPadrao(dado) {
  // const data = Object.assign({}, dado, this.obj)
  // return this.httpClient.put(this.url+"/general-data/default", data);
  // }

  // public listarSimuladorPadrao() {
  // return this.httpClient.get(this.url+"/general-data/default",  this.httpOptions);
  // }

  // public listarCemigs() {
  // return this.httpClient.get(this.url+"/cemig", this.httpOptions);
  // }

  // public listarCemigsPaginado(page, limit) {
  // return this.httpClient.get(this.url+"/cemig?page="+page+"&limit="+limit, this.httpOptions);
  // }

  // public salvarCemigEditando(dado) {
  // const data = Object.assign({}, dado, this.obj)
  // return this.httpClient.post(this.url+"/cemig/copy", data);
  // }

  // public salvarCemigCopiaCola(dado) {
  // const data = Object.assign({}, dado, this.obj)
  // return this.httpClient.post(this.url+"/cemig", data);
  // }

  // public create(data, type) {
  // return this.httpClient.post(`${this.url}/${type}/file`, data)
  // }

  // public editarCemig(dado, id) {
  // const data = Object.assign({}, dado, this.obj)
  // return this.httpClient.put(this.url+"/cemig/"+id, data);
  // }

  // public excluirCemig(id) {
  // return this.httpClient.delete(`${this.url}/cemig/${id}`)
  // }

  // public listarSins() {
  // return this.httpClient.get(this.url+"/sin",  this.httpOptions);
  // }

  // public salvarSinEditando(dado) {
  // const data = Object.assign({}, dado, this.obj)
  // return this.httpClient.post(this.url+"/sin/copy", data);
  // }

  // public salvarSinCopiaCola(dado) {
  // const data = Object.assign({}, dado, this.obj)
  // return this.httpClient.post(this.url+"/sin", data);
  // }

  // public editarSin(dado, id) {
  // const data = Object.assign({}, dado, this.obj)
  // return this.httpClient.put(this.url+"/sin/"+id, data);
  // }
  // public listarSinPaginado(page, limit) {
  // return this.httpClient.get(this.url+"/sin?page="+page+"&limit="+limit, this.httpOptions);
  // }

  // public excluirSin(id) {
  // return this.httpClient.delete(`${this.url}/sin/${id}`)
  // }

  // public listarRows(page, limit, id, qualTabela, sort, order) {
  // return this.httpClient.get(`${this.url}/${qualTabela}/${id}?page=${page}&limit=${limit}&sort=${sort}`,  this.httpOptions)
  // }

  // urlDemanda(data, endpoint: string) {
  // return this.httpService.genericPost(endpoint, data, '')
  // .pipe(res => {
  // return res;
  // });
  // }
}
