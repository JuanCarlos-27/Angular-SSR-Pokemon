import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  resource,
  signal,
} from '@angular/core';
import { PokemonListComponent } from '../../components/pokemon-list/pokemon-list.component';
import { PokemonsService } from '../../services/pokemons.service';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { SimplePokemon } from '../../interfaces/pokemon.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pokemons-page',
  imports: [PokemonListComponent],
  templateUrl: './pokemons-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonsPageComponent implements OnInit {
  private pokemonService = inject(PokemonsService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private title = inject(Title);

  public pokemons = signal<SimplePokemon[]>([]);
  public currentPage = toSignal(
    this.route.queryParams.pipe(
      map((params) =>
        isNaN(params?.['page']) ? 1 : Math.max(1, +params['page']),
      ),
    ),
  );

  ngOnInit(): void {
    this.loadPokemons();
  }

  // public pokemonResource = rxResource({
  //   loader: () => {
  //     return this.pokemonService.loadPage(0)
  //   },
  //   request: () => ({ nextPage: 0 }),
  // });

  public loadPokemons(page: number = 0): void {
    const pageToLoad = this.currentPage()! + page;

    this.pokemonService
      .loadPage(pageToLoad)
      .pipe(
        tap(() =>
          this.router.navigate([], { queryParams: { page: pageToLoad } }),
        ),
        tap(() => this.title.setTitle(`Pokemons - Página ${pageToLoad}`)),
      )
      .subscribe(
        (pokemons) => {
          this.pokemons.set(pokemons);
        },
        (error) => {
          console.error(error);
        },
      );
  }
}
