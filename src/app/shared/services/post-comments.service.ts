import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { IPostCommentResponse } from "../interfaces/responses/post-comment.response.interface";

@Injectable({
    providedIn: 'root'
})
export class PostCommentsService {

    constructor(private _http: HttpClient) { }

    getPostComments(postId: number): Observable<IPostCommentResponse[]> {
        return this._http.get<IPostCommentResponse[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    }
}