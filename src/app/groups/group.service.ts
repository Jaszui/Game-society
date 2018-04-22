import {Injectable} from '@angular/core';
import {Group} from './group.class';
import {Post} from '../posts-list/post.class';
import {PostListService} from '../posts-list/post-list.service';
import {Subject} from "rxjs/Subject";

@Injectable()
export class GroupService {
groupChanged = new Subject<Group[]>()
  private groups: Group[] = [
    new Group('Test1', 'test1',
      'https://www.luminate.ai/wp-content/uploads/2013/01/sample-img.png',
      [new Post('Test', 'alalalal'), new Post('Test2', 'alalalal2')]),
    new Group('Test2', 'test2', 'https://www.luminate.ai/wp-content/uploads/2013/01/sample-img.png',
      [new Post('Test3', 'alalalal3'),
        new Post('Test4', 'alalalal4')])
  ];

  constructor(private pltService: PostListService) {}
  setGroup(groups: Group[]) {
    this.groups = groups;
    this.groupChanged.next(this.groups.slice());
  }
  getGroups() {
    return this.groups;
  }
  getGroup(index: number) {
    return this.groups[index];
  }
  addPostToPostList(posts: Post[]) {
    this.pltService.addPosts(posts);
  }
  addGroup(group: Group) {
    this.groups.push(group);
  }
  updateGroup(index: number, newGroup: Group) {
   this.groups[index] = newGroup;
    this.groupChanged.next(this.groups.slice());
  }

  deleteGroup(index: number) {
    this.groups.splice(index, 1);
    this.groupChanged.next(this.groups.slice());
  }


}

