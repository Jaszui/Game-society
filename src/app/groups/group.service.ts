import { Injectable } from '@angular/core';
import {Group} from './group.class';

@Injectable()
export class GroupService {
  private groups: Group[] = [
    new Group('Test1', 'test1', 'https://www.luminate.ai/wp-content/uploads/2013/01/sample-img.png'),
    new Group('Test2', 'test2', 'https://www.luminate.ai/wp-content/uploads/2013/01/sample-img.png')
  ];

  getGroups() {
    return this.groups.slice();
  }

}
