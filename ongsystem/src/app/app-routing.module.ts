import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupVolunteerComponent } from './basic/components/signup-volunteer/signup-volunteer.component';
import { AppComponent } from './app.component'; // Componente standalone

export const routes: Routes = [
  { path: 'register_volunteer', component: SignupVolunteerComponent },
  { path: 'register_ong', component: SignupOngComponent },
  { path: '', component: AppComponent },  // Usando AppComponent como rota inicial
  { path: 'ong', loadChildren: () => import('./ong/ong.module').then(m => m.OngModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Definindo as rotas
  exports: [RouterModule]
})
export class AppRoutingModule {}
