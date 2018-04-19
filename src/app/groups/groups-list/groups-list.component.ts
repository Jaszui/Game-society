import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Group} from '../group.class';
import {GroupService} from "../group.service";

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.css']
})
export class GroupsListComponent implements OnInit {
  @Output() groupWasSelected = new EventEmitter<Group>();
  groups: Group[];

  constructor(private groupService: GroupService) {

  }

  ngOnInit() {
  this.groups = this.groupService.getGroups();
  }
  onGroupSelected(group: Group) {
    this.groupWasSelected.emit(group);
  }

}
