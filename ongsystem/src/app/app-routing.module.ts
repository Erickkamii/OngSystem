import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'; // Importando o AppComponent

export const routes: Routes = [
  { path: '', component: AppComponent },  // Usando o AppComponent como o componente da rota inicial
  { path: 'ong', loadChildren: () => import('./ong/ong.module').then(m => m.OngModule) },
  // Outras rotas podem ser adicionadas aqui
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
