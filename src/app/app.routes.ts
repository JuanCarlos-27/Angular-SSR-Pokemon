import { Routes } from '@angular/router';

export const routes: Routes = [
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
