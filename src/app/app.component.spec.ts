import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { PostCommentsResponseMock } from "./shared/mocks/models/responses/post-comments.response.mock";
import { PostsResponseMock } from "./shared/mocks/models/responses/posts.response.mock";
import { PostCommentsServiceMock } from "./shared/mocks/services/post-comments.service.mock";
import { PostsServiceMock } from "./shared/mocks/services/posts.service.mock";
import { PostCommentsService } from "./shared/services/post-comments.service";
import { PostsService } from "./shared/services/posts.service";

describe('AppComponent', () => {

    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            providers: [
                { provide: PostsService, useClass: PostsServiceMock },
                { provide: PostCommentsService, useClass: PostCommentsServiceMock }
            ]
        }).compileComponents();
    }));

    beforeEach(waitForAsync(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    }));

    it('Should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('Should return a list of posts', () => {
        expect(component.posts).toBe(PostsResponseMock);
        expect(component.posts.length).toBe(PostsResponseMock.length);
    });

    it('Should return a list of comments', () => {
        component.loadPostComments(1);

        expect(component.postComments).toBe(PostCommentsResponseMock);
        expect(component.postComments.length).toBe(PostCommentsResponseMock.length);
    });

    it('Should click in a post and load its comments', () => {
        spyOn(component, 'loadPostComments').and.callThrough();
        const listOfPosts = fixture.debugElement.queryAll(By.css('#karma_test-posts'));

        const postSelectedIndex = 1;

        listOfPosts[postSelectedIndex].triggerEventHandler('click', null);

        fixture.detectChanges();
        
        const comments = fixture.debugElement.query(By.css('#karma_test-comments'));

        expect(component.loadPostComments).toHaveBeenCalledWith(PostsResponseMock[postSelectedIndex].id);
        expect(component.postComments.length).toBe(PostCommentsResponseMock.length);
        expect(comments).toBeTruthy();
    });
});