import {CaseReducer} from "@reduxjs/toolkit";
import {CommentData, CommentsState, Comment, Author} from "../types";

export const renderPageReducer: CaseReducer<CommentsState> = (state) => {
    if (isNotRender(state)) {
        return;
    }

    const sortedCommentsData = getSortedData(
        state.pagesData[state.currentPage - 1].data,
    );

    state.comments.push(...getComments(sortedCommentsData, state.authors));

    if (state.currentPage === state.totalPages) {
        state.isLastPage = true;
    }

    state.currentPage = state.currentPage + 1;
};

const isNotRender = (state: CommentsState): boolean => {
    if (state.isLastPage || state.currentPage > state.loadedPageCounter) {
        return true;
    }
    return false;
};

const getComments = (data: CommentData[], authors: Author[]): Comment[] => {
    return data.map((comment) => ({
        id: comment.id,
        created: comment.created,
        text: comment.text,
        author: authors[comment.author - 1],
        likes: comment.likes,
        isLiked: false,
        isReply: !!comment.parent,
    }));
};

const getSortedData = (data: CommentData[]): CommentData[] => {
    //разделим исходные данные на родительские...
    // (у которых поле parent=null) и дочерние
    //из дочерних сформируем хэш таблицу ключи в которой будут...
    // родительские комментарии, а значение сам комментарий
    const {childrenHash, parentComments} =
        splitIntoChildAndParentComponents(data);

    parentComments.sort((a, b) => b.created.localeCompare(a.created, "en"));

    return joinIntoSortedArray({childrenHash, parentComments});
};

interface ChildAndParentComponents {
    parentComments: CommentData[];
    childrenHash: Map<number, CommentData>;
}

const splitIntoChildAndParentComponents = (
    data: CommentData[],
): ChildAndParentComponents => {
    const parentComments: CommentData[] = [];
    const childrenHash = new Map();

    data.forEach((comment) => {
        if (comment.parent) {
            childrenHash.set(comment.parent, comment);
        } else {
            parentComments.push(comment);
        }
    });

    return {parentComments, childrenHash};
};

const joinIntoSortedArray = ({
    parentComments,
    childrenHash,
}: ChildAndParentComponents): CommentData[] => {
    const result: CommentData[] = [];
    parentComments.forEach((comment) => {
        addChildren(comment);
    });

    return result;

    function addChildren(comment: CommentData) {
        result.push(comment);

        if (!childrenHash.has(comment.id)) {
            return;
        }

        const children = childrenHash.get(comment.id)!;
        addChildren(children);
    }
};
