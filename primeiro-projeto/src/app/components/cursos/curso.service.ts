import { Injectable } from '@angular/core';

@Injectable()
export class CursoService {

  constructor() { }

  getCursos(): string[] {
    return ['Angular', 'Typescript']
  }
}
