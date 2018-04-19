import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from '../post.class';

@Component({
  selector: 'app-posts-edit',
  templateUrl: './posts-edit.component.html',
  styleUrls: ['./posts-edit.component.css']
})
export class PostsEditComponent implements OnInit {
@ViewChild ('titleInput') titleInputRef: ElementRef;
@ViewChild ('descriptionInput') descriptionInputRef: ElementRef;
@Output() postAdded = new EventEmitter<Post>();
  constructor() { }

  ngOnInit() {
  }
  onAddPost() {
    const pstTitle = this.titleInputRef.nativeElement.value;
    const pstdescription = this.descriptionInputRef.nativeElement.value;
    const newPost = new Post(pstTitle, pstdescription);
    this.postAdded.emit(newPost);
  }
}
