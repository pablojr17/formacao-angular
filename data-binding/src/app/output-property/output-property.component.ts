import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent {
  value: number = 0;
  @Output() mudouValor = new EventEmitter();
  @ViewChild('campo') campoInput!: ElementRef;

  incrementa() {
    // this.value++
    console.log(this.campoInput)
    this.campoInput.nativeElement.value++
    this.mudouValor.emit({novoValor: this.value});
  }

  decrementa() {
    this.value--
    this.mudouValor.emit({novoValor: this.value});
  }

}
