import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';  // Importa o MatToolbarModule
import { MatButtonModule } from '@angular/material/button';    // Importa o MatButtonModule
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatToolbarModule,   // Adiciona o MatToolbarModule aqui
    MatButtonModule     // Adiciona o MatButtonModule aqui
  ],
  providers: [],
})
export class AppModule {}
