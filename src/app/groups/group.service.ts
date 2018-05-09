import {Injectable} from '@angular/core';
import {Group} from './group';
import {Post} from '../posts-list/post.class';
import {PostListService} from '../posts-list/post-list.service';
import {Subject} from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GroupService {
  groupChanged = new Subject<Group[]>();
  private groups: Group[] = [];

  constructor(private pltService: PostListService, private http: HttpClient) {
  }

  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>('https://gamespot-6e9ad.firebaseio.com/group.json');
  }

  getGroup(index: number): Observable<Group> {
    return this.http.get<Group>(`https://gamespot-6e9ad.firebaseio.com/group/${index}.json`);
  }

  addPostToPostList(posts: Post[]) {
    // TODO
    this.pltService.addPosts(posts);
  }

  addGroup(group: Group) {
    // TODO
    this.groups.push(group);
  }

  updateGroup(index: number, newGroup: Group): Observable<Group> {
    return this.http.put<Group>(`https://gamespot-6e9ad.firebaseio.com/group/${index}.json`, newGroup);
  }

  deleteGroup(index: number) {
    // TODO
    this.groups.splice(index, 1);
  }
}

