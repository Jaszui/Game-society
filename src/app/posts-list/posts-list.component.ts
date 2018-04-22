import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from './post.class';
import {PostListService} from './post-list.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit, OnDestroy {
posts: Post[];
private subscription: Subscription;
  constructor(private pltService: PostListService) { }

  ngOnInit() {
    this.posts = this.pltService.getPosts();
    this.subscription = this.pltService.postChanged
      .subscribe(
        (posts: Post[]) => {
          this.posts = posts;
        }
      );
  }
  onEditPost(index: number) {
  this.pltService.startedEditing.next(index);
  }

  ngOnDestroy() {
  this.subscription.unsubscribe();
  }
}




