import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Isso será importado no AppModule

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OngSystem';
}
