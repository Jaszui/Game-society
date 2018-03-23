import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Group} from '../../group.class';

@Component({
  selector: 'app-groups-item',
  templateUrl: './groups-item.component.html',
  styleUrls: ['./groups-item.component.css']
})
export class GroupsItemComponent implements OnInit {
@Input() group: Group;
// To listen event from outside
@Output() groupSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  onSelected() {
    this.groupSelected.emit();
  }
}
