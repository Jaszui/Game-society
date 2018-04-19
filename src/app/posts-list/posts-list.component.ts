import { Component, OnInit } from '@angular/core';
import {Post} from './post.class';
import {post} from "selenium-webdriver/http";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
posts: Post[] = [
  new Post('Aliquam erat volutpat',
    'Aliquam erat volutpat. Vestibulum sem' +
    ' lectus, tempus a purus sed, eleifend euismod elit.' +
    ' Vivamus suscipit libero tortor, at convallis turpis cursus sed.'),
  new Post('Aliquam erat volutpat',
    'Aliquam erat volutpat. Vestibulum sem lectus, ' +
    'tempus a purus sed, eleifend euismod elit. Vivamus su' +
    'scipit libero tortor, at convallis turpis cursus sed.'),
];
  constructor() { }

  ngOnInit() {
  }
  onPostAdded(newPost: Post) {
    this.posts.push(newPost);
  }

}




