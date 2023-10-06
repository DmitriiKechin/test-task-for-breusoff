import {CaseReducer, PayloadAction} from "@reduxjs/toolkit";
import {CommentsPage, CommentsState} from "../types";
import {getNumberOfLikesAndComments} from "../helpers/getNumberOfLikesAndComments";

export const addPageDataReducer: CaseReducer<
    CommentsState,
    PayloadAction<CommentsPage>
> = (state, action) => {
    if (isRepeatedData(state.pagesData, action)) {
        return;
    }

    state.totalPages = action.payload.pagination.total_pages;
    state.pagesData.push(action.payload);
    state.loadedPageCounter++;
    state.isFirstPageLoaded = true;

    const {likes, comments} = getNumberOfLikesAndComments(action.payload);
    state.totalComments += comments;
    state.totalLikes += likes;

    if (isFinishPage(action, state.totalPages)) {
        state.isComplete = true;
    }
};

const isRepeatedData = (
    data: CommentsPage[],
    action: PayloadAction<CommentsPage>,
): boolean => {
    const pageIndex = data.findIndex(
        (page) => page.pagination.page === action.payload.pagination.page,
    );
    if (~pageIndex) {
        return true;
    }
    return false;
};

const isFinishPage = (
    action: PayloadAction<CommentsPage>,
    totalPages: number,
): boolean => {
    if (action.payload.pagination.page === totalPages) {
        return true;
    }
    return false;
};
