import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../../../../../services/auth/auth.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {


  loginForm: FormGroup;
  hide = true;
  email: any;
  senha: any;

  constructor(private readonly loginService: LoginService,
            private readonly formBuilder: FormBuilder,
              private readonly router: Router,
              private readonly auth: AuthService,) {

    this.loginForm = this.formBuilder.group({
      email: [null, [
        Validators.required,
        Validators.email
      ]],
      senha: [null, [
        Validators.required,
        Validators.minLength(6)
      ]]
    });

  }

  ngOnInit() { }

  entrar() {
    this.loginService.login(this.email, this.senha)
      .subscribe((user: any) => {
          this.auth.saveLocalStorage(user).then((validation: any) => {
            if (validation) {
              this.router.navigate(['']);
            }
          });
      }, (error: any) => {
        let messageErr;
        if (error.status === 401) {
          messageErr = 'Usuário e/ou senha incorretos.';
        } else {
          messageErr = 'Algo de errado aconteceu, tente novamente mais tarde.';
        }
      });
  }

}
