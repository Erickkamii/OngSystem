import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),  // Configuração de rotas
  ],
  providers: [],
  // Não declare o AppComponent no array de declarations
})
export class AppModule {}
