import {Component, OnDestroy, OnInit} from '@angular/core';
import {GroupService} from '../group.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.css']
})
export class GroupsListComponent implements OnInit , OnDestroy {

  public groupList = [];
  private ngUnsubscribe = new Subject();

  constructor(private groupService: GroupService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.groupService.getGroups()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(data => this.groupList = data);
  }
  onNewGroup() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
