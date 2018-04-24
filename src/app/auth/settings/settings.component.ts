import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
// =====================
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



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
  constructor() { }

  ngOnInit() {
    this.title = 'dupa';
    let currentUser = firebase.auth().currentUser;
    if (currentUser != null) {
      this.name = currentUser.displayName;
      this.email = currentUser.email;
      this.uid = currentUser.uid;
    }

    console.log("Nazwa: " + this.name);
    console.log("Email: "+ this.email);
    console.log("Uid: " + this.uid);
    console.log("dupa: " + this.title);
  }
}
