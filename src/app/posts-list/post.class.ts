import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class Post {
  public title: string;
  public description: string;
  // public imagePath: string;

  constructor(title, description) {
    this.title = title;
    this.description = description;
    // this.imagePath = imagePath;
  }
}
