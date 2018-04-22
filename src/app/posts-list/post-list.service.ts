import {Injectable} from '@angular/core';
import {Post} from './post.class';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class PostListService {
  postChanged = new Subject<Post[]>();
  startedEditing = new Subject<number>();
 private posts: Post[] = [
    new Post('Aliquam erat volutpat',
      'Aliquam erat volutpat. Vestibulum sem' +
      ' lectus, tempus a purus sed, eleifend euismod elit.' +
      ' Vivamus suscipit libero tortor, at convallis turpis cursus sed.'),
    new Post('Aliquam',
      'Aliquam erat volutpat. Vestibulum sem lectus, ' +
      'tempus a purus sed, eleifend euismod elit. Vivamus su' +
      'scipit libero tortor, at convallis turpis cursus sed.'),
  ];
  constructor() { }

  getPosts() {
    return this.posts.slice();
    // return this.posts;
  }
  getPost(index: number) {
    return this.posts[index];
  }

  addPost(newPost: Post) {
  this.posts.push(newPost);
  this.postChanged.next(this.posts.slice());
  }
  addPosts(posts: Post[]) {
    // for (let post of posts) {
    //  this.addPost(post);
   // }
    this.posts.push(...posts);
    this.postChanged.next(this.posts.slice());
  }
  updatePost(index: number, newPost: Post) {
    this.posts[index] = newPost;
    this.postChanged.next(this.posts.slice());
  }
  deletePost(index: number) {
    this.posts.splice(index, 1);
    this.postChanged.next(this.posts.slice());
  }
}
