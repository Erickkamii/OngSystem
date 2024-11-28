import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule,  // Configuração de rotas
  ],
  providers: [],
  // Não declare o AppComponent no array de declarations
})
export class AppModule {}
