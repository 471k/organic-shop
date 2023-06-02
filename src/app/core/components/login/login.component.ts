import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private auth: AuthService
    // private afAuth: AngularFireAuth
    )
  {
  }
  
  login()
  {
    this.auth.login();
    // this.afAuth.signInWithRedirect(new firebaseAuth.GoogleAuthProvider());
  }
}
