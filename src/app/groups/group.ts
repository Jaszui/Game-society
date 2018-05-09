import {Post} from '../posts-list/post.class';

export interface Group {
  title: string;
  description: string;
  imagePath: string;
  posts: Post[];
}
