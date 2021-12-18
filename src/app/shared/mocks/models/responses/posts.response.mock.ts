import { IPostResponse } from "src/app/shared/interfaces/responses/post.response.interface";

export const PostsResponseMock: IPostResponse[] = [
    {
        userId: 1,
        id: 1,
        title: 'Post Title 1',
        body: 'Post Body 1'
    },
    {
        userId: 1,
        id: 2,
        title: 'Post Title 2',
        body: 'Post Body 2'
    },
];