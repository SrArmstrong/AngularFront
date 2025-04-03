import { ActionReducerMap } from '@ngrx/store';
import { videojuegosReducer, VideojuegosState } from '../reducers/videojuegos.reducer';

export interface AppState {
  videojuegos: VideojuegosState;
  // Añadir otros estados aquí
}

export const appReducers: ActionReducerMap<AppState> = {
  videojuegos: videojuegosReducer,
  // Añadir otros reducers aquí
};