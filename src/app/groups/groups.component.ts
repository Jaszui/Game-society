import { Component, OnInit } from '@angular/core';
import {Group} from './group.class';
import {GroupService} from './group.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css'],
  providers: [GroupService]
})
export class GroupsComponent implements OnInit {
selectedGroup: Group;
  constructor() { }

  ngOnInit() {
  }

}
