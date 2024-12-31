import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about-page.component'),
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing/pricing-page.component'),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact-page.component'),
  },
  {
    path: 'pokemons',
    loadComponent: () =>
      import('./pokemons/pages/pokemons/pokemons-page.component'),
  },
  {
    path: 'pokemons/:id',
    loadComponent: () =>
      import('./pokemons/pages/pokemon-detail/pokemon-detail.component'),
  },
  {
    path: '**',
    redirectTo: () => {
      return 'pokemons';
    },
  },
];
