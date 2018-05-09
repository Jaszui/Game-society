import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {GroupService} from '../groups/group.service';
import {Response} from '@angular/http';
import {Group} from '../groups/group';
import 'rxjs/add/operator/map';

@Injectable()
export class DataStorageService {
  constructor (private http: Http , private groupService: GroupService) {}

  storeGroup() {
    return this.http.put('https://gamespot-6e9ad.firebaseio.com/group.json', this.groupService.getGroups());
  }
  getGroups() {}
}
