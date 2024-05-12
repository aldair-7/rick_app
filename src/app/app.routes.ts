/* define las rutas de la aplicación Angular. Cada ruta está asociada a un componente de página específico  */

import { Routes } from '@angular/router';

export const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'character-detail/:id',
    loadComponent: () => import('./pages/character-detail/character-detail.page').then( m => m.CharacterDetailPage)
  },
  {
    path: 'intro',
    loadComponent: () => import('./pages/intro/intro.page').then( m => m.IntroPage)
  },
];
