import {Injectable} from '@angular/core';
import {Group} from './group.class';
import {Post} from '../posts-list/post.class';
import {PostListService} from '../posts-list/post-list.service';

@Injectable()
export class GroupService {

  private groups: Group[] = [
    new Group('Test1', 'test1',
      'https://www.luminate.ai/wp-content/uploads/2013/01/sample-img.png',
      [new Post('Test', 'alalalal'), new Post('Test2', 'alalalal2')]),
    new Group('Test2', 'test2', 'https://www.luminate.ai/wp-content/uploads/2013/01/sample-img.png',
      [new Post('Test3', 'alalalal3'),
        new Post('Test4', 'alalalal4')])
  ];

  constructor(private pltService: PostListService){}
  getGroups() {
    return this.groups.slice();
    // return this.groups;
  }
  getGroup(index: number) {
    return this.groups[index];
  }
  addPostToPostList(posts: Post[]) {
    this.pltService.addPosts(posts);
  }

}

