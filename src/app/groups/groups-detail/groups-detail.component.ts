import {Component, Input, OnInit} from '@angular/core';
import {Group} from '../group.class';

@Component({
  selector: 'app-groups-detail',
  templateUrl: './groups-detail.component.html',
  styleUrls: ['./groups-detail.component.css']
})
export class GroupsDetailComponent implements OnInit {
  @Input() group: Group;

  constructor() { }

  ngOnInit() {
  }

}
