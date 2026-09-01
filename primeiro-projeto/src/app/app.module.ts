import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponenteComponent } from './components/meu-primeiro-componente/meu-primeiro-componente.component';
import { SegundoComponenteComponent } from './components/segundo-componente/segundo-componente.component';
import { TerceiroComponenteComponent } from './components/terceiro-componente/terceiro-componente.component';
import { QuartoComponenteComponent } from './components/quarto-componente/quarto-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponenteComponent,
    SegundoComponenteComponent,
    TerceiroComponenteComponent,
    QuartoComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
