import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';  // Importando MatToolbarModule
import { MatButtonModule } from '@angular/material/button';  // Importando MatButtonModule

@Component({
  selector: 'app-root',
  standalone: true,  // Declarando o componente como standalone
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule],  // Importando os módulos necessários
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrigido o 'styleUrl' para 'styleUrls'
})
export class AppComponent {
  title = 'ongsystem';
}
