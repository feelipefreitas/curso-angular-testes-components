import { Observable, of } from "rxjs";
import { IPostCommentResponse } from "../../interfaces/responses/post-comment.response.interface";
import { PostCommentsResponseMock } from "../models/responses/post-comments.response.mock";

export class PostCommentsServiceMock {
    getPostComments(postId: number): Observable<IPostCommentResponse[]> {
        return of(PostCommentsResponseMock);
    }
}