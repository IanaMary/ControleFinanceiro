import { NgModule } from '@angular/core';
import { ExternoRoutingModule } from './externo-routing.module';
import { ExternoComponent } from './externo.component';

// Containers


@NgModule({
  declarations: [
    ExternoComponent
  ],
  imports: [
    ExternoRoutingModule
  ]
})
export class ExternoModule { }
