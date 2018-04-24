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
  constructor(private dataStorageService: DataStorageService , private authService: AuthService) { }

  ngOnInit() {
    // TODO: add user controller
   if (this.authService.isAuthenticated() !== null) {
     this.userIsLogged = true;
   } else { (this.userIsLogged = false); }
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
    this.dataStorageService.getGroups();
  }

}
