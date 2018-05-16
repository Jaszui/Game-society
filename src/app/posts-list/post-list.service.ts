import {Injectable} from '@angular/core';
import {Post} from './post.class';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PostListService {
  public postChanged = new Subject<Post[]>();
  constructor(private http: HttpClient) {}

  getPosts(index): Observable<any> {
    return this.http.get<Post>(`https://gamespot-6e9ad.firebaseio.com/group/${index}/posts.json`);
  }

  addPost(newPost, index: string): Observable<Post> {
    this.postChanged.next(newPost);
    return this.http.post<Post>(`https://gamespot-6e9ad.firebaseio.com/group/${index}/posts.json`, newPost);
  }

  deletePost(index: number) {
   // this.posts.splice(index, 1);
    //this.postChanged.next(this.posts.slice());
  }
}
