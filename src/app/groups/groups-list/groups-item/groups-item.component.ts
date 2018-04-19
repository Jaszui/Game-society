import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Group} from '../../group.class';
import {GroupService} from "../../group.service";

@Component({
  selector: 'app-groups-item',
  templateUrl: './groups-item.component.html',
  styleUrls: ['./groups-item.component.css']
})
export class GroupsItemComponent implements OnInit {
@Input() group: Group;
// To listen event from outside

  constructor(private groupService : GroupService) { }

  ngOnInit() {
  }
  onSelected() {
  this.groupService.groupSelected.emit(this.group);
  }
}
