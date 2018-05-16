import {Post} from '../posts-list/post.class';

export interface Group {
  index: string;
  title: string;
  description: string;
  imagePath: string;
  posts: Post[];
}
