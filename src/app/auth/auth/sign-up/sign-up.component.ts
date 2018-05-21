import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html'
})
export class SignupComponent implements OnInit {
  public message = {
    type: '',
    text: ''
  };

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signUp(email, password)
      .then(result => {
        this.message.type = 'success';
        this.message.text = 'Account ' + result.email + ' has been created!';
      }, error => {
        this.message.type = 'danger';
        this.message.text = error.message;
      });
    //this.router.navigate(['/signIn']);
  }

}
