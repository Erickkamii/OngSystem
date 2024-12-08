import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'; // Importando o AppComponent
import { SignupVolunteerComponent } from './basic/components/signup-volunteer/signup-volunteer.component';

export const routes: Routes = [
  { path: 'register_volunteer', component: SignupVolunteerComponent},
  { path: '', component: AppComponent },  // Usando o AppComponent como o componente da rota inicial
  { path: 'ong', loadChildren: () => import('./ong/ong.module').then(m => m.OngModule) },
  // Outras rotas podem ser adicionadas aqui
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
