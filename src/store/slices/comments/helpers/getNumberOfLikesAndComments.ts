import {CommentsPage} from "../types";

export const getNumberOfLikesAndComments = (
    page: CommentsPage,
): {likes: number; comments: number} => {
    let likesCounter = 0;

    page.data.forEach((comment) => {
        likesCounter += comment.likes;
    });

    return {comments: page.data.length, likes: likesCounter};
};
