import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Post} from './post.class';
import {PostListService} from './post-list.service';
import {Subscription} from 'rxjs/Subscription';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import * as firebase from 'firebase';
import {AuthService} from '../auth/auth/auth.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit, OnDestroy {
  @Input() index: string;
  groupForm: FormGroup;
  public posts: Post[];
  private subscription: Subscription;
  private id: string;

  constructor(private postListService: PostListService,
              private route: ActivatedRoute,
              private authService: AuthService) {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
  }

  ngOnInit() {
    this.groupForm = new FormGroup({
      'newPostDesc': new FormControl('', Validators.required)
    });

    this.postListService.getPosts(this.index).subscribe(data => {
      this.posts = data;
    });
    this.postListService.postChanged.subscribe(data => {
    });
  }

  onSubmit() {
    const index = this.id;
    const payload = <Post>{
      author: firebase.auth().currentUser.email,
      description: this.groupForm.value.newPostDesc,
      date: (new Date()).toISOString().slice(0, 10)
    };
    this.postListService.addPost(payload, index).subscribe(response => {
      payload.name = response.name;
      this.posts = {...this.posts, [payload.name]: payload};
    });
  }

  ngOnDestroy() {
    //this.subscription.unsubscribe();
  }

  /*this.posts = this.pltService.getPosts();
  this.subscription = this.pltService.postChanged
    .subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );*/


}




