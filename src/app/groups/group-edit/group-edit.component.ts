import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {GroupService} from '../group.service';
// import {Group} from '../group.class';

@Component({
  selector: 'app-group-edit',
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.css']
})
export class GroupEditComponent implements OnInit {
 id: number;
 editMode = false;
  groupForm: FormGroup;
  constructor(private route: ActivatedRoute ,
              private groupService: GroupService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          console.log(this.editMode);
          this.initForm();
    }
      );
  }
  onSubmit() {
    // console.log(this.groupForm);
    // const newGroup = new Group(this.groupForm.value['groupTitle'],
    //  this.groupForm.value['groupDescription'],
    //  this.groupForm.value['imagePath'],
    //   this.groupForm.value['posts']);
    if (this.editMode) {
      this.groupService.updateGroup(this.id, this.groupForm.value);
    } else {
      this.groupService.addGroup(this.groupForm.value);
    }
    this.onCancel();
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


  private initForm() {
    let groupTitle = '';
    let imagePath = '';
    let groupDescription = '';
    let groupPosts = new FormArray([]);

    if (this.editMode) {
      const group = this.groupService.getGroup(this.id);
      groupTitle = group.title;
      imagePath = group.imagePath;
      groupDescription = group.description;
      if (group['posts']) {
        for (let post of group.posts) {
          groupPosts.push(
            new FormGroup({
              'title': new FormControl(post.title , Validators.required),
              'description': new FormControl(post.description, Validators.required)
            })
          );
        }
      }
    }
    this.groupForm = new FormGroup({
      'groupTitle': new FormControl(groupTitle, Validators.required),
      'imagePath': new FormControl(imagePath , Validators.required),
      'groupDescription': new FormControl(groupDescription, Validators.required),
      'posts': new FormControl(groupPosts)
    });
  }


}
