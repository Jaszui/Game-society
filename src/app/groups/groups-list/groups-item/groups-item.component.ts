import {Component, Input, OnInit} from '@angular/core';
import {Group} from '../../group.class';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-groups-item',
  templateUrl: './groups-item.component.html',
  styleUrls: ['./groups-item.component.css']
})
export class GroupsItemComponent implements OnInit {
  @Input() group: Group;
  @Input() index: number;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {

  }

  onEditGroup() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
