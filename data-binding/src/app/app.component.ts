import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'data-binding';
valor = 1
deletar = false
  onMudouValor(event: any) {
    console.log(event)
  }
  mudarValor() {
    this.valor++;
  }

  deletarComponente() {
    this.deletar = !this.deletar;
  }
}
