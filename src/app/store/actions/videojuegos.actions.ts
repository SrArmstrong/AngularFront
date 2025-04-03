import { Injectable, inject } from '@angular/core';
import { createAction, props } from '@ngrx/store';
import { Videojuego } from '../models/videojuego.model';

// Acción para iniciar la carga
export const cargarVideojuegos = createAction('[Videojuegos] Cargar Videojuegos');

// Acción para éxito (cambiada de "cargarVideojuegosSuccess" a "videojuegosCargados")
export const videojuegosCargados = createAction(
  '[Videojuegos] Videojuegos Cargados',
  props<{ videojuegos: Videojuego[] }>()  // Asegúrate de que "videojuegos" esté bien escrito
);

// Acción para error (cambiada de "cargarVideojuegosError" a "errorCargarVideojuegos")
export const errorCargarVideojuegos = createAction(
  '[Videojuegos] Error al Cargar Videojuegos',
  props<{ error: string }>()
);