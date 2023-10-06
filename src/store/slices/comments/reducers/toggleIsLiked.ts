import {CaseReducer, PayloadAction} from "@reduxjs/toolkit";
import {CommentsState} from "../types";

export const toggleIsLikedReducer: CaseReducer<
    CommentsState,
    PayloadAction<number>
> = (state, action) => {
    const comment = state.comments.find(
        (comment) => comment.id === action.payload,
    );

    if (!comment) {
        return;
    }

    const isLiked = comment.isLiked;
    comment.isLiked = !isLiked;

    //обновляем общее количество лайков и у комментариев
    if (isLiked) {
        comment.likes--;
        state.totalLikes--;
    } else {
        comment.likes++;
        state.totalLikes++;
    }
};
