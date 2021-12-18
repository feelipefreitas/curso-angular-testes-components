import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { IPostResponse } from "../interfaces/responses/post.response.interface";

@Injectable({
    providedIn: 'root'
})
export class PostsService { 

    constructor(private _http: HttpClient) { }

    getPosts(): Observable<IPostResponse[]> {
        return this._http.get<IPostResponse[]>('https://jsonplaceholder.typicode.com/posts');
    }

    getPostById(postId: number): Observable<IPostResponse> {
        return this._http.get<IPostResponse>(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    }
}