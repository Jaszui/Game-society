import {EventEmitter, Injectable} from '@angular/core';
import {Post} from './post.class';

@Injectable()
export class PostListService {
  postChanged = new EventEmitter<Post[]>();
 private posts: Post[] = [
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

  getPosts() {
    return this.posts.slice();
    // return this.posts;
  }
  addPost(newPost: Post) {
  this.posts.push(newPost);
  this.postChanged.emit(this.posts.slice());
  }
  addPosts(posts: Post[]) {
    // for (let post of posts) {
    //  this.addPost(post);
   // }
    this.posts.push(...posts);
    this.postChanged.emit(this.posts.slice());
  }
}
