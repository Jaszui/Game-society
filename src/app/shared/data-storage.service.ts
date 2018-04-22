import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {GroupService} from '../groups/group.service';
import {Response} from '@angular/http';
import {Group} from '../groups/group.class';
import 'rxjs/add/operator/map';

@Injectable()
export class DataStorageService {
  constructor (private http: Http , private groupService: GroupService) {}

  storeGroup() {
    return this.http.put('https://gamespot-6e9ad.firebaseio.com/group.json', this.groupService.getGroups());
  }
  getGroups() {
    this.http.get('https://gamespot-6e9ad.firebaseio.com/group.json')
      .map(
        (response: Response) => {
          const groups: Group[] = response.json();
          for (let group of groups) {
            if (!group['posts']) {
              console.log(group);
              group['posts'] = [];
            }
          }
          return groups;
        }
      )
      .subscribe(
        (groups: Group[]) => {
          this.groupService.setGroup(groups);
        }
      );
  }
}
