import * as firebase from 'firebase';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class AuthService {
  public token: Subject<string>;

  constructor(private router: Router) {
    this.token = new Subject();
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
              (token: string) => self.token.next(token), error => console.error(error)
            );
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  logout() {
    firebase.auth().signOut();
    this.token.next(null);
    this.router.navigate(['/signIn']);
  }

  getToken() {
    const self = this;
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => self.token.next(token), error => console.error(error)
      );
    return this.token;
  }
}
