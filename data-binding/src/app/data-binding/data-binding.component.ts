import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  url: string = "http://google.com";
  isTrue: boolean = true;
  textoDigitado: string = '';
  img: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0WlxGJGP9Ne-YAZJU1_2G7oNVyvCzKq0VD8CL_-mK7g&s=10";
  passouMouse: boolean = false
  pessoa = {
    nome: 'Pablo', idade: 32
  }
  constructor() { }

  ngOnInit(): void {
  }

  getValor() {
    return 2 + 3;
  }

  botaoClicado() {
    console.log('clicou')
  }

  onKeyUp(evento: string) {
    this.textoDigitado = evento;
  }

  onMouseEnter() {
    this.passouMouse = !this.passouMouse;
  }

}
