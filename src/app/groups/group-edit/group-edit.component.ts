import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {GroupService} from '../group.service';
import {Subject} from 'rxjs/Subject';

// import {Group} from '../group.class';

@Component({
  selector: 'app-group-edit',
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.css']
})
export class GroupEditComponent implements OnInit {
  id: number;
  groupForm: FormGroup;
  editMode = false;
  public group = {};
  private ngUnsubscribe = new Subject();

  constructor(private route: ActivatedRoute,
              private groupService: GroupService,
              private router: Router) {
  }

  ngOnInit() {

    this.groupForm = new FormGroup({
      'title': new FormControl('', Validators.required),
      'imagePath': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.required),
      'posts': new FormControl([])
    });

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
        }
      );

    this.groupService.getGroup(this.id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(data => {
        this.group = data;
        this.initForm();
      });
  }

  onSubmit() {
    if (this.editMode) {
      this.groupService.updateGroup(this.id, this.groupForm.value).subscribe(result => console.log(result));
    } else {
      this.groupService.addGroup(this.groupForm.value);
    }
    //this.onCancel();
  }

  onAddPost() {
    (<FormArray>this.groupForm.get('posts')).push(
      new FormGroup({
        'title': new FormControl(null, Validators.required),
        'description': new FormControl(null, Validators.required)
      })
    );
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDeletePost(index: number) {
    (<FormArray>this.groupForm.get('posts')).removeAt(index);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }


  private initForm() {
    let group;
    const groupPosts = new FormArray([]);

    if (this.editMode) {
      group = this.group;
      (<FormGroup>this.groupForm).setValue(group, {onlySelf: true});
    }
  }
}
