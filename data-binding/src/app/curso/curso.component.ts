import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss'],
  inputs: ['nomeCurso:nome', 'categoria']
})
export class CursoComponent implements OnInit {
  nomeCurso: string = "";
  categoria: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
