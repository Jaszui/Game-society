import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {Response} from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userIsLogged: boolean;
  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    // TODO: add user controller
    this.userIsLogged = false;
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
