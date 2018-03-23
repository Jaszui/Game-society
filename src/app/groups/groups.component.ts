import { Component, OnInit } from '@angular/core';
import {Group} from './group.class';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
selectedGroup: Group;
  constructor() { }

  ngOnInit() {
  }

}
