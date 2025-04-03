/*import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pelicula } from '../../../../store/peliculas/models/pelicula.model';
import { cargarPeliculas } from '../../../../store/peliculas/actions/peliculas.actions';
import { seleccionarPeliculas, seleccionarCargando, seleccionarError } from '../../../../store/peliculas/selectors/videojuegos.selectors';

@Component({
  selector: 'app-videojuegos-list',
  standalone: true,
  imports: [CommonModule], // Importa CommonModule aquí
  templateUrl: './peliculas-list.component.html'
})
export class PeliculasListComponent {
  peliculas$: Observable<Pelicula[]>;
  cargando$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store) {
    this.peliculas$ = this.store.select(seleccionarPeliculas);
    this.cargando$ = this.store.select(seleccionarCargando);
    this.error$ = this.store.select(seleccionarError);
  }

  cargarPeliculas(): void {
    this.store.dispatch(cargarPeliculas());
  }
}
*/