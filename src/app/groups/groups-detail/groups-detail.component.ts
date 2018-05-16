import {Component, OnInit} from '@angular/core';
import {Group} from '../group';
import {GroupService} from '../group.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-groups-detail',
  templateUrl: './groups-detail.component.html',
  styleUrls: ['./groups-detail.component.css']
})
export class GroupsDetailComponent implements OnInit {
  id: number;
  public group = <Group>{};

  constructor(private groupService: GroupService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
        }
      );

    this.groupService.getGroup(this.id)
      .subscribe(data => {
        this.group = data;
        if (this.group === undefined) {
          console.log('No such group exist');
          this.router.navigate(['/group']);
        }
      });
  }

  onEditGroup() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteGroup() {
    this.groupService.deleteGroup(this.id);
    this.router.navigate(['/group']);
  }

}
