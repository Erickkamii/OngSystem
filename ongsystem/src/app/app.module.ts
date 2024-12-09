import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';  // Importando MatSnackBarModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // Necessário para animações do Angular Material

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,  // Adicionando MatSnackBarModule
    BrowserAnimationsModule,
  ],
  providers: [],
})
export class AppModule {}
