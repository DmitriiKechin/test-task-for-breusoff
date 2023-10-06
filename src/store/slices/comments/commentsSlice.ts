import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Author, CommentsState} from "./types";
import {toggleIsLikedReducer} from "./reducers/toggleIsLiked";
import {addPageDataReducer} from "./reducers/addPageData";
import {renderPageReducer} from "./reducers/renderPage";

const initialState: CommentsState = {
    comments: [],
    authors: [],
    pagesData: [],
    isLastPage: false,
    currentPage: 1,
    totalPages: 1,
    isComplete: false,
    loadedPageCounter: 0,
    isFirstPageLoaded: false,
    totalComments: 0,
    totalLikes: 0,
};

const todoSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        initAuthors(state, action: PayloadAction<Author[]>) {
            state.authors = action.payload;
        },
        renderPage: renderPageReducer,
        addPageData: addPageDataReducer,
        toggleIsLiked: toggleIsLikedReducer,
    },
});

export const {initAuthors, addPageData, renderPage, toggleIsLiked} =
    todoSlice.actions;

export const {reducer: commentsReducer} = todoSlice;
