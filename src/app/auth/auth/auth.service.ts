import * as firebase from 'firebase';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {
  public token: Observable<string>;

  constructor(private router: Router) {
    this.token = new Observable();
  }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      );
  }

  signinUser(email: string, password: string) {
    const self = this;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: Observable<string>) => self.token = token
            );
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

  getToken() {
    const self = this;
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: Observable<string>) => self.token = token
      );
    return this.token;
  }
}
