import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Post} from '../posts-list/post.class';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class Group {
  public title: string;
  public description: string;
  public imagePath: string;
  public posts: Post[];

  constructor(title, description, imagePath, post: Post[]) {
    this.title = title;
    this.description = description;
    this.imagePath = imagePath;
    this.posts = post;
  }
}
