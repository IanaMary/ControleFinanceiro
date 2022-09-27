import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // Endpoints
  private readonly endpointAuth: string = 'auth';

  constructor() { }

  // login(email, password) {
  //   const auth = btoa(`${email}:${password}`);
  //   // return this.httpService.genericPost(this.endpointAuth, null, {Authorization: 'Basic ' + auth}).pipe(
  //   //   map(res => {
  //   //     return res;
  //   // }));
  // }

}
