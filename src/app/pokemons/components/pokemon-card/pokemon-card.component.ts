import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { SimplePokemon } from '../../interfaces/pokemon.interface';
import { IMAGE_CONFIG, NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'pokemon-card',
  imports: [TitleCasePipe, NgOptimizedImage, RouterLink],
  templateUrl: './pokemon-card.component.html',
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
export class PokemonCardComponent {
  public pokemon = input.required<SimplePokemon>();
  public pokemonImage = computed(
    () =>
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokemon().id}.png`,
  );

  // logEffect = effect(() => {
  //   console.log('PokemonCardComponent effect');
  // });
}
