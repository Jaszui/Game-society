import {Component, Input, OnInit} from '@angular/core';
import {Group} from '../../group';
import { AuthService } from '../../../auth/auth/auth.service';

@Component({
  selector: 'app-groups-item',
  templateUrl: './groups-item.component.html',
  styleUrls: ['./groups-item.component.scss']
})
export class GroupsItemComponent implements OnInit {
  @Input() group: Group;
  @Input() index: number;
  userIsLogged: boolean;
  constructor(private authService: AuthService) {

  }

  ngOnInit() {

    this.authService.admin.subscribe(
      admin => this.userIsLogged = (admin !== null),
      error => console.error(error));

  }
}
