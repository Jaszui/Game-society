import { Component, OnInit } from '@angular/core';
import {Post} from './post.class';
import {post} from "selenium-webdriver/http";
import {PostListService} from "./post-list.service";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
posts: Post[];
  constructor(private pltService: PostListService) { }

  ngOnInit() {
    this.posts = this.pltService.getPosts();
    this.pltService.postChanged
      .subscribe(
        (posts: Post[]) => {
          this.posts = posts;
        }
      );
  }


}




