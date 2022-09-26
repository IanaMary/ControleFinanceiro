import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-novo-valor',
  templateUrl: './novo-valor.component.html',
  styleUrls: ['./novo-valor.component.scss']
})

export class NovoValorComponent {
  constructor(
    public dialogRef: MatDialogRef<NovoValorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  valor = 0

  fechar(fechar: any){
    this.dialogRef.close({fechar, data: this.data.novoValorForm.value });
  }
}
