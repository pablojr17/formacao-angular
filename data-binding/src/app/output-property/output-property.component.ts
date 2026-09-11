import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent {
  value: number = 0;
  @Output() mudouValor = new EventEmitter();

  incrementa() {
    this.value++
    this.mudouValor.emit({novoValor: this.value});
  }

  decrementa() {
    this.value--
    this.mudouValor.emit({novoValor: this.value});
  }

}
