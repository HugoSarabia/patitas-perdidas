import { inject } from '@angular/core';
import { CanActivateFn,Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('google_token');

  if (token) {
    return true;
  }

  // Redirigir al login si no hay token
  return inject(Router).createUrlTree(['/login']);
};
