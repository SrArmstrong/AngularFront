import { ActionReducerMap } from '@ngrx/store';
import { videojuegosReducer, VideojuegosState } from '../store/reducers/videojuegos.reducer'; // Cambiado de State a VideojuegosState

export interface AppState {
  videojuegos: VideojuegosState;
  // Añadir otros estados aquí
}

export const appReducers: ActionReducerMap<AppState> = {
  videojuegos: videojuegosReducer,
  // Añadir otros reducers aquí
};