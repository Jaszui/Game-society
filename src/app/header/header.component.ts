import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {Response} from '@angular/http';
import {AuthService} from '../auth/auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userIsLogged: boolean;

  constructor(private dataStorageService: DataStorageService, private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.token.subscribe(token => this.userIsLogged = (token !== null), error => console.error(error));
    this.dataStorageService.getGroups();
  }

  onSaveData() {
    this.dataStorageService.storeGroup()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  setFetchData() {

  }

  logout() {
    this.authService.logout();
  }
}
