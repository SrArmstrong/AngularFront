import { createReducer, on } from '@ngrx/store';
import { Videojuego } from '../models/videojuego.model';
import * as VideojuegosActions from '../actions/videojuegos.actions';

export interface VideojuegosState {
  lista: Videojuego[];
  cargando: boolean;
  error: string | null;
}

export const initialState: VideojuegosState = {
  lista: [],
  cargando: false,
  error: null
};

export const videojuegosReducer = createReducer(
  initialState,
  on(VideojuegosActions.cargarVideojuegos, (state) => ({
    ...state,
    cargando: true,
    error: null
  })),
  on(VideojuegosActions.videojuegosCargados, (state, { videojuegos }) => ({
    ...state,
    lista: videojuegos,
    cargando: false
  })),
  on(VideojuegosActions.errorCargarVideojuegos, (state, { error }) => ({
    ...state,
    cargando: false,
    error
  }))
);