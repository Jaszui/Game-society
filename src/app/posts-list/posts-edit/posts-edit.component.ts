import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Post} from '../post.class';
import {PostListService} from '../post-list.service';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-posts-edit',
  templateUrl: './posts-edit.component.html',
  styleUrls: ['./posts-edit.component.css']
})
export class PostsEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') plForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedPosyIndex: number;
  editedPost: Post;


  constructor(private pltService: PostListService) { }

  ngOnInit() {
  this.subscription = this.pltService.startedEditing
    .subscribe(
      (index: number) => {
        this.editedPosyIndex = index;
        this.editMode = true;
        this.editedPost = this.pltService.getPost(index);
        this.plForm.setValue({
          title: this.editedPost.title,
          description: this.editedPost.description});
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newPost = new Post(value.title, value.description);
    if (this.editedPost) {
      this.pltService.updatePost(this.editedPosyIndex, newPost);
    } else {
      this.pltService.addPost(newPost);
    }
    this.editMode = false;
    form.reset();
  }
  onClear() {
    this.plForm.reset();
    this.editMode = false;
  }
  onDelete() {
    this.pltService.deletePost(this.editedPosyIndex);
    this.onClear();
  }

  ngOnDestroy() {
  this.subscription.unsubscribe();
  }
}
