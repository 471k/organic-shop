import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

  constructor(
    private auth: AuthService,
    private userService: UserService) { }

  canActivate(): Observable<boolean>
  {
    return this.auth.appUser$.pipe(
      map((appUser: any) => appUser.isAdmin)
    );
  }

  // canActivate(): Observable<boolean> { 
  //   return this.auth.user$
  //     .pipe(map((appUser: any) => appUser.isAdmin));
  // }

}