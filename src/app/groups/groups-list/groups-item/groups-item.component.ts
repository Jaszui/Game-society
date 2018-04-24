import {Component, Input, OnInit } from '@angular/core';
import {Group} from '../../group.class';


@Component({
  selector: 'app-groups-item',
  templateUrl: './groups-item.component.html',
  styleUrls: ['./groups-item.component.css']
})
export class GroupsItemComponent implements OnInit {
@Input() group: Group;
  @Input() index: number;

ngOnInit() {

  }


}
