import {Component, OnDestroy, OnInit} from '@angular/core';
import {Group} from '../group.class';
import {GroupService} from '../group.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.css']
})
export class GroupsListComponent implements OnInit , OnDestroy {

  groups: Group[];
  subscription: Subscription;

  constructor(private groupService: GroupService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.subscription = this.groupService.groupChanged
      .subscribe(
        (groups: Group[]) => {
          this.groups = this.groups;
    }
      )
  this.groups = this.groupService.getGroups();
  }
  onNewGroup() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
