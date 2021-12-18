import { HttpClient } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { PostCommentsService } from "../post-comments.service";
import { HttpClientMock } from './../../mocks/services/http-client.mock';
import { PostCommentsResponseMock } from './../../mocks/models/responses/post-comments.response.mock';

describe('PostCommentsService', () => {

    let service: PostCommentsService;
    let http: HttpClient;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                PostCommentsService,
                { provide: HttpClient, useClass: HttpClientMock }
            ]
        });

        service = TestBed.inject(PostCommentsService);
        http = TestBed.inject(HttpClient);
    });

    it('Should call the method "getPostComments" and return a list of comments', (done: DoneFn) => {
        spyOn(http, 'get').and.returnValue(of(PostCommentsResponseMock));

        service.getPostComments(1).subscribe(response => {
            expect(response.length).toBe(PostCommentsResponseMock.length);
            expect(response[0].id).toBe(PostCommentsResponseMock[0].id);

            done();
        });
    });
});