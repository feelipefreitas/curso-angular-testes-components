import { Observable, of } from "rxjs";
import { IPostResponse } from "../../interfaces/responses/post.response.interface";
import { PostsResponseMock } from "../models/responses/posts.response.mock";

export class PostsServiceMock {
    getPosts(): Observable<IPostResponse[]> {
        return of(PostsResponseMock);
    }
}