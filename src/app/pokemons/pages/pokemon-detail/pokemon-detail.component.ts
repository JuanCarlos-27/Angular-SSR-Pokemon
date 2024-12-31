import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PokemonsService } from '../../services/pokemons.service';
import { ActivatedRoute } from '@angular/router';
import { IMAGE_CONFIG, NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { tap } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pokemon-detail',
  imports: [NgOptimizedImage, TitleCasePipe],
  templateUrl: './pokemon-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: IMAGE_CONFIG,
      useValue: {
        placeholderResolution: 40,
      },
    },
  ],
})
export default class PokemonDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private title = inject(Title);
  private meta = inject(Meta);

  public pokemon = signal<Pokemon | null>(null);
  public pokemonPicture = computed(
    () =>
      this.pokemon()?.sprites.other?.['official-artwork'].front_default ?? '',
  );

  public secondaryPokemonPicture = computed(
    () => this.pokemon()?.sprites.other?.dream_world.front_default ?? '',
  );

  private pokemonService = inject(PokemonsService);

  public pokemonStats = signal<{ label: string; value: number }[]>([]);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';

    this.pokemonService
      .loadPokemon(id)
      .pipe(
        tap(({ name, sprites }) => {
          this.title.setTitle(`Pokemon - ${name}`);
          this.meta.updateTag({
            name: 'description',
            content: `Detalles del pokemon ${name}`,
          });
          this.meta.updateTag({
            name: 'og:title',
            content: `Pokemon - ${name}`,
          });
          this.meta.updateTag({
            name: 'og:description',
            content: `Detalles del pokemon ${name}`,
          });
          this.meta.updateTag({
            name: 'og:image',
            content: sprites.other?.['official-artwork'].front_default ?? '',
          });
        }),
      )
      .subscribe((pokemon) => {
        this.pokemon.set(pokemon);

        const stats = pokemon.stats.map(({ base_stat, stat }) => ({
          label: stat.name,
          value: base_stat,
        }));

        this.pokemonStats.set(stats);
      });
  }

  goBack(): void {
    window.history.back();
  }
}
