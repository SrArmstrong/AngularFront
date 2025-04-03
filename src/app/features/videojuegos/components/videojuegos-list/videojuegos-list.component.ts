import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Asegúrate de importar CommonModule
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Videojuego } from '../../../../store/models/videojuego.model';
import { cargarVideojuegos } from '../../../../store/actions/videojuegos.actions';
import { seleccionarVideojuegos, seleccionarCargando, seleccionarError } from '../../../../store/selectors/videojuegos.selectors';

@Component({
  selector: 'app-videojuegos-list',
  standalone: true,
  imports: [CommonModule], // Importa CommonModule aquí
  templateUrl: './videojuegos-list.component.html',
  styleUrls: ['./videojuegos-list.component.css']
})
export class VideojuegosListComponent implements OnInit {
  videojuegos$: Observable<Videojuego[]>;
  cargando$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store) {
    this.videojuegos$ = this.store.select(seleccionarVideojuegos);
    this.cargando$ = this.store.select(seleccionarCargando);
    this.error$ = this.store.select(seleccionarError);
  }

  ngOnInit(): void {
    this.store.dispatch(cargarVideojuegos());
  }
}