import * as firebase from 'firebase';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Subject} from 'rxjs/Subject';
import {User} from 'firebase';

@Injectable()
export class AuthService {
  public token: Subject<string>;
  public user: Subject<User>;

  constructor(private router: Router) {
    this.token = new Subject();
    this.user = new Subject();
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.token.next(user.uid);
        this.user.next(user);
      }
    });
  }

  signUp(email: string, password: string): Promise<any>  {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string): Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['../group']);
          return firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token.next(token),
              error => console.error(error)
            );
        }
      );
  }

  logout() {
    firebase.auth().signOut().then(() => {
      this.token.next(null);
      this.router.navigate(['/signIn']);
    });
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
