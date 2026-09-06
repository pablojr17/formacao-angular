import { CursoService } from './curso.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'batata-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos!: string [];

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.getCursos();
  }

  getCursos() {
    this.cursos = this.cursoService.getCursos();
  }

}
