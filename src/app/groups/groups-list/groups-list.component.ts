import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Group} from '../group.class';

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.css']
})
export class GroupsListComponent implements OnInit {
  @Output() groupWasSelected = new EventEmitter<Group>();
  groups: Group[] = [
    new Group('Test1', 'test1', 'https://www.luminate.ai/wp-content/uploads/2013/01/sample-img.png'),
    new Group('Test2', 'test2', 'https://www.luminate.ai/wp-content/uploads/2013/01/sample-img.png')
  ];
  constructor() { }

  ngOnInit() {
  }
  onGroupSelected(group: Group) {
    this.groupWasSelected.emit(group);
  }

}
