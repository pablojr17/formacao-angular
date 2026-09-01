import { Component } from "@angular/core";

@Component({
  selector: 'meu-primeiro-compoenente',
  styleUrls: ['./meu-primeiro-componente.componente.scss'],
  template: `<p>{{title}}</p>`
})

export class MeuPrimeiroComponenteComponent {
  title: string = 'Olá mundo';
}
