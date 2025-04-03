import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as VideojuegosActions from '../actions/videojuegos.actions';
import { VideojuegosService } from '../../features/videojuegos/services/videojuegos.service';

@Injectable()
export class VideojuegosEffects {
  private actions$ = inject(Actions);
  private videojuegosService = inject(VideojuegosService);

  cargarVideojuegos$ = createEffect(() => 
    this.actions$.pipe(
      ofType(VideojuegosActions.cargarVideojuegos),
      mergeMap(() =>
        this.videojuegosService.obtenerVideojuegos().pipe(
          map(videojuegos => 
            VideojuegosActions.videojuegosCargados({ videojuegos })
          ),
          catchError(error => 
            of(VideojuegosActions.errorCargarVideojuegos({ error: error.message }))
          )
        )
      )
    )
  );
}