import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'group';

  ngOnInit() {
  firebase.initializeApp({
    apiKey: 'AIzaSyAcre5fljUX5ZSj6nrn9pB4500Qw3LWiNc',
    authDomain: 'gamespot-6e9ad.firebaseapp.com'
  });
  }
  // why is unused?
  onNavigate(feature: string) {
  this.loadedFeature = feature;
  }
}
