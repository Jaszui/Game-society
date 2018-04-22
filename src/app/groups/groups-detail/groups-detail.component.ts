import {Component, OnInit} from '@angular/core';
import {Group} from '../group.class';
import {GroupService} from '../group.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-groups-detail',
  templateUrl: './groups-detail.component.html',
  styleUrls: ['./groups-detail.component.css']
})
export class GroupsDetailComponent implements OnInit {
 group: Group;
 id: number;

  constructor(private groupService: GroupService , private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.group = this.groupService.getGroup(this.id);
        }
      );
  }

  onAddToPostList() {
    this.groupService.addPostToPostList(this.group.posts);
  }
  onEditGroup() {
     this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

}
