import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Pokemon, SimplePokemon } from '../interfaces/pokemon.interface';
import { map, Observable, tap } from 'rxjs';
import { PokemonAPIResponse } from '../interfaces/pokemon-api.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private http = inject(HttpClient);

  private baseUrl = `https://pokeapi.co/api/v2`;

  public loadPage(page: number): Observable<SimplePokemon[]> {
    if (page !== 0) {
      --page;
    }

    page = Math.max(0, page);

    return this.http
      .get<PokemonAPIResponse>(
        `${this.baseUrl}/pokemon?offset=${page * 20}&limit=20`,
      )
      .pipe(
        map((resp) => {
          const simplePokemon = resp.results.map((pokemon) => ({
            id: pokemon.url.match(/\/(\d+)\//)?.at(1) ?? '',
            name: pokemon.name,
          }));

          return simplePokemon;
        }),
      );
  }

  public loadPokemon(id: string) {
    return this.http.get<Pokemon>(`${this.baseUrl}/pokemon/${id}`);
  }
}
