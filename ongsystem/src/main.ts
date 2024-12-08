import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';  // Importe o componente standalone
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';  // Suas rotas

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
});
