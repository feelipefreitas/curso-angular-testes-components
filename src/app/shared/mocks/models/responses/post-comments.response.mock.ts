import { IPostCommentResponse } from "src/app/shared/interfaces/responses/post-comment.response.interface";

export const PostCommentsResponseMock: IPostCommentResponse[] = [
  {
    postId: 1,
    id: 1,
    name: 'comName ment 1',
    email: 'emailComment1@gmail.com',
    body: 'Body comment 1'
  },
  {
    postId: 1,
    id: 2,
    name: 'Name comment 2',
    email: 'emailComment2@gmail.com',
    body: 'Body comment 2'
  },
];