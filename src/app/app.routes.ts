import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { 
    path: 'login', 
    loadComponent: () => import('./features/auth/login/login.component')
      .then(m => m.LoginComponent) 
  },
  { 
    path: 'main', 
    canActivate: [authGuard],
    loadComponent: () => import('./features/main-content/main-content.component')
      .then(m => m.MainContentComponent),
    children: [
      // ... otras rutas ...
      {
        path: 'videojuegos',
        loadComponent: () => import('./features/videojuegos/components/videojuegos-list/videojuegos-list.component')
          .then(m => m.VideojuegosListComponent)
      },
      { path: '', redirectTo: 'videojuegos', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];