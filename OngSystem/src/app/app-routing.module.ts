import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Defina as rotas para o seu aplicativo
const routes: Routes = [
  { path: 'ong', loadChildren: () => import('./ong/ong.module').then(m => m.OngModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) // Importa e configura as rotas no módulo de roteamento
  ],
  exports: [RouterModule] // Exporta o RouterModule para ser usado em outros módulos
})
export class AppRoutingModule { }
