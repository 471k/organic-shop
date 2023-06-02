import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebaseAuth from 'firebase/auth';

import firebase from 'firebase/compat/app';
import { Observable, of, switchMap } from 'rxjs';
import { AppUser } from '../models/app-user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$: Observable<firebase.User | null >;

  constructor(
    private userService: UserService,
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    ) 
    {
      this.user$ = afAuth.authState;
   }

  login()
  {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    this.afAuth.signInWithRedirect(new firebaseAuth.GoogleAuthProvider());
  }
  
  logout()
  {
    this.afAuth.signOut();
  }

  get appUser$(): Observable<AppUser | unknown> {
    return this.user$
      .pipe(
        switchMap((user: any) => {
          if (user) return this.userService.get(user.uid);

          return of(null);
        })
      );    
  }
}
