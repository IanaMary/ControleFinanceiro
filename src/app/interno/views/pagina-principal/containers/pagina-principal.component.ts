import { Component } from '@angular/core';
import { AuthService } from '../../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
})
export class PaginaPrincipalComponent {
  title = 'controleFinanceiro';

  constructor(private readonly route: Router, private readonly auth: AuthService) { }

  sair(){
    this.auth.removeLocalStorage().then(() => {
      this.route.navigate(['/autenticacao/login']);
    });
  }
}
