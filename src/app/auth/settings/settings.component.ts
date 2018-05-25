import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
// =====================
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class User {
  public name: string;
  public email: string;
  public photoUrl: string;
  public uid: string;


  constructor(name, email, photoUrl, uid) {
    this.name = name;
    this.email = email;
    this.photoUrl = photoUrl;
    this.uid = uid;

  }
}
// =====================

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})


export class SettingsComponent implements OnInit {
  title: string;
  name: string;
  email: string;
  uid: string;
  userIsLogger: boolean;
  groupForm: FormGroup;
  currentUser: any;
  success = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userIsLogger = (this.authService.token !== null)
    this.authService.token.subscribe(
      token => this.userIsLogger = (token !== null),
      error => console.error(error));

    this.authService.user.subscribe(
      user => {
        this.currentUser = user
        this.groupForm = new FormGroup({
          'email': new FormControl(this.currentUser.email, Validators.required),
          'photoURL': new FormControl(this.currentUser.photoURL),
          'displayName': new FormControl(this.currentUser.displayName)
        });
        
        this.authService.getToken();
        this.title = '';
        
        
        if (this.currentUser != null) {
          this.name = this.currentUser.displayName;
          this.email = this.currentUser.email;
          this.uid = this.currentUser.uid;
        }
      },
      error => console.error(error)); 



  }

  onSubmit() {

    this.currentUser.updateProfile(this.groupForm.value)
      .then(() => {
        this.success = true;
      }).catch(error => {
        // An error happened.
      });
  }


}
