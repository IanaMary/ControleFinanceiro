import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = environment.apiUrl;
  private readonly endpointAuth: string = 'auth';

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    const auth = btoa(`${email}:${password}`);
    const httpOptions = {
      headers: new HttpHeaders({Authorization: 'Basic ' + auth})
    };
    return this.http.post(`${this.url}${this.endpointAuth}`, {email: email, password: password}, httpOptions);
  }
}
