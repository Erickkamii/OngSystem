import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';  // Necessário para navegação
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';  // Necessário para diretivas como *ngIf

@Component({
  selector: 'app-root',
  standalone: true,  // Componente standalone
  imports: [
    RouterOutlet,      // Para navegação
    MatToolbarModule,  // Material toolbar
    MatButtonModule,   // Material button
    CommonModule      // Para diretivas como *ngIf, etc.
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ongsystem';
}
