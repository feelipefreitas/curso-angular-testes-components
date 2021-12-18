import { Component, OnInit } from '@angular/core';

import { IPostCommentResponse } from './shared/interfaces/responses/post-comment.response.interface';
import { IPostResponse } from './shared/interfaces/responses/post.response.interface';
import { PostCommentsService } from './shared/services/post-comments.service';
import { PostsService } from './shared/services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  posts: IPostResponse[] = [];
  postComments: IPostCommentResponse[] = [];

  constructor(
    private _postsService: PostsService,
    private _postCommentsService: PostCommentsService
  ) { }

  ngOnInit(): void {
    this.returnPostsList();    
  }

  loadPostComments(postId: number) {
    this._postCommentsService.getPostComments(postId).subscribe(commentsResponse => {
      this.postComments = commentsResponse;
    });
  }

  returnPostsList() {
    this._postsService.getPosts().subscribe(postsResponse => {
      this.posts = postsResponse;
    });
  }
}
