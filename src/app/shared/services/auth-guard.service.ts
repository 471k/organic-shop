import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, map } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    private auth: AuthService, 
    private router: Router
    ) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> 
  {
    return this.auth.user$?.pipe(
      map((user: any) => 
      {
        if (user)  return true; 
        
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } } );
        return false;
      }));

  }  
}