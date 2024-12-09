import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';  // Importa o MatToolbarModule
import { MatButtonModule } from '@angular/material/button';    // Importa o MatButtonModule
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // Retirei a referência ao AppComponent aqui, pois não precisa mais

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,  // Mantenha as rotas aqui
    ReactiveFormsModule,
    MatToolbarModule,   // Adiciona o MatToolbarModule aqui
    MatButtonModule     // Adiciona o MatButtonModule aqui
  ],
  providers: [],
})
export class AppModule {}  // Não há necessidade de declarar o AppComponent aqui
