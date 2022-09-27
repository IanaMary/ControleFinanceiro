import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated(): Promise <boolean> {
    return new Promise((resolve) => {
      const user = this.getAuthorizationToken();
      if (user) {
        resolve(true);
      }
      resolve(false);
    });
  }

  saveLocalStorage(user: any): Promise<any> {
    return new Promise( (resolve) => {
      localStorage.setItem('id', user?.user?.id);
      localStorage.setItem('authToken', user.token);
      localStorage.setItem('name', user?.user?.name);
      localStorage.setItem('role', user?.user?.role);
      resolve(true);
    });
  }

  removeLocalStorage(): Promise<any> {
    return new Promise<any>((resolve) => {
      sessionStorage.clear();
      localStorage.clear();
      resolve(true);
    });
  }

  getAuthorizationToken() {
    return localStorage.getItem('authToken');
  }

}
